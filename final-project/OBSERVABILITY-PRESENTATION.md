# Roteiro de apresentação: observabilidade do MeshCommerce

Este roteiro acompanha o dashboard **MeshCommerce Golden Signals** e pode ser
usado como apoio durante a demonstração. A ideia não é somente mostrar
gráficos, mas contar uma história:

> Uma requisição apresentou um problema. Com métricas, identificamos o impacto,
> o período e o caminho afetado. Depois, logs e traces poderão explicar a causa
> exata.

## Visão geral do fluxo

```text
Frontend gera requisições
        ↓
Istio/Envoy observa a comunicação entre os workloads
        ↓
Prometheus coleta e armazena as métricas
        ↓
Recording rules pré-calculam taxas e percentis
        ↓
Grafana consulta o Prometheus e apresenta os painéis
```

O Prometheus é a fonte dos dados. O Grafana não coleta essas métricas: ele
consulta o Prometheus e as transforma em visualizações.

## Antes de começar

Endereços da demonstração:

- frontend: `http://localhost:14177`;
- dashboard: `http://localhost:14300/d/meshcommerce-golden-signals`;
- targets: `http://localhost:19090/targets`;
- alertas: `http://localhost:19090/alerts`.

No dashboard, selecionar:

```text
Time range: Last 15 minutes
Refresh: 5s
```

O número grande de um painel `stat` representa o valor mais recente. O pequeno
gráfico ao fundo representa o histórico do período selecionado. Portanto, é
normal visualizar `0 req/s` agora e ainda enxergar um pico anterior: houve
tráfego naquele período, mas nenhuma requisição está acontecendo neste instante.

As métricas também não aparecem instantaneamente. O caminho é:

```text
requisição
   ↓
Envoy atualiza a métrica
   ↓
Prometheus faz o scrape (5s)
   ↓
Prometheus avalia a recording rule (5s)
   ↓
Grafana atualiza o painel (5s)
```

Por isso, depois de executar um cenário, aguardar aproximadamente 10 a 15
segundos antes de interpretar o dashboard.

## 1. Request rate

### Fala sugerida

> Este painel mostra quantas requisições por segundo estão passando pelo
> sistema. Quando executo uma simulação, surge um pico. Quando o tráfego para,
> o valor atual volta para zero, mas o pico continua visível no histórico.

Unidade:

```text
req/s = requisições por segundo
```

O painel responde:

> O sistema está recebendo tráfego e em qual intensidade?

Caso real: se uma aplicação normalmente recebe 100 requisições por segundo e a
taxa cai repentinamente para zero, o problema pode estar antes da regra de
negócio: frontend, gateway, DNS, rede ou indisponibilidade da aplicação.

Uma taxa alta não é automaticamente ruim. Ela precisa ser comparada com erros,
latência e capacidade disponível.

## 2. Success rate

### Fala sugerida

> Este painel mostra a porcentagem de requisições sem erro 5xx. Durante a
> simulação de erro, a taxa cai. Quando os erros saem da janela analisada, ela
> retorna para 100%.

Cálculo simplificado:

```text
success rate = 100 × (1 - taxa de 5xx / taxa total)
```

O painel responde:

> Qual porcentagem do tráfego está sendo atendida sem falha interna?

Limitação atual: a consulta considera `5xx` como falha. Respostas `4xx`, como
`404` e `429`, não diminuem esse indicador. Isso é uma decisão da consulta, e
não uma regra universal. Em um dashboard de negócio talvez fosse necessário
tratar alguns códigos `4xx` separadamente.

## 3. Worst service p95

### Fala sugerida

> Este painel mostra o maior p95 encontrado entre os caminhos dos serviços. Se
> ele mostra 900 milissegundos, significa que 95% das requisições terminaram em
> até aproximadamente 900 milissegundos; os 5% restantes ficaram acima desse
> ponto de corte.

### O que p95 não significa

O p95:

- não é a média de todas as requisições;
- não é a média das 5% piores requisições;
- não é a requisição individual mais lenta.

Exemplo ordenado com 100 tempos de resposta:

```text
requisição 1 ................................ requisição 95 | 96 ... 100
                                                ↑
                                           ponto p95
```

Se o tempo da posição 95 é aproximadamente `900 ms`, o p95 é aproximadamente
`900 ms`. Para calcular a média das 5% piores seria necessário selecionar os
tempos acima do p95 e fazer outro cálculo; nosso gráfico não faz isso.

O termo **Worst service p95** também não significa “pior requisição”. O
Prometheus calcula um p95 para cada caminho observado e o painel mostra o maior
desses p95.

O painel responde:

> Qual caminho apresenta a pior experiência de latência no percentil 95?

## 4. Active 5xx alerts

### Fala sugerida

