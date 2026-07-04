# Plano de Aprendizado Integração Contínua, GitHub Actions, Docker e SonarQube

Este plano foi criado para estudar o curso de Integração Contínua de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como uma pipeline de CI funciona em um projeto profissional: rodar testes automaticamente, bloquear código quebrado, usar status checks, trabalhar com matriz de execução, buildar imagens Docker, publicar imagens automaticamente e validar qualidade com SonarQube/SonarCloud.

O objetivo é sair desse curso conseguindo criar uma pipeline de CI sozinho, entender os erros, corrigir falhas e conectar esse fluxo com Pull Requests, Code Review e entrega segura de software.

## Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de código/comandos.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de projetos e times de desenvolvimento.

O objetivo é priorizar aprendizado profundo, não velocidade.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Grade do curso

### Introdução

- Iniciando com Integração contínua - 22:21

### Código-fonte

- Código-fonte - sem duração

### Iniciando com CI

- Criando software exemplo - 05:28
- Criando primeiro workflow - 12:07
- Fazendo github actions não passar - 05:46
- Ativando status check - 12:39
- Trabalhando com Strategy Matrix - 10:46

### CI com Docker

- Criando Dockerfile - 05:22
- Errata - Criando Dockerfile - sem duração
- Gerando build da imagem via CI - 15:21
- Dando push na imagem automaticamente - 08:33

### SonarQube

- Iniciando com Sonarqube - 05:05
- Conceitos principais - 13:50
- Instalando primeiro projeto - 09:50
- Trabalhando com cobertura de código - 10:52
- Cobrindo código Javascript - 11:37
- Preparando ambiente para o SonarCloud - 09:08
- Executando SonarCloud - 17:31
- Trocando de Quality Gate - 05:18

### Questionário

- Questionário - sem duração

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Introdução e base mental de CI](modules/01-fase-01-introducao-e-base-mental-de-ci.md)
2. [Código-fonte e projeto base](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [Primeiro workflow com GitHub Actions](modules/03-fase-03-primeiro-workflow-com-github-actions.md)
4. [CI com Docker](modules/04-fase-04-ci-com-docker.md)
5. [SonarQube e qualidade de código](modules/05-fase-05-sonarqube-e-qualidade-de-codigo.md)
6. [Questionário e consolidação](modules/06-fase-06-questionario-e-consolidacao.md)
7. [Perguntas classicas de entrevista](modules/07-perguntas-entrevista.md)

## Ritmo recomendado

O curso tem cerca de 3h01 de videoaulas, mas o foco é praticar bastante.

### Sugestão de ritmo em 8 dias

#### Dia 1

- Introdução à Integração Contínua
- Conceitos de CI
- Projeto base
- Comandos locais de teste e build

#### Dia 2

- GitHub Actions
- Primeiro workflow
- Jobs e steps
- Pipeline rodando em push e PR

#### Dia 3

- Pipeline falhando
- Correção de erro
- Status check obrigatório
- Proteção de branch

#### Dia 4

- Strategy Matrix
- Execução em múltiplas versões
- Otimização de pipeline

#### Dia 5

- Dockerfile
- Build de imagem local
- Build de imagem via CI

#### Dia 6

- Push automático de imagem
- Registry
- Secrets
- Tags de imagem

#### Dia 7

- SonarQube/SonarCloud
- Coverage
- Quality Gate
- Integração com CI

#### Dia 8

- Projeto final
- Questionário
- Revisão geral
- README final

## Primeira missao

Assistir à aula:

> Iniciando com Integração contínua

Depois responder com minhas palavras:

> O que uma pipeline de CI deveria proteger antes de permitir o merge de uma Pull Request?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
