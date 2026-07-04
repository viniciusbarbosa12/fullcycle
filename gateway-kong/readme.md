# Plano de Aprendizado Kong no Kubernetes, APIOps, GitOps e Testes de Carga

Este plano foi criado para estudar Kong no Kubernetes de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como o Kong funciona dentro de um cluster Kubernetes, como usar Ingress Controller, CRDs, plugins, autenticação com OpenID, APIOps, GitOps, validação de contratos OpenAPI, pipelines com Argo, testes de carga com K6/Testkube e operação em ambientes produtivos.

O objetivo é sair desse curso conseguindo implementar e operar Kong em Kubernetes com uma visão mais profissional, entendendo não só “como configurar”, mas também por que cada decisão existe.

---

# Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de YAML/comandos.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de Kubernetes, API Gateway, plataforma e produção.

O objetivo é priorizar aprendizado profundo, não velocidade.

---

# Grade do curso

## Conceitos Básicos

- Principais conceitos - 04:49
- Kubernetes ingress kong - 09:30
- Modelos deployment kong kubernetes - 08:20
- Instalando kong - 13:14
- Ferramentas adicionais - 07:00
- Modificações no repositório - sem duração

## Código-fonte

- Código-fonte - sem duração

## Kong & Kubernetes

- Crd plugins - 07:49
- Kong ingress - 12:23
- Open id provider - 10:21
- Kong openid plugin - 14:51

## APIOps

- APIOps - 10:53
- GitOps - 07:38
- Ferramentas necessárias - 05:38
- Validando openapi lint - 09:55
- Checando contratos - 09:32
- Instalando_argo - 14:47
- Rodando pipeline - 14:25

## Iniciando com Testes de Carga

- K6 testkube - 12:52
- Preparando cluster - 12:58
- Aplicando cargas - 21:38

## Kong em ambientes Produtivos

- Configurando apps logs - 07:25
- Configurando coleta logs kong - 19:45
- Analisando kong - 13:22

---

# Fase 1: Conceitos básicos de Kong no Kubernetes

## Aulas

- Principais conceitos
- Kubernetes ingress kong
- Modelos deployment kong kubernetes
- Instalando kong
- Ferramentas adicionais
- Modificações no repositório

## Objetivo

Entender como o Kong entra no Kubernetes e qual papel ele assume dentro do cluster.

Aqui o foco é sair do “Kong como gateway rodando em Docker Compose” e começar a enxergar o Kong como parte da infraestrutura Kubernetes, funcionando como Ingress Controller, lendo recursos do cluster e aplicando regras de roteamento, plugins e segurança.

## Conceitos principais

- Kubernetes
- Ingress
- Ingress Controller
- Kong Ingress Controller
- API Gateway no Kubernetes
- Services
- Deployments
- Namespaces
- CRDs
- Control plane
- Data plane
- Helm
- kubectl
- Valores de instalação
- Modelos de deployment
- Ambientes locais e produtivos

## Exercícios práticos

- Criar ou preparar um cluster Kubernetes local.
- Verificar se `kubectl` está apontando para o cluster correto.
- Instalar ferramentas necessárias.
- Instalar Kong no cluster.
- Validar os pods do Kong.
- Validar services criados pelo Kong.
- Identificar qual porta recebe tráfego externo.
- Criar um README com a arquitetura inicial.

## Perguntas de reflexão

- Qual a diferença entre Kong rodando em Docker Compose e Kong rodando no Kubernetes?
- O que é um Ingress Controller?
- Por que o Kubernetes precisa de um controller para interpretar recursos de Ingress?
- O que o Kong adiciona além de simplesmente rotear tráfego?
- Quais modelos de deployment fazem sentido para Kong?
- Em produção, que cuidados eu teria antes de instalar um gateway no cluster?

## Checkpoint

Ter um cluster com Kong instalado e conseguir explicar:

- Como o tráfego entra no cluster.
- Qual componente do Kong recebe a requisição.
- Como o Kong se conecta aos services internos.
- Qual a diferença entre Ingress e Ingress Controller.

---

# Fase 2: Código-fonte e projeto base

## Aula

- Código-fonte

## Objetivo

Entender a estrutura do projeto usado no curso antes de automatizar configurações e aplicar regras.

Antes de configurar ingress, plugins, autenticação ou pipelines, preciso entender quais APIs existem, quais manifests são usados, quais namespaces aparecem e como o repositório está organizado.

