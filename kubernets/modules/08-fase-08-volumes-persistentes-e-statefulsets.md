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
