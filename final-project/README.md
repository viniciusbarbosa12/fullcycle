# MeshCommerce

Superprojeto evolutivo das trilhas Full Cycle. A aplicação representa um fluxo
de pedidos e pagamentos próximo de um ambiente real e cresce em etapas: cada
tecnologia entra somente depois de observarmos o problema que ela resolve.

A visão integrada, o escopo já estudado e o roteiro de demonstração estão em
[`SHOWCASE.md`](SHOWCASE.md). Este documento mantém os detalhes de implementação
e execução local da aplicação que deu origem ao superprojeto.

Para entender cada tela sem conhecer a infraestrutura, consulte o
[`FRONTEND-SCREENS-GUIDE.md`](FRONTEND-SCREENS-GUIDE.md).

## Arquitetura

```mermaid
flowchart LR
	Browser[Browser] --> Kong[Kong API Gateway]
	Kong --> React[React]
	Kong --> Orders[Orders.Api]
	Orders --> Payments[Payments.Api]
	Orders -. futuramente .-> OrdersDb[(Orders DB)]
	Payments --> PostgreSQL[(PostgreSQL)]
	Migrations[Payments.Migrations] --> PostgreSQL
```

No ambiente Kubernetes, o navegador entra pelo Kong, que encaminha os assets ao
frontend e as rotas de API ao serviço correto. O serviço de Pedidos orquestra a
cobrança em `Payments.Api`, e cada serviço continua responsável pelos próprios
dados. Isso mantém explícita a fronteira entre gateway, mesh e lógica de negócio.

### Responsabilidades

- **Frontend:** experiência do operador e chamadas para `Orders.Api`.
- **Orders.Api:** criação e consulta de pedidos, além da orquestração do pagamento.
- **Payments.Api:** cobrança e garantia de idempotência da operação financeira.
- **Payments.Migrations:** evolução code-first do schema antes da API iniciar.
- **Kubernetes:** execução, descoberta, configuração, escala e recuperação dos workloads.
- **Kong:** ponto de entrada, roteamento externo e políticas específicas por rota.
- **Istio:** políticas de comunicação, tráfego, resiliência e telemetria entre workloads.
- **Argo CD:** reconciliação declarativa dos manifests base versionados no Git.
- **APIOps:** contratos OpenAPI versionados, lint e proteção contra breaking changes.

O Istio poderá repetir uma chamada, mas não sabe se uma cobrança duplicada é
válida. Por isso, a idempotência continuará sendo responsabilidade de
`Payments.Api`.

## Estado atual

- Solução .NET 10 com `Auth.Api`, `Orders.Api`, `Payments.Api` e `Payments.Migrations`.
- Endpoints operacionais `/` e `/health` nos dois serviços.
- Identidade de versão e réplica por `SERVICE_VERSION` e `HOSTNAME`.
- Painel React 19 responsivo consumindo `Orders.Api`, com busca e estados de pagamento.
- Fluxo distribuído `React -> Orders.Api -> Payments.Api` em execução local.
- Imagens Docker multi-stage para frontend e APIs.
- Ambiente Docker Compose com frontend, APIs e PostgreSQL 17.
- Persistência com EF Core e migrations code-first em projeto separado.
- Pagamentos no PostgreSQL com chave de idempotência única.
- Kong com rate limit, JWT/ACL e Correlation ID; Istio com canary, resiliência,
  circuit breaker e Gateway comparativo.
- Argo CD reconciliando os workloads base com self-healing automatizado.
- Contratos OpenAPI de Orders e Payments validados em Pull Requests.
- Build, lint e auditoria de dependências validados.

Pedidos ainda são mantidos em memória e são apagados ao reiniciar `Orders.Api`.
Pagamentos ficam no volume `postgres-code-first-data` e sobrevivem ao reinício
de `Payments.Api`.

### Idempotência de pagamentos

`Orders.Api` envia o ID do pedido no header `Idempotency-Key`. O PostgreSQL
mantém uma constraint `UNIQUE` nesse campo, portanto a garantia continua válida
mesmo com mais de uma réplica de `Payments.Api`. O repositório consulta a chave
com EF Core e tenta salvar o novo pagamento. Se outra requisição vencer a corrida,
a constraint rejeita a duplicata; a API trata a violação, recarrega o pagamento
existente e decide entre replay e conflito:

- chave nova: cria o pagamento e retorna `201 Created`;
- mesma chave e mesmos dados: retorna o pagamento existente com `200 OK`;
- mesma chave e dados diferentes: não altera o banco e retorna `409 Conflict`.

