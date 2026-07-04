# Fase 4 - Pull Requests e protecao de branches

## Aulas

- Protegendo branches.
- Sobre protecao de branches e organizacoes.
- Criando nossa primeira PR.
- Criando template para PRs.

## Objetivo

Aprender a usar Pull Requests como ferramenta de colaboracao, validacao, revisao e controle de qualidade antes de integrar codigo nas branches principais.

## Conceitos principais

- Pull Request.
- Branch protection.
- Required reviews.
- Required status checks.
- Template de PR.
- Descricao de mudanca.
- Checklist.
- Aprovacao.
- Merge.
- Squash merge.
- Rebase merge.
- Merge commit.

## Conceito guia

PR nao e so um botao antes do merge. PR e o lugar onde o time entende contexto, avalia impacto, executa checks, discute trade-offs e decide se a mudanca esta pronta para entrar.

## Exemplo real de projeto

Uma PR que altera pagamento precisa explicar o que mudou, quais cenarios foram testados, qual risco existe e como fazer rollback. Sem isso, o reviewer revisa no escuro.

## Exercicios praticos

Implemente em `../labs/fase-04-pull-requests/`:

1. Criar uma branch de feature.
2. Fazer uma alteracao pequena.
3. Abrir uma Pull Request.
4. Escrever uma descricao clara.
5. Criar um template de PR.
6. Ativar protecao de branch.
7. Exigir review antes do merge.
8. Simular aprovacao e merge.

## Perguntas de reflexao

1. Por que abrir PR em vez de fazer push direto na `main`?
2. O que uma boa descricao de PR precisa ter?
3. Por que template de PR ajuda o time?
4. O que e branch protection?
5. Quais regras fazem sentido em um projeto real?
6. Qual a diferenca entre merge commit, squash e rebase?

## Checkpoint

Criar uma PR com:

- Titulo claro.
- Descricao do que mudou.
- Checklist.
- Evidencia de teste.
- Contexto da mudanca.
- Branch protegida exigindo review.

## Criterio de sucesso

Voce pode avancar quando conseguir abrir uma PR que um reviewer conseguiria entender sem precisar te chamar para explicar tudo.
