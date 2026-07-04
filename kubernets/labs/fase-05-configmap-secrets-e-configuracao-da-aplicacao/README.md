# Lab Fase 5 - ConfigMap, Secrets e configuração da aplicação

## Missao

Pratique os conceitos da Fase 5 antes de pedir revisao.

## Exercicios praticos

- Criar variáveis diretamente no Deployment.
- Criar ConfigMap.
- Injetar ConfigMap como variável de ambiente.
- Injetar ConfigMap como arquivo, se fizer sentido.
- Alterar ConfigMap e observar impacto.
- Criar Secret.
- Injetar Secret como variável de ambiente.
- Documentar o que deve ir em ConfigMap e o que deve ir em Secret.

## Antes de pedir revisao

- Por que não hardcodar configuração na aplicação?
- Qual a diferença entre ConfigMap e Secret?
- Secret do Kubernetes é criptografado automaticamente?
- Por que base64 não é criptografia?
- Quando usar variável de ambiente?
- Quando montar configuração como arquivo?
- O que acontece se eu mudar ConfigMap depois que o Pod já está rodando?

## Criterio de sucesso

Ter a aplicação lendo configurações via ConfigMap e Secret, sem precisar alterar a imagem Docker.
