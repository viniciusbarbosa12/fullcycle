# Plano de Aprendizado Kubernetes

Este plano foi criado para estudar Kubernetes de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como colocar aplicações em um cluster, expor serviços, configurar variáveis, lidar com health checks, escalar com HPA, trabalhar com volumes persistentes, expor aplicações com Ingress, configurar TLS com cert-manager e entender RBAC com Service Accounts, Roles e ClusterRoles.

O objetivo é sair desse curso conseguindo implementar uma aplicação real no Kubernetes, explicar os principais objetos, debugar problemas comuns e entender melhor o que realmente acontece quando uma aplicação roda dentro de um cluster.

---

# Como vamos estudar

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

---

# Grade do curso

## Código-fonte

- Código-fonte do curso - sem duração

## Iniciando com Kubernetes

- Introdução ao Kubernetes - 16:36
- Instalando Kind - 09:44
- Dica start Kind - sem duração
- Criando primeiro cluster com Kind - 06:29
- Criando cluster multi node - 09:11
- Mudança de contexto e extensão do VSCode - 06:05

## Primeiros passos na prática

- Criando aplicação exemplo e imagem - 06:33
- Trabalhando com Pods - 13:04
- Criando primeira ReplicaSet - 12:02
- O problema do ReplicaSet - 06:05
- Implementando Deployment - 09:01
- Rollout e Revisões - 08:19

## Services

- Entendendo o conceito de services - 03:27
- Utilizando ClusterIP - 10:34
- Diferenças entre Port e targetPort - 05:34
- Utilizando proxy para acessar API do Kubernetes - 06:07
- Utilizando NodePort - 06:52
- Trabalhando com LoadBalancer - 05:28

## Objetos de configuração

- Entendendo objetos de configuração - 02:17
- Utilizando variáveis de ambiente - 05:56
- Variáveis de ambiente com ConfigMap - 06:30
- Injetando ConfigMap na aplicação - 19:38
- Secrets e variáveis de ambiente - 09:14

## Probes

- Entendendo health check - 04:45
- Criando endpoint Healthz - 08:53
- Liveness na prática - 12:19
- Entendendo readiness - 10:58
- Combinando Liveness e Readiness - 13:58
- Trabalhando com startupProbe - 06:55

## Resources e HPA

- Instalando metrics-server - 09:49
- Entendendo utilização de Resources - 13:37
- Aplicando deployment com resources - 03:31
- Criando e configurando HPA - 09:09
- Versão da imagem para o teste de stress - sem duração
- Teste de stress com fortio - 17:40
- Atualização no comando do Fortio - sem duração

## StatefulSets e volumes persistentes

- Entendendo volumes persistentes - 17:01
- Criando volume persistente e montando - 12:56
- Entendendo Stateless vs Stateful - 11:04
- Criando StatefulSet - 14:21
- Criando headless service - 14:56
- Criando volumes dinamicamente com statefulset - 10:29
- Devo usar meu banco de dados no kubernetes - 05:52

## Ingress

- Visão geral - 05:14
- Configurando aplicação no GKE - 06:02
- Instalando ingress nginx controller - 06:25
- Configurando Ingress e DNS - 12:11

## Cert-manager

- Instalando cert manager - 08:32
- Configurando e emitindo certificado - 10:53

## Namespaces e Service Accounts

- Namespaces - 06:52
- Contextos por namespace - 11:51
- Entendendo Service Accounts - 06:10
- Criando Service Account e Roles - 13:50
- ClusterRole - 03:43

---

# Fase 1: Código-fonte e visão geral do curso

## Aula

- Código-fonte do curso

## Objetivo

Entender a estrutura do projeto antes de começar a criar objetos no cluster.

Antes de sair aplicando YAML, preciso saber qual aplicação será usada, qual imagem será criada, quais portas ela expõe e como o projeto está organizado.

## Conceitos principais

- Repositório base
- Aplicação exemplo
- Dockerfile
- Imagem Docker
- Manifests Kubernetes
- Organização de pastas
- README técnico

