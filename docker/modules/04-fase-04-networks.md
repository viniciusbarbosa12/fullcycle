# Fase 4: Networks

## Aulas

- Entendento tipos de Network
- Trabalhando com bridge
- Trabalhando com host
- Container acessando nossa maquina

## Objetivo

Entender como containers conversam entre si, com minha máquina e com o mundo externo.

## Conceitos principais

- Bridge network
- Host network
- Port mapping
- DNS interno do Docker
- Comunicação container para container
- Comunicação container para host
- Isolamento de rede

## Exercícios práticos

- Criar uma network customizada.
- Subir dois containers na mesma network.
- Fazer um container acessar outro pelo nome.
- Testar acesso via porta exposta.
- Testar comunicação do container com a máquina local.

## Perguntas de reflexão

- Por que dois containers na mesma bridge conseguem conversar?
- Por que às vezes uso o nome do container em vez de `localhost`?
- O que significa expor uma porta?
- Qual a diferença entre porta dentro do container e porta da minha máquina?
