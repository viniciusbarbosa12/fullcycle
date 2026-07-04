# Fase 6 - Operadores de combinacao

## Objetivo

Aprender a combinar multiplos fluxos de dados.

## Conceitos principais

- `combineLatest`.
- `forkJoin`.
- `zip`.
- `withLatestFrom`.
- `startWith`.
- `catchError`.
- `finalize`.

## Conceito guia

Telas reais raramente dependem de um unico fluxo. Busca, filtro, pagina, rota, usuario logado e permissoes podem precisar trabalhar juntos.

## Exemplo real de projeto

Uma listagem com busca, filtro e paginacao costuma usar `combineLatest`. Uma tela inicial que carrega usuario e permissoes por HTTP pode usar `forkJoin`. Um clique de salvar que pega o ultimo valor do formulario pode usar `withLatestFrom`.

## Exercicios praticos

Implemente em `../labs/fase-06-combination/`:

1. Combinar busca, filtro e paginacao com `combineLatest`.
2. Fazer multiplas chamadas HTTP fake com `forkJoin`.
3. Usar `withLatestFrom` para pegar o ultimo valor de outro fluxo.
4. Usar `startWith` para definir valor inicial.
5. Tratar erro com `catchError`.
6. Desligar loading com `finalize`.

## Perguntas de reflexao

1. Quando usar `combineLatest`?
2. Quando usar `forkJoin`?
3. Qual a diferenca entre `combineLatest` e `forkJoin`?
4. Por que fluxos sem valor inicial podem travar o `combineLatest`?
5. Onde entra `catchError` em uma tela real?
6. Por que `finalize` e bom para loading?

## Checkpoint

Crie uma tela fake com:

- campo de busca;
- filtro de status;
- paginacao;
- loading;
- tratamento de erro;
- requisicao fake atualizada quando busca, filtro ou pagina mudarem.

## Criterio de sucesso

Voce pode avancar quando conseguir explicar por que `startWith` muitas vezes e necessario antes de `combineLatest`.
