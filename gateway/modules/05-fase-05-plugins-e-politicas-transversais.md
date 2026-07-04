# Fase 5: Plugins e políticas transversais

## Aulas

- Plugins
- Correlation id
- Rate limiting ip
- Response tranformer

## Objetivo

Entender como plugins permitem aplicar políticas transversais sem alterar o código das APIs.

Essa é uma das partes mais importantes do curso. O gateway começa a brilhar quando ele centraliza comportamentos como correlação de requisições, limite de taxa, transformação de resposta e regras de segurança.

## Conceitos principais

- Plugin
- Plugin global
- Plugin por serviço
- Plugin por rota
- Correlation ID
- Traceability
- Rate limiting
- Limite por IP
- Proteção contra abuso
- Response transformer
- Padronização de respostas
- Políticas transversais

## Exercícios práticos

- Ativar plugin de correlation id.
- Fazer uma request e verificar o header gerado.
- Ativar rate limiting por IP.
- Fazer várias chamadas até atingir o limite.
- Observar o comportamento quando estoura o limite.
- Ativar response transformer.
- Alterar ou remover algum header de resposta.
- Documentar em quais camadas cada plugin foi aplicado.

## Perguntas de reflexão

- O que é um plugin no Kong?
- Quando aplicar plugin global?
- Quando aplicar plugin por serviço?
- Quando aplicar plugin por rota?
- Por que correlation id ajuda em produção?
- Rate limiting protege contra quais problemas?
- Qual o risco de rate limiting mal configurado?
- O que response transformer resolve?
- O que eu não deveria transformar no gateway?

## Checkpoint

Ter uma rota protegida por rate limiting, com correlation id ativo e resposta transformada de forma controlada.
