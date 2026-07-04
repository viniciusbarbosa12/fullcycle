# Lab Fase 4 - Serviços e rotas no Kong

## Missao

Pratique os conceitos da Fase 4 antes de pedir revisao.

## Exercicios praticos

- Criar um serviço no Kong apontando para uma API interna.
- Criar uma rota para esse serviço.
- Testar chamada passando pelo Kong.
- Criar uma segunda rota para outro endpoint.
- Testar roteamento por path.
- Testar roteamento por método HTTP, se aplicável.
- Desenhar o fluxo cliente -> Kong -> API interna.

## Antes de pedir revisao

- Qual a diferença entre Service e Route no Kong?
- Por que o Kong separa esses dois conceitos?
- O que acontece se a rota estiver certa, mas o serviço apontar para URL errada?
- Como eu debuggaria um erro 404 vindo do Kong?
- Como eu debuggaria um erro 502 vindo do Kong?

## Criterio de sucesso

Conseguir acessar uma API interna através do Kong usando uma rota pública.
