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
