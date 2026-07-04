# Lab Fase 7 - Resources, metrics-server e HPA

## Missao

Pratique os conceitos da Fase 7 antes de pedir revisao.

## Exercicios praticos

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

## Antes de pedir revisao

- Para que servem requests?
- Para que servem limits?
- Qual a diferença entre request e limit?
- O que acontece se eu não configurar resources?
- O que é HPA?
- Do que o HPA precisa para funcionar?
- Por que HPA não resolve aplicação mal escrita?
- Quando aumentar réplicas não resolve o problema?
- Qual o risco de limit de memória baixo demais?

## Criterio de sucesso

Ter HPA funcionando, escalando a aplicação sob carga e reduzindo réplicas depois.
