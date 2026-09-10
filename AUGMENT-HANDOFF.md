# Handoff completo para o Augment — Full Cycle / MeshCommerce

> Gerado em 10/09/2026 no workspace `/Users/W518655/Documents/fullcycle`.

Este documento registra o contexto técnico, pedagógico e operacional necessário
para continuar o trabalho sem depender do histórico da conversa. Ele distingue
o que existe como material de curso, o que foi estudado, o que foi incorporado
ao projeto unificado, o que foi validado e o que ainda é apenas plano.

## 1. Leia isto antes de executar qualquer comando

### Estado atual do Git

```text
Repositório: https://github.com/viniciusbarbosa12/fullcycle.git
Branch: study/observability-from-zero
HEAD: 2a4f1e8 Merge pull request #7 from .../demo/frontend-two-replica-baseline
origin/main: 480fc5d Merge pull request #9 from .../feat/meshcommerce-observability
Diferença: HEAD está 2 commits atrás de origin/main e não possui commits exclusivos
```

Os commits de `origin/main` ausentes no `HEAD` são:

```text
2dd352a feat: add MeshCommerce observability preview
480fc5d Merge pull request #9 from .../feat/meshcommerce-observability
```

Apesar disso, a working tree atual contém uma reconstrução de observabilidade
feita passo a passo, diferente do preview presente em `main`:

```text
 M final-project/SHOWCASE.md
 M final-project/frontend/src/App.tsx
 M final-project/frontend/src/commerce.css
?? final-project/OBSERVABILITY-PRESENTATION.md
?? final-project/frontend/src/ObservabilityLab.tsx
?? final-project/frontend/src/api/observabilityLab.ts
?? final-project/kubernetes/observability/
?? AUGMENT-HANDOFF.md
```

Regras para continuar com segurança:

- não executar `git reset --hard`, `git clean`, `git checkout --` ou operações
  que descartem a working tree;
- não trocar de branch, fazer rebase ou merge antes de proteger as mudanças;
- não assumir que a versão de observabilidade de `origin/main` deve substituir
  a versão atual;
- comparar as duas implementações antes de reconciliá-las;
- não fazer commit ou push sem pedido explícito do usuário;
- preservar alterações que não façam parte da tarefa atual.

### Estado atual do ambiente local

Em 10/09/2026:

- `kind get clusters` lista `meshcommerce` e `task-management`;
- o contexto configurado é `kind-meshcommerce`;
- a API do cluster `meshcommerce` não responde em `127.0.0.1:54046`;
- provavelmente o container do control plane está parado;
- nenhum port-forward testado está ativo;
- `localhost:14177`, `14173`, `14300` e `19090` não respondem.

Isso não invalida as verificações anteriores. Significa que o ambiente está
desligado agora. Não afirmar que o sistema está em execução sem iniciá-lo e
validá-lo novamente.

## 2. Como trabalhar com o usuário

O usuário está estudando e preparando demonstrações para uma conversa técnica
com John. A prioridade é compreensão real e capacidade de explicar decisões em
entrevistas, não apenas produzir arquivos.

Preferências explícitas:

- continuar o curso em português por enquanto;
- usar **problema real → código → solução → por que corrigir → por que é bom →
  riscos e trade-offs**;
- explicar com profundidade; respostas rasas já foram rejeitadas;
- relacionar conceitos a produção e entrevistas;
- mostrar o código concreto do repositório sempre que possível;
- revisar termos básicos sem presumir que ele deveria lembrar;
- manter um “resumão” cumulativo de Kubernetes;
- pular quizzes por enquanto;
- trabalhar em checkpoints pequenos e compreensíveis;
- comentar código/YAML quando algo estranho ou perigoso for intencional;
- criar exemplos visuais no frontend para cada assunto estudado;
- adicionar novas aulas ao `final-project`, sem criar outro projeto pequeno;
- preservar projetos pequenos antigos como referência;
- “pf” significa “por favor”;
- corrigir brevemente os erros de inglês do usuário quando aplicável;
- não concordar automaticamente: apontar riscos e alternativas.

Modelo mental usado na aula:

```text
Uma requisição falha
        ↓
Por que falhou? Onde falhou? Quem foi afetado? Desde quando?
        ↓
Que sinais precisamos produzir?
Logs, métricas e traces
        ↓
Como coletar, guardar, consultar e correlacionar esses sinais?
```

## 3. Organização do repositório

Convenção:

```text
<curso>/modules/       teoria por fase
<curso>/labs/          missões e exercícios
<curso>/examples/      exemplos prontos
<curso>/final-project/ desafio isolado da trilha
final-project/         superprojeto integrado MeshCommerce
```

Pastas principais:

- `git/`: GitFlow, assinatura, PRs, review, SemVer e Conventional Commits;
- `docker/`: containers, imagens, redes, volumes, multistage e Compose;
- `ci/`: CI, GitHub Actions, Docker em CI e plano de SonarQube;
- `kubernets/`: trilha Kubernetes; manter essa grafia histórica;
- `gateway/`: fundamentos de API Gateway e Kong local;
- `gateway-kubernet-kong/`: Kong no Kubernetes, APIOps, GitOps e carga;
- `service-mesh/`: Istio, tráfego, canary, balancing, faults e circuit breaker;
- `observability/`: Elastic, Prometheus, Grafana, métricas e alertas;
- `opentelemetry/`: OTEL, Collector, instrumentação e tracing;
- `angular/rxjs-course/`: trilha paralela de RxJS/Angular;
- `final-project/`: MeshCommerce, fonte de verdade para exemplos integrados.

A existência de um módulo ou README não prova que a fase foi implementada no
MeshCommerce. Muitos arquivos são planos de estudo.

### Matriz de progresso conhecida

