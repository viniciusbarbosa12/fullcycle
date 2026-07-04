# Plano de Aprendizado Observabilidade, Elastic Stack, Prometheus e Grafana

Este plano foi criado para estudar Observabilidade de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como investigar sistemas em produção usando logs, métricas e traces. O objetivo é aprender a montar uma stack de observabilidade com Elastic Stack, Prometheus e Grafana, além de entender quando usar cada ferramenta e como elas ajudam no diagnóstico de problemas reais.

O objetivo é sair desse curso conseguindo observar aplicações, identificar gargalos, analisar logs, criar métricas, montar dashboards, configurar alertas e explicar a diferença entre monitoramento e observabilidade em cenários reais de produção.

---

# Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de configuração/comandos.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de produção, incidentes e troubleshooting.

O objetivo é priorizar aprendizado profundo, não velocidade.

---

# Grade do curso

## Introdução

- Introdução - 04:56
- O que realmente e observabilidade - 04:49
- Observabilidade vs Monitoramento - 05:27
- Os 3 pilares - 11:32

## Elastic Stack

- Repositório do projeto - sem duração
- Introdução ao Elastic Stack - 10:06
- Mais sobre Logstash - 04:30
- Sobre o Kibana - 04:03
- Beats e Elastic Stack - 10:38
- Iniciando com Elasticsearch e Kibana - 08:12
- Para usuários Linux - sem duração
- Visão geral do Kibana - 06:36
- Metricbeat - 20:50
- Uptime e Heartbeat - 09:50
- Configurando APM - 05:35
- APM na prática - 21:18
- Logs no APM - 09:57
- Configurando nginx - 10:49
- Configurando Filebeat - 18:05
- Fazendo deploy na Elastic Cloud - 04:53
- Configurando Filebeat na Elastic Cloud - 06:50
- Integrando serviços na Elastic Cloud - 12:15

## Prometheus

- Repositório do módulo - sem duração
- Prometheus - 01:44
- Conceitos iniciais - 08:38
- Dinâmica de funcionamento - 03:44
- Prometheus vs pull - 05:44
- Dinâmica dos exporters - 05:19
- Arquitetura do Prometheus - 12:27
- Trabalhando com dados - 06:37
- Tipos de métricas - 07:58
- PromQL - 05:04
- Tour no prometheus.io - 08:06
- Executando prometheus pela primeira vez - 06:22
- Visão geral do dashboard padrão - 09:26
- Utilizando cAdvisor - 10:22
- Apresentando o Grafana - 13:13
- Preparando ambiente Golang - 05:09
- Criando métrica do tipo Gauge - 09:55
- Trabalhando com Counter - 08:01
- Criando histogram - 11:36
- Ativando novo target no Prometheus - 04:39
- Criando dashboard usando Gauge - 03:51
- Adicionando painel Counter - 03:26
- Painel com Histogram - 09:59
- Configurando alerta no Grafana - 04:39
- Disparando alarmes - 10:18

---

# Fase 1: Introdução e base mental de observabilidade

## Aulas

- Introdução
- O que realmente e observabilidade
- Observabilidade vs Monitoramento
- Os 3 pilares

## Objetivo

Entender o que é observabilidade antes de sair instalando ferramenta.

Observabilidade não é só ter gráficos bonitos. É conseguir responder perguntas sobre o sistema sem precisar adivinhar. É saber investigar por que uma API ficou lenta, por que uma requisição falhou, por que um container reiniciou ou por que um cliente específico está tendo erro.

## Conceitos principais

- Observabilidade
- Monitoramento
- Logs
- Métricas
- Traces
- Telemetria
- Incidentes
- Troubleshooting
- Sinais do sistema
- Causa raiz
- Tempo de resposta
- Erros
- Saturação
- Disponibilidade

## Exercícios práticos

- Explicar com minhas palavras o que é observabilidade.
- Listar exemplos de logs, métricas e traces.
- Criar uma tabela comparando monitoramento e observabilidade.
- Descrever um incidente fictício em produção.
- Explicar quais dados eu precisaria para investigar esse incidente.
- Criar um checklist básico de investigação.

## Perguntas de reflexão

