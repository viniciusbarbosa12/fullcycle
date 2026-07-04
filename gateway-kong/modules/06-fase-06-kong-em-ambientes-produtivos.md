# Fase 6: Kong em ambientes produtivos

## Aulas

- Configurando apps logs
- Configurando coleta logs kong
- Analisando kong

## Objetivo

Entender como operar Kong em produção.

Subir o Kong é uma parte pequena da história. O trabalho real é manter o gateway saudável, observável e seguro: coletar logs, analisar comportamento, investigar erro, medir latência e entender o impacto das rotas e plugins.

## Conceitos principais

- Produção
- Logs de aplicação
- Logs do Kong
- Coleta centralizada
- Observabilidade
- Métricas
- Tracing
- Error rate
- Latência
- Access logs
- Proxy logs
- Admin logs
- Troubleshooting
- Dashboards
- Alertas
- Operação day two
- Análise de tráfego

## Exercícios práticos

- Configurar logs da aplicação.
- Configurar logs do Kong.
- Enviar logs para uma ferramenta centralizada, se disponível.
- Fazer requests válidas e inválidas.
- Observar logs gerados.
- Simular erro 404.
- Simular erro 401.
- Simular erro 502.
- Analisar os logs e identificar origem do problema.
- Criar um guia pessoal de troubleshooting.

## Perguntas de reflexão

- Quais logs são importantes no Kong?
- Como diferenciar erro do gateway e erro da aplicação?
- Como investigar erro 401?
- Como investigar erro 404?
- Como investigar erro 502?
- Que dados não devo logar?
- Como correlation id ajudaria aqui?
- Que alertas eu criaria para produção?
- O que significa operar Kong no day two?

## Checkpoint

Criar um guia de operação com:

- Métricas importantes
- Logs importantes
- Como investigar erro 4xx
- Como investigar erro 5xx
- Como investigar latência
- Como validar se o problema está no Kong ou na API
- Alertas recomendados