> Este painel mostra quantos alertas de erro 5xx estão disparados agora. O
> Prometheus avalia a regra e produz o alerta; o Grafana apenas apresenta o
> estado calculado pelo Prometheus.

Estados do alerta:

```text
inactive → a condição não está acontecendo
pending  → a condição existe, mas ainda aguarda o tempo configurado
firing   → a condição permaneceu ativa durante o tempo exigido
```

Nossa regra didática utiliza `for: 10s`. Ela é intencionalmente sensível para
facilitar a demonstração. Em produção, alertar por qualquer taxa maior que zero
provavelmente geraria ruído. Uma regra mais realista poderia exigir, por
exemplo, mais de 5% de erros sustentados por alguns minutos.

Limitação atual: ainda não existe Alertmanager. O alerta fica disponível no
Prometheus e no dashboard, mas não envia notificação para Slack, e-mail,
PagerDuty ou outro canal.

## 5. Request rate by HTTP status

### Fala sugerida

> Este gráfico separa a taxa de requisições pelo status HTTP. A linha verde
> representa respostas 200 e a amarela representa respostas 500. Assim consigo
> comparar o volume de tráfego com o volume de erros no mesmo período.

```text
verde   → HTTP 200
amarelo → HTTP 500
```

O eixo vertical apresenta uma taxa, não uma contagem total:

```text
0,5 req/s = aproximadamente meia requisição por segundo
```

O gráfico responde:

- quanto tráfego existia naquele momento?
- quais respostas HTTP estavam sendo entregues?
- o aumento de tráfego veio acompanhado de erros?

Contexto é importante: 100 erros em 100 requisições representam um impacto
muito diferente de 100 erros em milhões de requisições.

## 6. Latency percentiles

### Fala sugerida

> Este gráfico compara p50, p95 e p99. Na simulação, o p50 continuou baixo
> porque a maioria das chamadas permaneceu rápida. Já p95 e p99 chegaram perto
> de um segundo, mostrando que uma parcela dos usuários enfrentava lentidão.

Linhas:

```text
p50 verde   → ponto de corte de 50% das requisições
p95 amarelo → ponto de corte de 95% das requisições
p99 azul    → ponto de corte de 99% das requisições
```

Interpretação de um exemplo:

```text
p50 = 10 ms   → 50% terminaram em até aproximadamente 10 ms
p95 = 900 ms  → 95% terminaram em até aproximadamente 900 ms
p99 = 980 ms  → 99% terminaram em até aproximadamente 980 ms
```

Isso revela a **cauda de latência**. Se olhássemos somente a média ou o p50,
poderíamos concluir incorretamente que todo o sistema estava saudável, embora
uma parcela dos usuários estivesse esperando quase um segundo.

Os valores são aproximações calculadas a partir dos buckets do histograma do
Istio, e não tempos individuais armazenados pelo Prometheus.

## 7. HTTP 5xx rate by traffic path

### Fala sugerida

> Os painéis anteriores mostram que existe um problema. Este começa a indicar
> onde ele acontece, agrupando os erros pela origem e pelo destino da
> comunicação.

Exemplo apresentado:

```text
frontend-v1 → payments-api
```

Isso significa que o erro foi observado no caminho entre o workload
`frontend-v1` e o serviço `payments-api`.

Um pico de `0,8 req/s` representa aproximadamente 0,8 resposta 5xx por segundo
naquele caminho. Novamente, é uma taxa, não o total acumulado de erros.

Esse gráfico responde:

> Entre quais workloads a falha foi observada?

Ele ainda não responde qual linha de código falhou. Para chegar à causa exata,
precisamos correlacionar métricas com logs e traces.

## Prometheus targets

### Fala sugerida

> Esta tela verifica se o Prometheus está conseguindo coletar métricas. Um
> target UP significa que o scrape daquele endpoint está funcionando.

Se um target estiver `DOWN`, um dashboard vazio não prova que o sistema está
saudável. Pode significar apenas que o Prometheus deixou de receber os dados.

## Prometheus alerts

### Fala sugerida

> Esta tela permite inspecionar diretamente as regras avaliadas pelo Prometheus
> e verificar se cada alerta está inactive, pending ou firing.

## Demonstração sugerida

### 1. Baseline saudável

No frontend, executar **Healthy baseline**.

Falar:

> Primeiro vou produzir uma referência do comportamento normal. A taxa de
> requisições aumenta, a taxa de sucesso permanece próxima de 100% e o p95 fica
> baixo.

Aguardar de 10 a 15 segundos e observar:

```text
Request rate aumenta
Success rate permanece próximo de 100%
p95 permanece baixo
HTTP 200 aparece no gráfico de status
```

### 2. Degradação de latência

Executar **Latency spike**.