- Qual a diferença entre monitoramento e observabilidade?
- Por que logs sozinhos não resolvem tudo?
- Por que métricas sozinhas não resolvem tudo?
- O que traces mostram que logs e métricas não mostram tão bem?
- O que significa investigar causa raiz?
- Como observabilidade ajuda em sistemas distribuídos?
- Que tipo de pergunta eu deveria conseguir responder olhando minha stack de observabilidade?

## Checkpoint

Responder com minhas palavras:

> Qual problema real a observabilidade resolve em uma aplicação rodando em produção?

---

# Fase 2: Elastic Stack

## Aulas

- Repositório do projeto
- Introdução ao Elastic Stack
- Mais sobre Logstash
- Sobre o Kibana
- Beats e Elastic Stack
- Iniciando com Elasticsearch e Kibana
- Para usuários Linux
- Visão geral do Kibana

## Objetivo

Entender o papel da Elastic Stack na coleta, armazenamento, busca e visualização de dados de observabilidade.

Aqui o foco é entender a função de cada peça: Elasticsearch armazena e indexa dados, Logstash processa e transforma, Beats coleta dados de várias fontes e Kibana permite consultar e visualizar.

## Conceitos principais

- Elastic Stack
- Elasticsearch
- Logstash
- Kibana
- Beats
- Indexação
- Documentos
- Índices
- Busca
- Dashboards
- Ingestão de dados
- Pipeline de logs
- Visualização

## Exercícios práticos

- Clonar ou criar o projeto base.
- Subir Elasticsearch e Kibana localmente.
- Acessar o Kibana.
- Criar um README explicando cada componente da stack.
- Identificar o fluxo de dados: origem -> coleta -> processamento -> armazenamento -> visualização.
- Criar um desenho simples da arquitetura.

## Perguntas de reflexão

- Qual o papel do Elasticsearch?
- Qual o papel do Kibana?
- Qual o papel do Logstash?
- O que são Beats?
- Por que logs precisam ser indexados?
- O que eu ganho ao centralizar logs?
- Qual problema aparece quando logs ficam espalhados em vários servidores?

## Checkpoint

Ter Elasticsearch e Kibana rodando e conseguir explicar o papel de cada componente da Elastic Stack.

---

# Fase 3: Métricas e disponibilidade com Elastic Stack

## Aulas

- Metricbeat
- Uptime e Heartbeat

## Objetivo

Aprender a coletar métricas de infraestrutura e verificar disponibilidade de serviços usando componentes da Elastic Stack.

## Conceitos principais

- Metricbeat
- Heartbeat
- Uptime
- Métricas de sistema
- CPU
- Memória
- Disco
- Rede
- Health check
- Disponibilidade
- Monitoramento ativo
- Dashboards prontos

## Exercícios práticos

- Configurar Metricbeat.
- Coletar métricas da máquina/container.
- Visualizar métricas no Kibana.
- Configurar Heartbeat para verificar uma aplicação.
- Simular serviço fora do ar.
- Observar o impacto no painel de uptime.
- Criar um pequeno relatório com as métricas observadas.

## Perguntas de reflexão

- O que o Metricbeat coleta?
- O que o Heartbeat verifica?
- Qual a diferença entre saber que a máquina está viva e saber que a aplicação está respondendo?
- Por que uptime é importante?
- Que métricas indicam possível saturação?
- Que alerta faria sentido para CPU, memória e disponibilidade?

## Checkpoint

Ter métricas de infraestrutura e monitoramento de uptime visíveis no Kibana.

---

# Fase 4: APM, logs e Elastic Cloud

## Aulas

- Configurando APM
- APM na prática
- Logs no APM
- Configurando nginx
- Configurando Filebeat
- Fazendo deploy na Elastic Cloud
- Configurando Filebeat na Elastic Cloud
- Integrando serviços na Elastic Cloud

## Objetivo

Aprender a observar uma aplicação de forma mais completa: performance, transações, logs, erros e integração com Elastic Cloud.

Aqui a stack começa a parecer produção de verdade. Em vez de só olhar logs soltos, você começa a conectar requisições, tempos, erros e logs relacionados.

## Conceitos principais

- APM
- Transaction
- Span
- Trace
- Latência
- Erro de aplicação
- Logs correlacionados
- Nginx logs
- Filebeat
- Elastic Cloud
- Serviço instrumentado
- Performance de endpoint
- Investigação de erro

## Exercícios práticos

