# Plano de Aprendizado Service Mesh com Istio

Este plano foi criado para estudar Service Mesh com Istio de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender por que Service Mesh existe, quais problemas ele resolve em sistemas distribuídos e como usar Istio para controlar tráfego, observar serviços, aplicar deploy canário, configurar gateways, testar falhas e proteger melhor a comunicação entre serviços.

O objetivo é sair desse curso conseguindo explicar e implementar os principais recursos do Istio em um cluster Kubernetes local, entendendo quando usar e quando não usar Service Mesh em projetos reais.

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
6. Relacionar o conteúdo com cenários reais de Kubernetes, microservices e produção.

O objetivo é priorizar aprendizado profundo, não velocidade.

---

# Grade do curso

## Introdução

- Introdução - 06:47
- O mundo distribuído - 12:11
- Service mesh vs Istio - 04:59
- Principais recursos - 09:08
- Arquitetura do istio - 13:21
- Monitoramento em tempo real - 04:27

## Código-fonte

- Código-fonte - sem duração

## Instalação

- Sobre o processo de instalação - 02:00
- Instalando k3d - 05:20
- Criando cluster - 04:07
- Instalando istio ctl - 08:29
- Instalando istio no cluster - 09:22
- Injetando sidecar proxy - 07:54
- Configurando addons - 07:16

## Gerenciamento de tráfego

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

---

# Fase 1: Introdução e base mental de Service Mesh

## Aulas

- Introdução
- O mundo distribuído
- Service mesh vs Istio
- Principais recursos
- Arquitetura do istio
- Monitoramento em tempo real

## Objetivo

Entender o problema antes da ferramenta.

Service Mesh não existe porque Kubernetes é “fraco”. Ele existe porque, quando um sistema tem vários serviços conversando entre si, começam a aparecer problemas de tráfego, segurança, observabilidade, retries, timeouts, circuit breaker, deploy canário e rastreabilidade.

## Conceitos principais

- Sistemas distribuídos
- Microservices
- Comunicação serviço para serviço
- Service Mesh
- Istio
- Data plane
- Control plane
- Sidecar proxy
- Envoy
- Observabilidade
- Telemetria
- Tracing
- Métricas
- Logs
- Kiali
- Prometheus
- Grafana
- Jaeger

## Exercícios práticos

- Explicar com minhas palavras o que é Service Mesh.
- Desenhar um fluxo simples com 3 serviços conversando.
- Identificar quais problemas aparecem nesse fluxo.
- Separar responsabilidades entre aplicação, Kubernetes e Istio.
- Listar quais recursos do Istio parecem mais úteis em produção.
- Criar um pequeno resumo sobre data plane e control plane.

## Perguntas de reflexão

- Qual problema Service Mesh tenta resolver?
- Por que comunicação entre serviços fica difícil em sistemas distribuídos?
- O que é sidecar proxy?
- Qual a diferença entre Service Mesh e Istio?
- O que o Istio faz que a aplicação não deveria precisar fazer manualmente?
- Quando Service Mesh pode ser exagero?
- Por que observabilidade é tão importante em microservices?

## Checkpoint

Responder com minhas palavras:

> Por que um time usaria Istio em um ambiente Kubernetes com vários microservices?

---

# Fase 2: Código-fonte e projeto base

## Aula

- Código-fonte

## Objetivo

Entender a estrutura do projeto usado no curso antes de sair aplicando YAML igual mágico cansado.

## Conceitos principais

- Repositório base
- Manifests Kubernetes
- Deployments
- Services
- Namespaces
- Labels
- Selectors
- Versões de aplicação
- Organização de arquivos

## Exercícios práticos

- Clonar ou criar um projeto base de estudo.
- Identificar os manifests Kubernetes.
- Identificar os serviços da aplicação.
- Identificar quais deployments existem.
- Identificar labels e selectors.
- Criar um README com a estrutura do projeto.

## Perguntas de reflexão

- Antes de instalar Istio, o que eu preciso entender sobre a aplicação?
- Por que labels são tão importantes para o Istio?
- O que pode dar errado se os selectors estiverem mal definidos?
- Como eu organizaria manifests de uma aplicação real?

## Checkpoint

Criar um README explicando:

- Serviços existentes
- Deployments
- Namespaces
- Labels
- Como rodar a aplicação sem Istio
- O que será controlado pelo Istio depois

---

# Fase 3: Instalação do ambiente

## Aulas

- Sobre o processo de instalação
- Instalando k3d
- Criando cluster
- Instalando istio ctl
- Instalando istio no cluster
- Injetando sidecar proxy
- Configurando addons

## Objetivo