## Conceitos principais

- Repositório base
- Manifests Kubernetes
- Estrutura de pastas
- Deployments
- Services
- Ingress
- Plugins
- Arquivos OpenAPI
- Pipelines
- Scripts
- README técnico

## Exercícios práticos

- Clonar ou criar um repositório base.
- Identificar os manifests Kubernetes.
- Identificar os services e deployments.
- Identificar arquivos OpenAPI, se existirem.
- Identificar arquivos relacionados a pipeline.
- Rodar o projeto localmente no cluster.
- Criar um README explicando a estrutura.

## Perguntas de reflexão

- Antes de automatizar o gateway, o que preciso entender sobre o projeto?
- Como eu sei qual service uma rota deve expor?
- Como organizar manifests para não virar caos?
- Que informações um README precisa ter para outro dev rodar isso?

## Checkpoint

Criar um README com:

- Serviços existentes
- Namespaces
- Deployments
- Services
- Rotas esperadas
- Arquivos OpenAPI
- Como aplicar os manifests
- Como validar se tudo está funcionando

---

# Fase 3: Kong & Kubernetes na prática

## Aulas

- Crd plugins
- Kong ingress
- Open id provider
- Kong openid plugin

## Objetivo

Aprender a configurar Kong dentro do Kubernetes usando recursos nativos e CRDs.

Aqui o Kong começa a ser tratado como parte do cluster. Em vez de configurar tudo manualmente pela Admin API, a configuração passa a ser declarativa via YAML.

## Conceitos principais

- CRD
- KongPlugin
- KongClusterPlugin
- Kubernetes Ingress
- Kong Ingress Controller
- Annotations
- Services
- Routes
- Plugins declarativos
- OpenID Connect
- Identity Provider
- Token
- Autenticação no gateway
- Authorization Code Flow
- Client ID
- Client Secret

## Exercícios práticos

- Criar um Ingress para expor uma API pelo Kong.
- Criar um KongPlugin simples.
- Aplicar plugin em uma rota.
- Criar plugin global, se fizer sentido.
- Configurar um provider OpenID.
- Configurar plugin OpenID no Kong.
- Testar chamada sem autenticação.
- Testar chamada autenticada.
- Documentar o fluxo de autenticação.

## Perguntas de reflexão

- O que é um CRD?
- Por que o Kong usa CRDs no Kubernetes?
- Qual a diferença entre KongPlugin e KongClusterPlugin?
- Como o Kong sabe que deve aplicar um plugin em uma rota?
- Qual a diferença entre autenticar na aplicação e autenticar no gateway?
- O que é OpenID Connect?
- O que pode dar errado em uma configuração de autenticação no gateway?

## Checkpoint

Ter uma API exposta pelo Kong Ingress e protegida com plugin configurado via Kubernetes.

---

# Fase 4: APIOps e GitOps

## Aulas

- APIOps
- GitOps
- Ferramentas necessárias
- Validando openapi lint
- Checando contratos
- Instalando_argo
- Rodando pipeline

## Objetivo

Entender como tratar APIs como produto versionado e governado, usando automação para validar contratos, aplicar padrões e sincronizar configurações via GitOps.

Aqui a ideia é parar de configurar gateway “na mão” e começar a trabalhar com uma abordagem mais profissional: contrato versionado, validação automática, pipeline e entrega declarativa.

## Conceitos principais

- APIOps
- GitOps
- OpenAPI
- API contract
- Lint de contrato
- Contract testing
- Pipeline
- Pull Request
- Governança de APIs
- Argo CD
- Desired state
- Sync
- Drift
- Automação
- Validação antes do deploy
- Configuração declarativa

## Exercícios práticos

- Criar ou revisar um arquivo OpenAPI.
- Rodar lint no contrato.
- Introduzir um erro proposital no contrato.
- Fazer o lint falhar.
- Corrigir o contrato.
- Criar validação de contrato na pipeline.
- Instalar Argo CD.
- Criar uma aplicação no Argo.
- Rodar pipeline para aplicar mudanças.
- Validar se o estado do cluster bate com o Git.

## Perguntas de reflexão

- O que é APIOps?
- Qual a diferença entre APIOps e DevOps?
- O que é GitOps?
- Por que o Git vira fonte da verdade?
- O que é drift?
- Por que validar OpenAPI antes de publicar uma API?
- O que um lint de OpenAPI consegue evitar?
- O que ele não consegue garantir?
- Como Argo CD ajuda na entrega declarativa?

