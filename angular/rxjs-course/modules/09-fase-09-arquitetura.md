# Fase 9 - Arquitetura com RxJS

## Objetivo

Organizar RxJS em arquitetura limpa, evitando componente gordo e servico baguncado.

## Conceitos principais

- Component.
- Service.
- Facade.
- Smart component.
- Dumb component.
- UI state.
- Server state.
- Stream composition.
- `shareReplay`.
- Cache.
- Tratamento de erro centralizado.
- Cancelamento de requests.
- Separacao de responsabilidades.

## Arquitetura base

```txt
Component
  consome dados e dispara acoes

Facade
  organiza fluxos, estado e regras da tela

Service
  chama API e lida com dados externos
```

## Exemplo real de projeto

Em uma listagem de produtos, o componente nao precisa saber montar query HTTP. Ele chama `facade.setSearch`, `facade.setPage` e consome `facade.productsState$`.

## Exercicios praticos

Implemente em `../labs/fase-09-architecture/`:

1. Criar um Service para simular API.
2. Criar uma Facade para organizar filtros, paginacao e dados.
3. Criar um Component que consome apenas Observables da Facade.
4. Usar `async pipe` no template.
5. Implementar cache com `shareReplay`.
6. Separar UI state de server state.

## Perguntas de reflexao

1. Por que componente nao deveria saber tudo?
2. Qual a diferenca entre Service e Facade?
3. O que e UI state?
4. O que e server state?
5. Quando `shareReplay` ajuda?
6. Quando `shareReplay` pode causar problema?

## Checkpoint

Crie uma feature Angular usando:

- Component;
- Facade;
- Service;
- Observable para lista;
- Observable para loading;
- Observable para erro;
- Observable para filtros;
- cache simples.

## Criterio de sucesso

Voce pode avancar quando a regra de fluxo estiver na Facade, acesso externo no Service e template/eventos no Component.