Montar um cluster local com k3d, instalar Istio e preparar o ambiente para observar e controlar tráfego.

## Conceitos principais

- k3d
- Kubernetes local
- Cluster
- Namespace
- istioctl
- Istio installation profile
- Sidecar injection
- Label de namespace
- Envoy proxy
- Addons
- Kiali
- Prometheus
- Grafana
- Jaeger

## Exercícios práticos

- Instalar k3d.
- Criar um cluster local.
- Validar o cluster com `kubectl`.
- Instalar `istioctl`.
- Instalar Istio no cluster.
- Criar namespace para a aplicação.
- Ativar sidecar injection no namespace.
- Subir a aplicação.
- Verificar se os pods receberam sidecar.
- Instalar/configurar addons.
- Abrir Kiali e observar a topologia.

## Perguntas de reflexão

- O que é k3d e por que usar localmente?
- O que `istioctl` faz?
- O que acontece quando ativo sidecar injection?
- Como eu sei se o sidecar foi injetado corretamente?
- Por que o Envoy fica junto da aplicação?
- Qual o papel do Kiali?
- O que os addons ajudam a visualizar?

## Checkpoint

Ter um ambiente onde:

- Cluster k3d está rodando.
- Istio está instalado.
- Namespace da aplicação tem sidecar injection ativado.
- Pods possuem sidecar Envoy.
- Kiali/Prometheus/Grafana/Jaeger estão acessíveis.
- A aplicação responde dentro do cluster.

---

# Fase 4: Fundamentos de gerenciamento de tráfego

## Aulas

- Falando sobre gerenciamento de tráfego
- Conceitos básicos
- Resumindo conceitos
- Criando versões de deployments

## Objetivo

Entender como o Istio controla tráfego entre versões de serviços.

Antes de fazer canary, fault injection ou circuit breaker, preciso entender como o tráfego é roteado e como o Istio identifica versões diferentes da mesma aplicação.

## Conceitos principais

- Traffic management
- Service
- Deployment
- Versionamento de deployment
- Labels de versão
- Subsets
- VirtualService
- DestinationRule
- Roteamento
- Peso de tráfego
- Match rules

## Exercícios práticos

- Criar duas versões de um deployment.
- Adicionar labels de versão.
- Validar que o Kubernetes Service enxerga as duas versões.
- Observar distribuição de tráfego sem regra do Istio.
- Criar um desenho explicando como o tráfego chega nas versões.

## Perguntas de reflexão

- Como o Istio sabe que existem versões diferentes?
- Qual a diferença entre Service Kubernetes e VirtualService do Istio?
- Por que labels corretas são essenciais?
- O que é um subset?
- O que acontece se eu criar versões, mas não configurar regras de tráfego?

## Checkpoint

Ter duas versões da aplicação rodando e conseguir explicar como o tráfego chega nelas.

---

# Fase 5: Deploy canário

## Aulas

- Criando deploy canário manualmente
- Criando deploy canário em segundos com istio e kiali
- Criando virtual service e destination rule

## Objetivo

Aprender a liberar uma versão nova aos poucos, controlando porcentagem de tráfego e reduzindo risco de deploy.

## Conceitos principais

- Deploy canário
- VirtualService
- DestinationRule
- Subsets
- Weighted routing
- Versão estável
- Versão canário
- Rollout gradual
- Rollback
- Kiali

## Exercícios práticos

- Criar versão v1 e v2 da aplicação.
- Criar DestinationRule com subsets `v1` e `v2`.
- Criar VirtualService roteando 90% para v1 e 10% para v2.
- Alterar para 70/30.
- Alterar para 50/50.
- Simular rollback voltando 100% para v1.
- Observar tudo no Kiali.

## Perguntas de reflexão

- Por que canary deploy reduz risco?
- Qual a diferença entre canary manual e canary usando Istio?
- O que o VirtualService controla?
- O que a DestinationRule define?
- Como eu faria rollback rápido?
- Que métrica eu observaria antes de aumentar tráfego para v2?

## Checkpoint

Conseguir alterar o peso de tráfego entre v1 e v2 e provar o comportamento com requisições e Kiali.

---

# Fase 6: Load balancing, sticky session e consistent hash

## Aulas

- Tipos de load balancer
- Stick session e consistent hash
- Dinâmica do consistent hash
- Consistent hash na prática

## Objetivo

Entender como o Istio distribui tráfego entre instâncias e como manter afinidade quando necessário.

## Conceitos principais

- Load balancing
- Round robin
- Random
- Least request
- Sticky session
- Consistent hash
- Cookie affinity
- Header affinity
- Session affinity
- DestinationRule trafficPolicy

## Exercícios práticos

