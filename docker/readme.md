# Plano de Aprendizado Docker

Este plano foi criado para estudar o curso de Docker de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender os conceitos, praticar, errar, corrigir e conseguir implementar sozinho depois.
## Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de código.
7. Só mostrar implementação completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer um code review profissional.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de projeto.

O objetivo é priorizar aprendizado profundo, não velocidade.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Ambiente e base mental](modules/01-fase-01-ambiente-e-base-mental.md)
2. [Primeiros containers](modules/02-fase-02-primeiros-containers.md)
3. [Imagens e Dockerfile](modules/03-fase-03-imagens-e-dockerfile.md)
4. [Networks](modules/04-fase-04-networks.md)
5. [Colocando em prática](modules/05-fase-05-colocando-em-pratica.md)
6. [Otimização de imagens](modules/06-fase-06-otimizacao-de-imagens.md)
7. [Docker Compose](modules/07-fase-07-docker-compose.md)
8. [Desafio final](modules/08-fase-08-desafio-final.md)

## Ritmo recomendado

O curso tem cerca de 6h20 de vídeos, mas o foco é praticar.

### Sugestão de ritmo em 12 dias

#### Dia 1

- Ambiente
- WSL
- Docker instalado
- Primeiros comandos

#### Dia 2

- Containers básicos
- Ubuntu
- Hello World

#### Dia 3

- Portas
- nginx
- `docker exec`
- Remoção de containers

#### Dia 4

- Bind mounts
- Volumes
- Persistência de dados

#### Dia 5

- Imagens
- DockerHub
- Primeiro Dockerfile

#### Dia 6

- Dockerfile avançado
- `CMD`
- `ENTRYPOINT`

#### Dia 7

- Networks
- Bridge
- Host
- Comunicação entre containers

#### Dia 8

- Aplicação Node usando Docker
- Ambiente de desenvolvimento containerizado

#### Dia 9

- Multistage build
- Otimização de imagem
- Nginx como proxy reverso

#### Dia 10

- Docker Compose
- App + banco
- Variáveis de ambiente

#### Dia 11

- Dependência entre containers
- Volumes no Compose
- Ajustes do projeto final

#### Dia 12

- Desafio final
- Revisão
- Refatoração
- README final

## Primeira missao

Assistir à aula:

> Introdução

Depois responder com minhas palavras:

> O que o Docker resolve na vida de um desenvolvedor?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