## Exercícios práticos

- Clonar ou criar o projeto base.
- Identificar o Dockerfile.
- Identificar a aplicação.
- Identificar a porta usada pela aplicação.
- Criar um README explicando a estrutura.
- Rodar a aplicação localmente antes de colocar no Kubernetes.

## Perguntas de reflexão

- Antes de subir uma aplicação no Kubernetes, o que preciso saber sobre ela?
- Por que é importante testar a aplicação fora do cluster primeiro?
- Como eu identificaria se um problema está na aplicação, na imagem Docker ou no Kubernetes?

## Checkpoint

Criar um README com:

- Como rodar a aplicação localmente
- Como gerar a imagem Docker
- Qual porta a aplicação usa
- Qual será o objetivo de rodar essa aplicação no Kubernetes

---

# Fase 2: Iniciando com Kubernetes e Kind

## Aulas

- Introdução ao Kubernetes
- Instalando Kind
- Dica start Kind
- Criando primeiro cluster com Kind
- Criando cluster multi node
- Mudança de contexto e extensão do VSCode

## Objetivo

Entender o que é Kubernetes e criar um ambiente local seguro para estudar.

Kind permite rodar clusters Kubernetes locais usando containers Docker. É ótimo para aprender porque você consegue criar, destruir e testar clusters sem depender de cloud.

## Conceitos principais

- Kubernetes
- Cluster
- Node
- Control plane
- Worker node
- Kind
- kubectl
- kubeconfig
- Context
- Cluster multi node
- VSCode Kubernetes extension

## Exercícios práticos

- Instalar Kind.
- Validar instalação do kubectl.
- Criar um cluster local.
- Listar nodes do cluster.
- Criar um cluster multi node.
- Alternar contexto entre clusters.
- Usar extensão do VSCode para visualizar objetos do cluster.
- Criar um README com comandos básicos.

## Perguntas de reflexão

- O que é Kubernetes?
- O que é um cluster?
- Qual a diferença entre control plane e worker node?
- O que é Kind?
- Por que estudar Kubernetes localmente antes de usar cloud?
- O que é contexto no kubectl?
- O que pode dar errado se eu estiver no contexto errado?

## Checkpoint

Ter um cluster Kind funcionando e conseguir explicar:

- Quantos nodes ele tem
- Qual contexto está ativo
- Como listar recursos
- Como trocar de contexto
- Por que um cluster local ajuda no aprendizado

---

# Fase 3: Pods, ReplicaSet, Deployment e Rollout

## Aulas

- Criando aplicação exemplo e imagem
- Trabalhando com Pods
- Criando primeira ReplicaSet
- O problema do ReplicaSet
- Implementando Deployment
- Rollout e Revisões

## Objetivo

Entender como o Kubernetes roda aplicações e por que normalmente usamos Deployment em vez de criar Pod direto.

Pod é a menor unidade de execução. ReplicaSet mantém quantidade de réplicas. Deployment gerencia ReplicaSets, atualizações, rollbacks e revisões.

## Conceitos principais

- Pod
- Container
- Image
- ReplicaSet
- Deployment
- Desired state
- Rollout
- Revision
- Rollback
- Labels
- Selectors
- Declarative configuration
- Imperative vs declarative

## Exercícios práticos

- Criar imagem da aplicação.
- Criar um Pod manualmente.
- Ver logs do Pod.
- Executar comando dentro do Pod.
- Deletar Pod e observar comportamento.
- Criar ReplicaSet com múltiplas réplicas.
- Alterar imagem e entender limitação do ReplicaSet.
- Criar Deployment.
- Fazer rollout de nova versão.
- Fazer rollback para versão anterior.
- Listar histórico de revisões.

## Perguntas de reflexão

- Por que não é comum usar Pod direto em produção?
- O que ReplicaSet resolve?
- Qual o problema de usar ReplicaSet diretamente?
- O que Deployment adiciona?
- O que é desired state?
- O que acontece quando eu deleto um Pod gerenciado por Deployment?
- Como rollback ajuda em produção?

