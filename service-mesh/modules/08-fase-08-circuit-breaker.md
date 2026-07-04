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
