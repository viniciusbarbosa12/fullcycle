# Lab Fase 5 - Plugins e políticas transversais

## Missao

Pratique os conceitos da Fase 5 antes de pedir revisao.

## Exercicios praticos

- Ativar plugin de correlation id.
- Fazer uma request e verificar o header gerado.
- Ativar rate limiting por IP.
- Fazer várias chamadas até atingir o limite.
- Observar o comportamento quando estoura o limite.
- Ativar response transformer.
- Alterar ou remover algum header de resposta.
- Documentar em quais camadas cada plugin foi aplicado.

## Antes de pedir revisao

- O que é um plugin no Kong?
- Quando aplicar plugin global?
- Quando aplicar plugin por serviço?
- Quando aplicar plugin por rota?
- Por que correlation id ajuda em produção?
- Rate limiting protege contra quais problemas?
- Qual o risco de rate limiting mal configurado?
- O que response transformer resolve?
- O que eu não deveria transformar no gateway?

## Criterio de sucesso

Ter uma rota protegida por rate limiting, com correlation id ativo e resposta transformada de forma controlada.
