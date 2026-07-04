# Plano de Aprendizado Docker

Este plano foi criado para estudar o curso de Docker de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender os conceitos, praticar, errar, corrigir e conseguir implementar sozinho depois.

## Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de código.
7. Só mostrar implementação completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer um code review profissional.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de projeto.

O objetivo é priorizar aprendizado profundo, não velocidade.

---

# Fase 1: Ambiente e base mental

## Aulas

- Começando do zero
- Instalando Docker
- Conhecendo o WSL 2
- Instalando WSL 2 do zero
- Backup com WSL 2
- Integrando Docker com WSL 2
- Dicas com WSL 2 e Windows Terminal

## Objetivo

Entender onde o Docker roda, qual o papel do WSL, por que container não é uma VM e como preparar o ambiente corretamente.

## Conceitos principais

- Docker
- Container
- Imagem
- WSL 2
- Docker Engine
- Docker Desktop
- Terminal
- Filesystem Linux vs Windows

## Exercícios práticos

- Validar a instalação do Docker.
- Rodar comandos básicos no terminal.
- Criar uma pasta de estudos.
- Criar um README explicando com minhas palavras o que é Docker.
- Explicar a diferença entre Docker, imagem e container.

## Checkpoint

Responder com minhas palavras:

> Qual a diferença entre Docker, imagem e container?

---

# Fase 2: Primeiros containers

## Aulas

- Hello World
- Executando Ubuntu
- Publicando portas com nginx
- Removendo containers
- Acessando e alterando arquivos de um container
- Iniciando com bind mounts
- Trabalhando com volumes

## Objetivo

Aprender a criar, rodar, parar, remover, acessar e persistir dados em containers.

## Conceitos principais

- `docker run`
- `docker ps`
- `docker stop`
- `docker rm`
- `docker exec`
- Port mapping
- Bind mount
- Volume
- Container efêmero
- Persistência de dados

## Exercícios práticos

- Rodar um container Ubuntu.
- Entrar dentro do container.
- Rodar um nginx e acessar pelo navegador.
- Alterar um arquivo dentro do container.
- Remover o container e observar o que acontece com os dados.
- Repetir o teste usando bind mount.
- Repetir o teste usando volume.

## Perguntas de reflexão

- Por que alterações dentro do container somem?
- Qual a diferença entre bind mount e volume?
- Por que eu não deveria salvar dados importantes só dentro do container?
- Quando usar volume em um projeto real?

---

# Fase 3: Imagens e Dockerfile

## Aulas

- Entendendo imagens e DockerHub
- Criando primeira imagem com Dockerfile
- Avançando com Dockerfile
- ENTRYPOINT vs CMD
- Docker entrypoint exec
- Publicando imagem no DockerHub

## Objetivo

Parar de apenas usar imagens prontas e aprender a criar minhas próprias imagens.

## Conceitos principais

- Imagem
- Container
- Camadas
- Dockerfile
- `FROM`
- `WORKDIR`
- `COPY`
- `RUN`
- `CMD`
- `ENTRYPOINT`
- Tag
- DockerHub
- Build context

## Exercícios práticos

- Criar uma imagem simples com nginx.
- Criar uma imagem com uma aplicação Node simples.
- Alterar `CMD` e observar o comportamento.
- Comparar `CMD` vs `ENTRYPOINT`.
- Buildar uma imagem com tag.
- Rodar minha própria imagem localmente.

## Perguntas de reflexão

- Qual a diferença entre imagem e container?
- Por que Dockerfile usa camadas?
- O que acontece quando eu mudo uma linha no Dockerfile?
- Quando usar `CMD`?
- Quando usar `ENTRYPOINT`?

---

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

---

# Fase 5: Colocando em prática

## Aulas

- Instalando framework em um container
- Ativando entrypoint e command
- Criando aplicação Node.js sem o Node
- Gerando imagem da aplicação Node.js

## Objetivo

Usar Docker como ambiente de desenvolvimento, não só como empacotamento final.

## Conceitos principais

- Rodar comandos dentro do container
- Usar container como ambiente de desenvolvimento
- Evitar instalar tudo localmente
- Gerar app usando container
- Criar imagem de uma aplicação real

## Exercícios práticos

