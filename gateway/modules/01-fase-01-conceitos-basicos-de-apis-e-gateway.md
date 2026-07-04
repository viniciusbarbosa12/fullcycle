# Fase 1: Conceitos básicos de APIs e Gateway

## Aulas

- Introdução
- APIs
- O que é Gateway
- Tipos API Gateway
- Papel API Gateway
- Vantagens e desvantagens API Gateway
- Como escolher API Gateway

## Objetivo

Entender o problema antes da ferramenta.

API Gateway não é só “uma porta de entrada”. Ele existe para centralizar preocupações que aparecem quando várias APIs precisam ser expostas, protegidas, monitoradas e consumidas por diferentes clientes.

## Conceitos principais

- API
- API Gateway
- Reverse proxy
- Entrada única
- Roteamento
- Autenticação
- Autorização
- Rate limiting
- Transformação de request/response
- Observabilidade
- Logging
- Tracing
- Segurança
- Gateway interno vs externo
- BFF
- Edge gateway
- Gateway por domínio
- Gateway centralizado
- Trade-offs arquiteturais

## Exercícios práticos

- Desenhar uma arquitetura simples com frontend, API Gateway e 3 APIs internas.
- Explicar com minhas palavras por que o frontend não deveria conhecer diretamente todos os serviços internos.
- Listar responsabilidades que fazem sentido colocar no gateway.
- Listar responsabilidades que não deveriam ir para o gateway.
- Comparar API Gateway com Load Balancer.
- Criar um pequeno README explicando quando eu usaria API Gateway em um projeto real.

## Perguntas de reflexão

- O que é uma API?
- O que é um API Gateway?
- Qual problema o API Gateway resolve?
- Qual a diferença entre API Gateway e Load Balancer?
- O que acontece quando todo cliente chama todos os microservices diretamente?
- Quais vantagens um gateway traz?
- Quais riscos um gateway adiciona?
- Quando API Gateway pode virar gargalo?
- Como escolher um API Gateway para uma empresa?

## Checkpoint

Responder com minhas palavras:

> Por que um time usaria API Gateway em uma arquitetura com múltiplas APIs?
