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
> o caminho afetado. O próximo passo é usar logs e traces para descobrir a causa
> exata e acompanhar a requisição completa.

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
```

## O que já está pronto para apresentar

- geração visual de baseline, lentidão e erros no frontend;
- telemetria automática do Istio/Envoy;
- descoberta e scrape dos workloads pelo Prometheus;
- recording rules de tráfego e p95;
- regra de alerta para erros 5xx;
- Grafana e Data Source provisionados como código;
- dashboard versionado com tráfego, erros e latência;
- links para targets e alertas do Prometheus;
- configuração declarativa no Kubernetes.

## O que ainda falta no módulo

### 1. Saturação

Os quatro Golden Signals clássicos são:

```text
Traffic, Errors, Latency e Saturation
```

O dashboard cobre os três primeiros. Ainda precisamos visualizar saturação,
como CPU, memória, conexões ou filas próximas do limite. Portanto, apesar do
nome **Golden Signals**, o dashboard ainda não cobre os quatro sinais.

### 2. Logs centralizados

Hoje ainda precisamos consultar logs por pod. O próximo avanço é enviá-los para
uma fonte central, permitindo busca por serviço, status, horário e identificador
de correlação mesmo depois que um pod reinicia.

### 3. Traces distribuídos

Precisamos acompanhar uma única requisição pelo caminho completo:

```text
Frontend → Orders API → Payments API → PostgreSQL
```

O trace mostrará os spans, a duração de cada etapa e onde a requisição passou
mais tempo.

### 4. Correlação dos três sinais

O objetivo final é sair de um pico no Grafana para os logs e o trace da mesma
requisição usando `trace_id` e, quando necessário, `correlation_id`.

### 5. Notificações

Adicionar Alertmanager e um canal de destino para demonstrar o ciclo completo:

```text
condição → pending → firing → notificação → investigação
```

### 6. Endurecimento para produção

O laboratório permite acesso anônimo ao Grafana e usa armazenamento temporário.
Em produção precisaríamos avaliar autenticação, autorização, TLS, persistência,
alta disponibilidade, retenção, limites de recursos e regras de alerta menos
sensíveis.

## Resposta curta para entrevista

> Implementei observabilidade progressivamente em uma aplicação distribuída.
> Usei a telemetria do Istio como fonte, Prometheus para coleta, PromQL,
> recording rules e alertas, e Grafana provisionado como código para visualizar
> tráfego, erros e percentis de latência. Também construí cenários controlados
> no frontend para provar o comportamento saudável, a cauda de latência e os
> erros por caminho. Métricas mostram impacto e localização aproximada; logs e
> traces serão usados para chegar à causa exata.