| Trilha | Situação conhecida | Evidência no MeshCommerce |
| --- | --- | --- |
| Git | Material e práticas de branch/PR/merge usados | Histórico de PRs e commits convencionais |
| Docker | Fundamentos e projeto final praticados | Dockerfiles multistage e Compose integrado |
| Kubernetes | Objetos fundamentais praticados no TaskManagement e revisitados | Deployments, Services, Job, StatefulSet, PVC, probes, resources, ConfigMap e Secret |
| Service Mesh | Usuário informou ter estudado todo o módulo | Sidecars, circuit breaker e faults demonstráveis |
| API Gateway | Fundamentos, vantagens/desvantagens, escolha e base Kong estudados | Entrada Kong e tela de rate limit |
| Kong + Kubernetes | Fases práticas de Kong e fase 4 APIOps/GitOps trabalhadas | Ingress, KongPlugin, OpenAPI, CI e Argo |
| K6/Testkube | Ainda não estudado/implementado no superprojeto | Apenas plano de curso |
| Autenticação/OpenID | Ainda não integrada | Apenas plano de Gateway |
| Observabilidade | Em andamento; fundamentos, Istio metrics, Prometheus e Grafana estudados | Stack atual sem commit e tela Observability |
| Elastic/APM/logs centralizados | Ainda pendente | Apenas exemplos/planos fora do MeshCommerce |
| OpenTelemetry/tracing | Ainda pendente | Trilha e planos existentes, sem integração atual |
| RxJS/Angular | Trilha paralela; não faz parte do runtime MeshCommerce | Exemplos próprios em `angular/rxjs-course` |

Aprendizado conceitual já discutido sobre Gateway:

- API Gateway é especialmente útil com múltiplas APIs/clientes, mas não é
  automaticamente necessário em um monólito simples;
- em monólitos ele pode oferecer autenticação, rate limit, TLS e observabilidade,
  porém também adiciona hop, operação, custo e possível ponto de falha;
- a escolha deve considerar requisitos não funcionais, equipe, operação,
  ecossistema, modelo de deployment, segurança, performance e lock-in;
- vantagens e desvantagens foram revisadas antes do código;
- quizzes chegaram a ser usados no início, mas o usuário pediu para pulá-los.

## 4. Evolução: dos projetos pequenos ao superprojeto

### 4.1 Estrutura inicial

O repositório começou em 04/07/2026 com planos, módulos e exemplos de Git,
Docker, CI, Gateway, observabilidade, OpenTelemetry e RxJS. Depois recebeu a
trilha de Kubernetes e a organização padrão de pastas.

```text
e56e5dd initial commit
f6e44e6 add kubernetes study plan
d8fc915 organize course study materials
ca42ae0 add study roadmap
9f26205 docs: add pull request template
619127a translate (#2)
```

### 4.2 Projeto final de Docker

Local: `docker/final-project/`.

```text
browser/curl
  → localhost:18088
  → nginx
  → Node API :3000
  → MySQL :3306
```

Demonstrou imagem própria da API Node, MySQL 8, Nginx reverse proxy, Compose,
rede `app-network`, DNS `DB_HOST=db`, volume `mysql-data`, variáveis, health
checks, dependência de startup e publicação apenas da porta do Nginx. Endpoints:
`/health`, `/people` e `POST /people`.

Continua útil para revisar Docker isoladamente, mas não faz parte do runtime do
MeshCommerce.

```text
191d638 chore: add docker final project examples
```

### 4.3 TaskManagement da trilha Kubernetes

Local: `kubernets/final-project/`.

Possui backend .NET em camadas, frontend React/Vite e PostgreSQL. Endpoints:
`GET /health`, `GET /tasks`, `GET /tasks/{id}`, `POST /tasks` e
`DELETE /tasks/{id}`.

Recursos de estudo existentes:

- Kind;
- Deployment com duas réplicas;
- ClusterIP Service;
- ConfigMap e Secret;
- probes e resources;
- HPA de 1 a 3 réplicas;
- PVC;
- Ingress;
- MetalLB;
- ServiceAccount, Role e RoleBinding;
- Issuer e Certificate self-signed.

Esse projeto ensinou Kubernetes isoladamente e não é o runtime atual.

```text
bfe4877 chore: add course examples and kubernetes project
```

### 4.4 Primeiro laboratório de API Gateway

Local: `gateway/labs/fase-02-codigo-fonte-e-projeto-base/`.

```text
Frontend React :8089
  ├─→ Orders API localhost:3001
  └─→ Customers API localhost:3002
```

A baseline demonstrava o problema de o cliente precisar conhecer a URL de cada
API. O Kong seria a porta única e o ponto comum de políticas. O laboratório tem
duas APIs .NET, frontend, Dockerfiles multistage e Compose. Ele é referência;
novas lições devem ir para MeshCommerce.

```text
de0d75b feat: add API gateway baseline lab
c88e6b3 feat: expand Kong gateway labs
```

### 4.5 Nascimento do MeshCommerce em Service Mesh

O MeshCommerce nasceu em `service-mesh/final-project/` e depois foi movido para
`final-project/`.

```text
React → Orders API → Payments API → PostgreSQL
```

Foram criados React/Vite, Orders.Api, Payments.Api, Payments.Migrations,
PostgreSQL, Compose, manifests Kubernetes, um Payments defeituoso e o circuit
breaker do Istio.

```text
73cf740 feat: add MeshCommerce service mesh lab
```

### 4.6 Argo CD e GitOps

```text
c61c1e4 feat: add MeshCommerce Argo CD bootstrap
72749b7 feat: enable Argo CD self-heal
26c8239 chore: scale MeshCommerce frontend
```

O Argo passou a reconciliar manifests base a partir de `main`; a escala do
frontend foi usada como mudança visível de GitOps.

### 4.7 Consolidação na raiz

Em 24/08/2026 o projeto foi formalmente transformado no showcase compartilhado
e movido para `final-project/`.

> Novas capacidades estudadas entram no mesmo cenário de negócio, em vez de
> criar aplicações desconectadas para cada lição.

