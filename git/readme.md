# Plano de Aprendizado Git Profissional

Este curso segue o mesmo modelo de mentoria usado no curso de RxJS: estudo pratico, progressivo e sem entregar a solucao completa antes da sua tentativa.

A ideia nao e apenas decorar comandos. A ideia e aprender a trabalhar com Git de forma profissional: historico limpo, branch strategy, Gitflow, commits assinados, Pull Requests, Code Review, branch protection, CODEOWNERS, SemVer e Conventional Commits.

## Objetivo final

Ao terminar, voce deve conseguir:

- criar repositorios e organizar historico com clareza;
- trabalhar com branches sem baguncar a `main`;
- entender quando usar Gitflow e quando ele pode ser pesado demais;
- abrir Pull Requests com contexto, checklist e evidencias;
- revisar codigo com criterio tecnico e boa comunicacao;
- proteger branches principais;
- usar CODEOWNERS para ownership de areas do projeto;
- assinar commits;
- versionar releases com SemVer;
- escrever commits seguindo Conventional Commits;
- configurar ferramentas como commitlint, Commitsar e Commitizen;
- explicar esse fluxo em entrevistas e em times reais.

## Como vamos estudar

Quando voce iniciar uma aula ou topico, mande algo como:

```txt
Comecei o topico: Gitflow
```

Minha resposta deve seguir este formato:

1. Conceito principal.
2. Explicacao simples.
3. Exemplo real de projeto.
4. Perguntas para voce responder.
5. Exercicio pratico.
6. Criterio de sucesso.

Quando voce terminar um exercicio, mande:

```txt
Terminei, olha meus comandos
```

Minha revisao deve seguir este formato:

1. O que esta certo.
2. O que pode melhorar.
3. Riscos.
4. Boas praticas.
5. O que estudar antes de avancar.
6. Se pode avancar ou se precisa reforcar.

Regra importante: eu devo dar pistas primeiro. Solucao completa so se voce pedir explicitamente ou depois que voce realmente tentar.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da simulacao profissional final.

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Introducao e base mental](modules/01-fase-01-base-mental.md)
2. [Gitflow](modules/02-fase-02-gitflow.md)
3. [Assinatura de commits](modules/03-fase-03-assinatura-commits.md)
4. [Pull Requests e protecao de branches](modules/04-fase-04-pull-requests.md)
5. [Code Review profissional](modules/05-fase-05-code-review.md)
6. [SemVer](modules/06-fase-06-semver.md)
7. [Conventional Commits](modules/07-fase-07-conventional-commits.md)
8. [Questionario e consolidacao](modules/08-fase-08-questionario-consolidacao.md)
9. [Perguntas classicas de entrevista](modules/09-perguntas-entrevista.md)

## Ritmo recomendado em 8 dias

| Dia | Tema |
| --- | --- |
| 1 | Introducao, Git basico e primeiro repositorio de pratica |
| 2 | Gitflow, feature branch, release branch e hotfix branch |
| 3 | Assinatura de commits, GPG e emails na chave |
| 4 | Pull Requests, branch protection e template de PR |
| 5 | Code Review, feedback tecnico, CODEOWNERS e review pelo VSCode |
| 6 | SemVer, major, minor, patch e breaking changes |
| 7 | Conventional Commits, commitlint, Commitsar e Commitizen |
| 8 | Projeto final, questionario, revisao geral e README final |

## Primeira missao

Estude a Fase 1 e depois responda com suas palavras:

> O que muda em um time quando o Git passa a ser usado com padrao, review e protecao de branch?

Nao precisa ser perfeito. O importante e mostrar o raciocinio inicial para a gente corrigir, ajustar e aprofundar.
