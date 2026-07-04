# Plano de Aprendizado OpenTelemetry

Este plano foi criado para estudar OpenTelemetry de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como padronizar telemetria em aplicações modernas: traces, métricas, logs, collectors, exporters, instrumentação manual, instrumentação automática e integração com ferramentas como Zipkin.

O objetivo é sair desse curso conseguindo explicar o que é OpenTelemetry, por que ele existe, como ele se conecta com observabilidade e como instrumentar uma aplicação para investigar problemas reais em produção.

## Como vamos estudar

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

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Grade do curso

### OpenTelemetry

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

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Introdução ao OpenTelemetry](modules/01-fase-01-introducao-ao-opentelemetry.md)
2. [Centralização e customização de telemetria](modules/02-fase-02-centralizacao-e-customizacao-de-telemetria.md)
3. [O que é OpenTelemetry](modules/03-fase-03-o-que-e-opentelemetry.md)
4. [Collectors](modules/04-fase-04-collectors.md)
5. [Instrumentação manual vs automática](modules/05-fase-05-instrumentacao-manual-vs-automatica.md)
6. [Código em Go e tracing com Zipkin](modules/06-fase-06-codigo-em-go-e-tracing-com-zipkin.md)
7. [Repositórios principais e Collector Contrib](modules/07-fase-07-repositorios-principais-e-collector-contrib.md)
8. [Projeto final](modules/08-fase-08-projeto-final.md)
9. [Perguntas classicas de entrevista](modules/09-perguntas-entrevista.md)

## Ritmo recomendado

O curso tem cerca de 1h33 de videoaulas, mas o foco é praticar bastante.

### Sugestão de ritmo em 5 dias

#### Dia 1

- Introdução ao OTEL
- Agenda
- Revisitando observabilidade
- Centralização e customização de telemetria

#### Dia 2

- O que é OpenTelemetry
- Componentes principais do OTEL
- Navegação pela documentação

#### Dia 3

- Tipos de Collector
- Instrumentação manual vs automática
- Desenho de arquitetura

#### Dia 4

- Código em Go
- Tracing com Zipkin
- Visualização de traces

#### Dia 5

- Principais repositórios
- Collector-Contrib
- Projeto final
- README final

## Primeira missao

Assistir às aulas:

> Introdução ao OTEL
> Agenda
> Revisitando observabilidade
> Centralização e customização de telemetria

Depois responder com minhas palavras:

> Por que OpenTelemetry é útil quando uma empresa tem várias aplicações, várias linguagens e várias ferramentas de observabilidade?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