```text
a9e9dbc docs: establish MeshCommerce shared showcase
67dd63c feat: restore MeshCommerce service mesh showcase
a7c2e91 feat: consolidate MeshCommerce gateway and APIOps labs
965358f Merge pull request #3
```

Entraram tela Operations, tela Gateway, Kong Ingress Controller, contratos
OpenAPI, Spectral, oasdiff e documentação integrada.

### 4.8 CI/CD e demonstração GitOps

```text
5096bc7 ci: validate MeshCommerce delivery flow
e142234 Merge pull request #4
f4289fd demo: scale frontend through GitOps
ee42482 Merge pull request #5
9867576 demo: restore frontend baseline to two replicas
2a4f1e8 Merge pull request #7
```

Demonstração realizada:

```text
Pull Request → GitHub Actions → merge em main → Argo CD → cluster converge
```

O frontend foi de duas para três réplicas e depois voltou para duas. O manifest
atual desta branch declara duas.

### 4.9 Preview antigo de observabilidade em main

```text
2dd352a feat: add MeshCommerce observability preview
480fc5d Merge pull request #9
```

Esse preview possui README, scripts e uma Application Argo próprios. Depois o
usuário achou a explicação rápida/confusa e decidiu recomeçar observabilidade do
zero. A branch atual contém essa reconstrução pedagógica.

Não escolher silenciosamente entre as versões. A implementação atual não deve
ser perdida.

## 5. Arquitetura atual do MeshCommerce

Local: `final-project/`.

```text
Browser
  ↓
Kong API Gateway
  ↓
Frontend React/Nginx
  ↓
Orders.Api
  ↓ Idempotency-Key: <order-id>
Payments.Api
  ↓
PostgreSQL
```

No Kubernetes, os workloads HTTP recebem sidecar Envoy. PostgreSQL e o Job de
migration desabilitam a injeção.

Responsabilidades:

- **Frontend:** experiência, pedidos e telas de laboratório;
- **Orders.Api:** cria pedidos, mantém estado e orquestra pagamento;
- **Payments.Api:** persiste pagamentos e garante idempotência;
- **Payments.Migrations:** evolui o schema antes da API;
- **PostgreSQL:** persiste pagamentos;
- **Kubernetes:** execução, DNS, probes, configuração e storage;
- **Kong:** entrada externa, roteamento e rate limit;
- **Istio/Envoy:** tráfego interno, resiliência, faults e telemetria;
- **Prometheus:** coleta, armazena e consulta métricas;
- **Grafana:** visualiza métricas;
- **Argo CD:** reconcilia estado declarativo;
- **APIOps:** governa OpenAPI;
- **GitHub Actions:** valida contratos, aplicação e manifests.

## 6. Backend e domínio

Stack: .NET 10, ASP.NET Core Controllers, EF Core 10, Npgsql/PostgreSQL,
nullable habilitado, enums em JSON como strings e OpenAPI runtime apenas em
`Development`.

### Orders.Api

Arquivos centrais:

- `backend/src/Orders.Api/Program.cs`;
- `Controllers/OrdersController.cs`;
- `Domain/Order.cs`;
- `Infrastructure/InMemoryOrderRepository.cs`;
- `Integrations/Payments/PaymentsClient.cs`.

```text
GET  /              identidade, versão e instância
GET  /health        health check
GET  /orders        lista pedidos
GET  /orders/{id}   busca pedido
POST /orders        cria pedido e solicita pagamento
```

Criação:

1. valida cliente, item e valor;
2. cria `PendingPayment`;
3. salva em memória;
4. chama `POST /payments`;
5. envia `Idempotency-Key` igual ao ID do pedido;
6. aprovação muda para `Paid`;
7. rejeição muda para `PaymentFailed`;
8. falha HTTP retorna 503 e mantém pendente, pois o resultado é desconhecido.

Limitação: restart apaga pedidos. Várias réplicas teriam estados diferentes.

### Payments.Api

Arquivos centrais:

- `backend/src/Payments.Api/Program.cs`;
- `Controllers/PaymentsController.cs`;
- `Infrastructure/EfCorePaymentRepository.cs`;
- `Infrastructure/PaymentDbContext.cs`;
- `Domain/Payment.cs`.

```text
GET  /               identidade, versão e instância
GET  /health         health check
GET  /payments/{id}  busca pagamento
POST /payments       cria/reproduz pagamento idempotente
```

```text
chave nova → cria → 201
mesma chave + mesmos dados → replay → 200
mesma chave + dados diferentes → conflito → 409
```

A constraint `UNIQUE ux_payments_idempotency_key` protege corridas entre
réplicas. Uma violação é tratada recarregando o registro e decidindo replay ou
conflito. `amount` usa `numeric` sem escala fixa para preservar `decimal`.

### Migrations

`Payments.Migrations` chama `Database.MigrateAsync()` como executável separado.
No Compose é container one-shot; no Kubernetes é Job com init container que
aguarda PostgreSQL. Assim as réplicas da API não disputam migrations.

## 7. Frontend integrado

Stack: React 19, TypeScript 6, Vite 8, Lucide, Nginx 1.27. Nenhuma dependência
nova foi adicionada para os laboratórios.

Views em `App.tsx`:

```text
orders | operation | gateway | observability
```

### Orders

Lista, busca e cria pedidos; mostra `PendingPayment`, `Paid` e `PaymentFailed`;
trata 503 como pedido salvo com pagamento de resultado desconhecido.

### Operations

`OperationLab.tsx` e `api/meshLab.ts` exercitam `/mesh-lab/payments`, mostrando
status, instância, duração, sucessos/falhas e comportamento do circuit breaker.
A tela foi mantida porque circuit breaker já havia sido estudado.

### Gateway

`GatewayLab.tsx` e `api/gatewayLab.ts` exercitam `/gateway/orders` e mostram 200,
429, quota, restante, reset, request ID e latência Kong. Se headers Kong não
existirem, a UI informa bypass em vez de falso positivo.