## Checkpoint

Ter uma aplicação rodando via Deployment, com múltiplas réplicas, rollout e rollback funcionando.

---

# Fase 4: Services

## Aulas

- Entendendo o conceito de services
- Utilizando ClusterIP
- Diferenças entre Port e targetPort
- Utilizando proxy para acessar API do Kubernetes
- Utilizando NodePort
- Trabalhando com LoadBalancer

## Objetivo

Entender como expor e acessar aplicações dentro e fora do cluster.

Pods são efêmeros. Eles nascem, morrem e mudam de IP. Service cria um ponto fixo de acesso para um conjunto de Pods.

## Conceitos principais

- Service
- ClusterIP
- NodePort
- LoadBalancer
- Port
- TargetPort
- Selector
- Endpoint
- Service discovery
- DNS interno
- kubectl proxy
- Exposição interna e externa

## Exercícios práticos

- Criar Service do tipo ClusterIP.
- Acessar aplicação dentro do cluster.
- Entender port e targetPort.
- Testar kubectl proxy.
- Criar Service do tipo NodePort.
- Criar Service do tipo LoadBalancer.
- Ver endpoints gerados pelo Service.
- Alterar labels e observar impacto nos endpoints.

## Perguntas de reflexão

- Por que Service existe?
- Qual problema ele resolve em relação aos Pods?
- Qual a diferença entre ClusterIP, NodePort e LoadBalancer?
- Qual a diferença entre port e targetPort?
- O que acontece se o selector do Service estiver errado?
- Quando usar ClusterIP?
- Quando usar NodePort?
- Quando usar LoadBalancer?

## Checkpoint

Conseguir expor a aplicação de 3 formas diferentes e explicar quando cada tipo de Service faz sentido.

---

# Fase 5: ConfigMap, Secrets e configuração da aplicação

## Aulas

- Entendendo objetos de configuração
- Utilizando variáveis de ambiente
- Variáveis de ambiente com ConfigMap
- Injetando ConfigMap na aplicação
- Secrets e variáveis de ambiente

## Objetivo

Separar configuração do código e da imagem.

A imagem da aplicação deve ser a mesma entre ambientes, mas as configurações mudam. ConfigMap guarda configurações não sensíveis. Secret guarda informações sensíveis, com cuidados extras.

## Conceitos principais

- ConfigMap
- Secret
- Environment variables
- Configuração por ambiente
- Injeção de configuração
- Decoupling
- Twelve-Factor App
- Dados sensíveis
- Base64 em Secret
- Segurança de configuração

## Exercícios práticos

- Criar variáveis diretamente no Deployment.
- Criar ConfigMap.
- Injetar ConfigMap como variável de ambiente.
- Injetar ConfigMap como arquivo, se fizer sentido.
- Alterar ConfigMap e observar impacto.
- Criar Secret.
- Injetar Secret como variável de ambiente.
- Documentar o que deve ir em ConfigMap e o que deve ir em Secret.

## Perguntas de reflexão

- Por que não hardcodar configuração na aplicação?
- Qual a diferença entre ConfigMap e Secret?
- Secret do Kubernetes é criptografado automaticamente?
- Por que base64 não é criptografia?
- Quando usar variável de ambiente?
- Quando montar configuração como arquivo?
- O que acontece se eu mudar ConfigMap depois que o Pod já está rodando?

## Checkpoint

Ter a aplicação lendo configurações via ConfigMap e Secret, sem precisar alterar a imagem Docker.

---

# Fase 6: Probes e health checks

## Aulas

- Entendendo health check
- Criando endpoint Healthz
- Liveness na prática
- Entendendo readiness
- Combinando Liveness e Readiness
- Trabalhando com startupProbe

## Objetivo

Ensinar o Kubernetes a entender se a aplicação está viva, pronta para receber tráfego ou ainda inicializando.

Probes mal configuradas podem derrubar aplicação saudável ou mandar tráfego para aplicação que ainda não está pronta. Aqui mora muito bug fantasma em produção.

