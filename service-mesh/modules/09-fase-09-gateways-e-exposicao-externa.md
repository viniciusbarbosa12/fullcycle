# Fase 9: Gateways e exposição externa

## Aulas

- Iniciando com gateways
- Configurando ingress gateway
- Reconfigurando virtual service
- Trabalhando com prefixos
- Configurando domínios

## Objetivo

Aprender a expor serviços para fora do cluster usando Istio Gateway e VirtualService.

## Conceitos principais

- Istio Gateway
- Ingress Gateway
- Host
- Port
- Protocol
- VirtualService
- Prefix match
- URI routing
- Domínios
- DNS local
- Roteamento externo
- Entrada de tráfego no mesh

## Exercícios práticos

- Criar um Gateway.
- Configurar host e porta.
- Reconfigurar VirtualService para usar o gateway.
- Criar rota por prefixo.
- Criar mais de um caminho para serviços diferentes.
- Configurar domínio local.
- Acessar a aplicação de fora do cluster.
- Validar comportamento no Kiali.

## Perguntas de reflexão

- Qual a diferença entre Gateway e VirtualService?
- Por que preciso de Gateway para tráfego externo?
- O que é prefix match?
- Como eu rotearia `/api` para backend e `/app` para frontend?
- Como domínios ajudam em ambientes reais?
- Qual a diferença entre Kubernetes Ingress e Istio Gateway?

## Checkpoint

Ter uma aplicação acessível externamente via Istio Gateway, com rotas por prefixo e domínio configurado.