### Observability — ainda sem commit

Arquivos:

- `frontend/src/ObservabilityLab.tsx` (423 linhas);
- `frontend/src/api/observabilityLab.ts` (79 linhas);
- estilos em `frontend/src/commerce.css`;
- navegação em `frontend/src/App.tsx`.

```text
Healthy baseline: 60 GET /api/orders, concorrência 10
Latency spike: 100 GET /mesh-lab/payments, concorrência 20,
               X-MeshCommerce-Latency-Lab: true
HTTP 5xx burst: 40 GET /mesh-lab/payments, concorrência 10,
                X-MeshCommerce-Error-Lab: true
```

A tela calcula quantidade, erros, média, p50/p95/p99, lentas `>=900ms`, timeline
e tabela recente. Possui stop/clear e links para Grafana/Prometheus. Consome o
corpo para medir o caminho completo do navegador.

O Nginx encaminha `/api/*` para Orders, `/mesh-lab/payments` para Payments e os
outros caminhos para a SPA. Os headers de laboratório são preservados.

## 8. Docker e execução por Compose

Arquivo: `final-project/docker-compose.yml`.

Serviços:

```text
postgres
payments-migrations
payments-api
orders-api
frontend
```

Portas:

```text
frontend     127.0.0.1:4173 → 80
orders-api   127.0.0.1:5101 → 8080
payments-api 127.0.0.1:5102 → 8080
postgres     127.0.0.1:5433 → 5432
```

Na rede Compose, serviços usam DNS interno:

```text
orders-api → http://payments-api:8080
APIs       → postgres:5432
```

O Compose é a baseline da aplicação, mas não inclui Kong, Istio, Prometheus ou
Grafana. A tela Gateway detecta isso. Fault injection também depende do
Kubernetes/Istio.

```bash
cd final-project
docker compose up --build -d
docker compose ps --all
docker compose down
```

`docker compose down` preserva `postgres-code-first-data`. `--volumes` apagaria
dados e só deve ser usado intencionalmente.

## 9. Kubernetes do MeshCommerce

### Cluster e namespaces

- Kind single-node/control-plane chamado `meshcommerce`;
- contexto `kind-meshcommerce`;
- namespace `meshcommerce` com `istio-injection=enabled`;
- namespace `observability` separado, com injeção desabilitada.

### Recursos base

Frontend:

- Deployment `frontend-v1`, duas réplicas;
- imagem `meshcommerce/frontend:v5`;
- Service ClusterIP `frontend:80`;
- startup/readiness/liveness probes;
- requests `25m/32Mi`, limits `200m/128Mi`.

Orders:

- Deployment `orders-api-v1`, uma réplica;
- imagem `meshcommerce/orders-api:v1`;
- Service `orders-api:8080`;
- Payments em `http://payments-api:8080`;
- probes;
- requests `50m/96Mi`, limits `500m/256Mi`.

Payments saudável:

- Deployment `payments-api-v1`, uma réplica;
- imagem `meshcommerce/payments-api:v1`;
- Service `payments-api:8080`;
- banco configurado por ConfigMap + Secret;
- probes;
- requests `50m/96Mi`, limits `500m/256Mi`.

PostgreSQL:

- StatefulSet `postgres`, uma réplica, `postgres:17-alpine`;
- Services `postgres` e `postgres-headless`;
- PVC `postgres-data`, 1Gi, ReadWriteOnce, storage class `standard`;
- ConfigMap para database/user;
- Secret didático versionado para senha;
- sem sidecar Istio;
- probes e resources.

Migration:

- Job `payments-migrations`;
- init container executa `pg_isready`;
- `backoffLimit: 4`, `restartPolicy: OnFailure`;
- sem sidecar Istio.

### Resumão Kubernetes já revisado

- **Namespace:** separa e organiza recursos em grupos lógicos;
- **Pod:** menor unidade executável; contém containers;
- **Labels:** identificam/classificam recursos;
- **Selector:** encontra recursos pelas labels;
- **ReplicaSet:** mantém a quantidade de pods;
- **Deployment:** administra ReplicaSets, rollout e rollback;
- **StatefulSet:** workload com identidade/armazenamento estáveis;
- **Job:** trabalho finito até completar;
- **ConfigMap:** configuração não secreta;
- **Secret:** objeto para dados sensíveis, sem garantir criptografia por si só;
- **ServiceAccount:** identidade do workload no cluster;
- **Role:** permissões em um namespace;
- **ClusterRole:** permissões reutilizáveis ou de cluster;
- **RoleBinding:** associa papel a identidade no namespace;
- **RBAC:** controle de acesso baseado em papéis;
- **Service:** nome/IP estável que encaminha para pods por selector;
- **EndpointSlice:** registra endpoints do Service;
- **CoreDNS:** resolve `service.namespace.svc.cluster.local`;
- **Probe:** testa startup, prontidão ou saúde contínua;
- **requests/limits:** reserva e limita CPU/memória;
- **PVC:** pedido de storage persistente;
- **Volume:** disponibiliza storage ao container;
- **Kustomization:** agrega/compõe manifests aplicáveis com `kubectl -k`.

## 10. Istio e Service Mesh

O usuário afirmou que o conteúdo do módulo de Service Mesh foi estudado:

- mundo distribuído;
- sidecar/Envoy;
- control plane/data plane;
- VirtualService e DestinationRule;
- subsets, versões e canary;
- round robin, least request e consistent hash;
- sticky session;
- fault injection delay/abort;
- circuit breaker/outlier detection;
- gateway/exposição externa;
- mTLS e telemetria.

Nem todos têm manifesto permanente no MeshCommerce. O showcase persiste o
circuit breaker e os faults controlados de observabilidade.

### Circuit breaker

```yaml
consecutive5xxErrors: 2
interval: 1s
baseEjectionTime: 30s
maxEjectionPercent: 50
minHealthPercent: 0
```

O `payments-api-faulty`:

