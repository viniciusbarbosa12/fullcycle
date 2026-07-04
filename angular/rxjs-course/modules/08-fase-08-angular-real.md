# Fase 8 - RxJS no Angular real

## Objetivo

Aplicar RxJS no Angular do jeito que aparece em projeto real.

## Conceitos principais

- `HttpClient`.
- Observable em chamadas HTTP.
- `async pipe`.
- Evitar subscribe desnecessario.
- Unsubscribe.
- Memory leak.
- `takeUntilDestroyed`.
- Reactive Forms.
- `valueChanges`.
- Route params.
- Loading, error e data state.

## Conceito guia

Angular conversa naturalmente com RxJS: HTTP, formulario, rota e template podem ser modelados como fluxos.

## Exemplo real de projeto

Uma tela de busca com Reactive Forms pode ouvir `valueChanges`, aplicar debounce, cancelar requests com `switchMap` e renderizar com `async pipe`, sem subscribe manual no componente.

## Exercicios praticos

Implemente em `../labs/fase-08-angular-real/`:

1. Criar chamada HTTP fake retornando Observable.
2. Consumir Observable com `async pipe`.
3. Refatorar um subscribe manual para `async pipe`.
4. Usar `valueChanges` em formulario reativo.
5. Usar route params como Observable.
6. Criar estado de tela com loading, data e error.
7. Usar `takeUntilDestroyed` quando o subscribe manual for necessario.

## Perguntas de reflexao

1. Por que `async pipe` ajuda a evitar memory leak?
2. Quando subscribe manual e aceitavel?
3. Por que HttpClient retorna Observable e nao Promise?
4. Como tratar loading e erro sem duplicar codigo?
5. O que pode causar memory leak em Angular?

## Checkpoint

Crie uma tela Angular com:

- lista carregada por Observable;
- template usando `async pipe`;
- loading;
- erro;
- busca com Reactive Forms;
- cancelamento de request com `switchMap`.

## Criterio de sucesso

Voce pode avancar quando o componente expuser Observables para o template e usar subscribe manual apenas com motivo claro.
