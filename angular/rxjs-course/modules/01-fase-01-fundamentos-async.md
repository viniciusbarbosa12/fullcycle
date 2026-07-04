# Fase 1 - Fundamentos de assincronismo no JavaScript

## Objetivo

Entender por que RxJS existe antes de sair usando `pipe` igual quem joga tempero sem saber cozinhar.

## Conceitos principais

- Codigo sincrono.
- Codigo assincrono.
- Callback.
- Promise.
- async/await.
- Event loop basico.
- Operacoes I/O.
- Eventos de tela.
- Diferenca entre evento unico e fluxo continuo.

## Conceito guia

Promise representa bem uma resposta futura unica. UI real costuma produzir fluxos: cliques, digitacao, rota mudando, formulario mudando e requests que precisam ser cancelados.

## Exemplo real de projeto

Uma busca de produtos nao e "uma promessa". Ela e um fluxo:

1. Usuario digita.
2. O texto muda varias vezes.
3. O sistema espera ele parar.
4. Requests antigos deixam de importar.
5. A tela mostra loading, erro ou resultado.

## Exercicios praticos

Implemente em `../labs/fase-01-async/`:

1. Criar uma funcao sincrona simples.
2. Criar uma funcao com callback.
3. Criar uma Promise.
4. Reescrever a Promise usando async/await.
5. Simular uma chamada assincrona com `setTimeout`.
6. Escrever um comentario explicando onde Promise comeca a ficar limitada.

## Perguntas de reflexao

1. O que significa uma operacao assincrona?
2. Por que callback pode virar bagunca?
3. Promise resolve quantas vezes?
4. O que async/await melhora?
5. Em que tipo de problema Promise nao e suficiente?

## Checkpoint

Responda com suas palavras:

> Por que o RxJS existe se JavaScript ja tem Promise e async/await?

## Criterio de sucesso

Voce pode avancar quando conseguir explicar a diferenca entre evento unico e fluxo continuo usando um exemplo de tela Angular.