- responde `/health` com 200;
- responde outros caminhos com 500;
- usa Nginx configurado por ConfigMap;
- tem a mesma label principal do Payments saudável;
- por isso é selecionado pelo mesmo Service.

Após dois 5xx consecutivos, o Istio pode ejetar o endpoint ruim por 30s. O
máximo de 50% permite remover um dos dois endpoints.

### Fault injection de observabilidade

`kubernetes/observability/labs/payments-latency.yaml` é opt-in:

```text
X-MeshCommerce-Error-Lab: true
→ abort 100%, HTTP 500

X-MeshCommerce-Latency-Lab: true
→ delay fixo 1s em 20%

sem header
→ tráfego regular
```

A ordem das rotas importa: erro, latência e fallback. Comentários deixam claro
que os faults são intencionais e inertes sem os headers.

## 11. Kong API Gateway

Kong é instalado pelo chart oficial `kong/ingress` fixado em `0.24.0`. Manager
desabilitado; proxy `ClusterIP`.

```text
/
→ frontend Service

/gateway
→ strip path
→ orders-api Service
→ plugin orders-rate-limit
```

Plugin:

```yaml
plugin: rate-limiting
minute: 5
policy: local
limit_by: ip
```

As cinco primeiras chamadas do mesmo IP na janela chegam ao Orders; excedentes
recebem 429 no Kong e não consomem Orders. A UI mostra headers de limite.

Limitações:

- `policy: local` mantém contadores por instância Kong;
- várias réplicas precisariam de estado compartilhado, como Redis;
- limitar por IP exige configuração correta de proxies confiáveis;
- autenticação, consumers e OpenID não foram integrados;
- Kong é principalmente norte-sul; Istio é principalmente leste-oeste.

## 12. APIOps e contratos

Local: `final-project/contracts/`.

- `orders.openapi.yaml`;
- `payments.openapi.yaml`;
- Spectral `6.16.3`;
- oasdiff no CI.

Os YAMLs são a baseline revisável dos consumidores. Spectral estende
`spectral:oas` e exige contato, descrição, servers, descrições/tags/operationId
nas operações e resposta de sucesso. Warnings falham.

```bash
cd final-project/contracts
npm ci --ignore-scripts
npm run lint
```

`.github/workflows/api-contracts.yml`:

1. faz lint;
2. encontra a baseline na branch base do PR;
3. executa oasdiff para Orders e Payments;
4. usa `fail-on: WARN`;
5. fixa actions por SHA;
6. usa token read-only;
7. cancela execução antiga da mesma referência.

Breaking changes típicos: remover endpoint/propriedade, adicionar propriedade
obrigatória, mudar tipo/formato, remover enum ou restringir valor aceito.

Limitação: não há teste automático de conformidade runtime↔OpenAPI. Spectral
valida estrutura; oasdiff compara contratos; nenhum prova o comportamento real.

## 13. CI do MeshCommerce

Workflow: `.github/workflows/meshcommerce-ci.yml`.

### Frontend quality

```text
Node 24 → npm ci --ignore-scripts → lint → build
```

### Integrated application

```text
docker compose config
→ build
→ up --wait
→ health Orders/Payments/frontend
→ POST /orders
→ confirmar Paid
→ diagnóstico em falha
→ teardown sempre
```

Esse smoke test prova migrations, Orders→Payments, persistência do pagamento e
pedido `Paid`.

### Kubernetes manifests

Kubeconform por digest, schema Kubernetes 1.36, modo strict. Ignora
`values.yaml` e schemas ausentes. Recursos built-in são validados; CRDs de
Kong/Istio/Argo/Kind dependem da validação do cluster.

### Quality gate

Falha se frontend, integração ou manifests não tiverem resultado `success`.

O CI não publica imagem nem acessa o Kind local.

## 14. Argo CD e GitOps

Application desta branch:

```text
name: meshcommerce
repo: https://github.com/viniciusbarbosa12/fullcycle.git
revision: main
path: final-project/kubernetes/base
namespace de destino: meshcommerce
automated: enabled
selfHeal: true
prune: false
```

Consequências:

- Git gerencia apenas `kubernetes/base`;
- self-heal corrige drift manual;
- `prune: false` não apaga automaticamente recursos removidos do Git;
- Kong, circuit breaker e observabilidade não são cobertos por essa Application;
- só mudanças commitadas/pushed em `main` chegam ao Argo;
- carregar imagem local no Kind não é pipeline de produção.

Já foi demonstrado: baseline de duas réplicas, PR para três, merge, reconciliação
Argo e posterior retorno a duas réplicas.

## 15. Observabilidade: conteúdo já estudado

A trilha foi reiniciada do zero porque o preview anterior foi considerado
rápido e confuso. A versão atual parte sempre de uma falha real.

### Fundamentos

- monitoramento responde perguntas conhecidas;
- observabilidade permite explorar estados internos pelos sinais externos;
- logs registram eventos;
- métricas representam valores agregáveis no tempo;
- traces acompanham uma requisição distribuída;
- uma solução completa combina as fontes;
- `trace_id` identifica um trace e normalmente é gerado pelo tracing;
- `correlation_id` identifica operação/contexto de negócio e pode sobreviver a
  filas, retries ou múltiplos traces;
- podem coincidir em sistemas simples, mas têm semânticas diferentes.

### Istio/Envoy como fonte

Foi inspecionado `/stats/prometheus` do sidecar. Conteúdo revisado:

- `istio_requests_total` é Counter;
- Counter cresce até o processo reiniciar;
- `rate(counter[1m])` calcula crescimento por segundo;
- histogramas usam buckets acumulados;
- `histogram_quantile` estima p50/p95/p99;
- labels mostram status, origem, destino e reporter;
- sem Istio/Envoy, aplicação, proxy ou agente precisaria ser instrumentado;
- sem Prometheus, o endpoint do pod não oferece histórico, agregação global,
  queries, avaliação de alertas ou sobrevivência ao restart.

