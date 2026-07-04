# Lab Fase 5 - Deploy canário

## Missao

Pratique os conceitos da Fase 5 antes de pedir revisao.

## Exercicios praticos

- Criar versão v1 e v2 da aplicação.
- Criar DestinationRule com subsets `v1` e `v2`.
- Criar VirtualService roteando 90% para v1 e 10% para v2.
- Alterar para 70/30.
- Alterar para 50/50.
- Simular rollback voltando 100% para v1.
- Observar tudo no Kiali.

## Antes de pedir revisao

- Por que canary deploy reduz risco?
- Qual a diferença entre canary manual e canary usando Istio?
- O que o VirtualService controla?
- O que a DestinationRule define?
- Como eu faria rollback rápido?
- Que métrica eu observaria antes de aumentar tráfego para v2?

## Criterio de sucesso

Conseguir alterar o peso de tráfego entre v1 e v2 e provar o comportamento com requisições e Kiali.
