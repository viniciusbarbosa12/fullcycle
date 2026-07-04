# Projeto final - Service Mesh com Istio

Este diretorio serve como guia para a consolidacao final do curso.

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente local com Istio contendo:

- Cluster k3d
- Istio instalado
- Sidecar injection ativado
- Addons instalados
- Aplicação com pelo menos 2 serviços
- Pelo menos 2 versões de um serviço
- VirtualService
- DestinationRule
- Deploy canário
- Alteração gradual de tráfego
- Consistent hash
- Fault injection
- Circuit breaker
- Ingress Gateway
- Rotas por prefixo
- Domínio local
- Observabilidade com Kiali
- README explicando toda a arquitetura

## Criterios de sucesso

O projeto final precisa demonstrar:

- Entendimento de Service Mesh
- Instalação funcional do Istio
- Sidecars injetados corretamente
- Tráfego controlado por VirtualService
- Subsets definidos por DestinationRule
- Canary deploy funcionando
- Load balancing configurado
- Consistent hash funcionando
- Fault injection aplicada e removida
- Circuit breaker funcionando
- Gateway expondo aplicação
- Observabilidade no Kiali
- README claro
- Capacidade de explicar quando usar e quando não usar Istio