O usuário não possui `rg` no shell (`zsh: command not found: rg`). Em comandos
para ele copiar, preferir `grep` ou oferecer instalação do ripgrep. O agente pode
continuar usando `rg` internamente.

### Prometheus/Kubernetes

Já foram explicados:

- Namespace, ServiceAccount, Role, ClusterRole, RoleBinding e RBAC;
- ConfigMap, Deployment, Service, CoreDNS e Kustomization;
- scrape e targets;
- scrape interval versus evaluation interval;
- Counter versus rate;
- PromQL;
- recording rules;
- alert rules;
- inactive, pending e firing;
- labels versus annotations;
- escolha de telemetria `reporter="source"`.

### Percentis

Correção consolidada:

> p95 não é a média das 5% piores requisições. É o ponto de corte abaixo do
> qual ficaram aproximadamente 95% das observações; 5% ficaram acima.

Também não é média nem a pior chamada individual.

### Grafana

Já foram estudados:

- problema de repetir PromQL manualmente;
- Data Source e `access: proxy`;
- provisioning;
- dashboard provider;
- ConfigMaps montados no pod;
- dashboard as code;
- painéis `stat`/`timeseries`;
- valor atual versus histórico;
- refresh e janela temporal;
- fluxo Grafana→Prometheus;
- risco do acesso anônimo.

Roteiro completo dos painéis:

```text
final-project/OBSERVABILITY-PRESENTATION.md
```

## 16. Stack de observabilidade atual — sem commit

### Composição

`kubernetes/observability/kustomization.yaml` agrega namespace, VirtualService
de faults, Grafana e Prometheus.

```bash
kubectl --context kind-meshcommerce apply \
  --kustomize final-project/kubernetes/observability
```

O `deploy-local.sh` atual não aplica esse Kustomization. A stack foi validada
manualmente no passado, mas não é restaurada automaticamente nesta branch.

### Prometheus

```text
imagem: prom/prometheus:v3.12.0, também fixada por digest
namespace: observability
réplicas: 1
Service: prometheus:9090
retenção: 6h
storage: emptyDir
```

Segurança/recursos:

- ServiceAccount `prometheus`;
- Role limitada a `get/list/watch` de pods em `meshcommerce`;
- RoleBinding cross-namespace;
- non-root UID/GID 65534;
- capabilities removidas;
- probes;
- requests `100m/192Mi`, limits `500m/512Mi`.

Discovery/scrape:

- Kubernetes pod discovery;
- somente namespace `meshcommerce`;
- somente pods `Running`;
- somente pods anotados com `prometheus.io/scrape=true`;
- usa path/port declarados nas annotations;
- adiciona labels de namespace, pod, application e version;
- scrape `5s`, timeout `4s`, evaluation `5s`.

Recording rules:

```text
meshcommerce:http_requests:rate1m
→ taxa por source_workload, destination_service_name e response_code

meshcommerce:http_request_duration_milliseconds:p95_1m
→ p95 por origem e destino
```

Alert rule:

```text
MeshCommerceHttp5xxDetected
source-side 5xx rate > 0
for: 10s
severity: warning
```

Usa `reporter="source"` porque abort do Envoy pode ocorrer antes de o destino
receber a chamada. A regra é didática e sensível demais para produção; deve
evoluir para razão/limiar e janela alinhados a SLO.

### Grafana

```text
imagem: grafana/grafana:13.1.0, também fixada por digest
namespace: observability
réplicas: 1
Service: grafana:3000
storage: emptyDir
```

Configuração:

- non-root UID/GID 472;
- Data Source `Prometheus`, UID `prometheus`;
- URL `http://prometheus.observability.svc.cluster.local:9090`;
- `access: proxy`, default, read-only;
- dashboard provider na pasta `MeshCommerce`;
- dashboard/Data Source provisionados por ConfigMap;
- alterações de UI não persistem;
- refresh 5s e janela default 15min;
- probes;
- requests `250m/256Mi`, limits `1 CPU/768Mi`;
- analytics/update checks e preinstall de plugins desabilitados;
- anonymous Viewer habilitado;
- login, signup e criação de admin desabilitados.

O acesso anônimo é intencional no laboratório e inadequado para produção.

### Dashboard

UID `meshcommerce-golden-signals`. Oito painéis:

1. instruções;
2. request rate;
3. success rate baseado em 5xx;
4. maior p95 entre caminhos;
5. alertas 5xx ativos;
6. request rate por status;
7. p50/p95/p99;
8. 5xx por origem→destino.

Cobre Traffic, Errors e Latency. Ainda falta Saturation; portanto os quatro
Golden Signals ainda não estão completos.

## 17. Validações já realizadas

Foram realizadas principalmente em 03/09/2026, quando o cluster estava ativo.
Repetir antes de afirmar o estado atual.

### Frontend

- `npm run lint`: passou;
- `npm run build`: passou;
- bundle servido continha “Observability lab”;
- imagem reconstruída/carregada no Kind;
- `npm audit --omit=dev`: zero vulnerabilidades;
- audit completo: duas altas transitivas em tooling (`brace-expansion` e
  `nanoid`);
- nenhum fix automático aplicado.

### Kubernetes/Istio

- server dry-run: passou;
- `istioctl analyze`: passou;
- render Kustomize sem drift naquele momento;
- pods ficaram saudáveis;
- cinco targets Istio ficaram `UP`.

### Prometheus

- `promtool check config`: passou;
- `promtool check rules`: passou;
- duas recording rules e uma alert rule reconhecidas;
- health e queries responderam;
- alerta testado com faults.

### Grafana

- `/api/health`: database `ok`, versão 13.1.0;
- Data Source confirmado;
- dashboard provisionado com oito painéis;
- query pela API do Grafana atravessou o proxy até Prometheus.

### Experimentos medidos

Baseline:

```text
60 requisições, 60 HTTP 200
após scrape/evaluation: ~1,09 req/s, 100% success, p95 ~31,25ms
```

