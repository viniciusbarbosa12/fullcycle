# Lab Fase 6 - Probes e health checks

## Missao

Pratique os conceitos da Fase 6 antes de pedir revisao.

## Exercicios praticos

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

## Antes de pedir revisao

- Qual a diferença entre liveness e readiness?
- Quando usar startupProbe?
- O que acontece se livenessProbe estiver agressiva demais?
- O que acontece se readinessProbe estiver errada?
- Por que readiness é importante em deploy?
- Como probes ajudam em zero downtime?
- O que é CrashLoopBackOff?

## Criterio de sucesso

Ter probes configuradas e conseguir demonstrar restart por liveness e bloqueio de tráfego por readiness.
