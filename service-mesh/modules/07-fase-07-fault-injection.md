# Fase 7: Fault injection

## Aula

- Fault injection na prática

## Objetivo

Aprender a simular falhas controladas para testar resiliência da aplicação.

## Conceitos principais

- Fault injection
- Delay
- Abort
- Erro HTTP artificial
- Latência
- Teste de resiliência
- Chaos engineering básico
- Validação de timeout
- Experiência do usuário em falhas

## Exercícios práticos

- Criar uma regra de delay artificial.
- Criar uma regra de abort retornando erro HTTP.
- Aplicar falha apenas para parte do tráfego.
- Observar comportamento no cliente.
- Remover a falha.
- Documentar o que aconteceu.

## Perguntas de reflexão

- Por que simular falha de propósito?
- O que delay testa?
- O que abort testa?
- Qual o risco de aplicar fault injection em produção?
- Como isso ajuda a validar timeout, retry e fallback?
- Que tipo de falha eu deveria testar em uma arquitetura real?

## Checkpoint

Conseguir aplicar uma falha controlada, observar o impacto e remover a configuração com segurança.
