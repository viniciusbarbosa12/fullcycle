# Plano de Aprendizado OpenTelemetry

Este plano foi criado para estudar OpenTelemetry de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como padronizar telemetria em aplicações modernas: traces, métricas, logs, collectors, exporters, instrumentação manual, instrumentação automática e integração com ferramentas como Zipkin.

O objetivo é sair desse curso conseguindo explicar o que é OpenTelemetry, por que ele existe, como ele se conecta com observabilidade e como instrumentar uma aplicação para investigar problemas reais em produção.

---

# Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de configuração/código.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de produção, microservices e troubleshooting.

O objetivo é priorizar aprendizado profundo, não velocidade.

---

# Grade do curso

## OpenTelemetry

- Introdução ao OTEL - 02:24
- Código-fonte - sem duração
- Agenda - 02:02
- Revisitando observabilidade - 06:52
- Centralização e customização de telemetria - 10:04
- OpenTelemetry Seja bem vindo - 03:59
- Site do OpenTelemetry - sem duração
- O que é OpenTelemetry - 04:35
- Componentes principais do OTEL - 09:24
- Navegando pelo opentelemetry.io - 08:25
- Tipos de Collector - 05:59
- Instrumentação manual vs automática - 08:48
- Visitando nosso código em Go - 10:51
- Tracing na pratica com Zipkin - 13:48
- Conheça o Projeto Zipkin - sem duração
- Principais repositórios - 05:58
- Collector-Contrib - sem duração

---

# Fase 1: Introdução ao OpenTelemetry

## Aulas

- Introdução ao OTEL
- Agenda
- Revisitando observabilidade

## Objetivo

Revisar a base de observabilidade e entender onde o OpenTelemetry entra nessa história.

OpenTelemetry não é uma ferramenta de dashboard. Ele é um padrão para gerar, coletar e exportar telemetria. Ele ajuda aplicações diferentes, escritas em linguagens diferentes, a falarem uma língua comum quando o assunto é trace, métrica e log.

## Conceitos principais

- Observabilidade
- Telemetria
- Logs
- Métricas
- Traces
- OpenTelemetry
- Instrumentação
- Coleta
- Exportação
- Padronização
- Sistemas distribuídos
- Diagnóstico em produção

## Exercícios práticos

- Explicar com minhas palavras o que é observabilidade.
- Explicar com minhas palavras o que é telemetria.
- Criar uma tabela comparando logs, métricas e traces.
- Descrever um problema real que seria difícil investigar sem trace distribuído.
- Criar um desenho simples de uma requisição passando por 3 serviços.

## Perguntas de reflexão

- Qual problema o OpenTelemetry tenta resolver?
- Por que logs, métricas e traces precisam conversar entre si?
- O que fica difícil quando cada serviço gera telemetria de um jeito diferente?
- OpenTelemetry substitui Prometheus, Grafana, Elastic ou Zipkin?
- Por que padronização importa em sistemas distribuídos?

## Checkpoint

Responder com minhas palavras:

> Qual o papel do OpenTelemetry dentro de uma estratégia de observabilidade?

---

# Fase 2: Centralização e customização de telemetria

## Aula

- Centralização e customização de telemetria

## Objetivo

Entender por que telemetria precisa ser centralizada, normalizada e customizada conforme o contexto da aplicação.

Não basta gerar dado. Tem que gerar dado útil. Uma aplicação pode produzir milhares de spans, logs e métricas, mas se isso não estiver bem organizado, vira fumaça digital. Bonita, mas inútil.

## Conceitos principais

- Centralização de telemetria
- Customização
- Atributos
- Metadata
- Resource attributes
- Service name
- Environment
- Trace ID
- Span ID
- Correlation
- Context propagation
- Exporters
- Backends de observabilidade

## Exercícios práticos

- Listar quais dados de contexto uma aplicação deveria enviar.
- Criar exemplos de atributos úteis para uma API.
- Criar exemplos de atributos ruins ou sensíveis.
- Explicar por que `service.name` é importante.
- Desenhar um fluxo onde dados saem da aplicação, passam por um collector e chegam em um backend.

