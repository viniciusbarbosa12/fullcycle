# Plano de Aprendizado API Gateway com Kong

Este plano foi criado para estudar API Gateway com Kong de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender por que API Gateway existe, quais problemas ele resolve em arquiteturas modernas e como usar Kong para expor APIs, controlar rotas, aplicar plugins, autenticação, rate limiting, correlation id e observabilidade.

O objetivo é sair desse curso conseguindo explicar e implementar um API Gateway em um cenário real, entendendo quando usar, quando evitar, quais riscos ele adiciona e como ele se conecta com microservices, segurança, times, monitoramento, logging e tracing.

---

# Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de configuração/comandos.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de APIs, microservices e produção.

O objetivo é priorizar aprendizado profundo, não velocidade.

---

# Grade do curso

## Conceitos Básicos

- Introdução - 01:25
- APIs - 09:29
- O que é Gateway - 14:18
- Tipos API Gateway - 16:09
- Papel API Gateway - 07:10
- Vantagens e desvantagens API Gateway - 08:19
- Como escolher API Gateway - 13:36

## Código-fonte

- Código-fonte - sem duração

## Kong API Gateway

- kong API Gateway - 09:10
- Subscriptions - 05:20
- Modelos Deployment - 07:53
- Docker Compose - 08:37
- Konga - 10:27
- Serviços - 06:01
- Rotas - 11:18
- Plugins - 07:11
- Correlation id - 08:10
- Rate limiting ip - 12:42
- Response tranformer - 07:59
- Consumers - 06:39
- Basic auth - 06:16
- Key authentication - 06:27

## Decisões na escolha do API Gateway

- Características não funcionais - 14:03
- Desenho equipes - 07:35

## Observabilidade

- Monitoramento - 11:43
- Logging - 09:56
- Tracing - 10:36
- Day two - 06:24

---

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

---

# Fase 2: Código-fonte e projeto base

## Aula

- Código-fonte

## Objetivo

Entender a estrutura do projeto usado no curso antes de configurar o gateway.

Antes de rotear tráfego, preciso entender quais serviços existem, quais portas usam, quais endpoints expõem e qual problema o gateway vai resolver.

## Conceitos principais

- Repositório base
- Serviços internos
- Endpoints
- Portas
- Docker Compose
- Configuração local
- Dependências
- Fluxo de requisição
- README técnico

## Exercícios práticos

- Clonar ou criar um projeto base.
- Identificar quais serviços/API existem.
- Identificar portas usadas por cada serviço.
- Rodar os serviços localmente.
- Testar os endpoints sem gateway.
- Criar um README explicando a arquitetura inicial.
- Desenhar o fluxo “antes do gateway”.

## Perguntas de reflexão

- Antes de configurar um gateway, o que eu preciso saber sobre as APIs?
- Por que é importante testar os serviços sem gateway primeiro?
- Como eu saberia se um erro está no gateway ou no serviço?
- Como organizar o README para outro dev subir o ambiente?

## Checkpoint

Criar um README com:

- Serviços existentes
- Portas
- Endpoints principais
- Como rodar localmente
- Como testar sem gateway
- O que será responsabilidade do gateway

---

# Fase 3: Kong API Gateway e ambiente local

## Aulas

- kong API Gateway
- Subscriptions
- Modelos Deployment
- Docker Compose
- Konga

## Objetivo

Subir o Kong localmente, entender seus componentes principais e preparar um ambiente de laboratório.

## Conceitos principais

- Kong API Gateway
- Control plane
- Data plane
- Admin API
- Proxy
- Database mode
- DB-less mode
- Declarative config
- Subscriptions
- Modelos de deployment
- Docker Compose
- Konga
- Interface administrativa
- Configuração local

## Exercícios práticos

- Subir Kong com Docker Compose.
- Identificar porta do proxy.
- Identificar porta da Admin API.
- Acessar interface administrativa, se disponível.
- Validar se o Kong está respondendo.
- Criar uma documentação local com portas e componentes.
- Comparar database mode e DB-less mode em alto nível.

## Perguntas de reflexão

- O que é o Kong?
- Qual a diferença entre proxy e Admin API?
- O que é control plane?
- O que é data plane?
- Quando usar database mode?
- Quando usar DB-less?
- Por que rodar com Docker Compose facilita o estudo?
- O que o Konga facilita?

## Checkpoint

Ter um ambiente local onde:

- Kong está rodando.
- Admin API responde.
- Proxy responde.
- Interface administrativa está acessível, se usada.
- O README explica como subir e validar o ambiente.

---

# Fase 4: Serviços e rotas no Kong

## Aulas

- Serviços
- Rotas

## Objetivo

Aprender o coração do Kong: configurar serviços internos e criar rotas públicas para acessá-los.

## Conceitos principais

- Service no Kong
- Route no Kong
- Upstream service
- Path
- Host
- Method
- Roteamento
- Proxy reverso
- Request flow
- Separação entre Service e Route

## Exercícios práticos

