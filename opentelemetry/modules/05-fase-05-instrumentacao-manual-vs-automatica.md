# Fase 5: Instrumentação manual vs automática

## Aula

- Instrumentação manual vs automática

## Objetivo

Entender a diferença entre deixar a ferramenta instrumentar automaticamente e escrever instrumentação manual para capturar informações específicas do negócio.

Instrumentação automática é ótima para começar. Mas em muitos casos ela não sabe o que importa para o seu negócio. Aí entra a instrumentação manual.

## Conceitos principais

- Instrumentação automática
- Instrumentação manual
- Auto-instrumentation
- Manual spans
- Custom attributes
- Business metrics
- Context propagation
- Bibliotecas instrumentadas
- Overhead
- Granularidade
- Ruído

## Exercícios práticos

- Listar exemplos de telemetria que podem ser capturados automaticamente.
- Listar exemplos que exigem instrumentação manual.
- Criar um cenário com uma API de pedidos.
- Definir quais spans seriam automáticos.
- Definir quais spans manuais eu criaria.
- Definir atributos úteis para esses spans.

## Perguntas de reflexão

- Quando instrumentação automática é suficiente?
- Quando instrumentação manual é necessária?
- Qual o risco de instrumentar coisa demais?
- Qual o risco de instrumentar coisa de menos?
- Que informação técnica vale colocar em spans?
- Que informação de negócio vale colocar em spans?
- O que eu jamais deveria colocar como atributo?

## Checkpoint

Criar uma proposta de instrumentação para uma API real, separando o que seria automático e o que seria manual.
