# Fase 5: Testes de carga com K6 e Testkube

## Aulas

- K6 testkube
- Preparando cluster
- Aplicando cargas

## Objetivo

Aprender a validar comportamento do gateway e das APIs sob carga.

Não adianta a rota funcionar uma vez no Postman e morrer quando recebe tráfego real. Aqui o foco é começar a medir performance, latência, throughput, erros e limites usando testes de carga.

## Conceitos principais

- Teste de carga
- K6
- Testkube
- Virtual users
- RPS
- Latência
- Throughput
- Taxa de erro
- Percentis
- P95
- P99
- Thresholds
- Gargalos
- Saturação
- Testes dentro do cluster
- Testes automatizados

## Exercícios práticos

- Criar um script K6 simples.
- Rodar teste local.
- Instalar ou configurar Testkube.
- Rodar teste contra rota exposta pelo Kong.
- Aumentar carga gradualmente.
- Observar latência e erros.
- Configurar thresholds.
- Fazer o teste falhar por threshold.
- Ajustar e rodar novamente.
- Documentar resultado.

## Perguntas de reflexão

- Por que fazer teste de carga no API Gateway?
- O que é RPS?
- O que é P95?
- O que é P99?
- Por que média de latência pode enganar?
- Que tipo de plugin pode impactar performance?
- Como rate limiting aparece em um teste de carga?
- Qual a diferença entre teste de carga e teste de stress?
- Quando eu rodaria isso em uma pipeline?

## Checkpoint

Ter um teste de carga rodando contra uma rota do Kong e conseguir explicar os resultados.
