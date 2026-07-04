# Lab Fase 8 - Circuit breaker

## Missao

Pratique os conceitos da Fase 8 antes de pedir revisao.

## Exercicios praticos

- Preparar ambiente com serviço instável.
- Configurar DestinationRule com política de circuit breaker.
- Simular erro em uma instância.
- Observar ejection da instância ruim.
- Testar recuperação.
- Comparar comportamento antes e depois do circuit breaker.

## Antes de pedir revisao

- O que é falha em cascata?
- Como circuit breaker protege o sistema?
- Qual a diferença entre retry e circuit breaker?
- O que é outlier detection?
- O que acontece se o circuit breaker estiver agressivo demais?
- O que acontece se estiver frouxo demais?
- Em que serviço crítico eu aplicaria isso?

## Criterio de sucesso

Conseguir demonstrar uma instância ruim sendo evitada pelo Istio e explicar por que isso melhora resiliência.
