# Fase 3: Imagens e Dockerfile

## Aulas

- Entendendo imagens e DockerHub
- Criando primeira imagem com Dockerfile
- Avançando com Dockerfile
- ENTRYPOINT vs CMD
- Docker entrypoint exec
- Publicando imagem no DockerHub

## Objetivo

Parar de apenas usar imagens prontas e aprender a criar minhas próprias imagens.

## Conceitos principais

- Imagem
- Container
- Camadas
- Dockerfile
- `FROM`
- `WORKDIR`
- `COPY`
- `RUN`
- `CMD`
- `ENTRYPOINT`
- Tag
- DockerHub
- Build context

## Exercícios práticos

- Criar uma imagem simples com nginx.
- Criar uma imagem com uma aplicação Node simples.
- Alterar `CMD` e observar o comportamento.
- Comparar `CMD` vs `ENTRYPOINT`.
- Buildar uma imagem com tag.
- Rodar minha própria imagem localmente.

## Perguntas de reflexão

- Qual a diferença entre imagem e container?
- Por que Dockerfile usa camadas?
- O que acontece quando eu mudo uma linha no Dockerfile?
- Quando usar `CMD`?
- Quando usar `ENTRYPOINT`?
