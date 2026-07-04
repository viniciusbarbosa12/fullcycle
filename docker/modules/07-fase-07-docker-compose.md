# Fase 7: Docker Compose

## Aulas

- Iniciando com Docker-compose
- Buildando images com Docker-compose
- Criando banco de dados MySQL
- Configurando app node com docker-compose
- Node vs MySQL
- Dependência entre containers

## Objetivo

Subir uma aplicação com múltiplos serviços de forma organizada.

## Conceitos principais

- `docker-compose.yml`
- Services
- Build
- Image
- Ports
- Volumes
- Environment variables
- `depends_on`
- Networks
- App + banco
- Ordem de inicialização
- Healthcheck

## Exercícios práticos

- Criar um Compose com uma aplicação Node.
- Adicionar MySQL.
- Configurar variáveis de ambiente.
- Conectar Node ao MySQL.
- Persistir dados do MySQL com volume.
- Testar parar, remover e subir tudo de novo.
- Entender quando o banco ainda não está pronto mesmo com `depends_on`.

## Perguntas de reflexão

- Por que Compose é melhor do que vários `docker run` soltos?
- O que o `depends_on` resolve?
- O que o `depends_on` não resolve?
- Por que banco precisa de volume?
- Por que a app não deve usar `localhost` para conectar no MySQL dentro do Compose?