- Configurar APM.
- Instrumentar uma aplicação.
- Gerar requisições.
- Observar transações no Kibana.
- Simular erro na aplicação.
- Ver logs associados ao erro.
- Configurar Nginx.
- Configurar Filebeat para coletar logs.
- Enviar dados para Elastic Cloud.
- Criar um guia de investigação usando APM + logs.

## Perguntas de reflexão

- O que APM mostra que logs comuns não mostram?
- O que é uma transaction?
- O que é um span?
- Como APM ajuda a encontrar endpoint lento?
- Como logs no APM ajudam no debug?
- Por que coletar logs do Nginx?
- Qual a diferença entre rodar local e usar Elastic Cloud?
- Que dados sensíveis eu não deveria enviar para logs?

## Checkpoint

Conseguir investigar uma requisição lenta ou com erro usando APM e logs correlacionados.

---

# Fase 5: Fundamentos do Prometheus

## Aulas

- Repositório do módulo
- Prometheus
- Conceitos iniciais
- Dinâmica de funcionamento
- Prometheus vs pull
- Dinâmica dos exporters
- Arquitetura do Prometheus
- Trabalhando com dados
- Tipos de métricas
- PromQL
- Tour no prometheus.io
- Executando prometheus pela primeira vez
- Visão geral do dashboard padrão

## Objetivo

Entender como o Prometheus coleta, armazena e consulta métricas.

Prometheus trabalha muito bem com métricas temporais. Ele coleta dados de targets via pull, armazena séries temporais e permite consultar usando PromQL.

## Conceitos principais

- Prometheus
- Métricas
- Time series
- Pull model
- Target
- Scrape
- Exporter
- Labels
- PromQL
- Gauge
- Counter
- Histogram
- Summary
- Service discovery
- Retenção de dados
- Dashboard padrão

## Exercícios práticos

- Subir Prometheus localmente.
- Acessar dashboard padrão.
- Identificar targets.
- Fazer uma query simples com PromQL.
- Entender uma métrica com labels.
- Comparar Gauge, Counter e Histogram.
- Criar um README com conceitos principais.
- Explicar o modelo pull com minhas palavras.

## Perguntas de reflexão

- O que é uma métrica?
- O que é uma time series?
- O que significa scrape?
- O que é target?
- Por que Prometheus usa modelo pull?
- O que são exporters?
- Qual a função das labels?
- Quando usar Gauge?
- Quando usar Counter?
- Quando usar Histogram?

## Checkpoint

Ter Prometheus rodando, coletando pelo menos um target e conseguir consultar métricas usando PromQL básico.

---

# Fase 6: Exporters, containers e Grafana

## Aulas

- Utilizando cAdvisor
- Apresentando o Grafana

## Objetivo

Aprender a coletar métricas de containers e visualizar dados de forma mais amigável com Grafana.

Prometheus coleta e armazena. Grafana transforma isso em painel útil para humanos cansados tentando entender por que a produção virou uma frigideira.

## Conceitos principais

- cAdvisor
- Métricas de containers
- Grafana
- Data source
- Dashboard
- Painel
- Query
- Visualização
- CPU por container
- Memória por container
- Uso de rede
- Uso de disco

## Exercícios práticos

- Subir cAdvisor.
- Configurar Prometheus para coletar métricas do cAdvisor.
- Verificar se o target está ativo.
- Subir Grafana.
- Configurar Prometheus como data source.
- Criar um dashboard simples.
- Criar painéis de CPU e memória.
- Documentar as queries usadas.

## Perguntas de reflexão

- O que o cAdvisor coleta?
- Por que métricas de container são importantes?
- Qual a diferença entre Prometheus e Grafana?
- Por que Grafana não substitui Prometheus?
- O que faz um dashboard ser útil?
- Que painel eu criaria para uma API em produção?

## Checkpoint

Ter um dashboard no Grafana exibindo métricas coletadas pelo Prometheus.

---

# Fase 7: Métricas customizadas em Golang

## Aulas

- Preparando ambiente Golang
- Criando métrica do tipo Gauge
- Trabalhando com Counter
- Criando histogram
- Ativando novo target no Prometheus

## Objetivo

Aprender a criar métricas customizadas dentro da aplicação.