## Checkpoint

Ter uma pipeline que valida contrato OpenAPI e um fluxo GitOps capaz de sincronizar configuração no cluster.

---

# Fase 5: Testes de carga com K6 e Testkube

## Aulas

- K6 testkube
- Preparando cluster
- Aplicando cargas

## Objetivo

Aprender a validar comportamento do gateway e das APIs sob carga.

Não adianta a rota funcionar uma vez no Postman e morrer quando recebe tráfego real. Aqui o foco é começar a medir performance, latência, throughput, erros e limites usando testes de carga.

## Conceitos principais

- Teste de carga
- K6
- Testkube
- Virtual users
- RPS
- Latência
- Throughput
- Taxa de erro
- Percentis
- P95
- P99
- Thresholds
- Gargalos
- Saturação
- Testes dentro do cluster
- Testes automatizados

## Exercícios práticos

- Criar um script K6 simples.
- Rodar teste local.
- Instalar ou configurar Testkube.
- Rodar teste contra rota exposta pelo Kong.
- Aumentar carga gradualmente.
- Observar latência e erros.
- Configurar thresholds.
- Fazer o teste falhar por threshold.
- Ajustar e rodar novamente.
- Documentar resultado.

## Perguntas de reflexão

- Por que fazer teste de carga no API Gateway?
- O que é RPS?
- O que é P95?
- O que é P99?
- Por que média de latência pode enganar?
- Que tipo de plugin pode impactar performance?
- Como rate limiting aparece em um teste de carga?
- Qual a diferença entre teste de carga e teste de stress?
- Quando eu rodaria isso em uma pipeline?

## Checkpoint

Ter um teste de carga rodando contra uma rota do Kong e conseguir explicar os resultados.

---

# Fase 6: Kong em ambientes produtivos

## Aulas

- Configurando apps logs
- Configurando coleta logs kong
- Analisando kong

## Objetivo

Entender como operar Kong em produção.

Subir o Kong é uma parte pequena da história. O trabalho real é manter o gateway saudável, observável e seguro: coletar logs, analisar comportamento, investigar erro, medir latência e entender o impacto das rotas e plugins.

## Conceitos principais

- Produção
- Logs de aplicação
- Logs do Kong
- Coleta centralizada
- Observabilidade
- Métricas
- Tracing
- Error rate
- Latência
- Access logs
- Proxy logs
- Admin logs
- Troubleshooting
- Dashboards
- Alertas
- Operação day two
- Análise de tráfego

## Exercícios práticos

- Configurar logs da aplicação.
- Configurar logs do Kong.
- Enviar logs para uma ferramenta centralizada, se disponível.
- Fazer requests válidas e inválidas.
- Observar logs gerados.
- Simular erro 404.
- Simular erro 401.
- Simular erro 502.
- Analisar os logs e identificar origem do problema.
- Criar um guia pessoal de troubleshooting.

## Perguntas de reflexão

- Quais logs são importantes no Kong?
- Como diferenciar erro do gateway e erro da aplicação?
- Como investigar erro 401?
- Como investigar erro 404?
- Como investigar erro 502?
- Que dados não devo logar?
- Como correlation id ajudaria aqui?
- Que alertas eu criaria para produção?
- O que significa operar Kong no day two?

## Checkpoint

Criar um guia de operação com:

- Métricas importantes
- Logs importantes
- Como investigar erro 4xx
- Como investigar erro 5xx
- Como investigar latência
- Como validar se o problema está no Kong ou na API
- Alertas recomendados

---

# Fase 7: Projeto final

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente Kubernetes local com Kong contendo:

- Cluster Kubernetes local
- Kong instalado como Ingress Controller
- API de exemplo rodando no cluster
- Ingress expondo a API via Kong
- KongPlugin configurado via CRD
- OpenID Provider configurado
- OpenID plugin aplicado
- Arquivo OpenAPI versionado
- Lint de OpenAPI
- Validação de contrato
- Pipeline simulando APIOps
- Argo CD sincronizando manifests
- Teste de carga com K6/Testkube
- Logs da aplicação
- Logs do Kong
- Guia de troubleshooting
- README explicando a arquitetura

## Critérios de sucesso

O projeto final precisa demonstrar:

