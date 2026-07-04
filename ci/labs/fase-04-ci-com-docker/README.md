# Lab Fase 4 - CI com Docker

## Missao

Pratique os conceitos da Fase 4 antes de pedir revisao.

## Exercicios praticos

- Criar um Dockerfile para a aplicação.
- Buildar a imagem localmente.
- Rodar a imagem localmente.
- Criar um job na CI para buildar a imagem.
- Configurar tag da imagem.
- Configurar secrets para autenticação no registry.
- Publicar imagem automaticamente.
- Validar se a imagem publicada pode ser baixada e executada.

## Antes de pedir revisao

- Por que buildar imagem Docker na CI?
- Por que não devo deixar senha/token hardcoded no workflow?
- O que são secrets?
- Como escolher uma boa tag de imagem?
- Qual a diferença entre buildar e publicar imagem?
- Por que publicar imagem quebrada é perigoso?
- Em que momento faz sentido publicar imagem: todo push, toda PR ou só merge na main?

## Criterio de sucesso

Criar uma pipeline que:

- Roda testes.
- Só builda imagem se os testes passarem.
- Publica imagem automaticamente em um registry.
- Usa secrets para autenticação.
- Usa tags compreensíveis.
