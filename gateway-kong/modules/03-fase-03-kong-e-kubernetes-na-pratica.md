# Fase 3: Kong & Kubernetes na prática

## Aulas

- Crd plugins
- Kong ingress
- Open id provider
- Kong openid plugin

## Objetivo

Aprender a configurar Kong dentro do Kubernetes usando recursos nativos e CRDs.

Aqui o Kong começa a ser tratado como parte do cluster. Em vez de configurar tudo manualmente pela Admin API, a configuração passa a ser declarativa via YAML.

## Conceitos principais

- CRD
- KongPlugin
- KongClusterPlugin
- Kubernetes Ingress
- Kong Ingress Controller
- Annotations
- Services
- Routes
- Plugins declarativos
- OpenID Connect
- Identity Provider
- Token
- Autenticação no gateway
- Authorization Code Flow
- Client ID
- Client Secret

## Exercícios práticos

- Criar um Ingress para expor uma API pelo Kong.
- Criar um KongPlugin simples.
- Aplicar plugin em uma rota.
- Criar plugin global, se fizer sentido.
- Configurar um provider OpenID.
- Configurar plugin OpenID no Kong.
- Testar chamada sem autenticação.
- Testar chamada autenticada.
- Documentar o fluxo de autenticação.

## Perguntas de reflexão

- O que é um CRD?
- Por que o Kong usa CRDs no Kubernetes?
- Qual a diferença entre KongPlugin e KongClusterPlugin?
- Como o Kong sabe que deve aplicar um plugin em uma rota?
- Qual a diferença entre autenticar na aplicação e autenticar no gateway?
- O que é OpenID Connect?
- O que pode dar errado em uma configuração de autenticação no gateway?

## Checkpoint

Ter uma API exposta pelo Kong Ingress e protegida com plugin configurado via Kubernetes.
