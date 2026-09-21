# MeshCommerce — Resumo Técnico do Frontend

## 1. Objetivo

O frontend do MeshCommerce evoluiu de uma tela de pedidos para um laboratório
visual de API Gateway, Service Mesh, resiliência e observabilidade.

As telas permitem demonstrar rate limiting, JWT/ACL, Correlation ID, canary
deployment, preview por header, retries, timeouts, fault injection, circuit
breaker e comparação entre Kong e Istio Gateway.

## 2. Arquitetura demonstrada

### Entrada via Kong

`Browser → Kong → Frontend/Nginx → Orders API → Payments API`

O Kong aplica políticas de borda como rate limiting, Correlation ID, JWT e ACL.

### Entrada comparativa via Istio

`Browser → Istio Gateway → Orders API → Payments API`

Essa rota existe como laboratório comparativo. Ela reutiliza o roteamento e a
telemetria da malha, enquanto Kong permanece como gateway público principal.

Portas locais:

- Kong/frontend: `14173`
- Istio Gateway: `14174`
- Grafana: `14300`
- Prometheus: `19090`

## 3. Shell React e navegação

Arquivo principal: `frontend/src/App.tsx`.

Foi criado um shell único com navegação lateral e as views:

- Orders
- Operations
- Gateway
- Security
- Releases
- Resilience
- Ingress
- Observability

O estado `AppView` controla a tela ativa. Cada laboratório é renderizado no
mesmo shell e as classes `app-main-*` controlam sua visibilidade.

A tela Orders também foi aprimorada com carregamento assíncrono, busca, métricas
de pedidos, formulário de criação, status de pagamento e mensagens de erro.

## 4. Gateway Lab — rate limiting

Arquivos: `frontend/src/GatewayLab.tsx` e `frontend/src/api/gatewayLab.ts`.

A tela demonstra o fluxo Browser → Kong → Orders API e permite configurar um
burst de requisições e o intervalo entre elas.

São exibidos:

- requests executadas;
- requests permitidas;
- requests bloqueadas;
- HTTP 429;
- quota restante;
- tempo para reset;
- latência do proxy Kong;
- timeline individual das requisições.

O cliente lê `RateLimit-*`, `X-RateLimit-*`, `Retry-After`,
`X-Kong-Proxy-Latency` e `X-Kong-Request-Id`. Também detecta quando a chamada
foi feita sem passar pelo Kong e informa o bypass em vez de gerar falso positivo.

## 5. Security Lab — JWT e ACL

Arquivos: `frontend/src/SecurityLab.tsx` e `frontend/src/api/securityLab.ts`.

A tela simula login/logout com um emissor educacional e mostra persona, roles,
scopes, expiração e estado da sessão.

Cenários demonstrados:

1. Sem token → HTTP 401.
2. Token expirado → HTTP 401.
3. Viewer sem grupo operador → HTTP 403.
4. Operator com ACL válida → HTTP 200.

A interface comprova se o Orders API foi alcançado. Tokens ficam apenas em
memória no estado React e não são persistidos em localStorage.

A implementação utiliza JWT + ACL no Kong OSS. Não é um OIDC corporativo de
produção; o emissor local é educacional e deve ser substituído por um IdP real
em ambientes produtivos.

## 6. Correlation ID

Os clientes dos laboratórios geram ou propagam `X-Correlation-ID`.

O identificador pode ser copiado na interface e é exibido nos resultados de
Security, Release, Resilience e Ingress.

No backend, o middleware compartilhado valida o header, gera um UUID quando
necessário, define `HttpContext.TraceIdentifier`, devolve o header na resposta
e adiciona o valor ao logging scope.

O `PaymentsClient` também propaga o identificador de Orders para Payments,
permitindo correlacionar Browser → Kong → Orders → Payments.

## 7. Release Lab — canary deployment

Arquivos: `frontend/src/ReleaseLab.tsx` e `frontend/src/api/trafficLabs.ts`.

A tela compara Payments v1 e v2 com estágios de:

- 0% v2;
- 20% v2;
- 50% v2;
- 100% v2.

Também existe preview por `X-MeshCommerce-Preview: v2`, que força todas as
requisições para a versão v2.

O laboratório executa bursts concorrentes, registra versão, status, latência e
Correlation ID, calcula a distribuição observada e apresenta uma tabela das
últimas chamadas.

## 8. Resilience Lab

Arquivo: `frontend/src/ResilienceLab.tsx`.

Cenários disponíveis:

- Healthy: rota normal;
- Transient 503: falha transitória recuperada pelo retry;
- Slow upstream: upstream lento e timeout;
- Injected delay: atraso artificial de dois segundos;
- Injected abort: HTTP 503 produzido pelo Envoy.

