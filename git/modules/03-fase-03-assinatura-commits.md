# Fase 3 - Assinatura de commits

## Aulas

- Entendendo sobre assinaturas.
- Gerando chave GPG e assinando commits.
- Adicionando outro email na chave.

## Objetivo

Entender como assinaturas de commits ajudam a provar autoria, aumentar confianca no historico e melhorar seguranca em repositorios profissionais.

## Conceitos principais

- Commit assinado.
- GPG.
- Chave publica.
- Chave privada.
- Verified commit.
- Identidade do autor.
- Seguranca no historico.
- Email associado a chave.
- Configuracao global e local do Git.

## Conceito guia

Um commit assinado ajuda a confirmar que aquela mudanca foi criada por alguem que possui a chave privada associada a identidade configurada. Isso aumenta confianca, mas nao substitui review, testes ou permissao correta no repositorio.

## Exemplo real de projeto

Em um repositorio sensivel, a empresa pode exigir commits assinados para reduzir risco de alguem falsificar autoria usando o email de outra pessoa.

## Exercicios praticos

Implemente em `../labs/fase-03-assinatura-commits/`:

1. Verificar o usuario configurado no Git.
2. Gerar uma chave GPG.
3. Associar a chave ao Git.
4. Fazer um commit assinado.
5. Verificar se o commit aparece como assinado.
6. Adicionar outro email a chave.
7. Testar commit com email diferente.

## Perguntas de reflexao

1. O que uma assinatura de commit prova?
2. O que ela nao prova?
3. Por que times ou empresas podem exigir commits assinados?
4. Qual o risco de alguem commitar usando o email de outra pessoa?
5. Qual a diferenca entre chave publica e chave privada?
6. Por que eu nunca devo compartilhar minha chave privada?

## Checkpoint

Responda com suas palavras:

> Por que commits assinados sao importantes em projetos profissionais?

## Criterio de sucesso

Voce pode avancar quando souber explicar a diferenca entre autoria declarada no commit e autoria verificada por assinatura.
