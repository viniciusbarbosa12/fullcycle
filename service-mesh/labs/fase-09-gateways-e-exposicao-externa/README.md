# Lab Fase 9 - Gateways e exposição externa

## Missao

Pratique os conceitos da Fase 9 antes de pedir revisao.

## Exercicios praticos

- Criar um Gateway.
- Configurar host e porta.
- Reconfigurar VirtualService para usar o gateway.
- Criar rota por prefixo.
- Criar mais de um caminho para serviços diferentes.
- Configurar domínio local.
- Acessar a aplicação de fora do cluster.
- Validar comportamento no Kiali.

## Antes de pedir revisao

- Qual a diferença entre Gateway e VirtualService?
- Por que preciso de Gateway para tráfego externo?
- O que é prefix match?
- Como eu rotearia `/api` para backend e `/app` para frontend?
- Como domínios ajudam em ambientes reais?
- Qual a diferença entre Kubernetes Ingress e Istio Gateway?

## Criterio de sucesso

Ter uma aplicação acessível externamente via Istio Gateway, com rotas por prefixo e domínio configurado.