- Criar um serviço no Kong apontando para uma API interna.
- Criar uma rota para esse serviço.
- Testar chamada passando pelo Kong.
- Criar uma segunda rota para outro endpoint.
- Testar roteamento por path.
- Testar roteamento por método HTTP, se aplicável.
- Desenhar o fluxo cliente -> Kong -> API interna.

## Perguntas de reflexão

- Qual a diferença entre Service e Route no Kong?
- Por que o Kong separa esses dois conceitos?
- O que acontece se a rota estiver certa, mas o serviço apontar para URL errada?
- Como eu debuggaria um erro 404 vindo do Kong?
- Como eu debuggaria um erro 502 vindo do Kong?

## Checkpoint

Conseguir acessar uma API interna através do Kong usando uma rota pública.

---

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

---

# Fase 6: Consumers e autenticação

## Aulas

- Consumers
- Basic auth
- Key authentication

## Objetivo

Entender como o Kong identifica consumidores e aplica autenticação nas APIs.

## Conceitos principais

- Consumer
- Credenciais
- Basic Auth
- Key Authentication
- API Key
- Segurança
- Identificação de cliente
- Credenciais por consumer
- Autenticação no gateway
- Políticas por consumer

## Exercícios práticos

- Criar um consumer.
- Configurar Basic Auth.
- Testar chamada sem credencial.
- Testar chamada com credencial inválida.
- Testar chamada com credencial válida.
- Configurar Key Authentication.
- Criar uma API key para o consumer.
- Testar acesso usando chave.
- Comparar Basic Auth e Key Auth.

## Perguntas de reflexão

- O que é um consumer no Kong?
- Por que autenticar no gateway?
- Basic Auth é suficiente em produção?
- Quando API Key faz sentido?
- Qual o risco de vazar uma API key?
- Como eu rotacionaria uma chave?
- Qual a diferença entre autenticação e autorização?
- O que ainda precisaria ficar na aplicação mesmo usando autenticação no gateway?

## Checkpoint

Ter uma rota que só pode ser acessada por um consumer autenticado.

---

# Fase 7: Decisões na escolha de API Gateway

## Aulas

- Características não funcionais
- Desenho equipes

## Objetivo

Aprender a escolher um API Gateway olhando além da ferramenta.

A decisão não é só técnica. Envolve performance, custo, operação, time, segurança, governança, cloud, modelo de deploy e maturidade da empresa.

## Conceitos principais

- Requisitos não funcionais
- Performance
- Escalabilidade
- Latência
- Alta disponibilidade
- Segurança
- Custo
- Operação
- Governança
- Autonomia de times
- Modelo centralizado
- Modelo federado
- Times de plataforma
- Ownership
- Padrões de API

## Exercícios práticos

- Criar uma matriz simples de decisão para escolher um API Gateway.
- Comparar Kong, AWS API Gateway, NGINX, Traefik e Istio Gateway em alto nível.
- Listar critérios importantes para uma empresa pequena.
- Listar critérios importantes para uma empresa grande.
- Desenhar dois modelos: gateway centralizado e gateway por domínio/time.
- Escrever uma recomendação técnica para um cenário fictício.

## Perguntas de reflexão

- Que características não funcionais importam em um gateway?
- Como o gateway impacta latência?
- Quem deveria ser dono do gateway?
- Um time central deve controlar tudo?
- Times de produto deveriam conseguir configurar suas próprias rotas?
- Quando usar gateway gerenciado da cloud?
- Quando usar Kong self-hosted?
- Quando API Gateway vira gargalo organizacional?

## Checkpoint

Conseguir justificar a escolha de um API Gateway para um cenário realista.

---

# Fase 8: Observabilidade

## Aulas

- Monitoramento
- Logging
- Tracing
- Day two

## Objetivo

Entender como operar um API Gateway depois que ele está rodando.

Subir o gateway é o começo. O “day two” é onde a verdade aparece: monitorar latência, erros, tráfego, logs, tracing, alertas, incidentes, gargalos e comportamento dos clientes.

## Conceitos principais

- Observabilidade
- Monitoramento
- Métricas
- Logs
- Tracing
- Latência
- Throughput
- Taxa de erro
- Saturação
- Correlation ID
- Dashboards
- Alertas
- Day two operations
- Operação em produção
- Troubleshooting

## Exercícios práticos

- Listar métricas importantes para um API Gateway.
- Criar um checklist de monitoramento.
- Simular erro em uma API interna e observar como isso aparece no gateway.
- Usar correlation id para rastrear uma request.
- Desenhar fluxo de tracing de uma requisição.
- Criar um pequeno guia de troubleshooting.
- Escrever quais alertas seriam importantes em produção.

## Perguntas de reflexão

- O que eu deveria monitorar em um API Gateway?
- Qual a diferença entre monitoramento, logging e tracing?
- Como correlation id ajuda no debug?
- Como eu investigaria aumento de erro 5xx?
- Como eu investigaria aumento de latência?
- Que logs não deveriam ser registrados por segurança?
- O que significa operar o gateway no day two?

## Checkpoint

Criar um guia pessoal de operação contendo:

- Métricas importantes
- Logs importantes
- Como usar correlation id
- Como investigar erro 4xx
- Como investigar erro 5xx
- Como investigar latência
- Alertas recomendados

---

# Fase 9: Projeto final

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente local com Kong API Gateway contendo:

- Docker Compose
- Pelo menos 2 APIs internas
- Kong rodando localmente
- Admin API acessível
- Interface administrativa, se usada
- Services configurados
- Routes configuradas
- Plugin de correlation id
- Plugin de rate limiting por IP
- Plugin de response transformer
- Consumers configurados
- Basic Auth em uma rota
- Key Authentication em outra rota
- README explicando a arquitetura
- Guia de troubleshooting
- Seção de observabilidade e métricas importantes
- Matriz de decisão explicando por que Kong foi escolhido nesse cenário

## Critérios de sucesso

O projeto final precisa demonstrar:

- Entendimento do papel de API Gateway
- Kong rodando corretamente
- Services e Routes funcionando
- Plugins aplicados corretamente
- Rate limiting funcionando
- Correlation id presente nas requests
- Consumers configurados
- Autenticação funcionando
- README claro
- Entendimento dos riscos
- Capacidade de explicar vantagens e desvantagens
- Capacidade de operar e debugar o gateway

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

> Terminei, olha minha configuração/comandos

A resposta esperada da revisão deve conter:

1. O que está certo.
2. O que pode melhorar.
3. Riscos.
4. Boas práticas.
5. O que estudar antes de avançar.
6. Se posso avançar ou se preciso reforçar.

---

# Ritmo recomendado

O curso tem cerca de 4h04 de videoaulas, mas o foco é praticar bastante.

## Sugestão de ritmo em 10 dias

### Dia 1

- Introdução
- APIs
- O que é Gateway
- Papel do API Gateway

### Dia 2

- Tipos de API Gateway
- Vantagens e desvantagens
- Como escolher API Gateway

### Dia 3

- Código-fonte
- Ambiente local
- Kong com Docker Compose

### Dia 4

- Konga
- Services
- Routes

### Dia 5

- Plugins
- Correlation id
- Response transformer

### Dia 6

- Rate limiting por IP
- Testes de limite
- Riscos de configuração

### Dia 7

- Consumers
- Basic Auth
- Key Authentication

### Dia 8

- Decisões de escolha
- Características não funcionais
- Desenho de equipes

### Dia 9

- Monitoramento
- Logging
- Tracing
- Day two

### Dia 10

- Projeto final
- Revisão geral
- README final

---

# Perguntas clássicas de entrevista e trabalho real

Ao final do plano, eu devo conseguir responder:

1. O que é uma API?
2. O que é API Gateway?
3. Qual problema um API Gateway resolve?
4. Qual a diferença entre API Gateway e Load Balancer?
5. Qual a diferença entre API Gateway e BFF?
6. Quais tipos de API Gateway existem?
7. Quais são as vantagens de usar API Gateway?
8. Quais são as desvantagens de usar API Gateway?
9. Quando API Gateway pode ser exagero?
10. O que é Kong?
11. O que é Service no Kong?
12. O que é Route no Kong?
13. Qual a diferença entre Service e Route?
14. O que é plugin no Kong?
15. Quando aplicar plugin global, por serviço ou por rota?
16. Para que serve correlation id?
17. Para que serve rate limiting?
18. Como rate limiting ajuda na proteção da API?
19. O que é response transformer?
20. O que é consumer no Kong?
21. O que é Basic Auth?
22. O que é Key Authentication?
23. Qual a diferença entre autenticação e autorização?
24. Quais critérios usar para escolher um API Gateway?
25. Como o desenho de equipes influencia a escolha do gateway?
26. O que monitorar em um API Gateway?
27. Qual a diferença entre monitoramento, logging e tracing?
28. O que significa day two operations?
29. Como investigar erro 502 no gateway?
30. Como investigar aumento de latência no gateway?

---

# Regras da mentoria

Durante todo o curso, a prioridade é meu aprendizado.

Não entregue respostas completas de primeira.

Antes de responder uma dúvida, tente me fazer pensar.

Quando eu errar, corrija diretamente e explique o motivo.

Quando eu acertar, diga o que está bom e como posso melhorar.

Sempre que possível, conecte o assunto com situações reais de trabalho, como:

- Frontend chamando APIs demais diretamente
- Microservices expostos sem controle
- Falta de rate limiting causando abuso
- API key vazada
- Erro 502 no gateway
- Rota mal configurada
- Serviço interno fora do ar
- Latência subindo depois de aplicar plugin
- Falta de correlation id dificultando debug
- Gateway centralizado virando gargalo de time
- Time de plataforma controlando padrões
- Observabilidade ruim em produção
- Logging de dados sensíveis
- Escolha errada de gateway para o tamanho da empresa

---

# Primeira missão

Assistir às aulas:

> Introdução
> APIs
> O que é Gateway

Depois responder com minhas palavras:

> Qual problema real um API Gateway resolve quando uma aplicação começa a ter várias APIs e vários clientes diferentes?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
