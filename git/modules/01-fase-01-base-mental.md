# Fase 1 - Introducao e base mental

## Aulas

- Introducao

## Objetivo

Entender por que Git nao e so uma ferramenta para salvar codigo, mas uma forma de organizar colaboracao, historico, revisao e entrega de software.

## Conceitos principais

- Controle de versao.
- Historico de mudancas.
- Branch.
- Commit.
- Pull Request.
- Code Review.
- Branch protection.
- Padroes de commit.
- Rastreamento de alteracoes.

## Conceito guia

Um commit deveria representar uma mudanca pequena com sentido proprio. Em projetos reais, o historico ajuda a entender decisoes, investigar bugs, revisar impacto e desfazer mudancas com menos risco.

## Exemplo real de projeto

Imagine que uma tela de checkout quebrou em producao. Um historico bem escrito permite descobrir qual mudanca entrou, por que entrou, quem revisou, qual PR levou aquilo para a branch principal e quais testes foram feitos.

## Exercicios praticos

Implemente em `../labs/fase-01-base-mental/`:

1. Criar um repositorio local simples.
2. Criar um arquivo `README.md`.
3. Fazer o primeiro commit.
4. Criar uma branch.
5. Fazer uma alteracao pequena.
6. Comparar o historico usando `git log`.

## Perguntas de reflexao

1. Por que Git e importante em um time?
2. O que um commit deveria representar?
3. Qual o risco de fazer commits grandes demais?
4. Por que trabalhar direto na `main` ou `master` pode ser perigoso?
5. O que muda quando mais de uma pessoa trabalha no mesmo repositorio?

## Checkpoint

Responda com suas palavras:

> O que o Git resolve na vida de um time de desenvolvimento?

## Criterio de sucesso

Voce pode avancar quando conseguir explicar a diferenca entre "salvar uma alteracao" e "registrar uma decisao pequena, revisavel e rastreavel".
