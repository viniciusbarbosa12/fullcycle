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
