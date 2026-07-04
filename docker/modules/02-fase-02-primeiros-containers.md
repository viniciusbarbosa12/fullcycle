# Fase 2: Primeiros containers

## Aulas

- Hello World
- Executando Ubuntu
- Publicando portas com nginx
- Removendo containers
- Acessando e alterando arquivos de um container
- Iniciando com bind mounts
- Trabalhando com volumes

## Objetivo

Aprender a criar, rodar, parar, remover, acessar e persistir dados em containers.

## Conceitos principais

- `docker run`
- `docker ps`
- `docker stop`
- `docker rm`
- `docker exec`
- Port mapping
- Bind mount
- Volume
- Container efêmero
- Persistência de dados

## Exercícios práticos

- Rodar um container Ubuntu.
- Entrar dentro do container.
- Rodar um nginx e acessar pelo navegador.
- Alterar um arquivo dentro do container.
- Remover o container e observar o que acontece com os dados.
- Repetir o teste usando bind mount.
- Repetir o teste usando volume.

## Perguntas de reflexão

- Por que alterações dentro do container somem?
- Qual a diferença entre bind mount e volume?
- Por que eu não deveria salvar dados importantes só dentro do container?
- Quando usar volume em um projeto real?