A coluna `amount` usa `NUMERIC` sem escala fixa para preservar exatamente o
`decimal` aceito pela API. Se o domínio passar a aceitar apenas centavos, essa
regra deve ser validada no contrato em vez de depender de arredondamento no banco.

## Executando com Docker Compose

Pré-requisito: Docker Desktop em execução.

```bash
docker compose up --build -d
docker compose ps --all
```

`payments-migrations` é um container one-shot: ele aplica migrations pendentes,
termina com código `0` e somente então o Compose inicia `payments-api`.

Serviços publicados no host:

- Frontend: `http://localhost:4173`
- Orders API: `http://localhost:5101`
- Payments API: `http://localhost:5102`
- PostgreSQL: `postgresql://payments:payments-dev@localhost:5433/payments`

O container escuta na porta padrão `5432`; a porta `5433` é usada apenas no host
para não conflitar com uma instalação local do PostgreSQL.

As conexões de desenvolvimento usam `GSS Encryption Mode=Disable` porque este
ambiente autentica com usuário e senha e não instala Kerberos. Em outro ambiente,
a política de autenticação e criptografia deve ser definida explicitamente para
a infraestrutura utilizada.

Dentro da rede do Compose, os serviços usam seus nomes como DNS. Por isso,
`Orders.Api` acessa `http://payments-api:8080`, enquanto o navegador usa
`http://localhost:5101`: o navegador está fora da rede Docker.

### Logs ECS das APIs no Kibana/Fleet

Orders e Payments usam Serilog como único provider de logging, com
`EcsTextFormatter` escrevendo JSON no stdout. `FromLogContext` mantém o scope do
`UseCorrelationId`; `WithElasticApmCorrelationInfo` obtém `trace.id`,
`transaction.id` e `span.id` (quando há span ativo) do agente APM existente.
Não há sink Elasticsearch, arquivo local ou geração manual de trace IDs.

Os dois `Program.cs` mantêm `AddAllElasticApm` e colocam
`UseSerilogRequestLogging` após `UseCorrelationId`, antes dos endpoints.
Cada request tem um único log de conclusão com método, path, status, duração
(`event.duration` em nanossegundos) e `http.request.id`/`labels.CorrelationId`.
Categorias Microsoft/HttpClient informativas são filtradas para evitar duplicação.
`service.name`, `service.environment` e `service.version` usam a configuração APM
existente (no Compose: `orders-api`/`payments-api`, `Development`, `compose`).

Os logs de negócio usam IDs e status, sem customer, item, valores ou payloads de
pagamento. Exceções não tratadas aparecem no log de conclusão como `error.type`,
sem mensagem/stack brutos que possam carregar credenciais. User/baggage automático
do formatter foi desativado; a correlação vem exclusivamente do enricher APM.

APM envia traces; a coleta de stdout/stderr é configurada separadamente no Fleet.
Na integração Docker da policy `meshcommerce-observability`, habilite o input
`filestream` e o stream `docker.container_logs`, preservando os streams de métricas.
Os valores de `vars` estão em `beats/docker/payments-container-logs.json`
(o nome histórico do arquivo foi mantido; ele agora cobre as duas APIs):

- O filtro exige o projeto Compose `meshcommerce` e o serviço `orders-api` ou
  `payments-api`, sem depender do ID do container após uma recriação.
- O Agent monta `/var/lib/docker/containers` em modo somente leitura. Esse
  mount permite acesso aos arquivos de todos os containers; o filtro do Fleet
  restringe quais são coletados, mas não é uma barreira de acesso ao filesystem.
- O parser Docker extrai a linha; o NDJSON usa `target: ''`, `expand_keys: true`
  e `overwrite_keys: true` para expandir ECS na raiz. Não sobrescreva
  `service.name` com um processor fixo: cada API já emite sua própria identidade.
- A configuração precisa ser aplicada no Fleet: esse JSON documenta os valores,
  não é carregado automaticamente pelo Compose.

Para conferir a configuração planejada, execute
`python3 beats/docker/configure-application-logs.py`; para aplicar somente esse
stream no Fleet local, adicione `--apply`. Nenhum outro package policy é alterado.
Se os logs aparecerem apenas como JSON em `message` ou em `app.*`, corrija o
parser no Fleet, não adicione envio direto ao Elasticsearch nas aplicações.

O endpoint `GET /lab/probe` com o header `X-MeshCommerce-Resilience: retry`
retorna 503 na primeira tentativa do mesmo `X-Correlation-ID`, sem criar dados
de pagamento. O cenário transitório e o log de conclusão 503 são `Warning`, não
`Error`. Timeout simulado gera Warning; probes bem-sucedidas geram Information.
Uma segunda tentativa com o mesmo ID durante um minuto retorna 200.

