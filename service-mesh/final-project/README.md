# MeshCommerce

Laboratório evolutivo do curso de Service Mesh. A aplicação representa um fluxo
de pedidos e pagamentos próximo de um ambiente real, mas será construída em
etapas para que cada recurso de Kubernetes e Istio resolva um problema que já
conseguimos observar.

## Arquitetura

```mermaid
flowchart LR
	Browser[React] --> Orders[Orders.Api]
	Orders --> Payments[Payments.Api]
	Orders -. futuramente .-> OrdersDb[(Orders DB)]
	Payments --> PostgreSQL[(PostgreSQL)]
	Migrations[Payments.Migrations] --> PostgreSQL
```

O navegador conversa apenas com `Orders.Api`. O serviço de Pedidos orquestra a
cobrança em `Payments.Api`, e cada serviço será dono de seus próprios dados.
Isso mantém a fronteira de negócio explícita antes de introduzirmos o mesh.

### Responsabilidades

- **Frontend:** experiência do operador e chamadas para `Orders.Api`.
- **Orders.Api:** criação e consulta de pedidos, além da orquestração do pagamento.
- **Payments.Api:** cobrança e garantia de idempotência da operação financeira.
- **Payments.Migrations:** evolução code-first do schema antes da API iniciar.
- **Kubernetes:** execução, descoberta, configuração, escala e recuperação dos workloads.
- **Istio:** políticas de comunicação, tráfego, resiliência e telemetria entre workloads.

O Istio poderá repetir uma chamada, mas não sabe se uma cobrança duplicada é
válida. Por isso, a idempotência continuará sendo responsabilidade de
`Payments.Api`.

## Estado atual

- Solução .NET 10 com `Orders.Api`, `Payments.Api` e `Payments.Migrations`.
- Endpoints operacionais `/` e `/health` nos dois serviços.
- Identidade de versão e réplica por `SERVICE_VERSION` e `HOSTNAME`.
- Painel React 19 responsivo consumindo `Orders.Api`, com busca e estados de pagamento.
- Fluxo distribuído `React -> Orders.Api -> Payments.Api` em execução local.
- Imagens Docker multi-stage para frontend e APIs.
- Ambiente Docker Compose com frontend, APIs e PostgreSQL 17.
- Persistência com EF Core e migrations code-first em projeto separado.
- Pagamentos no PostgreSQL com chave de idempotência única.
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
10. **Entrada e observabilidade:** Istio Gateway, rotas e análise no Kiali.

## Critério de conclusão

O projeto estará completo quando conseguirmos demonstrar e explicar sidecars,
roteamento por versão, canary, balanceamento, falhas controladas, circuit breaker,
exposição pelo Gateway e observabilidade, incluindo quando o Istio não deve ser
usado para resolver uma responsabilidade da aplicação.
