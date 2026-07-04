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