Em `http://localhost:5601/app/discover`, selecione/crie um data view `logs-*`,
use o período **Last 15 minutes** e uma destas consultas KQL:

- Orders: `event.dataset: "docker.container_logs" and service.name: "orders-api"`
- Payments: `event.dataset: "docker.container_logs" and service.name: "payments-api"`
- Probe 503: `event.dataset: "docker.container_logs" and service.name: "payments-api" and http.response.status_code: 503`

Adicione `message`, `log.level`, `service.name`, `http.request.id`, `trace.id` e
`transaction.id`. A consulta `trace.id: "<id>"` reúne logs das duas APIs.

Para repetir a validação local, execute `python3 beats/docker/verify-payments-logs.py`
a partir de `final-project`. O script lê a credencial da `.env` sem exibi-la,
verifica o health das APIs, o probe baseline, 503 seguido de retry 200, logs ECS,
correlação no Elasticsearch/APM e continuidade das métricas Docker. Não cria
pagamentos.

Para acompanhar logs ou encerrar o ambiente:

```bash
docker compose logs -f
docker compose down
```

`docker compose down` remove containers e rede, mas preserva o volume
`postgres-code-first-data`. Para apagar também os dados do PostgreSQL, use
conscientemente:

```bash
docker compose down --volumes
```

As credenciais locais possuem valores padrão no Compose e podem ser substituídas
em um arquivo `.env`, conforme `.env.example`. Para abrir o cliente do PostgreSQL
e inspecionar a tabela:

```bash
docker compose exec postgres psql --username payments --dbname payments
\d+ payments
```

## Executando localmente

Pré-requisitos atuais: .NET SDK 10 e Node.js 24.

```bash
# O Payments.Api local também depende deste container.
docker compose up -d postgres

# Restaura a CLI versionada e aplica migrations pendentes.
dotnet tool restore
dotnet tool run dotnet-ef database update \
	--project backend/src/Payments.Migrations \
	--startup-project backend/src/Payments.Migrations \
	--context PaymentDbContext

# Terminal 1
dotnet run --project backend/src/Orders.Api --urls http://localhost:5101

# Terminal 2
dotnet run --project backend/src/Payments.Api --urls http://localhost:5102

# Terminal 3
cd frontend
npm install
npm run dev
```

Verificações disponíveis:

```bash
dotnet build backend/MeshCommerce.slnx
cd frontend
npm run build
npm run lint

cd ../contracts
npm ci --ignore-scripts
npm run lint
```

### Criando uma migration

Depois de alterar o mapeamento em `PaymentDbContext`, gere uma migration C# a
partir do modelo:

```bash
dotnet tool restore
dotnet tool run dotnet-ef migrations add NomeDaAlteracao \
	--project backend/src/Payments.Migrations \
	--startup-project backend/src/Payments.Migrations \
	--context PaymentDbContext \
	--output-dir Migrations

dotnet tool run dotnet-ef migrations has-pending-model-changes \
	--project backend/src/Payments.Migrations \
	--startup-project backend/src/Payments.Migrations \
	--context PaymentDbContext
```

No Compose, `payments-migrations` aplica essas migrations automaticamente. Em
Kubernetes, esse mesmo executável deverá rodar como `Job`, sem fazer cada réplica
da API disputar a evolução do schema.

## Evolução do laboratório

1. **Domínio:** contratos e endpoints de Pedidos e Pagamentos.
2. **Comunicação:** chamada HTTP de `Orders.Api` para `Payments.Api`.
3. **Contêineres:** Dockerfiles, configuração por ambiente e execução integrada.
4. **Persistência:** PostgreSQL, EF Core, migrations code-first e idempotência persistida.
5. **Kubernetes:** Deployments, Services, ConfigMaps, Secrets, probes e réplicas.
6. **Fundamentos do Istio:** instalação, injeção de sidecar e observação do data plane.
7. **Gestão de tráfego:** versões, subsets, `VirtualService` e canary gradual.
8. **Balanceamento:** round robin, least request e consistent hash em cenários medidos.
9. **Resiliência:** timeout, retry, fault injection, outlier detection e circuit breaking.
10. **Entrada:** Istio Gateway e rotas externas da malha.
11. **API Gateway:** entrada única pelo Kong e rate limiting isolado por rota.
12. **APIOps:** contratos OpenAPI, governança automatizada e proteção de compatibilidade.

## Critério de conclusão

O superprojeto não termina com uma única trilha. Cada novo checkpoint estará
concluído quando conseguirmos demonstrar o problema, explicar a decisão e seus
trade-offs, validar o fluxo afetado e registrar como a tecnologia se integra ao
que já existe sem assumir responsabilidades da aplicação.
