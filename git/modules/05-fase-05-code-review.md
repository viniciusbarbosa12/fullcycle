# Fase 5 - Code Review profissional

## Aulas

- Iniciando com Code Review.
- Protegendo branch para Code Review.
- Trabalhando com CODEOWNERS.
- Extensao do GitHub para o VSCode.

## Objetivo

Aprender a revisar codigo com maturidade tecnica, olhando nao so se funciona, mas tambem clareza, arquitetura, seguranca, testes, manutencao e impacto no sistema.

## Conceitos principais

- Code Review.
- Feedback tecnico.
- Comentarios objetivos.
- Sugestoes de melhoria.
- Bloqueio vs sugestao.
- CODEOWNERS.
- Revisores obrigatorios.
- Areas de responsabilidade.
- Review pelo VSCode.
- Comunicacao no GitHub.

## Conceito guia

Um bom review protege o sistema e ajuda a pessoa autora a crescer. Nem todo comentario precisa bloquear a PR; o segredo e diferenciar risco real de preferencia pessoal.

## Exemplo real de projeto

Se uma PR muda regra fiscal, o reviewer precisa olhar impacto, testes, compatibilidade e ownership. O CODEOWNERS pode garantir que alguem do time responsavel por aquela area seja chamado.

## Exercicios praticos

Implemente em `../labs/fase-05-code-review/`:

1. Criar uma PR com mudanca propositalmente simples.
2. Revisar a propria PR antes de pedir review.
3. Criar comentarios de review.
4. Simular aprovacao.
5. Simular solicitacao de mudanca.
6. Criar arquivo `CODEOWNERS`.
7. Definir dono para uma pasta do projeto.
8. Testar comportamento de review obrigatorio.

## Perguntas de reflexao

1. O que devo olhar em um Code Review?
2. Quando devo bloquear uma PR?
3. Quando devo apenas sugerir melhoria?
4. Como dar feedback sem parecer grosso?
5. Por que CODEOWNERS ajuda em projetos grandes?
6. Qual o risco de aprovar PR sem entender o impacto?

## Checkpoint

Fazer uma revisao de PR considerando:

- Clareza do codigo.
- Testes.
- Seguranca.
- Performance.
- Padroes do projeto.
- Legibilidade.
- Possiveis efeitos colaterais.
- Qualidade da descricao da PR.

## Criterio de sucesso

Voce pode avancar quando conseguir escrever comentarios de review que sejam claros, objetivos e tecnicamente justificaveis.
