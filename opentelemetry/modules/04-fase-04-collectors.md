# Fase 4: Collectors

## Aula

- Tipos de Collector

## Objetivo

Entender os tipos de Collector e quando usar cada modelo.

O Collector é como uma estação de triagem da telemetria. Ele recebe dados, pode processar, filtrar, enriquecer e mandar para um ou mais destinos.

## Conceitos principais

- OpenTelemetry Collector
- Agent
- Gateway
- Receiver
- Processor
- Exporter
- Pipeline
- OTLP
- Batch processor
- Filtering
- Enrichment
- Fan-out
- Observability backend

## Exercícios práticos

- Explicar a diferença entre Collector como agent e como gateway.
- Criar um exemplo de arquitetura com Collector por host/pod.
- Criar um exemplo de arquitetura com Collector centralizado.
- Listar vantagens e desvantagens de cada abordagem.
- Desenhar um pipeline com receiver, processor e exporter.

## Perguntas de reflexão

- Quando faz sentido usar Collector como agent?
- Quando faz sentido usar Collector como gateway?
- Qual o risco de enviar telemetria direto da aplicação para o backend?
- Por que usar batch processor?
- Como o Collector ajuda a trocar de ferramenta de observabilidade?
- Como o Collector ajuda a evitar acoplamento com fornecedor?

## Checkpoint

Conseguir explicar quando usar Collector local, Collector centralizado ou os dois juntos.
