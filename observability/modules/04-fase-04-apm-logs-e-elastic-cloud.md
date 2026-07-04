# Fase 4: APM, logs e Elastic Cloud

## Aulas

- Configurando APM
- APM na prática
- Logs no APM
- Configurando nginx
- Configurando Filebeat
- Fazendo deploy na Elastic Cloud
- Configurando Filebeat na Elastic Cloud
- Integrando serviços na Elastic Cloud

## Objetivo

Aprender a observar uma aplicação de forma mais completa: performance, transações, logs, erros e integração com Elastic Cloud.

Aqui a stack começa a parecer produção de verdade. Em vez de só olhar logs soltos, você começa a conectar requisições, tempos, erros e logs relacionados.

## Conceitos principais

- APM
- Transaction
- Span
- Trace
- Latência
- Erro de aplicação
- Logs correlacionados
- Nginx logs
- Filebeat
- Elastic Cloud
- Serviço instrumentado
- Performance de endpoint
- Investigação de erro

## Exercícios práticos

- Configurar APM.
- Instrumentar uma aplicação.
- Gerar requisições.
- Observar transações no Kibana.
- Simular erro na aplicação.
- Ver logs associados ao erro.
- Configurar Nginx.
- Configurar Filebeat para coletar logs.
- Enviar dados para Elastic Cloud.
- Criar um guia de investigação usando APM + logs.

## Perguntas de reflexão

- O que APM mostra que logs comuns não mostram?
- O que é uma transaction?
- O que é um span?
- Como APM ajuda a encontrar endpoint lento?
- Como logs no APM ajudam no debug?
- Por que coletar logs do Nginx?
- Qual a diferença entre rodar local e usar Elastic Cloud?
- Que dados sensíveis eu não deveria enviar para logs?

## Checkpoint

Conseguir investigar uma requisição lenta ou com erro usando APM e logs correlacionados.
