# Lab Fase 3 - Kong & Kubernetes na prática

## Missao

Pratique os conceitos da Fase 3 antes de pedir revisao.

## Exercicios praticos

- Criar um Ingress para expor uma API pelo Kong.
- Criar um KongPlugin simples.
- Aplicar plugin em uma rota.
- Criar plugin global, se fizer sentido.
- Configurar um provider OpenID.
- Configurar plugin OpenID no Kong.
- Testar chamada sem autenticação.
- Testar chamada autenticada.
- Documentar o fluxo de autenticação.

## Antes de pedir revisao

- O que é um CRD?
- Por que o Kong usa CRDs no Kubernetes?
- Qual a diferença entre KongPlugin e KongClusterPlugin?
- Como o Kong sabe que deve aplicar um plugin em uma rota?
- Qual a diferença entre autenticar na aplicação e autenticar no gateway?
- O que é OpenID Connect?
- O que pode dar errado em uma configuração de autenticação no gateway?

## Criterio de sucesso

Ter uma API exposta pelo Kong Ingress e protegida com plugin configurado via Kubernetes.