Aqui o jogo muda. Em vez de olhar só CPU e memória, você começa a medir coisas do negócio e do comportamento da aplicação: quantidade de pedidos, tempo de resposta, usuários ativos, falhas por tipo, filas, retries e qualquer coisa que ajude a responder perguntas reais.

## Conceitos principais

- Instrumentação
- Métrica customizada
- Prometheus client
- Endpoint `/metrics`
- Gauge
- Counter
- Histogram
- Buckets
- Labels
- Target customizado
- Métricas técnicas
- Métricas de negócio

## Exercícios práticos

- Preparar uma aplicação Go simples.
- Criar endpoint `/metrics`.
- Criar uma métrica Gauge.
- Criar uma métrica Counter.
- Criar uma métrica Histogram.
- Adicionar labels com cuidado.
- Configurar Prometheus para coletar a aplicação.
- Fazer requisições e observar as métricas mudando.
- Documentar o que cada métrica mede.

## Perguntas de reflexão

- Por que criar métricas customizadas?
- Quando usar Gauge?
- Quando usar Counter?
- Quando usar Histogram?
- O que são buckets?
- Qual o risco de criar labels demais?
- Qual a diferença entre métrica técnica e métrica de negócio?
- Que métricas eu criaria em uma API .NET real?

## Checkpoint

Ter uma aplicação expondo métricas customizadas e Prometheus coletando esses dados.

---

# Fase 8: Dashboards e alertas no Grafana

## Aulas

- Criando dashboard usando Gauge
- Adicionando painel Counter
- Painel com Histogram
- Configurando alerta no Grafana
- Disparando alarmes

## Objetivo

Transformar métricas em painéis e alertas úteis.

Dashboard bonito que ninguém usa é decoração digital. O foco aqui é criar painéis que ajudem a responder perguntas e alertas que avisem problemas reais sem virar sirene de padaria.

## Conceitos principais

- Dashboard
- Painel
- Query PromQL
- Gauge panel
- Counter panel
- Histogram panel
- Alert rule
- Threshold
- Notification
- Alarme
- Falso positivo
- Severidade
- Runbook
- SLO básico

## Exercícios práticos

- Criar dashboard para Gauge.
- Criar painel para Counter.
- Criar painel para Histogram.
- Criar alerta baseado em métrica.
- Disparar alerta de propósito.
- Ajustar threshold.
- Criar um mini runbook dizendo o que fazer quando o alerta disparar.
- Documentar quais alertas fazem sentido e quais seriam ruído.

## Perguntas de reflexão

- O que torna um dashboard útil?
- Quando um alerta é realmente necessário?
- O que é falso positivo?
- Qual o risco de alerta demais?
- Por que todo alerta deveria ter ação clara?
- Como eu escolheria threshold?
- Qual alerta eu criaria para latência alta?
- Qual alerta eu criaria para erro 5xx?

## Checkpoint

Ter dashboard e alerta funcionando, com um runbook simples explicando como reagir.

---

# Fase 9: Projeto final

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente local de observabilidade contendo:

- Uma aplicação instrumentada
- Logs estruturados
- Nginx gerando logs
- Filebeat coletando logs
- Elasticsearch armazenando logs
- Kibana visualizando logs
- APM configurado
- Prometheus coletando métricas
- cAdvisor coletando métricas de containers
- Grafana com dashboards
- Métricas customizadas Gauge, Counter e Histogram
- Alertas configurados no Grafana
- Simulação de incidente
- Guia de troubleshooting
- README explicando toda a arquitetura

## Critérios de sucesso

O projeto final precisa demonstrar:

- Entendimento de observabilidade
- Diferença clara entre logs, métricas e traces
- Elastic Stack funcionando
- Logs centralizados
- APM funcionando
- Prometheus coletando métricas
- Grafana exibindo dashboards
- Métricas customizadas implementadas
- Alertas disparando
- Capacidade de investigar erro
- Capacidade de investigar lentidão
- README claro
- Explicação dos trade-offs entre Elastic Stack, Prometheus e Grafana

---

# Fluxo de estudo por aula

Quando eu iniciar uma aula, vou mandar:

> Comecei a aula: Nome da aula

A resposta esperada da mentoria deve conter:

1. Conceito principal da aula.
2. Explicação simples.
3. Exemplo real de projeto.
4. Perguntas para eu responder.
5. Exercício prático.
6. Critério de sucesso.

