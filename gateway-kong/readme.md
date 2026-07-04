# Plano de Aprendizado Kong no Kubernetes, APIOps, GitOps e Testes de Carga

Este plano foi criado para estudar Kong no Kubernetes de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como o Kong funciona dentro de um cluster Kubernetes, como usar Ingress Controller, CRDs, plugins, autenticação com OpenID, APIOps, GitOps, validação de contratos OpenAPI, pipelines com Argo, testes de carga com K6/Testkube e operação em ambientes produtivos.

O objetivo é sair desse curso conseguindo implementar e operar Kong em Kubernetes com uma visão mais profissional, entendendo não só “como configurar”, mas também por que cada decisão existe.

## Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de YAML/comandos.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de Kubernetes, API Gateway, plataforma e produção.

O objetivo é priorizar aprendizado profundo, não velocidade.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Grade do curso

### Conceitos Básicos

- Principais conceitos - 04:49
- Kubernetes ingress kong - 09:30
- Modelos deployment kong kubernetes - 08:20
- Instalando kong - 13:14
- Ferramentas adicionais - 07:00
- Modificações no repositório - sem duração

### Código-fonte

- Código-fonte - sem duração

### Kong & Kubernetes

- Crd plugins - 07:49
- Kong ingress - 12:23
- Open id provider - 10:21
- Kong openid plugin - 14:51

### APIOps

- APIOps - 10:53
- GitOps - 07:38
- Ferramentas necessárias - 05:38
- Validando openapi lint - 09:55
- Checando contratos - 09:32
- Instalando_argo - 14:47
- Rodando pipeline - 14:25

### Iniciando com Testes de Carga

- K6 testkube - 12:52
- Preparando cluster - 12:58
- Aplicando cargas - 21:38

### Kong em ambientes Produtivos

- Configurando apps logs - 07:25
- Configurando coleta logs kong - 19:45
- Analisando kong - 13:22

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Conceitos básicos de Kong no Kubernetes](modules/01-fase-01-conceitos-basicos-de-kong-no-kubernetes.md)
2. [Código-fonte e projeto base](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [Kong & Kubernetes na prática](modules/03-fase-03-kong-e-kubernetes-na-pratica.md)
4. [APIOps e GitOps](modules/04-fase-04-apiops-e-gitops.md)
5. [Testes de carga com K6 e Testkube](modules/05-fase-05-testes-de-carga-com-k6-e-testkube.md)
6. [Kong em ambientes produtivos](modules/06-fase-06-kong-em-ambientes-produtivos.md)
7. [Projeto final](modules/07-fase-07-projeto-final.md)
8. [Perguntas classicas de entrevista](modules/08-perguntas-entrevista.md)

## Ritmo recomendado

O curso tem cerca de 4h09 de videoaulas, mas o foco é praticar bastante.

### Sugestão de ritmo em 10 dias

#### Dia 1

- Principais conceitos
- Kubernetes Ingress Kong
- Diferença entre Gateway, Ingress e Ingress Controller

#### Dia 2

- Modelos de deployment
- Instalação do Kong
- Ferramentas adicionais

#### Dia 3

- Código-fonte
- Estrutura do projeto
- Primeiros manifests

#### Dia 4

- CRD plugins
- Kong Ingress
- Plugins declarativos

#### Dia 5

- OpenID Provider
- Kong OpenID plugin
- Autenticação no gateway

#### Dia 6

- APIOps
- GitOps
- Ferramentas necessárias

#### Dia 7

- OpenAPI lint
- Checagem de contratos
- Pipeline

#### Dia 8

- Argo CD
- Rodando pipeline
- Git como fonte da verdade

#### Dia 9

- K6
- Testkube
- Testes de carga

#### Dia 10

- Logs em produção
- Coleta de logs do Kong
- Análise e troubleshooting

## Primeira missao

Assistir às aulas:

> Principais conceitos
> Kubernetes ingress kong
> Modelos deployment kong kubernetes

Depois responder com minhas palavras:

> Qual a diferença prática entre usar Kong como API Gateway comum e usar Kong como Ingress Controller dentro do Kubernetes?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