Falar:

> Agora envio um header de laboratório que ativa uma regra controlada de fault
> injection no Istio. Uma parte das chamadas recebe aproximadamente um segundo
> de atraso, sem modificar o código do Payments.

Observar:

```text
p50 continua baixo
p95 e p99 aumentam
```

Concluir:

> A maioria das chamadas continuou rápida, mas os percentis altos revelaram a
> experiência ruim de uma parcela dos usuários.

### 3. Rajada de erros

Executar **Error burst**.

Falar:

> Agora outro header de laboratório ativa uma resposta 500 controlada pelo
> Istio. Isso permite validar métricas e alertas de maneira reproduzível.

Observar:

```text
Success rate cai
HTTP 500 aparece por status
O alerta passa para pending e depois firing
O caminho frontend-v1 → payments-api aparece
```

Observação: se o `payments-api-faulty` já tiver produzido erros naturais, o
alerta pode estar `pending` ou `firing` antes desse passo. Isso não é falha do
Grafana; significa que a regra já encontrou erros dentro da janela analisada.

### Encerramento sugerido

> Com métricas, detectei a existência do problema, medi o impacto e identifiquei
> o caminho afetado. Com logs centralizados, investiguei os eventos da aplicação
> no mesmo intervalo. O próximo passo é usar traces para acompanhar a requisição
> completa e localizar a causa exata por etapa.

## O que cada camada entrega

```text
Frontend
→ tempo percebido pelo cliente e resultado completo da chamada

Envoy/Istio
→ telemetria da comunicação, status, origem, destino e duração

Prometheus
→ coleta, histórico, PromQL, taxas, percentis, recording rules e alertas

Grafana
→ visualização e comparação dos indicadores

Loki + Alloy
→ stdout estruturado centralizado e pesquisável no intervalo do dashboard

Alertmanager
→ agrupamento, janela, notificação e resolução dos alertas
```

## O que já está pronto para apresentar

- geração visual de baseline, lentidão e erros no frontend;
- telemetria automática do Istio/Envoy;
- descoberta e scrape dos workloads pelo Prometheus;
- scrape do cAdvisor pelo API Server e `kube-state-metrics` para requests/limits;
- recording rules de tráfego, p95, CPU, memória e throttling;
- Loki + Alloy coletando stdout do namespace `meshcommerce`;
- logs JSON nas APIs Orders e Payments;
- Alertmanager com SLO de 99%, janelas e receptor HTTP local;
- Grafana, Prometheus, Loki e Alertmanager provisionados como código;
- dashboard versionado com tráfego, erros, latência, saturação e logs;
- links para targets, alertas e Alertmanager;
- configuração declarativa no Kubernetes.

## 1. Saturação: problema real → código → solução

### Problema real

> A aplicação está lenta por causa da rede/código ou porque o container está
> próximo do limite de CPU ou memória?

Os quatro Golden Signals agora estão representados:

```text
Traffic, Errors, Latency e Saturation
```

### Código e solução

- Prometheus descobre o kubelet pelo API Server e coleta `/metrics/cadvisor`;
- `kube-state-metrics` publica os requests e limits declarados nos Pods;
- recording rules calculam CPU/memória em relação a request e limit;
- outras rules calculam CPU throttling e memória working set;
- o Grafana mostra CPU, throttling, working set e a fronteira de OOMKilled.

### Por que corrigir

Uso absoluto não basta. Um consumo de `100Mi` pode ser saudável para um Pod com
limit de `512Mi`, mas crítico para outro com limit de `128Mi`. A comparação com
request mostra pressão sobre a capacidade planejada; a comparação com limit
mostra risco de throttling ou OOMKilled.

### Riscos e trade-offs

- cAdvisor mostra uso observado; não explica sozinho a causa da pressão;
- `metrics-server` seria útil para autoscaling, mas não substitui histórico no
  Prometheus;
- o laboratório usa `emptyDir` e uma réplica, portanto perde histórico ao reiniciar;
- não foi injetado OOM intencionalmente para não comprometer a demonstração.

## 2. Logs centralizados: problema real → código → solução

### Problema real

> As métricas mostram que `frontend-v1 → payments-api` retornou 500, mas não
> mostram o evento da aplicação que explica o erro.

### Código e solução

- Orders e Payments usam o JSON Console Formatter nativo do ASP.NET;
- middleware registra serviço, método, path, status, duração e request ID;
- query string, headers e body não são gravados, reduzindo risco de dados sensíveis;
- Alloy descobre Pods apenas em `meshcommerce` e lê seus logs pela API Kubernetes;
- Loki armazena os streams com labels de namespace, aplicação, Pod e container;
- o painel de logs do Grafana usa o mesmo intervalo temporal dos painéis de métricas.

