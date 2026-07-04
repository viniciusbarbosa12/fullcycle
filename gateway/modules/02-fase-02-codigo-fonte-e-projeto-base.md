# Fase 2: Código-fonte e projeto base

## Aula

- Código-fonte

## Objetivo

Entender a estrutura do projeto usado no curso antes de configurar o gateway.

Antes de rotear tráfego, preciso entender quais serviços existem, quais portas usam, quais endpoints expõem e qual problema o gateway vai resolver.

## Conceitos principais

- Repositório base
- Serviços internos
- Endpoints
- Portas
- Docker Compose
- Configuração local
- Dependências
- Fluxo de requisição
- README técnico

## Exercícios práticos

- Clonar ou criar um projeto base.
- Identificar quais serviços/API existem.
- Identificar portas usadas por cada serviço.
- Rodar os serviços localmente.
- Testar os endpoints sem gateway.
- Criar um README explicando a arquitetura inicial.
- Desenhar o fluxo “antes do gateway”.

## Perguntas de reflexão

- Antes de configurar um gateway, o que eu preciso saber sobre as APIs?
- Por que é importante testar os serviços sem gateway primeiro?
- Como eu saberia se um erro está no gateway ou no serviço?
- Como organizar o README para outro dev subir o ambiente?

## Checkpoint

Criar um README com:

- Serviços existentes
- Portas
- Endpoints principais
- Como rodar localmente
- Como testar sem gateway
- O que será responsabilidade do gateway