## Conceitos principais

- Health check
- Liveness probe
- Readiness probe
- Startup probe
- Endpoint healthz
- Restart automático
- Tráfego somente para Pods prontos
- Inicialização lenta
- Falha temporária
- CrashLoopBackOff

## Exercícios práticos

- Criar endpoint `/healthz`.
- Configurar livenessProbe.
- Simular aplicação travada.
- Observar restart automático.
- Configurar readinessProbe.
- Simular aplicação ainda não pronta.
- Ver Service removendo Pod não pronto dos endpoints.
- Configurar startupProbe.
- Simular aplicação com inicialização lenta.
- Combinar as 3 probes corretamente.

## Perguntas de reflexão

- Qual a diferença entre liveness e readiness?
- Quando usar startupProbe?
- O que acontece se livenessProbe estiver agressiva demais?
- O que acontece se readinessProbe estiver errada?
- Por que readiness é importante em deploy?
- Como probes ajudam em zero downtime?
- O que é CrashLoopBackOff?

## Checkpoint

Ter probes configuradas e conseguir demonstrar restart por liveness e bloqueio de tráfego por readiness.

---

# Fase 7: Resources, metrics-server e HPA

## Aulas

- Instalando metrics-server
- Entendendo utilização de Resources
- Aplicando deployment com resources
- Criando e configurando HPA
- Versão da imagem para o teste de stress
- Teste de stress com fortio
- Atualização no comando do Fortio

## Objetivo

Entender como controlar consumo de CPU/memória e escalar horizontalmente a aplicação.

Sem requests e limits, o scheduler trabalha no escuro. Sem metrics-server, o HPA não tem dados. Sem teste de carga, você não vê a escala acontecendo.

## Conceitos principais

- metrics-server
- Requests
- Limits
- CPU
- Memory
- Scheduler
- QoS
- HPA
- Horizontal scaling
- Target CPU utilization
- Stress test
- Fortio
- Autoscaling
- Saturação

## Exercícios práticos

- Instalar metrics-server.
- Validar métricas com kubectl top.
- Configurar requests e limits no Deployment.
- Observar consumo de recursos.
- Criar HPA.
- Configurar mínimo e máximo de réplicas.
- Gerar carga com Fortio.
- Observar aumento de réplicas.
- Parar carga e observar redução de réplicas.
- Documentar comportamento.

## Perguntas de reflexão

- Para que servem requests?
- Para que servem limits?
- Qual a diferença entre request e limit?
- O que acontece se eu não configurar resources?
- O que é HPA?
- Do que o HPA precisa para funcionar?
- Por que HPA não resolve aplicação mal escrita?
- Quando aumentar réplicas não resolve o problema?
- Qual o risco de limit de memória baixo demais?

## Checkpoint

Ter HPA funcionando, escalando a aplicação sob carga e reduzindo réplicas depois.

---

# Fase 8: Volumes persistentes e StatefulSets

## Aulas

- Entendendo volumes persistentes
- Criando volume persistente e montando
- Entendendo Stateless vs Stateful
- Criando StatefulSet
- Criando headless service
- Criando volumes dinamicamente com statefulset
- Devo usar meu banco de dados no kubernetes

## Objetivo

Entender armazenamento persistente e workloads stateful no Kubernetes.

Nem tudo no Kubernetes é stateless. Algumas aplicações precisam de identidade estável, armazenamento persistente e ordem de criação. StatefulSet existe para esses casos, mas usar banco em Kubernetes exige maturidade operacional.

## Conceitos principais

- Volume
- PersistentVolume
- PersistentVolumeClaim
- StorageClass
- Dynamic provisioning
- StatefulSet
- Stateless
- Stateful
- Headless Service
- Identidade estável
- DNS estável
- Volume por réplica
- Banco de dados no Kubernetes
- Operação de dados

## Exercícios práticos

