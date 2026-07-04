# Plano de Aprendizado API Gateway com Kong

Este plano foi criado para estudar API Gateway com Kong de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender por que API Gateway existe, quais problemas ele resolve em arquiteturas modernas e como usar Kong para expor APIs, controlar rotas, aplicar plugins, autenticação, rate limiting, correlation id e observabilidade.

O objetivo é sair desse curso conseguindo explicar e implementar um API Gateway em um cenário real, entendendo quando usar, quando evitar, quais riscos ele adiciona e como ele se conecta com microservices, segurança, times, monitoramento, logging e tracing.

## Como vamos estudar

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
6. Relacionar o conteúdo com cenários reais de APIs, microservices e produção.

O objetivo é priorizar aprendizado profundo, não velocidade.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Grade do curso

### Conceitos Básicos

- Introdução - 01:25
- APIs - 09:29
- O que é Gateway - 14:18
- Tipos API Gateway - 16:09
- Papel API Gateway - 07:10
- Vantagens e desvantagens API Gateway - 08:19
- Como escolher API Gateway - 13:36

### Código-fonte

- Código-fonte - sem duração

### Kong API Gateway

- kong API Gateway - 09:10
- Subscriptions - 05:20
- Modelos Deployment - 07:53
- Docker Compose - 08:37
- Konga - 10:27
- Serviços - 06:01
- Rotas - 11:18
- Plugins - 07:11
- Correlation id - 08:10
- Rate limiting ip - 12:42
- Response tranformer - 07:59
- Consumers - 06:39
- Basic auth - 06:16
- Key authentication - 06:27

### Decisões na escolha do API Gateway

- Características não funcionais - 14:03
- Desenho equipes - 07:35

### Observabilidade

- Monitoramento - 11:43
- Logging - 09:56
- Tracing - 10:36
- Day two - 06:24

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Conceitos básicos de APIs e Gateway](modules/01-fase-01-conceitos-basicos-de-apis-e-gateway.md)
2. [Código-fonte e projeto base](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [Kong API Gateway e ambiente local](modules/03-fase-03-kong-api-gateway-e-ambiente-local.md)
4. [Serviços e rotas no Kong](modules/04-fase-04-servicos-e-rotas-no-kong.md)
5. [Plugins e políticas transversais](modules/05-fase-05-plugins-e-politicas-transversais.md)
6. [Consumers e autenticação](modules/06-fase-06-consumers-e-autenticacao.md)
7. [Decisões na escolha de API Gateway](modules/07-fase-07-decisoes-na-escolha-de-api-gateway.md)
8. [Observabilidade](modules/08-fase-08-observabilidade.md)
9. [Projeto final](modules/09-fase-09-projeto-final.md)
10. [Perguntas classicas de entrevista](modules/10-perguntas-entrevista.md)

## Ritmo recomendado

O curso tem cerca de 4h04 de videoaulas, mas o foco é praticar bastante.

### Sugestão de ritmo em 10 dias

#### Dia 1

- Introdução
- APIs
- O que é Gateway
- Papel do API Gateway

#### Dia 2

- Tipos de API Gateway
- Vantagens e desvantagens
- Como escolher API Gateway

#### Dia 3

- Código-fonte
- Ambiente local
- Kong com Docker Compose

#### Dia 4

- Konga
- Services
- Routes

#### Dia 5

- Plugins
- Correlation id
- Response transformer

#### Dia 6

- Rate limiting por IP
- Testes de limite
- Riscos de configuração

#### Dia 7

- Consumers
- Basic Auth
- Key Authentication

#### Dia 8

- Decisões de escolha
- Características não funcionais
- Desenho de equipes

#### Dia 9

- Monitoramento
- Logging
- Tracing
- Day two

#### Dia 10

- Projeto final
- Revisão geral
- README final

## Primeira missao

Assistir às aulas:

> Introdução
> APIs
> O que é Gateway

Depois responder com minhas palavras:

> Qual problema real um API Gateway resolve quando uma aplicação começa a ter várias APIs e vários clientes diferentes?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