## Perguntas de reflexão

- Que informações ajudam a identificar uma requisição?
- Por que ambiente, versão e nome do serviço são importantes?
- Que tipo de dado eu não deveria mandar em telemetria?
- O que é correlação entre logs, métricas e traces?
- Por que centralizar telemetria ajuda no troubleshooting?

## Checkpoint

Criar uma lista de atributos mínimos que uma aplicação real deveria enviar junto da telemetria.

---

# Fase 3: O que é OpenTelemetry

## Aulas

- OpenTelemetry Seja bem vindo
- Site do OpenTelemetry
- O que é OpenTelemetry
- Componentes principais do OTEL
- Navegando pelo opentelemetry.io

## Objetivo

Entender o ecossistema do OpenTelemetry e seus principais componentes.

Aqui o foco é criar o mapa mental. Antes de instrumentar código, preciso entender SDK, API, Collector, exporters, propagators e backends.

## Conceitos principais

- OpenTelemetry API
- OpenTelemetry SDK
- Collector
- Exporter
- Receiver
- Processor
- Pipeline
- Propagation
- Context
- Trace
- Span
- Metric
- Log
- Backend
- Vendor-neutral

## Exercícios práticos

- Navegar pela documentação oficial.
- Listar os principais componentes do OTEL.
- Explicar a diferença entre API e SDK.
- Explicar o papel do Collector.
- Explicar o que é um exporter.
- Criar um desenho: aplicação -> SDK -> Collector -> backend.
- Criar um glossário próprio com os termos principais.

## Perguntas de reflexão

- O que significa OpenTelemetry ser vendor-neutral?
- Qual a diferença entre API e SDK?
- O que o Collector faz?
- Por que usar Collector em vez de enviar direto para uma ferramenta?
- O que é um exporter?
- O que é um receiver?
- O que é um processor?
- O que acontece se eu trocar Zipkin por outro backend?

## Checkpoint

Responder com minhas palavras:

> Como os dados saem da aplicação instrumentada e chegam em uma ferramenta como Zipkin, Jaeger, Prometheus ou Elastic?

---

# Fase 4: Collectors

## Aula

- Tipos de Collector

## Objetivo

Entender os tipos de Collector e quando usar cada modelo.

O Collector é como uma estação de triagem da telemetria. Ele recebe dados, pode processar, filtrar, enriquecer e mandar para um ou mais destinos.

## Conceitos principais

- OpenTelemetry Collector
- Agent
- Gateway
- Receiver
- Processor
- Exporter
- Pipeline
- OTLP
- Batch processor
- Filtering
- Enrichment
- Fan-out
- Observability backend

## Exercícios práticos

- Explicar a diferença entre Collector como agent e como gateway.
- Criar um exemplo de arquitetura com Collector por host/pod.
- Criar um exemplo de arquitetura com Collector centralizado.
- Listar vantagens e desvantagens de cada abordagem.
- Desenhar um pipeline com receiver, processor e exporter.

## Perguntas de reflexão

- Quando faz sentido usar Collector como agent?
- Quando faz sentido usar Collector como gateway?
- Qual o risco de enviar telemetria direto da aplicação para o backend?
- Por que usar batch processor?
- Como o Collector ajuda a trocar de ferramenta de observabilidade?
- Como o Collector ajuda a evitar acoplamento com fornecedor?

## Checkpoint

Conseguir explicar quando usar Collector local, Collector centralizado ou os dois juntos.

---

# Fase 5: Instrumentação manual vs automática

## Aula

- Instrumentação manual vs automática

## Objetivo

Entender a diferença entre deixar a ferramenta instrumentar automaticamente e escrever instrumentação manual para capturar informações específicas do negócio.

Instrumentação automática é ótima para começar. Mas em muitos casos ela não sabe o que importa para o seu negócio. Aí entra a instrumentação manual.

## Conceitos principais

- Instrumentação automática
- Instrumentação manual
- Auto-instrumentation
- Manual spans
- Custom attributes
- Business metrics
- Context propagation
- Bibliotecas instrumentadas
- Overhead
- Granularidade
- Ruído