Quando eu terminar um exercício, vou mandar:

> Terminei, olha minha configuração/código/comandos

A resposta esperada da revisão deve conter:

1. O que está certo.
2. O que pode melhorar.
3. Riscos.
4. Boas práticas.
5. O que estudar antes de avançar.
6. Se posso avançar ou se preciso reforçar.

---

# Ritmo recomendado

O curso tem cerca de 6h07 de videoaulas, mas o foco é praticar bastante.

## Sugestão de ritmo em 14 dias

### Dia 1

- Introdução
- O que é observabilidade
- Observabilidade vs monitoramento
- Os 3 pilares

### Dia 2

- Elastic Stack
- Elasticsearch
- Logstash
- Kibana
- Beats

### Dia 3

- Elasticsearch e Kibana local
- Visão geral do Kibana
- Primeiro dashboard simples

### Dia 4

- Metricbeat
- Uptime
- Heartbeat

### Dia 5

- APM
- APM na prática
- Logs no APM

### Dia 6

- Nginx
- Filebeat
- Logs centralizados

### Dia 7

- Elastic Cloud
- Filebeat na Elastic Cloud
- Integração de serviços

### Dia 8

- Prometheus
- Modelo pull
- Exporters
- Arquitetura

### Dia 9

- Tipos de métricas
- PromQL
- Prometheus local

### Dia 10

- cAdvisor
- Grafana
- Primeiro dashboard

### Dia 11

- Ambiente Golang
- Gauge
- Counter

### Dia 12

- Histogram
- Novo target no Prometheus
- Métricas customizadas

### Dia 13

- Dashboards no Grafana
- Alertas
- Disparo de alarmes

### Dia 14

- Projeto final
- Simulação de incidente
- README
- Revisão geral

---

# Perguntas clássicas de entrevista e trabalho real

Ao final do plano, eu devo conseguir responder:

1. O que é observabilidade?
2. Qual a diferença entre observabilidade e monitoramento?
3. Quais são os 3 pilares da observabilidade?
4. O que são logs?
5. O que são métricas?
6. O que são traces?
7. Quando logs são mais úteis?
8. Quando métricas são mais úteis?
9. Quando traces são mais úteis?
10. O que é Elastic Stack?
11. Qual o papel do Elasticsearch?
12. Qual o papel do Kibana?
13. Qual o papel do Logstash?
14. O que são Beats?
15. O que é Metricbeat?
16. O que é Heartbeat?
17. O que é APM?
18. O que é Filebeat?
19. O que é Prometheus?
20. Por que Prometheus usa modelo pull?
21. O que é um target?
22. O que é scrape?
23. O que é exporter?
24. O que são labels no Prometheus?
25. O que é PromQL?
26. Qual a diferença entre Gauge, Counter e Histogram?
27. O que é cAdvisor?
28. O que é Grafana?
29. Qual a diferença entre Prometheus e Grafana?
30. Como criar um alerta útil?
31. O que é falso positivo em alerta?
32. Como investigar latência alta?
33. Como investigar erro 5xx?
34. Como investigar consumo alto de CPU?
35. Como logs, métricas e traces se complementam?

---

# Regras da mentoria

Durante todo o curso, a prioridade é meu aprendizado.

Não entregue respostas completas de primeira.

Antes de responder uma dúvida, tente me fazer pensar.

Quando eu errar, corrija diretamente e explique o motivo.

Quando eu acertar, diga o que está bom e como posso melhorar.

Sempre que possível, conecte o assunto com situações reais de trabalho, como:

- API lenta em produção
- Erro 500 intermitente
- Container reiniciando
- CPU subindo sem motivo aparente
- Memória aumentando aos poucos
- Logs espalhados em várias máquinas
- Falta de correlation id
- Dashboard bonito mas inútil
- Alerta disparando sem ação clara
- Falso positivo cansando o time
- Prometheus sem target
- Métrica com labels demais
- Log com dado sensível
- Trace mostrando gargalo entre serviços
- APM revelando endpoint problemático

---

# Primeira missão

Assistir às aulas:

> Introdução
> O que realmente e observabilidade
> Observabilidade vs Monitoramento
> Os 3 pilares

Depois responder com minhas palavras:

> Qual a diferença prática entre monitorar um sistema e tornar um sistema observável?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
