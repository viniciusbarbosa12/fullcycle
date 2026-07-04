# Fase 9: Ingress e DNS

## Aulas

- Visão geral
- Configurando aplicação no GKE
- Instalando ingress nginx controller
- Configurando Ingress e DNS

## Objetivo

Expor aplicações HTTP/HTTPS de forma mais profissional.

Service expõe aplicação, mas Ingress permite roteamento por host, path e integração com controlador de entrada. Em produção, Ingress costuma ser a porta HTTP da aplicação.

## Conceitos principais

- Ingress
- Ingress Controller
- NGINX Ingress Controller
- Host
- Path
- DNS
- GKE
- Load Balancer
- Regras HTTP
- Exposição externa
- Roteamento por domínio

## Exercícios práticos

- Instalar Ingress NGINX Controller.
- Criar recurso Ingress.
- Configurar rota por host.
- Configurar rota por path.
- Apontar domínio ou DNS local.
- Testar acesso externo.
- Observar logs do controller.
- Comparar Ingress com Service LoadBalancer.

## Perguntas de reflexão

- Qual a diferença entre Ingress e Ingress Controller?
- Por que criar Ingress sem controller não resolve?
- Quando usar Ingress em vez de LoadBalancer direto?
- Como funciona roteamento por host?
- Como funciona roteamento por path?
- O que o DNS precisa fazer?
- Qual o papel do controller NGINX?

## Checkpoint

Ter uma aplicação acessível por domínio ou host configurado usando Ingress.
