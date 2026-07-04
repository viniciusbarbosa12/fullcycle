# Plano de Aprendizado Kubernetes

Este plano foi criado para estudar Kubernetes de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como colocar aplicações em um cluster, expor serviços, configurar variáveis, lidar com health checks, escalar com HPA, trabalhar com volumes persistentes, expor aplicações com Ingress, configurar TLS com cert-manager e entender RBAC com Service Accounts, Roles e ClusterRoles.

O objetivo é sair desse curso conseguindo implementar uma aplicação real no Kubernetes, explicar os principais objetos, debugar problemas comuns e entender melhor o que realmente acontece quando uma aplicação roda dentro de um cluster.

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
6. Relacionar o conteúdo com cenários reais de Kubernetes, cloud, DevOps e produção.

O objetivo é priorizar aprendizado profundo, não velocidade.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Grade do curso

### Código-fonte

- Código-fonte do curso - sem duração

### Iniciando com Kubernetes

- Introdução ao Kubernetes - 16:36
- Instalando Kind - 09:44
- Dica start Kind - sem duração
- Criando primeiro cluster com Kind - 06:29
- Criando cluster multi node - 09:11
- Mudança de contexto e extensão do VSCode - 06:05

### Primeiros passos na prática

- Criando aplicação exemplo e imagem - 06:33
- Trabalhando com Pods - 13:04
- Criando primeira ReplicaSet - 12:02
- O problema do ReplicaSet - 06:05
- Implementando Deployment - 09:01
- Rollout e Revisões - 08:19

### Services

- Entendendo o conceito de services - 03:27
- Utilizando ClusterIP - 10:34
- Diferenças entre Port e targetPort - 05:34
- Utilizando proxy para acessar API do Kubernetes - 06:07
- Utilizando NodePort - 06:52
- Trabalhando com LoadBalancer - 05:28

### Objetos de configuração

- Entendendo objetos de configuração - 02:17
- Utilizando variáveis de ambiente - 05:56
- Variáveis de ambiente com ConfigMap - 06:30
- Injetando ConfigMap na aplicação - 19:38
- Secrets e variáveis de ambiente - 09:14

### Probes

- Entendendo health check - 04:45
- Criando endpoint Healthz - 08:53
- Liveness na prática - 12:19
- Entendendo readiness - 10:58
- Combinando Liveness e Readiness - 13:58
- Trabalhando com startupProbe - 06:55

### Resources e HPA

- Instalando metrics-server - 09:49
- Entendendo utilização de Resources - 13:37
- Aplicando deployment com resources - 03:31
- Criando e configurando HPA - 09:09
- Versão da imagem para o teste de stress - sem duração
- Teste de stress com fortio - 17:40
- Atualização no comando do Fortio - sem duração

### StatefulSets e volumes persistentes

- Entendendo volumes persistentes - 17:01
- Criando volume persistente e montando - 12:56
- Entendendo Stateless vs Stateful - 11:04
- Criando StatefulSet - 14:21
- Criando headless service - 14:56
- Criando volumes dinamicamente com statefulset - 10:29
- Devo usar meu banco de dados no kubernetes - 05:52

### Ingress

- Visão geral - 05:14
- Configurando aplicação no GKE - 06:02
- Instalando ingress nginx controller - 06:25
- Configurando Ingress e DNS - 12:11

### Cert-manager

- Instalando cert manager - 08:32
- Configurando e emitindo certificado - 10:53

### Namespaces e Service Accounts

- Namespaces - 06:52
- Contextos por namespace - 11:51
- Entendendo Service Accounts - 06:10
- Criando Service Account e Roles - 13:50
- ClusterRole - 03:43

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Código-fonte e visão geral do curso](modules/01-fase-01-codigo-fonte-e-visao-geral-do-curso.md)
2. [Iniciando com Kubernetes e Kind](modules/02-fase-02-iniciando-com-kubernetes-e-kind.md)
3. [Pods, ReplicaSet, Deployment e Rollout](modules/03-fase-03-pods-replicaset-deployment-e-rollout.md)
4. [Services](modules/04-fase-04-services.md)
5. [ConfigMap, Secrets e configuração da aplicação](modules/05-fase-05-configmap-secrets-e-configuracao-da-aplicacao.md)
6. [Probes e health checks](modules/06-fase-06-probes-e-health-checks.md)
7. [Resources, metrics-server e HPA](modules/07-fase-07-resources-metrics-server-e-hpa.md)
8. [Volumes persistentes e StatefulSets](modules/08-fase-08-volumes-persistentes-e-statefulsets.md)
9. [Ingress e DNS](modules/09-fase-09-ingress-e-dns.md)
10. [Cert-manager e TLS](modules/10-fase-10-cert-manager-e-tls.md)
11. [Namespaces, Service Accounts e RBAC](modules/11-fase-11-namespaces-service-accounts-e-rbac.md)
12. [Projeto final](modules/12-fase-12-projeto-final.md)
13. [Perguntas classicas de entrevista](modules/13-perguntas-entrevista.md)

## Ritmo recomendado

O curso tem cerca de 7h54 de videoaulas, mas o foco é praticar bastante.

### Sugestão de ritmo em 16 dias

#### Dia 1

- Código-fonte
- Introdução ao Kubernetes
- Conceitos de cluster, node, control plane e worker

#### Dia 2

- Instalação do Kind
- Primeiro cluster
- Cluster multi node
- Contextos

#### Dia 3

- Aplicação exemplo
- Imagem Docker
- Primeiro Pod

#### Dia 4

- ReplicaSet
- Problema do ReplicaSet
- Deployment

#### Dia 5

- Rollout
- Revisões
- Rollback

#### Dia 6

- Services
- ClusterIP
- Port e targetPort

#### Dia 7

- NodePort
- LoadBalancer
- Acesso à API do Kubernetes

#### Dia 8

- Variáveis de ambiente
- ConfigMap
- Secret

#### Dia 9

- Health check
- Liveness
- Readiness
- StartupProbe

#### Dia 10

- Metrics-server
- Requests e limits
- Deployment com resources

#### Dia 11

- HPA
- Teste de stress com Fortio
- Análise de escalabilidade

#### Dia 12

- Volumes persistentes
- PV
- PVC

#### Dia 13

- Stateless vs Stateful
- StatefulSet
- Headless Service
- Volumes dinâmicos

#### Dia 14

- Ingress
- Ingress NGINX Controller
- DNS

#### Dia 15

- Cert-manager
- TLS
- HTTPS

#### Dia 16

- Namespaces
- Service Accounts
- RBAC
- Projeto final e README

## Primeira missao

Assistir às aulas:

> Código-fonte do curso
> Introdução ao Kubernetes
> Instalando Kind
> Criando primeiro cluster com Kind

Depois responder com minhas palavras:

> Qual problema o Kubernetes resolve quando eu tenho uma aplicação containerizada que precisa rodar de forma confiável, escalar e ser atualizada sem derrubar tudo?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
