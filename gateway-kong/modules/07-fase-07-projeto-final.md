# Fase 7: Projeto final

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente Kubernetes local com Kong contendo:

- Cluster Kubernetes local
- Kong instalado como Ingress Controller
- API de exemplo rodando no cluster
- Ingress expondo a API via Kong
- KongPlugin configurado via CRD
- OpenID Provider configurado
- OpenID plugin aplicado
- Arquivo OpenAPI versionado
- Lint de OpenAPI
- Validação de contrato
- Pipeline simulando APIOps
- Argo CD sincronizando manifests
- Teste de carga com K6/Testkube
- Logs da aplicação
- Logs do Kong
- Guia de troubleshooting
- README explicando a arquitetura

## Critérios de sucesso

O projeto final precisa demonstrar:

- Entendimento de Kong no Kubernetes
- Uso correto de Ingress Controller
- Uso de CRDs do Kong
- Plugins aplicados de forma declarativa
- Autenticação OpenID funcionando
- Contrato OpenAPI validado
- Pipeline APIOps funcionando
- GitOps com Argo funcionando
- Teste de carga executado
- Logs coletados e analisados
- README claro
- Capacidade de explicar riscos, decisões e trade-offs
