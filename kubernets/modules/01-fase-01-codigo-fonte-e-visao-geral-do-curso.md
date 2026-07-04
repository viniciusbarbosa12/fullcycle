# Fase 1: Código-fonte e visão geral do curso

## Aula

- Código-fonte do curso

## Objetivo

Entender a estrutura do projeto antes de começar a criar objetos no cluster.

Antes de sair aplicando YAML, preciso saber qual aplicação será usada, qual imagem será criada, quais portas ela expõe e como o projeto está organizado.

## Conceitos principais

- Repositório base
- Aplicação exemplo
- Dockerfile
- Imagem Docker
- Manifests Kubernetes
- Organização de pastas
- README técnico

## Exercícios práticos

- Clonar ou criar o projeto base.
- Identificar o Dockerfile.
- Identificar a aplicação.
- Identificar a porta usada pela aplicação.
- Criar um README explicando a estrutura.
- Rodar a aplicação localmente antes de colocar no Kubernetes.

## Perguntas de reflexão

- Antes de subir uma aplicação no Kubernetes, o que preciso saber sobre ela?
- Por que é importante testar a aplicação fora do cluster primeiro?
- Como eu identificaria se um problema está na aplicação, na imagem Docker ou no Kubernetes?

## Checkpoint

Criar um README com:

- Como rodar a aplicação localmente
- Como gerar a imagem Docker
- Qual porta a aplicação usa
- Qual será o objetivo de rodar essa aplicação no Kubernetes
