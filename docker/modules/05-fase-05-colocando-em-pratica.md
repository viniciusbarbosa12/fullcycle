# Fase 5: Colocando em prática

## Aulas

- Instalando framework em um container
- Ativando entrypoint e command
- Criando aplicação Node.js sem o Node
- Gerando imagem da aplicação Node.js

## Objetivo

Usar Docker como ambiente de desenvolvimento, não só como empacotamento final.

## Conceitos principais

- Rodar comandos dentro do container
- Usar container como ambiente de desenvolvimento
- Evitar instalar tudo localmente
- Gerar app usando container
- Criar imagem de uma aplicação real

## Exercícios práticos

- Criar uma aplicação Node usando container.
- Rodar `npm install` dentro do container.
- Criar um Dockerfile da aplicação.
- Subir a app localmente.
- Testar alteração de código com bind mount.

## Perguntas de reflexão

- Por que seria útil criar uma app Node sem instalar Node localmente?
- Qual o risco de misturar dependências da minha máquina com dependências do container?
- Como isso ajuda em times grandes?
- Como isso melhora onboarding de novos devs?