- Testar distribuição padrão de tráfego.
- Configurar uma política de load balancing.
- Simular múltiplas instâncias de uma versão.
- Configurar consistent hash usando header ou cookie.
- Fazer várias chamadas e observar se o tráfego mantém afinidade.
- Comparar comportamento com e sem consistent hash.

## Perguntas de reflexão

- Por que nem todo tráfego pode ser distribuído aleatoriamente?
- Quando sticky session faz sentido?
- Quando sticky session pode ser ruim?
- O que consistent hash resolve?
- Por que aplicações stateless reduzem a necessidade de sticky session?
- Que tipo de sistema poderia precisar de afinidade?

## Checkpoint

Conseguir demonstrar tráfego com e sem consistent hash e explicar a diferença.

---

# Fase 7: Fault injection

## Aula

- Fault injection na prática

## Objetivo

Aprender a simular falhas controladas para testar resiliência da aplicação.

## Conceitos principais

- Fault injection
- Delay
- Abort
- Erro HTTP artificial
- Latência
- Teste de resiliência
- Chaos engineering básico
- Validação de timeout
- Experiência do usuário em falhas

## Exercícios práticos

- Criar uma regra de delay artificial.
- Criar uma regra de abort retornando erro HTTP.
- Aplicar falha apenas para parte do tráfego.
- Observar comportamento no cliente.
- Remover a falha.
- Documentar o que aconteceu.

## Perguntas de reflexão

- Por que simular falha de propósito?
- O que delay testa?
- O que abort testa?
- Qual o risco de aplicar fault injection em produção?
- Como isso ajuda a validar timeout, retry e fallback?
- Que tipo de falha eu deveria testar em uma arquitetura real?

## Checkpoint

Conseguir aplicar uma falha controlada, observar o impacto e remover a configuração com segurança.

---

# Fase 8: Circuit breaker

## Aulas

- Circuit breaker
- Preparando ambiente para circuit breaker
- Circuit breaker na prática

## Objetivo

Entender como evitar que falhas se espalhem em cascata quando um serviço começa a degradar.

## Conceitos principais

- Circuit breaker
- Falha em cascata
- Outlier detection
- Connection pool
- Consecutive errors
- Ejection
- Timeout
- Retry
- Resiliência
- Proteção de dependências

## Exercícios práticos

- Preparar ambiente com serviço instável.
- Configurar DestinationRule com política de circuit breaker.
- Simular erro em uma instância.
- Observar ejection da instância ruim.
- Testar recuperação.
- Comparar comportamento antes e depois do circuit breaker.

## Perguntas de reflexão

- O que é falha em cascata?
- Como circuit breaker protege o sistema?
- Qual a diferença entre retry e circuit breaker?
- O que é outlier detection?
- O que acontece se o circuit breaker estiver agressivo demais?
- O que acontece se estiver frouxo demais?
- Em que serviço crítico eu aplicaria isso?

## Checkpoint

Conseguir demonstrar uma instância ruim sendo evitada pelo Istio e explicar por que isso melhora resiliência.

---

# Fase 9: Gateways e exposição externa

## Aulas

- Iniciando com gateways
- Configurando ingress gateway
- Reconfigurando virtual service
- Trabalhando com prefixos
- Configurando domínios

## Objetivo

Aprender a expor serviços para fora do cluster usando Istio Gateway e VirtualService.

## Conceitos principais

- Istio Gateway
- Ingress Gateway
- Host
- Port
- Protocol
- VirtualService
- Prefix match
- URI routing
- Domínios
- DNS local
- Roteamento externo
- Entrada de tráfego no mesh

## Exercícios práticos

- Criar um Gateway.
- Configurar host e porta.
- Reconfigurar VirtualService para usar o gateway.
- Criar rota por prefixo.
- Criar mais de um caminho para serviços diferentes.
- Configurar domínio local.
- Acessar a aplicação de fora do cluster.
- Validar comportamento no Kiali.

## Perguntas de reflexão

- Qual a diferença entre Gateway e VirtualService?
- Por que preciso de Gateway para tráfego externo?
- O que é prefix match?
- Como eu rotearia `/api` para backend e `/app` para frontend?
- Como domínios ajudam em ambientes reais?
- Qual a diferença entre Kubernetes Ingress e Istio Gateway?

## Checkpoint

Ter uma aplicação acessível externamente via Istio Gateway, com rotas por prefixo e domínio configurado.

---

# Fase 10: Consolidação e projeto final

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente local com Istio contendo:

- Cluster k3d
- Istio instalado
- Sidecar injection ativado
- Addons instalados
- Aplicação com pelo menos 2 serviços
- Pelo menos 2 versões de um serviço
- VirtualService
- DestinationRule
- Deploy canário
- Alteração gradual de tráfego
- Consistent hash
- Fault injection
- Circuit breaker
- Ingress Gateway
- Rotas por prefixo
- Domínio local
- Observabilidade com Kiali
- README explicando toda a arquitetura

## Critérios de sucesso

O projeto final precisa demonstrar:

- Entendimento de Service Mesh
- Instalação funcional do Istio
- Sidecars injetados corretamente
- Tráfego controlado por VirtualService
- Subsets definidos por DestinationRule
- Canary deploy funcionando
- Load balancing configurado
- Consistent hash funcionando
- Fault injection aplicada e removida
- Circuit breaker funcionando
- Gateway expondo aplicação
- Observabilidade no Kiali
- README claro
- Capacidade de explicar quando usar e quando não usar Istio

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

> Terminei, olha meu YAML/comandos

A resposta esperada da revisão deve conter:

1. O que está certo.
2. O que pode melhorar.
3. Riscos.
4. Boas práticas.
5. O que estudar antes de avançar.
6. Se posso avançar ou se preciso reforçar.

---

# Ritmo recomendado

O curso tem cerca de 4h53 de videoaulas, mas o foco é praticar bastante.

## Sugestão de ritmo em 12 dias

### Dia 1

- Introdução
- Mundo distribuído
- Service Mesh vs Istio
- Arquitetura do Istio

### Dia 2

- Código-fonte
- k3d
- Criação do cluster

### Dia 3

- istioctl
- Instalação do Istio
- Sidecar injection

### Dia 4

- Addons
- Kiali
- Prometheus
- Grafana
- Jaeger

### Dia 5

- Conceitos de gerenciamento de tráfego
- Versões de deployments
- Labels e subsets

### Dia 6

- Deploy canário
- VirtualService
- DestinationRule

### Dia 7

- Load balancing
- Sticky session
- Consistent hash

### Dia 8

- Fault injection
- Delay
- Abort
- Teste de resiliência

### Dia 9

- Circuit breaker
- Outlier detection
- Proteção contra falhas em cascata

### Dia 10

- Gateways
- Ingress Gateway
- VirtualService externo

### Dia 11

- Prefixos
- Domínios
- Rotas externas

### Dia 12

- Projeto final
- Revisão geral
- README final

---

# Perguntas clássicas de entrevista e trabalho real

Ao final do plano, eu devo conseguir responder:

1. O que é Service Mesh?
2. O que é Istio?
3. Qual a diferença entre Service Mesh e Istio?
4. Qual problema Service Mesh resolve?
5. Quando Service Mesh pode ser exagero?
6. O que é sidecar proxy?
7. O que é Envoy?
8. O que é data plane?
9. O que é control plane?
10. Como o Istio controla tráfego?
11. O que é VirtualService?
12. O que é DestinationRule?
13. O que é subset?
14. Como fazer deploy canário com Istio?
15. Como fazer rollback com Istio?
16. O que é Kiali?
17. O que é fault injection?
18. Para que serve delay injection?
19. Para que serve abort injection?
20. O que é circuit breaker?
21. O que é outlier detection?
22. O que é consistent hash?
23. Quando usar sticky session?
24. O que é Istio Gateway?
25. Qual a diferença entre Gateway e VirtualService?
26. Qual a diferença entre Kubernetes Ingress e Istio Gateway?
27. Como Istio ajuda em observabilidade?
28. Como Istio ajuda em resiliência?
29. Como Istio ajuda em deploys mais seguros?
30. Quais riscos ou custos o Istio adiciona?

---

# Regras da mentoria

Durante todo o curso, a prioridade é meu aprendizado.

Não entregue respostas completas de primeira.

Antes de responder uma dúvida, tente me fazer pensar.

Quando eu errar, corrija diretamente e explique o motivo.

Quando eu acertar, diga o que está bom e como posso melhorar.

Sempre que possível, conecte o assunto com situações reais de trabalho, como:

- Microservices difíceis de observar
- Falhas em cascata
- Deploy canário em produção
- Rollback rápido
- Rotas externas com gateway
- Domínios por ambiente
- Tráfego dividido entre versões
- Debug com Kiali
- Latência entre serviços
- Retry mal configurado
- Circuit breaker agressivo demais
- Service Mesh sendo usado sem necessidade
- Kubernetes puro vs Kubernetes com Istio

---

# Primeira missão

Assistir às aulas:

> Introdução
> O mundo distribuído
> Service mesh vs Istio

Depois responder com minhas palavras:

> Qual problema real o Service Mesh resolve que fica difícil resolver só com código da aplicação e Kubernetes puro?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