## Exercícios práticos

- Listar exemplos de telemetria que podem ser capturados automaticamente.
- Listar exemplos que exigem instrumentação manual.
- Criar um cenário com uma API de pedidos.
- Definir quais spans seriam automáticos.
- Definir quais spans manuais eu criaria.
- Definir atributos úteis para esses spans.

## Perguntas de reflexão

- Quando instrumentação automática é suficiente?
- Quando instrumentação manual é necessária?
- Qual o risco de instrumentar coisa demais?
- Qual o risco de instrumentar coisa de menos?
- Que informação técnica vale colocar em spans?
- Que informação de negócio vale colocar em spans?
- O que eu jamais deveria colocar como atributo?

## Checkpoint

Criar uma proposta de instrumentação para uma API real, separando o que seria automático e o que seria manual.

---

# Fase 6: Código em Go e tracing com Zipkin

## Aulas

- Visitando nosso código em Go
- Tracing na pratica com Zipkin
- Conheça o Projeto Zipkin

## Objetivo

Ver OpenTelemetry funcionando na prática com código e visualizar traces no Zipkin.

Mesmo que o curso use Go, a ideia é entender o conceito. Depois isso se transfere para .NET, Node, Java, Python ou qualquer stack moderna.

## Conceitos principais

- Código instrumentado
- Trace
- Span
- Parent span
- Child span
- Trace ID
- Span ID
- Propagação de contexto
- Zipkin
- Visualização de traces
- Latência por etapa
- Caminho da requisição

## Exercícios práticos

- Rodar o projeto de exemplo.
- Identificar onde a instrumentação acontece.
- Gerar requisições para a aplicação.
- Abrir o Zipkin.
- Visualizar traces.
- Identificar spans.
- Identificar duração de cada etapa.
- Simular uma operação lenta.
- Observar a mudança no trace.
- Criar um relatório simples explicando o que o trace mostrou.

## Perguntas de reflexão

- O que é um trace?
- O que é um span?
- Qual a diferença entre trace e span?
- Como o Zipkin ajuda a investigar lentidão?
- O que é trace ID?
- Por que propagação de contexto é essencial?
- O que acontece se um serviço não propaga contexto?
- Como eu identificaria qual serviço deixou a requisição lenta?

## Checkpoint

Conseguir gerar uma requisição, visualizar o trace no Zipkin e explicar o caminho completo da requisição.

---

# Fase 7: Repositórios principais e Collector Contrib

## Aulas

- Principais repositórios
- Collector-Contrib

## Objetivo

Entender onde ficam os projetos principais do ecossistema OpenTelemetry e como explorar receivers, processors e exporters disponíveis.

## Conceitos principais

- OpenTelemetry repositories
- Collector Contrib
- Exporters
- Receivers
- Processors
- Extensions
- Contribuições da comunidade
- Integrações
- Vendor exporters
- Backends diferentes

## Exercícios práticos

- Explorar os repositórios principais.
- Listar 3 receivers interessantes.
- Listar 3 exporters interessantes.
- Listar 2 processors úteis.
- Escolher um exporter para um cenário fictício.
- Explicar como eu usaria Collector Contrib em um projeto real.

## Perguntas de reflexão

- Por que existe Collector Contrib?
- Qual a diferença entre componentes core e contrib?
- Quando eu usaria um exporter específico?
- Como eu evitaria lock-in em uma ferramenta?
- Que cuidado preciso ter ao usar componentes da comunidade?
- Como escolher receivers/processors/exporters para um projeto?

## Checkpoint

Criar uma pequena lista de componentes OTEL que eu usaria em um ambiente real e justificar cada escolha.

---

# Fase 8: Projeto final

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente local com OpenTelemetry contendo:

