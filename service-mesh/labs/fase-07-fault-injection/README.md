# Lab Fase 7 - Fault injection

## Missao

Pratique os conceitos da Fase 7 antes de pedir revisao.

## Exercicios praticos

- Criar uma regra de delay artificial.
- Criar uma regra de abort retornando erro HTTP.
- Aplicar falha apenas para parte do tráfego.
- Observar comportamento no cliente.
- Remover a falha.
- Documentar o que aconteceu.

## Antes de pedir revisao

- Por que simular falha de propósito?
- O que delay testa?
- O que abort testa?
- Qual o risco de aplicar fault injection em produção?
- Como isso ajuda a validar timeout, retry e fallback?
- Que tipo de falha eu deveria testar em uma arquitetura real?

## Criterio de sucesso

Conseguir aplicar uma falha controlada, observar o impacto e remover a configuração com segurança.
