# Fase 4: CI com Docker

## Aulas

- Criando Dockerfile
- Errata - Criando Dockerfile
- Gerando build da imagem via CI
- Dando push na imagem automaticamente

## Objetivo

Entender como integrar Docker na pipeline: criar uma imagem, validar o build dela dentro da CI e publicar automaticamente em um registry.

## Conceitos principais

- Dockerfile
- Imagem Docker
- Build de imagem
- Tag de imagem
- Docker registry
- Docker Hub ou GitHub Container Registry
- Login no registry
- Secrets
- Push automático
- Imagem versionada
- Segurança de credenciais

## Exercícios práticos

- Criar um Dockerfile para a aplicação.
- Buildar a imagem localmente.
- Rodar a imagem localmente.
- Criar um job na CI para buildar a imagem.
- Configurar tag da imagem.
- Configurar secrets para autenticação no registry.
- Publicar imagem automaticamente.
- Validar se a imagem publicada pode ser baixada e executada.

## Perguntas de reflexão

- Por que buildar imagem Docker na CI?
- Por que não devo deixar senha/token hardcoded no workflow?
- O que são secrets?
- Como escolher uma boa tag de imagem?
- Qual a diferença entre buildar e publicar imagem?
- Por que publicar imagem quebrada é perigoso?
- Em que momento faz sentido publicar imagem: todo push, toda PR ou só merge na main?

## Checkpoint

Criar uma pipeline que:

- Roda testes.
- Só builda imagem se os testes passarem.
- Publica imagem automaticamente em um registry.
- Usa secrets para autenticação.
- Usa tags compreensíveis.