- Criar uma aplicação Node usando container.
- Rodar `npm install` dentro do container.
- Criar um Dockerfile da aplicação.
- Subir a app localmente.
- Testar alteração de código com bind mount.

## Perguntas de reflexão

- Por que seria útil criar uma app Node sem instalar Node localmente?
- Qual o risco de misturar dependências da minha máquina com dependências do container?
- Como isso ajuda em times grandes?
- Como isso melhora onboarding de novos devs?

---

# Fase 6: Otimização de imagens

## Aulas

- Otimização utilizando Multistage Building
- Nginx como proxy reverso

## Objetivo

Aprender a criar imagens menores, mais seguras e mais próximas de produção.

## Conceitos principais

- Multi-stage build
- Imagem de build
- Imagem de runtime
- Redução de tamanho
- Separação de responsabilidades
- Nginx como proxy reverso
- Build de aplicação
- Servidor final

## Exercícios práticos

- Criar uma imagem sem multistage.
- Medir o tamanho da imagem.
- Criar uma versão com multistage.
- Comparar tamanho e segurança.
- Colocar nginx servindo ou proxyando a aplicação.

## Perguntas de reflexão

- Por que não levar ferramentas de build para produção?
- Qual a vantagem de uma imagem menor?
- O que o nginx faz como proxy reverso?
- Em que cenário real eu usaria isso?

---

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

---

# Fase 8: Desafio final

## Aulas

- Desafio
- Desafio Go
- Nginx com Node.js

## Objetivo

Juntar tudo e provar que consigo implementar sozinho.

## Projeto final sugerido

Criar uma aplicação com:

- API Node
- Banco MySQL
- Nginx como proxy reverso
- Dockerfile da API
- Docker Compose
- Volume para banco
- Network entre serviços
- Variáveis de ambiente
- README explicando como rodar
- Teste manual de funcionamento

## Regras do desafio

1. Eu tento implementar primeiro.
2. Depois envio o que fiz.
3. O mentor revisa.
4. O mentor faz perguntas.
5. O mentor aponta erros e melhorias.
6. O mentor dá pistas, não a solução completa.
7. Só recebo a solução completa se eu pedir explicitamente ou depois de tentar bastante.

---

# Fluxo de estudo por aula

Quando eu iniciar uma aula, vou mandar:

> Comecei a aula: Nome da aula

A resposta esperada da mentoria deve conter:

1. Conceito principal da aula.
2. Explicação simples.
3. Exemplo real de projeto.
4. Perguntas para eu responder.
5. Exercício prático.
6. Critério de sucesso.

Quando eu terminar um exercício, vou mandar:

> Terminei, olha meu código/comandos

A resposta esperada da revisão deve conter:

1. O que está certo.
2. O que pode melhorar.
3. Riscos.
4. Boas práticas.
5. O que estudar antes de avançar.
6. Se posso avançar ou se preciso reforçar.

---

# Ritmo recomendado

O curso tem cerca de 6h20 de vídeos, mas o foco é praticar.

## Sugestão de ritmo em 12 dias

### Dia 1

- Ambiente
- WSL
- Docker instalado
- Primeiros comandos

### Dia 2

- Containers básicos
- Ubuntu
- Hello World

### Dia 3

- Portas
- nginx
- `docker exec`
- Remoção de containers

### Dia 4

- Bind mounts
- Volumes
- Persistência de dados

### Dia 5

- Imagens
- DockerHub
- Primeiro Dockerfile

### Dia 6

- Dockerfile avançado
- `CMD`
- `ENTRYPOINT`

### Dia 7

- Networks
- Bridge
- Host
- Comunicação entre containers

### Dia 8

- Aplicação Node usando Docker
- Ambiente de desenvolvimento containerizado

### Dia 9

- Multistage build
- Otimização de imagem
- Nginx como proxy reverso

### Dia 10

- Docker Compose
- App + banco
- Variáveis de ambiente

### Dia 11

- Dependência entre containers
- Volumes no Compose
- Ajustes do projeto final

### Dia 12

- Desafio final
- Revisão
- Refatoração
- README final

---

# Primeira missão

Assistir à aula:

> Introdução

Depois responder com minhas palavras:

> O que o Docker resolve na vida de um desenvolvedor?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