- Uma aplicação instrumentada
- OpenTelemetry SDK configurado
- Instrumentação automática, se disponível
- Instrumentação manual em pelo menos uma operação importante
- Trace ID visível
- Spans com atributos úteis
- OpenTelemetry Collector configurado
- Receiver OTLP
- Processor batch
- Exporter para Zipkin
- Zipkin rodando localmente
- Requisições gerando traces
- Simulação de latência
- README explicando a arquitetura
- Guia de troubleshooting usando traces

## Critérios de sucesso

O projeto final precisa demonstrar:

- Entendimento do papel do OpenTelemetry
- Diferença entre logs, métricas e traces
- Diferença entre instrumentação manual e automática
- Collector funcionando
- Pipeline de telemetria configurada
- Traces chegando no Zipkin
- Spans com nomes claros
- Atributos úteis e seguros
- Capacidade de investigar uma requisição lenta
- README claro
- Capacidade de explicar como trocaria Zipkin por outro backend

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

O curso tem cerca de 1h33 de videoaulas, mas o foco é praticar bastante.

## Sugestão de ritmo em 5 dias

### Dia 1

- Introdução ao OTEL
- Agenda
- Revisitando observabilidade
- Centralização e customização de telemetria

### Dia 2

- O que é OpenTelemetry
- Componentes principais do OTEL
- Navegação pela documentação

### Dia 3

- Tipos de Collector
- Instrumentação manual vs automática
- Desenho de arquitetura

### Dia 4

- Código em Go
- Tracing com Zipkin
- Visualização de traces

### Dia 5

- Principais repositórios
- Collector-Contrib
- Projeto final
- README final

---

# Perguntas clássicas de entrevista e trabalho real

Ao final do plano, eu devo conseguir responder:

1. O que é OpenTelemetry?
2. Qual problema OpenTelemetry resolve?
3. OpenTelemetry substitui Prometheus, Grafana, Elastic ou Zipkin?
4. O que é telemetria?
5. Qual a diferença entre log, métrica e trace?
6. O que é trace?
7. O que é span?
8. Qual a diferença entre trace e span?
9. O que é trace ID?
10. O que é span ID?
11. O que é context propagation?
12. O que acontece se o contexto não for propagado?
13. O que é OpenTelemetry API?
14. O que é OpenTelemetry SDK?
15. O que é OpenTelemetry Collector?
16. O que é receiver?
17. O que é processor?
18. O que é exporter?
19. O que é OTLP?
20. Qual a diferença entre Collector agent e Collector gateway?
21. Qual a diferença entre instrumentação manual e automática?
22. Quando usar instrumentação manual?
23. Quando instrumentação automática é suficiente?
24. O que é Zipkin?
25. Como um trace ajuda a investigar latência?
26. Como evitar lock-in com ferramentas de observabilidade?
27. Quais atributos eu deveria adicionar em spans?
28. Quais dados eu não deveria mandar para telemetria?
29. O que é Collector Contrib?
30. Como eu usaria OpenTelemetry em uma API .NET real?

---

# Regras da mentoria

Durante todo o curso, a prioridade é meu aprendizado.

Não entregue respostas completas de primeira.

Antes de responder uma dúvida, tente me fazer pensar.

Quando eu errar, corrija diretamente e explique o motivo.

Quando eu acertar, diga o que está bom e como posso melhorar.

Sempre que possível, conecte o assunto com situações reais de trabalho, como:

- API lenta em produção
- Microservices sem correlação entre requests
- Logs sem trace ID
- Trace quebrado por falta de propagação de contexto
- Troca de ferramenta de observabilidade
- Vendor lock-in
- Instrumentação automática insuficiente
- Instrumentação manual exagerada
- Span com nome ruim
- Atributo sensível enviado por engano
- Collector mal configurado
- Exporter apontando para backend errado
- Zipkin mostrando gargalo entre serviços
- API .NET instrumentada com OpenTelemetry

---

# Primeira missão

Assistir às aulas:

> Introdução ao OTEL
> Agenda
> Revisitando observabilidade
> Centralização e customização de telemetria

Depois responder com minhas palavras:

> Por que OpenTelemetry é útil quando uma empresa tem várias aplicações, várias linguagens e várias ferramentas de observabilidade?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