- Criar PersistentVolume.
- Criar PersistentVolumeClaim.
- Montar volume em um Pod.
- Escrever arquivo no volume.
- Recriar Pod e validar persistência.
- Criar StatefulSet.
- Criar Headless Service.
- Observar DNS estável dos Pods.
- Criar volumes dinamicamente.
- Comparar Deployment vs StatefulSet.
- Escrever uma análise: quando eu usaria ou não banco no Kubernetes.

## Perguntas de reflexão

- Qual a diferença entre volume e PersistentVolume?
- O que é PVC?
- O que é StorageClass?
- O que é dynamic provisioning?
- Qual a diferença entre stateless e stateful?
- Por que StatefulSet dá identidade estável?
- Para que serve Headless Service?
- Quando usar StatefulSet?
- É uma boa ideia rodar banco em Kubernetes?
- Quando é melhor usar banco gerenciado?

## Checkpoint

Ter um StatefulSet funcionando com volume persistente e conseguir explicar quando usar banco dentro ou fora do Kubernetes.

---

# Fase 9: Ingress e DNS

## Aulas

- Visão geral
- Configurando aplicação no GKE
- Instalando ingress nginx controller
- Configurando Ingress e DNS

## Objetivo

Expor aplicações HTTP/HTTPS de forma mais profissional.

Service expõe aplicação, mas Ingress permite roteamento por host, path e integração com controlador de entrada. Em produção, Ingress costuma ser a porta HTTP da aplicação.

## Conceitos principais

- Ingress
- Ingress Controller
- NGINX Ingress Controller
- Host
- Path
- DNS
- GKE
- Load Balancer
- Regras HTTP
- Exposição externa
- Roteamento por domínio

## Exercícios práticos

- Instalar Ingress NGINX Controller.
- Criar recurso Ingress.
- Configurar rota por host.
- Configurar rota por path.
- Apontar domínio ou DNS local.
- Testar acesso externo.
- Observar logs do controller.
- Comparar Ingress com Service LoadBalancer.

## Perguntas de reflexão

- Qual a diferença entre Ingress e Ingress Controller?
- Por que criar Ingress sem controller não resolve?
- Quando usar Ingress em vez de LoadBalancer direto?
- Como funciona roteamento por host?
- Como funciona roteamento por path?
- O que o DNS precisa fazer?
- Qual o papel do controller NGINX?

## Checkpoint

Ter uma aplicação acessível por domínio ou host configurado usando Ingress.

---

# Fase 10: Cert-manager e TLS

## Aulas

- Instalando cert manager
- Configurando e emitindo certificado

## Objetivo

Automatizar emissão e renovação de certificados TLS no Kubernetes.

Certificado manual é uma armadilha com prazo de validade. Cert-manager automatiza a emissão e renovação usando issuers, certificates e secrets.

## Conceitos principais

- TLS
- HTTPS
- cert-manager
- Certificate
- Issuer
- ClusterIssuer
- Secret TLS
- ACME
- Let's Encrypt
- Renovação automática
- Ingress TLS

## Exercícios práticos

- Instalar cert-manager.
- Validar pods do cert-manager.
- Criar Issuer ou ClusterIssuer.
- Criar Certificate.
- Validar Secret TLS gerado.
- Configurar Ingress com TLS.
- Testar acesso HTTPS.
- Verificar status do certificado.

## Perguntas de reflexão

- Por que automatizar certificados?
- Qual o papel do cert-manager?
- Qual a diferença entre Issuer e ClusterIssuer?
- Onde o certificado fica armazenado?
- Como o Ingress usa o certificado?
- O que acontece quando o certificado vence?
- Que cuidados eu teria em produção?

## Checkpoint

Ter aplicação acessível via HTTPS com certificado gerenciado pelo cert-manager.

---

# Fase 11: Namespaces, Service Accounts e RBAC

## Aulas

- Namespaces
- Contextos por namespace
- Entendendo Service Accounts
- Criando Service Account e Roles
- ClusterRole

## Objetivo

Entender isolamento lógico e controle de acesso no Kubernetes.