A leitura imediata deu `0 req/s` e `NaN` no p95 por falta de amostras suficientes
no ciclo scrape→evaluation; não significava ausência de tráfego.

Latência:

```text
100 requisições
98 HTTP 200
2 HTTP 500 naturais do payments-api-faulty
24/100 >= 900ms no cliente
média cliente ~251,6ms
p50 mesh ~0,96ms
p95 mesh ~895,8ms
p99 mesh ~979,2ms
success ~98,72%
```

É probabilístico devido aos 20%. P50 baixo com p95/p99 alto demonstrou cauda
lenta.

Erro:

```text
40 requisições, 40 HTTP 500
success posterior: 70%
caminho: frontend-v1 → payments-api
taxa 5xx: ~0,76/s
```

O alerta já apareceu `firing` porque os dois erros naturais anteriores tinham
mantido a condição. A lição: cenários compartilham janela e uma baseline
contaminada muda a leitura.

## 18. Incidentes reais já encontrados

### Certificados Istio expirados

O control plane Kind ficou parado. Ao retornar, pods preservados possuíam
certificados de workload expirados.

Sintomas:

- chamadas diretas podiam funcionar;
- tráfego mesh dava 503;
- Envoy mostrou `CERTIFICATE_VERIFY_FAILED` e `certificate_has_expired`;
- flags incluíram `UF,URX`.

Correção: rollout de frontend/payments, gerando pods e certificados novos.

Caso para entrevista: métricas localizaram 503, logs Envoy explicaram TLS e
estado dos pods/certificados confirmou a causa.

### Tag mutável do frontend

O Deployment referencia `meshcommerce/frontend:v5`. Uma atualização foi
construída inicialmente como `v1`; reiniciar o rollout manteve código antigo
porque `v5` no node ainda era antigo.

Correção: retaggear a imagem nova como `v5`, carregar no Kind, reiniciar e
validar digest/bundle. `deploy-local.sh` agora constrói/carrega v1 e v5.

Continua frágil. Produção deve usar tag imutável ou digest atualizado no Git.

## 19. Scripts e comandos operacionais

### Deploy da aplicação base

```bash
cd final-project
./kubernetes/scripts/deploy-local.sh
```

O script cria Kind se necessário, instala Istio, instala Kong chart 0.24.0,
constrói/carrega imagens, aplica PostgreSQL, recria migration Job, aplica as
APIs/frontend, reinicia rollouts, aplica Kong e circuit breaker e restaura a
Application Argo caso o CRD exista.

Ele altera estado e recria o Job; usar somente com essa intenção.

### Acesso pelo Kong

```bash
cd final-project
./kubernetes/scripts/port-forward.sh
```

Default: `http://localhost:14173`.

### Aplicar observabilidade atual

```bash
kubectl --context kind-meshcommerce apply \
  --kustomize final-project/kubernetes/observability
```

### Port-forwards usados nas aulas

```bash
kubectl --context kind-meshcommerce \
  --namespace observability \
  port-forward service/prometheus 19090:9090

kubectl --context kind-meshcommerce \
  --namespace observability \
  port-forward service/grafana 14300:3000

kubectl --context kind-meshcommerce \
  --namespace meshcommerce \
  port-forward service/frontend 14177:80
```

Frontend via Kong: 14173. Frontend direto usado em observabilidade: 14177.

### Validações úteis

```bash
git status --short --branch

cd final-project/frontend
npm run lint
npm run build

cd ../contracts
npm run lint

kubectl --context kind-meshcommerce get pods -A
kubectl --context kind-meshcommerce get all -n meshcommerce
kubectl --context kind-meshcommerce get all -n observability

istioctl analyze --context kind-meshcommerce --namespace meshcommerce

curl http://localhost:19090/targets
curl http://localhost:19090/alerts
curl http://localhost:14300/api/health
```

## 20. Material de apresentação

Arquivo novo ainda não commitado:

```text
final-project/OBSERVABILITY-PRESENTATION.md
```

Contém fluxo de telemetria, URLs, atraso de coleta, explicação dos sete painéis
operacionais, valor atual versus histórico, percentis, roteiro
baseline→latência→erro, falas para John, limitações e resposta de entrevista.

`final-project/SHOWCASE.md` recebeu um link para esse roteiro. Essa foi a última
alteração antes da criação deste handoff.

## 21. Lacunas e riscos conhecidos

### Git

- branch atual está atrás de `main`;
- os mesmos caminhos de observabilidade diferem entre main e working tree;
- merge/rebase pode conflitar;
- trabalho atual não tem commit;
- READMEs podem refletir versões diferentes;
- proteger e comparar antes de integrar.

### Aplicação

- Orders em memória;
- sem autenticação/autorização;
- sem timeout/retry explícitos no HttpClient da aplicação;
- pedido pode ficar pendente quando pagamento é ambíguo;
- sem testes .NET dedicados;
- sem banco do Orders.

### Kubernetes/entrega

- Secret didático versionado em texto;
- tags mutáveis e imagens locais;
- sem registry/promoção;
- Kind single-node;
- Argo gerencia apenas `kubernetes/base` nesta branch;
- `prune: false` pode deixar recursos obsoletos;
- observabilidade não entra no deploy script atual;
- CRDs não têm validação completa em CI;
- sem NetworkPolicy, TLS de entrada, HPA ou PDB no superprojeto.

### Kong

- rate limit local/IP;
- sem Redis;
- sem consumers, Basic/Key Auth ou OpenID no superprojeto;
- sem logs centralizados;
- sem K6/Testkube.

### Observabilidade

- apenas métricas Istio;
- sem métricas customizadas da aplicação;
- sem CPU/memória/saturação;
- sem logs centralizados;
- sem tracing/OpenTelemetry;
- sem Alertmanager/notificação;
- Prometheus/Grafana com `emptyDir`, uma réplica e sem HA;
- Prometheus retém apenas 6h;
- Grafana anônimo;
- alerta 5xx sensível demais;
- agregações podem precisar de filtros/variáveis;
- controlar cardinalidade de labels;
- workload faulty contamina baseline;
- headers de fault não deveriam existir assim em produção.