- Entendimento de Kong no Kubernetes
- Uso correto de Ingress Controller
- Uso de CRDs do Kong
- Plugins aplicados de forma declarativa
- Autenticação OpenID funcionando
- Contrato OpenAPI validado
- Pipeline APIOps funcionando
- GitOps com Argo funcionando
- Teste de carga executado
- Logs coletados e analisados
- README claro
- Capacidade de explicar riscos, decisões e trade-offs

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

> Terminei, olha meu YAML/comandos/configuração

A resposta esperada da revisão deve conter:

1. O que está certo.
2. O que pode melhorar.
3. Riscos.
4. Boas práticas.
5. O que estudar antes de avançar.
6. Se posso avançar ou se preciso reforçar.

---

# Ritmo recomendado

O curso tem cerca de 4h09 de videoaulas, mas o foco é praticar bastante.

## Sugestão de ritmo em 10 dias

### Dia 1

- Principais conceitos
- Kubernetes Ingress Kong
- Diferença entre Gateway, Ingress e Ingress Controller

### Dia 2

- Modelos de deployment
- Instalação do Kong
- Ferramentas adicionais

### Dia 3

- Código-fonte
- Estrutura do projeto
- Primeiros manifests

### Dia 4

- CRD plugins
- Kong Ingress
- Plugins declarativos

### Dia 5

- OpenID Provider
- Kong OpenID plugin
- Autenticação no gateway

### Dia 6

- APIOps
- GitOps
- Ferramentas necessárias

### Dia 7

- OpenAPI lint
- Checagem de contratos
- Pipeline

### Dia 8

- Argo CD
- Rodando pipeline
- Git como fonte da verdade

### Dia 9

- K6
- Testkube
- Testes de carga

### Dia 10

- Logs em produção
- Coleta de logs do Kong
- Análise e troubleshooting

---

# Perguntas clássicas de entrevista e trabalho real

Ao final do plano, eu devo conseguir responder:

1. O que é Kong Ingress Controller?
2. Qual a diferença entre Ingress e Ingress Controller?
3. Qual a diferença entre API Gateway e Ingress Controller?
4. Como o Kong funciona dentro do Kubernetes?
5. O que são CRDs?
6. O que é KongPlugin?
7. O que é KongClusterPlugin?
8. Como aplicar plugin em uma rota no Kubernetes?
9. O que é OpenID Connect?
10. Qual a diferença entre OpenID Connect e OAuth2?
11. Por que autenticar no gateway?
12. O que é APIOps?
13. Qual a diferença entre APIOps e GitOps?
14. Por que validar contrato OpenAPI?
15. O que é OpenAPI lint?
16. O que é contract checking?
17. O que é Argo CD?
18. O que significa Git como fonte da verdade?
19. O que é drift?
20. O que é K6?
21. O que é Testkube?
22. O que é P95?
23. O que é P99?
24. Por que média de latência pode enganar?
25. Que logs são importantes no Kong?
26. Como investigar erro 401?
27. Como investigar erro 404?
28. Como investigar erro 502?
29. Como saber se o erro está no gateway ou na aplicação?
30. Quais cuidados eu teria para rodar Kong em produção?

---

# Regras da mentoria

Durante todo o curso, a prioridade é meu aprendizado.

Não entregue respostas completas de primeira.

Antes de responder uma dúvida, tente me fazer pensar.

Quando eu errar, corrija diretamente e explique o motivo.

Quando eu acertar, diga o que está bom e como posso melhorar.

Sempre que possível, conecte o assunto com situações reais de trabalho, como:

- API exposta incorretamente no Kubernetes
- Ingress sem controller funcionando
- Plugin aplicado na rota errada
- Falha em autenticação OpenID
- Token inválido ou expirado
- Contrato OpenAPI quebrando cliente
- Pipeline bloqueando contrato ruim
- GitOps corrigindo drift do cluster
- Teste de carga revelando gargalo
- Gateway com latência alta
- Logs insuficientes para investigar incidente
- Erro 502 causado por service mal configurado
- Falta de padrão em APIs de múltiplos times
- Operação de Kong em produção

---

# Primeira missão

Assistir às aulas:

> Principais conceitos
> Kubernetes ingress kong
> Modelos deployment kong kubernetes

Depois responder com minhas palavras:

> Qual a diferença prática entre usar Kong como API Gateway comum e usar Kong como Ingress Controller dentro do Kubernetes?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