Namespaces ajudam a organizar recursos. Service Accounts representam identidades de aplicações ou automações. Roles e ClusterRoles controlam permissões. Sem RBAC bem configurado, o cluster vira uma festa com a porta aberta e o DJ dormindo.

## Conceitos principais

- Namespace
- Context por namespace
- Service Account
- RBAC
- Role
- RoleBinding
- ClusterRole
- ClusterRoleBinding
- Least privilege
- Permissões por namespace
- Permissões globais
- Identidade de workload

## Exercícios práticos

- Criar namespaces.
- Aplicar recursos em namespaces diferentes.
- Configurar contexto padrão por namespace.
- Criar Service Account.
- Criar Role com permissões limitadas.
- Criar RoleBinding.
- Testar acesso permitido.
- Testar acesso negado.
- Criar ClusterRole.
- Comparar Role e ClusterRole.

## Perguntas de reflexão

- Para que servem namespaces?
- Namespace é isolamento de segurança completo?
- O que é Service Account?
- Qual a diferença entre usuário e Service Account?
- O que é RBAC?
- Qual a diferença entre Role e ClusterRole?
- Qual a diferença entre RoleBinding e ClusterRoleBinding?
- Por que aplicar least privilege?
- Que risco existe em dar permissão demais?

## Checkpoint

Ter um namespace com Service Account e permissões limitadas funcionando via RBAC.

---

# Fase 12: Projeto final

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente Kubernetes com uma aplicação completa contendo:

- Cluster Kind ou cluster cloud
- Aplicação containerizada
- Deployment
- ReplicaSet gerenciado pelo Deployment
- Rollout e rollback testados
- Service ClusterIP
- Service NodePort ou LoadBalancer para teste
- ConfigMap
- Secret
- Liveness probe
- Readiness probe
- Startup probe, se fizer sentido
- Requests e limits
- HPA funcionando
- Teste de stress com Fortio
- PersistentVolume e PVC
- StatefulSet com Headless Service
- Ingress Controller
- Recurso Ingress com host/path
- DNS ou host local configurado
- TLS com cert-manager
- Namespace próprio
- Service Account
- Role/RoleBinding
- README explicando toda a arquitetura

## Critérios de sucesso

O projeto final precisa demonstrar:

- Aplicação rodando em Kubernetes
- Deployments funcionando
- Rollout e rollback funcionando
- Services corretamente configurados
- Configuração separada via ConfigMap e Secret
- Probes bem configuradas
- Resources definidos
- HPA escalando sob carga
- Volume persistente funcionando
- StatefulSet compreendido
- Ingress expondo aplicação
- TLS configurado
- Namespace organizado
- RBAC com permissões mínimas
- README claro
- Capacidade de explicar decisões e trade-offs

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

> Terminei, olha meu YAML/comandos/configuração

A resposta esperada da revisão deve conter:

1. O que está certo.
2. O que pode melhorar.
3. Riscos.
4. Boas práticas.
5. O que estudar antes de avançar.
6. Se posso avançar ou se preciso reforçar.

---

# Ritmo recomendado

O curso tem cerca de 7h54 de videoaulas, mas o foco é praticar bastante.

## Sugestão de ritmo em 16 dias

### Dia 1

- Código-fonte
- Introdução ao Kubernetes
- Conceitos de cluster, node, control plane e worker

### Dia 2

- Instalação do Kind
- Primeiro cluster
- Cluster multi node
- Contextos

### Dia 3

- Aplicação exemplo
- Imagem Docker
- Primeiro Pod

### Dia 4

- ReplicaSet
- Problema do ReplicaSet
- Deployment

### Dia 5

- Rollout
- Revisões
- Rollback

### Dia 6

- Services
- ClusterIP
- Port e targetPort

### Dia 7

- NodePort
- LoadBalancer
- Acesso à API do Kubernetes

### Dia 8

- Variáveis de ambiente
- ConfigMap
- Secret

### Dia 9

- Health check
- Liveness
- Readiness
- StartupProbe

### Dia 10