### Dependências

- audit de produção do frontend estava limpo;
- audit completo encontrou altas transitivas em `brace-expansion` e `nanoid`;
- não executar `npm audit fix` automaticamente;
- atualizar apenas com análise, lockfile, lint e build.

## 22. Ponto exato onde o estudo parou

Sequência concluída:

1. recording rules e alert rule no Prometheus;
2. Data Source Grafana e `access: proxy`;
3. provisioning/dashboard as code;
4. baseline, latência e erro reais;
5. interpretação de todos os painéis;
6. correção conceitual de p95;
7. roteiro Markdown para a apresentação;
8. este handoff para trocar de assistente.

Última dúvida:

> “O p95 mostra a média das 5% piores?”

Resposta:

> Não. É o ponto de corte de 95%; as 5% restantes estão acima. A média dessas
> 5% seria outra estatística.

Próximo tema recomendado: **Saturation**, completando os quatro Golden Signals
antes de logs e traces.

## 23. Roadmap futuro recomendado

Executar um checkpoint por vez e explicar antes de alterar.

### Checkpoint 0 — proteger/reconciliar o estado

1. revisar working tree;
2. comparar com `origin/main`/`2dd352a`;
3. decidir quais scripts, README e Application Argo reaproveitar;
4. preservar a implementação pedagógica atual;
5. validar;
6. commit/push/PR somente quando solicitado.

Não reconciliar silenciosamente.

### Checkpoint 1 — Saturation

Problema:

> A aplicação está lenta por causa da rede/código ou por falta de CPU/memória?

Objetivos:

- coletar recursos por workload/pod;
- explicar usage, requests, limits, throttling, working set e OOM;
- adicionar painel de saturação;
- criar cenário controlado se seguro;
- atualizar roteiro de John.

Decisão aberta: kubelet/cAdvisor, metrics-server ou exporter. Metrics-server é
voltado principalmente a autoscaling e não substitui histórico Prometheus.

### Checkpoint 2 — logs centralizados

Problema:

> Métricas mostram frontend→payments com 500, mas não mostram a exceção.

Objetivos:

- logs JSON nas APIs;
- service/environment/level/status/duration/IDs;
- coletar stdout dos pods;
- busca central mesmo após restart;
- navegar do intervalo do dashboard aos logs.

Decisão aberta:

- a grade segue Elastic/Filebeat/Kibana/APM;
- há exemplo Loki/Alloy/Grafana em `gateway/labs/fase-08-observabilidade`;
- Elastic segue o curso, mas é mais pesado;
- Loki integra ao Grafana e é mais leve;
- explicar trade-offs e pedir autorização antes de novas dependências/imagens.

### Checkpoint 3 — tracing/OpenTelemetry

Problema:

> Sabemos o caminho, mas não qual etapa de uma requisição específica demorou.

Objetivos:

- instrumentação automática/manual;
- W3C Trace Context;
- spans Orders→Payments→PostgreSQL;
- Collector;
- backend Zipkin/Tempo/Jaeger a decidir;
- demonstrar `trace_id` versus `correlation_id`.

Conecta com a trilha `opentelemetry/`.

### Checkpoint 4 — correlação dos sinais

```text
Pico no Grafana
→ filtrar intervalo
→ localizar log por trace_id
→ abrir trace
→ identificar span lento/erro
→ confirmar causa
```

O usuário pediu explicitamente um hands-on combinando todas as fontes.

### Checkpoint 5 — alertas completos

- definir indicador/SLO;
- substituir `5xx > 0` por razão/janela realistas;
- Alertmanager;
- canal local de demonstração;
- grouping, deduplicação e silence;
- runbook no alerta;
- alerta acionável versus dashboard informativo.

### Checkpoint 6 — produção

- autenticação Grafana e TLS;
- persistência, retenção, backup e HA;
- NetworkPolicy;
- secrets externos;
- imagens imutáveis;
- proteção/remoção dos headers de fault;
- resources ajustados por medição.

### Gateway pendente

- consumers/identidade;
- Basic/Key Auth como estudo;
- OpenID Connect;
- autorização e quota por consumidor;
- K6/Testkube;
- logs Kong;
- rate limit distribuído;
- disponibilidade do gateway.

### CI/CD pendente

- testes .NET;
- conformidade runtime↔OpenAPI;
- Sonar/coverage se a trilha for retomada;
- build/push de imagens imutáveis;
- SBOM/scanning;
- promoção por ambiente;
- manifests por digest;
- Argo gerenciar overlays;
- estratégia de prune.

## 24. Próxima ação recomendada ao Augment

Se o usuário disser apenas “vamos continuar”:

1. não começar alterando Git;
2. lembrar que o cluster está parado;
3. retomar Saturation no formato problema→sinais→código;
4. explicar uso, limite e saturação;
5. inspecionar o que o ambiente expõe antes de escolher componente;
6. apresentar arquivos/riscos antes de editar;
7. implementar apenas o checkpoint autorizado;
8. comentar comportamentos didáticos;
9. validar e atualizar documentação após mudança material.

Se ele pedir commit, push ou PR, primeiro mostrar a divergência e o conteúdo
exato a integrar.

## 25. Frase-resumo

> MeshCommerce é um superprojeto educacional evolutivo que começou com
> exercícios isolados de Docker, Kubernetes, Gateway e Service Mesh e passou a
> reunir React, .NET, PostgreSQL, Docker, Kubernetes, Istio, Kong, OpenAPI,
> GitHub Actions, Argo CD, Prometheus e Grafana em um único fluxo de pedidos e
> pagamentos. Cada tecnologia entra para resolver um problema demonstrável, com
> código versionado, validação e explicação preparada para entrevistas.
