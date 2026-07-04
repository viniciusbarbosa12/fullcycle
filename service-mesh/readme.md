# Plano de Aprendizado Service Mesh com Istio

Este plano foi criado para estudar Service Mesh com Istio de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender por que Service Mesh existe, quais problemas ele resolve em sistemas distribuídos e como usar Istio para controlar tráfego, observar serviços, aplicar deploy canário, configurar gateways, testar falhas e proteger melhor a comunicação entre serviços.

O objetivo é sair desse curso conseguindo explicar e implementar os principais recursos do Istio em um cluster Kubernetes local, entendendo quando usar e quando não usar Service Mesh em projetos reais.

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
6. Relacionar o conteúdo com cenários reais de Kubernetes, microservices e produção.

O objetivo é priorizar aprendizado profundo, não velocidade.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Grade do curso

### Introdução

- Introdução - 06:47
- O mundo distribuído - 12:11
- Service mesh vs Istio - 04:59
- Principais recursos - 09:08
- Arquitetura do istio - 13:21
- Monitoramento em tempo real - 04:27

### Código-fonte

- Código-fonte - sem duração

### Instalação

- Sobre o processo de instalação - 02:00
- Instalando k3d - 05:20
- Criando cluster - 04:07
- Instalando istio ctl - 08:29
- Instalando istio no cluster - 09:22
- Injetando sidecar proxy - 07:54
- Configurando addons - 07:16

### Gerenciamento de tráfego

- Falando sobre gerenciamento de tráfego - 02:03
- Conceitos básicos - 17:43
- Resumindo conceitos - 05:05
- Criando versões de deployments - 08:18
- Criando deploy canário manualmente - 05:59
- Criando deploy canário em segundos com istio e kiali - 12:41
- Criando virtual service e destination rule - 11:56
- Tipos de load balancer - 11:26
- Stick session e consistent hash - 02:10
- Dinâmica do consistent hash - 05:27
- Consistent hash na prática - 12:33
- Fault injection na prática - 15:23
- Circuit breaker - 10:26
- Preparando ambiente para circuit breaker - 09:08
- Circuit breaker na prática - 16:53
- Iniciando com gateways - 09:58
- Configurando ingress gateway - 17:09
- Reconfigurando virtual service - 07:04
- Trabalhando com prefixos - 07:30
- Configurando domínios - 09:15

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Introdução e base mental de Service Mesh](modules/01-fase-01-introducao-e-base-mental-de-service-mesh.md)
2. [Código-fonte e projeto base](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [Instalação do ambiente](modules/03-fase-03-instalacao-do-ambiente.md)
4. [Fundamentos de gerenciamento de tráfego](modules/04-fase-04-fundamentos-de-gerenciamento-de-trafego.md)
5. [Deploy canário](modules/05-fase-05-deploy-canario.md)
6. [Load balancing, sticky session e consistent hash](modules/06-fase-06-load-balancing-sticky-session-e-consistent-hash.md)
7. [Fault injection](modules/07-fase-07-fault-injection.md)
8. [Circuit breaker](modules/08-fase-08-circuit-breaker.md)
9. [Gateways e exposição externa](modules/09-fase-09-gateways-e-exposicao-externa.md)
10. [Consolidação e projeto final](modules/10-fase-10-consolidacao-e-projeto-final.md)
11. [Perguntas classicas de entrevista](modules/11-perguntas-entrevista.md)

## Ritmo recomendado

O curso tem cerca de 4h53 de videoaulas, mas o foco é praticar bastante.

### Sugestão de ritmo em 12 dias

#### Dia 1

- Introdução
- Mundo distribuído
- Service Mesh vs Istio
- Arquitetura do Istio

#### Dia 2

- Código-fonte
- k3d
- Criação do cluster

#### Dia 3

- istioctl
- Instalação do Istio
- Sidecar injection

#### Dia 4

- Addons
- Kiali
- Prometheus
- Grafana
- Jaeger

#### Dia 5

- Conceitos de gerenciamento de tráfego
- Versões de deployments
- Labels e subsets

#### Dia 6

- Deploy canário
- VirtualService
- DestinationRule

#### Dia 7

- Load balancing
- Sticky session
- Consistent hash

#### Dia 8

- Fault injection
- Delay
- Abort
- Teste de resiliência

#### Dia 9

- Circuit breaker
- Outlier detection
- Proteção contra falhas em cascata

#### Dia 10

- Gateways
- Ingress Gateway
- VirtualService externo

#### Dia 11

- Prefixos
- Domínios
- Rotas externas

#### Dia 12

- Projeto final
- Revisão geral
- README final

## Primeira missao

Assistir às aulas:

> Introdução
> O mundo distribuído
> Service mesh vs Istio

Depois responder com minhas palavras:

> Qual problema real o Service Mesh resolve que fica difícil resolver só com código da aplicação e Kubernetes puro?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
