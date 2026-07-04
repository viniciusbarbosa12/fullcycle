# Fase 11 - Projeto final

## Objetivo

Juntar tudo em uma feature Angular completa.

## Projeto final sugerido

Criar uma tela de listagem de produtos, usuarios ou pedidos com:

- busca com debounce;
- filtro por status;
- paginacao;
- loading;
- tratamento de erro;
- cancelamento de request;
- cache com `shareReplay`;
- detalhe do item;
- estado compartilhado entre componentes;
- arquitetura com Component + Facade + Service;
- template usando `async pipe`;
- pouco ou nenhum subscribe manual.

## Regras do desafio

1. Voce tenta implementar primeiro.
2. Depois envia o que fez.
3. Eu reviso.
4. Eu faco perguntas.
5. Eu aponto erros e melhorias.
6. Eu dou pistas, nao a solucao completa.
7. Voce so recebe a solucao completa se pedir explicitamente ou depois de tentar bastante.

## Criterios de sucesso

A feature precisa ter:

- codigo organizado;
- responsabilidades separadas;
- fluxos RxJS compreensiveis;
- operadores escolhidos com intencao;
- loading e erro tratados;
- cancelamento de requests funcionando;
- nenhum memory leak obvio;
- README explicando as decisoes.

## Guia de implementacao sem solucao pronta

1. Comece pelos models: item, query, pagina e estado de tela.
2. Crie um service fake que retorna Observables com delay.
3. Crie a Facade com os filtros como estado privado.
4. Combine busca, filtro e pagina.
5. Use `switchMap` para buscar dados.
6. Modele loading e erro.
7. Crie o componente de lista consumindo Observables.
8. Crie o componente de detalhe consumindo estado compartilhado.
9. Adicione cache com `shareReplay`.
10. Escreva o README da decisao arquitetural.

## Referencia depois da tentativa

Depois de tentar, voce pode comparar com:

- [product.models.ts](../final-project/src/app/features/products/models/product.models.ts)
- [product-api.service.ts](../final-project/src/app/features/products/services/product-api.service.ts)
- [product-facade.service.ts](../final-project/src/app/features/products/state/product-facade.service.ts)
- [product-list.component.ts](../final-project/src/app/features/products/components/product-list/product-list.component.ts)
- [product-detail.component.ts](../final-project/src/app/features/products/components/product-detail/product-detail.component.ts)

## Checkpoint

Quando terminar, envie seu codigo e responda:

> Onde fica o cancelamento de request, onde fica o cache e por que o componente nao chama API diretamente?
