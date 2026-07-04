# Fase 6: Consumers e autenticação

## Aulas

- Consumers
- Basic auth
- Key authentication

## Objetivo

Entender como o Kong identifica consumidores e aplica autenticação nas APIs.

## Conceitos principais

- Consumer
- Credenciais
- Basic Auth
- Key Authentication
- API Key
- Segurança
- Identificação de cliente
- Credenciais por consumer
- Autenticação no gateway
- Políticas por consumer

## Exercícios práticos

- Criar um consumer.
- Configurar Basic Auth.
- Testar chamada sem credencial.
- Testar chamada com credencial inválida.
- Testar chamada com credencial válida.
- Configurar Key Authentication.
- Criar uma API key para o consumer.
- Testar acesso usando chave.
- Comparar Basic Auth e Key Auth.

## Perguntas de reflexão

- O que é um consumer no Kong?
- Por que autenticar no gateway?
- Basic Auth é suficiente em produção?
- Quando API Key faz sentido?
- Qual o risco de vazar uma API key?
- Como eu rotacionaria uma chave?
- Qual a diferença entre autenticação e autorização?
- O que ainda precisaria ficar na aplicação mesmo usando autenticação no gateway?

## Checkpoint

Ter uma rota que só pode ser acessada por um consumer autenticado.
