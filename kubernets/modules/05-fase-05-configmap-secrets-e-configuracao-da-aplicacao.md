# Fase 5: ConfigMap, Secrets e configuração da aplicação

## Aulas

- Entendendo objetos de configuração
- Utilizando variáveis de ambiente
- Variáveis de ambiente com ConfigMap
- Injetando ConfigMap na aplicação
- Secrets e variáveis de ambiente

## Objetivo

Separar configuração do código e da imagem.

A imagem da aplicação deve ser a mesma entre ambientes, mas as configurações mudam. ConfigMap guarda configurações não sensíveis. Secret guarda informações sensíveis, com cuidados extras.

## Conceitos principais

- ConfigMap
- Secret
- Environment variables
- Configuração por ambiente
- Injeção de configuração
- Decoupling
- Twelve-Factor App
- Dados sensíveis
- Base64 em Secret
- Segurança de configuração

## Exercícios práticos

- Criar variáveis diretamente no Deployment.
- Criar ConfigMap.
- Injetar ConfigMap como variável de ambiente.
- Injetar ConfigMap como arquivo, se fizer sentido.
- Alterar ConfigMap e observar impacto.
- Criar Secret.
- Injetar Secret como variável de ambiente.
- Documentar o que deve ir em ConfigMap e o que deve ir em Secret.

## Perguntas de reflexão

- Por que não hardcodar configuração na aplicação?
- Qual a diferença entre ConfigMap e Secret?
- Secret do Kubernetes é criptografado automaticamente?
- Por que base64 não é criptografia?
- Quando usar variável de ambiente?
- Quando montar configuração como arquivo?
- O que acontece se eu mudar ConfigMap depois que o Pod já está rodando?

## Checkpoint

Ter a aplicação lendo configurações via ConfigMap e Secret, sem precisar alterar a imagem Docker.
