# Fase 2 - Gitflow

## Aulas

- Introducao ao Gitflow.
- Instalacao do Gitflow.
- Mao na massa.

## Objetivo

Entender o Gitflow como uma estrategia de branches para organizar desenvolvimento, releases, hotfixes e manutencao de versoes.

## Conceitos principais

- Gitflow.
- Branch `main`.
- Branch `develop`.
- Feature branch.
- Release branch.
- Hotfix branch.
- Merge.
- Versionamento.
- Fluxo de entrega.
- Ambientes de desenvolvimento, homologacao e producao.

## Conceito guia

Gitflow separa trabalho em andamento, releases candidatas e correcoes urgentes. Ele ajuda quando o time precisa manter producao estavel enquanto novas features continuam em desenvolvimento.

## Exemplo real de projeto

Um time esta preparando a versao `1.4.0` em uma release branch, mas encontra um bug urgente em producao. O hotfix sai da `main`, volta para producao rapidamente e depois e integrado de volta ao fluxo normal.

## Exercicios praticos

Implemente em `../labs/fase-02-gitflow/`:

1. Criar um repositorio de teste.
2. Inicializar um fluxo Gitflow.
3. Criar uma feature branch.
4. Fazer commits dentro da feature.
5. Finalizar a feature.
6. Criar uma release branch.
7. Simular correcao em release.
8. Criar um hotfix.
9. Observar o historico final do repositorio.

## Perguntas de reflexao

1. Qual a funcao da branch `main`?
2. Qual a funcao da branch `develop`?
3. Quando usar uma feature branch?
4. Quando usar uma release branch?
5. Quando usar um hotfix?
6. Gitflow e sempre a melhor opcao?
7. Em que tipo de time Gitflow pode ser pesado demais?

## Checkpoint

Responda com suas palavras:

> Como eu explicaria Gitflow para um dev que so usa branch direto da main?

## Criterio de sucesso

Voce pode avancar quando conseguir desenhar o caminho de uma feature, uma release e um hotfix sem misturar as responsabilidades das branches.