### Por que corrigir

Logs centralizados sobrevivem à troca de Pod e permitem investigar o intervalo
em que o dashboard detectou o problema, sem depender de conhecer previamente o
nome da réplica.

### Riscos e trade-offs

- Loki usa filesystem e `emptyDir` somente para o laboratório;
- labels de alta cardinalidade, como request ID, não foram promovidas a labels;
- o request ID está no JSON da linha e pode ser filtrado no conteúdo;
- Alloy lê via API Kubernetes, simplificando o Kind, mas aumenta chamadas ao API
  Server em comparação com leitura direta dos arquivos do nó.

## 3. Alertas completos: problema real → código → solução

### Problema real

> Um único 5xx isolado não deveria notificar alguém; uma degradação sustentada
> deveria gerar uma investigação acionável.

### Código e solução

- SLO didático definido como 99% de requests bem-sucedidos;
- regra rápida: erro acima de 5% em janela de 5 minutos, com tráfego mínimo;
- regra sustentada: erro acima de 1% em janela de 15 minutos;
- `for` impede disparo por uma amostra isolada;
- Alertmanager agrupa por alerta, sinal e caminho de tráfego;
- webhook local demonstra `firing` e `resolved` sem depender de Slack ou PagerDuty;
- annotations carregam resumo, descrição e runbook do dashboard.

### Por que corrigir

Um alerta deve representar risco ao objetivo do serviço, e não apenas a
existência de uma ocorrência. Janelas, taxa e tráfego mínimo reduzem ruído e
transformam o painel em uma ação operacional.

### Riscos e trade-offs

- os limiares são didáticos e não substituem um SLO acordado com o negócio;
- o receptor local não é um sistema de notificação de produção;
- `group_wait`, `group_interval` e `repeat_interval` foram reduzidos para a
  demonstração;
- notificações reais exigem autenticação, secrets e canal operacional.

## O que ainda fica para módulos futuros

### 4. Traces distribuídos

Precisamos acompanhar uma única requisição pelo caminho completo:

```text
Frontend → Orders API → Payments API → PostgreSQL
```

O trace mostrará os spans, a duração de cada etapa e onde a requisição passou
mais tempo.

### 5. Correlação com tracing

O objetivo final é sair de um pico no Grafana para os logs e o trace da mesma
requisição usando `trace_id` e, quando necessário, `correlation_id`.

### 6. Endurecimento para produção

O laboratório permite acesso anônimo ao Grafana e usa armazenamento temporário.
Em produção ainda precisaríamos avaliar autenticação, autorização, TLS,
persistência, alta disponibilidade, retenção, limites de recursos, storage
durável e regras de alerta calibradas com o negócio.

## Roteiro de demonstração para John

### 1. Mostrar o estado saudável

Abrir:

- Frontend: `http://localhost:14177`;
- Grafana: `http://localhost:14300/d/meshcommerce-golden-signals`;
- Prometheus targets: `http://localhost:19090/targets`;
- Alertmanager: `http://localhost:19093`.

Executar **Healthy baseline** no frontend e explicar Traffic, Errors e Latency.
Em seguida, apontar para os painéis de CPU e memória e explicar que saturação é
uso relativo a request/limit, não somente um número absoluto.

### 2. Mostrar logs no mesmo intervalo

Após uma chamada de Orders ou Payments, abrir o painel **MeshCommerce logs in the
selected time range**. Mostrar uma linha JSON e destacar `Service`, `StatusCode`,
`DurationMs` e `RequestId`.

Falar:

> A métrica encontrou o intervalo; o Loki permite investigar os eventos das
> aplicações naquele mesmo intervalo sem procurar manualmente cada Pod.

### 3. Produzir e investigar um incidente

Executar **HTTP 5xx burst** ou enviar requests com o header de laboratório. Depois
mostrar a sequência:

```text
5xx no Istio
→ error ratio acima do SLO
→ Prometheus: pending/firing
→ Alertmanager: grupo ativo
→ receptor local: webhook recebido
→ Grafana/Loki: impacto e evidência da aplicação
```

O tracing não será demonstrado nesta aula; ele será implementado no módulo futuro
de OpenTelemetry.

## Resposta curta para entrevista

> Implementei observabilidade progressivamente em uma aplicação distribuída.
> Usei a telemetria do Istio como fonte, Prometheus para coleta, PromQL,
> recording rules e alertas, e Grafana provisionado como código para visualizar
> tráfego, erros, percentis de latência e saturação. Também usei JSON Console,
> Alloy e Loki para centralizar logs e Alertmanager para notificar violações de
> SLO. Métricas mostram impacto e localização aproximada; tracing/OpenTelemetry
> será o próximo passo para acompanhar a causa por span.
