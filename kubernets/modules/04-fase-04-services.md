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