- Metrics-server
- Requests e limits
- Deployment com resources

### Dia 11

- HPA
- Teste de stress com Fortio
- Análise de escalabilidade

### Dia 12

- Volumes persistentes
- PV
- PVC

### Dia 13

- Stateless vs Stateful
- StatefulSet
- Headless Service
- Volumes dinâmicos

### Dia 14

- Ingress
- Ingress NGINX Controller
- DNS

### Dia 15

- Cert-manager
- TLS
- HTTPS

### Dia 16

- Namespaces
- Service Accounts
- RBAC
- Projeto final e README

---

# Perguntas clássicas de entrevista e trabalho real

Ao final do plano, eu devo conseguir responder:

1. O que é Kubernetes?
2. O que é um cluster?
3. O que é um node?
4. O que é control plane?
5. O que é worker node?
6. O que é Kind?
7. O que é kubectl context?
8. O que é Pod?
9. Por que não usar Pod direto em produção?
10. O que é ReplicaSet?
11. Qual o problema de usar ReplicaSet diretamente?
12. O que é Deployment?
13. O que é rollout?
14. O que é rollback?
15. O que é Service?
16. Qual a diferença entre ClusterIP, NodePort e LoadBalancer?
17. Qual a diferença entre port e targetPort?
18. O que é ConfigMap?
19. O que é Secret?
20. Secret é criptografia?
21. O que é livenessProbe?
22. O que é readinessProbe?
23. O que é startupProbe?
24. Qual a diferença entre liveness e readiness?
25. O que são requests e limits?
26. O que é metrics-server?
27. O que é HPA?
28. Quando HPA não resolve o problema?
29. O que é PersistentVolume?
30. O que é PersistentVolumeClaim?
31. O que é StorageClass?
32. O que é StatefulSet?
33. Para que serve Headless Service?
34. Quando usar StatefulSet?
35. Devo rodar banco de dados no Kubernetes?
36. O que é Ingress?
37. Qual a diferença entre Ingress e Ingress Controller?
38. O que é cert-manager?
39. O que é Issuer?
40. O que é ClusterIssuer?
41. O que é Namespace?
42. O que é Service Account?
43. O que é RBAC?
44. Qual a diferença entre Role e ClusterRole?
45. O que é least privilege?
46. Como eu colocaria uma API .NET em Kubernetes?
47. Como eu investigaria um Pod em CrashLoopBackOff?
48. Como eu investigaria um Service que não alcança os Pods?
49. Como eu investigaria um HPA que não escala?
50. Como eu investigaria um Ingress que não responde?

---

# Regras da mentoria

Durante todo o curso, a prioridade é meu aprendizado.

Não entregue respostas completas de primeira.

Antes de responder uma dúvida, tente me fazer pensar.

Quando eu errar, corrija diretamente e explique o motivo.

Quando eu acertar, diga o que está bom e como posso melhorar.

Sempre que possível, conecte o assunto com situações reais de trabalho, como:

- API .NET rodando em Kubernetes
- Pod subindo mas aplicação não respondendo
- Deployment quebrando depois de nova imagem
- Service sem endpoints
- ConfigMap alterado mas Pod sem refletir mudança
- Secret mal usado
- Liveness reiniciando aplicação sem necessidade
- Readiness mandando tráfego cedo demais
- StartupProbe para aplicação lenta
- Requests baixos causando throttling
- Limits baixos causando OOMKilled
- HPA que não escala
- Banco de dados rodando dentro do cluster sem maturidade
- Ingress sem controller instalado
- Certificado vencido
- Namespace errado
- Service Account com permissão demais
- Role/ClusterRole mal configuradas

---

# Primeira missão

Assistir às aulas:

> Código-fonte do curso
> Introdução ao Kubernetes
> Instalando Kind
> Criando primeiro cluster com Kind

Depois responder com minhas palavras:

> Qual problema o Kubernetes resolve quando eu tenho uma aplicação containerizada que precisa rodar de forma confiável, escalar e ser atualizada sem derrubar tudo?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