A tela exibe status final, latência, tentativa, versão do Payments e
Correlation ID. Também diferencia falha da aplicação de falha injetada pelo
proxy.

## 9. Ingress Lab — Kong versus Istio

Arquivos: `frontend/src/IngressLab.tsx` e `frontend/src/api/ingressLab.ts`.

A tela compara `/gateway/orders` via Kong com `/api/orders` via Istio Gateway.

Para cada caminho, apresenta:

- status HTTP;
- latência total;
- latência do proxy;
- header de evidência do gateway;
- rota utilizada;
- Correlation ID.

O alias `127.0.0.1.nip.io` evita dependência de alteração manual do `/etc/hosts`.

## 10. Operations e Observability Labs

`OperationLab.tsx` demonstra circuit breaker, distribuição entre instância
saudável e faulty, taxa de sucesso, falhas e latência média.

`ObservabilityLab.tsx` gera cenários de baseline, latência e HTTP 5xx. Calcula
sucessos, falhas, requests lentas, média, p50, p95 e p99, além de links para
Grafana, targets e alertas do Prometheus.

## 11. Vite

Arquivo: `frontend/vite.config.ts`.

Proxies de desenvolvimento:

- `/api` → Orders API local;
- `/mesh-lab/payments` → Payments API local em `/lab/probe`;
- `/gateway` → Kong em `localhost:14173`.

O destino do gateway pode ser configurado por `VITE_GATEWAY_PROXY_URL`.

## 12. Nginx

Arquivo: `frontend/nginx.conf`.

Em produção no Kubernetes:

- `/api/` é encaminhado para `orders-api:8080`;
- `/mesh-lab/payments` é encaminhado para `payments-api:8080/lab/probe`;
- demais rotas usam fallback para `index.html`.

Os endpoints de laboratório de Payments são read-only para evitar criação de
pagamentos reais durante experimentos de tráfego.

## 13. Sistema visual

Arquivo principal: `frontend/src/commerce.css`.

Foram adicionados tokens de cor, tipografia, cards, métricas, badges, timelines,
barras de distribuição, estados de sucesso/falha, alertas, tabelas e diagramas
de fluxo.

Também foram incluídos:

- layout responsivo;
- `aria-label`, `role="alert"` e `aria-live`;
- estados de loading e disabled;
- botões para copiar Correlation ID;
- suporte a `prefers-reduced-motion`;
- adaptação para telas menores.

## 14. Integração de infraestrutura

O frontend utiliza headers pedagógicos para controlar VirtualServices do Istio:

- `X-MeshCommerce-Canary-Stage`;
- `X-MeshCommerce-Preview`;
- `X-MeshCommerce-Resilience`;
- `X-MeshCommerce-Fault`;
- `X-MeshCommerce-Circuit-Lab`;
- `X-MeshCommerce-Latency-Lab`;
- `X-MeshCommerce-Error-Lab`.

O Istio controla subsets v1, v2 e faulty, pesos de tráfego, retry, timeout,
fault injection, circuit breaker e o Gateway comparativo.

## 15. Validação

Foram executados com sucesso:

- frontend lint;
- frontend build;
- build .NET;
- lint Spectral dos contratos OpenAPI;
- validação dos manifests Kubernetes/Istio;
- validação sintática dos scripts;
- `git diff --check`.

O smoke test runtime validou:

- anonymous JWT → 401;
- expired JWT → 401;
- viewer ACL → 403;
- operator ACL → 200;
- canary preview → 200;
- Istio retry → 200;
- Istio abort → 503;
- Istio Gateway → 200.

Também foram confirmados frontend, Orders, health check, Pods, migration Job e
Grafana funcionando no Kind.

## 16. Roteiro executivo

1. Apresentar o fluxo Browser → Kong → APIs.
2. Demonstrar rate limiting e HTTP 429.
3. Demonstrar 401, 403 e 200 no Security Lab.
4. Mostrar Correlation ID atravessando a cadeia.
5. Alterar pesos do canary e executar preview v2.
6. Executar retry, timeout, delay e abort.
7. Comparar Kong e Istio Gateway.
8. Abrir Grafana e correlacionar tráfego, métricas e falhas.

## 17. Limitações conhecidas

- JWT/ACL local não substitui OIDC corporativo.
- Rate limiting local não substitui Redis distribuído.
- Canary utiliza imagens locais no Kind.
- Labs de Payments são read-only.
- A validação frontend usa lint, build, smoke test e runtime; não foi adicionada
  uma nova biblioteca de testes unitários.