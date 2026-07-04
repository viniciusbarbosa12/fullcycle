# Plano de Aprendizado Integração Contínua, GitHub Actions, Docker e SonarQube

Este plano foi criado para estudar o curso de Integração Contínua de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como uma pipeline de CI funciona em um projeto profissional: rodar testes automaticamente, bloquear código quebrado, usar status checks, trabalhar com matriz de execução, buildar imagens Docker, publicar imagens automaticamente e validar qualidade com SonarQube/SonarCloud.

O objetivo é sair desse curso conseguindo criar uma pipeline de CI sozinho, entender os erros, corrigir falhas e conectar esse fluxo com Pull Requests, Code Review e entrega segura de software.

---

# Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de código/comandos.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de projetos e times de desenvolvimento.

O objetivo é priorizar aprendizado profundo, não velocidade.

---

# Grade do curso

## Introdução

- Iniciando com Integração contínua - 22:21

## Código-fonte

- Código-fonte - sem duração

## Iniciando com CI

- Criando software exemplo - 05:28
- Criando primeiro workflow - 12:07
- Fazendo github actions não passar - 05:46
- Ativando status check - 12:39
- Trabalhando com Strategy Matrix - 10:46

## CI com Docker

- Criando Dockerfile - 05:22
- Errata - Criando Dockerfile - sem duração
- Gerando build da imagem via CI - 15:21
- Dando push na imagem automaticamente - 08:33

## SonarQube

- Iniciando com Sonarqube - 05:05
- Conceitos principais - 13:50
- Instalando primeiro projeto - 09:50
- Trabalhando com cobertura de código - 10:52
- Cobrindo código Javascript - 11:37
- Preparando ambiente para o SonarCloud - 09:08
- Executando SonarCloud - 17:31
- Trocando de Quality Gate - 05:18

## Questionário

- Questionário - sem duração

---

# Fase 1: Introdução e base mental de CI

## Aula

- Iniciando com Integração contínua

## Objetivo

Entender o que é Integração Contínua e por que ela existe em projetos profissionais.

CI não é só “rodar um script no GitHub”. CI é uma rede de proteção para o time. Ela ajuda a descobrir rápido quando alguém quebrou teste, build, padrão de código, cobertura ou qualidade antes do código chegar na branch principal.

## Conceitos principais

- Integração Contínua
- Pipeline
- Build
- Testes automatizados
- Feedback rápido
- Pull Request
- Status check
- Automação
- Segurança na integração
- Quebra de build
- Qualidade antes do merge

## Exercícios práticos

- Criar um repositório simples para estudo.
- Criar uma aplicação mínima.
- Criar um teste simples.
- Rodar o teste localmente.
- Escrever no README o que a pipeline deveria validar antes de aceitar uma PR.
- Explicar com minhas palavras o que CI resolve.

## Perguntas de reflexão

- O que significa integrar código continuamente?
- Por que CI é importante em times grandes?
- Qual o problema de descobrir erro só depois do merge?
- Que tipo de erro uma pipeline pode evitar?
- CI substitui Code Review?
- CI substitui testes manuais?

## Checkpoint

Responder com minhas palavras:

> O que muda em um time quando todo Pull Request precisa passar por uma pipeline de CI antes do merge?

---

# Fase 2: Código-fonte e projeto base

## Aula

- Código-fonte

## Objetivo

Entender a estrutura do projeto usado no curso e preparar o ambiente para praticar sem copiar no piloto automático.

## Conceitos principais

- Repositório base
- Estrutura de projeto
- Arquivos de configuração
- Dependências
- Scripts de build
- Scripts de teste
- Organização mínima para CI

## Exercícios práticos

- Clonar ou criar um projeto base parecido.
- Identificar onde ficam os testes.
- Identificar como rodar a aplicação.
- Identificar como rodar o build.
- Identificar como rodar os testes.
- Criar um README com comandos locais.

## Perguntas de reflexão

- Antes de criar uma pipeline, o que eu preciso conseguir rodar localmente?
- Por que a pipeline deve reproduzir passos confiáveis?
- Qual o risco de ter comandos locais diferentes dos comandos da CI?
- Como um README ruim atrapalha o time?

## Checkpoint

Criar um README com:

- Como instalar dependências
- Como rodar testes
- Como rodar build
- Como executar o projeto
- O que a pipeline deve validar

---

# Fase 3: Primeiro workflow com GitHub Actions

## Aulas

- Criando software exemplo
- Criando primeiro workflow
- Fazendo github actions não passar
- Ativando status check
- Trabalhando com Strategy Matrix

## Objetivo

Criar o primeiro workflow de GitHub Actions, entender quando ele roda, como ele falha, como bloquear merge com status check e como testar em múltiplas versões/ambientes usando Strategy Matrix.

## Conceitos principais

- GitHub Actions
- Workflow
- Job
- Step
- Runner
- Trigger
- `push`
- `pull_request`
- Status check
- Required check
- Strategy Matrix
- Pipeline falhando
- Pipeline passando

## Exercícios práticos

- Criar uma pasta `.github/workflows`.
- Criar um primeiro arquivo de workflow.
- Configurar o workflow para rodar em `push` e `pull_request`.
- Rodar instalação de dependências.
- Rodar testes.
- Fazer a pipeline quebrar de propósito.
- Corrigir a pipeline.
- Ativar status check obrigatório na branch principal.
- Criar uma matrix para rodar em mais de uma versão da linguagem/runtime.

## Perguntas de reflexão

- Qual a diferença entre workflow, job e step?
- Quando faz sentido rodar pipeline em `push`?
- Quando faz sentido rodar pipeline em `pull_request`?
- Por que é útil fazer a pipeline falhar de propósito?
- O que o status check protege?
- O que Strategy Matrix resolve?
- Em que situação uma matrix pode deixar a pipeline lenta demais?

## Checkpoint

Criar uma PR onde:

- A pipeline roda automaticamente.
- A pipeline falha em um primeiro momento.
- O erro é corrigido.
- O status check bloqueia merge quando falha.
- A matrix roda em mais de uma versão.

---

# Fase 4: CI com Docker

## Aulas

- Criando Dockerfile
- Errata - Criando Dockerfile
- Gerando build da imagem via CI
- Dando push na imagem automaticamente

## Objetivo

Entender como integrar Docker na pipeline: criar uma imagem, validar o build dela dentro da CI e publicar automaticamente em um registry.

## Conceitos principais

- Dockerfile
- Imagem Docker
- Build de imagem
- Tag de imagem
- Docker registry
- Docker Hub ou GitHub Container Registry
- Login no registry
- Secrets
- Push automático
- Imagem versionada
- Segurança de credenciais

## Exercícios práticos

- Criar um Dockerfile para a aplicação.
- Buildar a imagem localmente.
- Rodar a imagem localmente.
- Criar um job na CI para buildar a imagem.
- Configurar tag da imagem.
- Configurar secrets para autenticação no registry.
- Publicar imagem automaticamente.
- Validar se a imagem publicada pode ser baixada e executada.

## Perguntas de reflexão

- Por que buildar imagem Docker na CI?
- Por que não devo deixar senha/token hardcoded no workflow?
- O que são secrets?
- Como escolher uma boa tag de imagem?
- Qual a diferença entre buildar e publicar imagem?
- Por que publicar imagem quebrada é perigoso?
- Em que momento faz sentido publicar imagem: todo push, toda PR ou só merge na main?

## Checkpoint

Criar uma pipeline que:

- Roda testes.
- Só builda imagem se os testes passarem.
- Publica imagem automaticamente em um registry.
- Usa secrets para autenticação.
- Usa tags compreensíveis.

---

# Fase 5: SonarQube e qualidade de código

## Aulas

- Iniciando com Sonarqube
- Conceitos principais
- Instalando primeiro projeto
- Trabalhando com cobertura de código
- Cobrindo código Javascript
- Preparando ambiente para o SonarCloud
- Executando SonarCloud
- Trocando de Quality Gate

## Objetivo

Entender como usar SonarQube/SonarCloud para analisar qualidade de código, cobertura, bugs, vulnerabilidades, code smells e bloquear mudanças ruins usando Quality Gate.

## Conceitos principais

- SonarQube
- SonarCloud
- Code quality
- Bugs
- Vulnerabilities
- Code smells
- Coverage
- Duplicação
- Quality Gate
- Quality Profile
- Scanner
- Token
- Integração com CI
- Relatório de cobertura
- Métricas de qualidade

## Exercícios práticos

- Subir ou configurar um projeto no SonarQube/SonarCloud.
- Gerar token de autenticação.
- Configurar o scanner.
- Rodar análise local ou via CI.
- Gerar cobertura de testes.
- Enviar cobertura para o Sonar.
- Analisar bugs, smells e coverage.
- Alterar o Quality Gate.
- Fazer a pipeline falhar por qualidade.
- Corrigir o problema e passar novamente.

## Perguntas de reflexão

- O que SonarQube analisa?
- Qual a diferença entre bug, vulnerability e code smell?
- O que é coverage?
- Cobertura alta garante código bom?
- O que é Quality Gate?
- Quando faz sentido bloquear uma PR por Quality Gate?
- Qual o risco de configurar Quality Gate rígido demais?
- Qual o risco de configurar Quality Gate frouxo demais?

## Checkpoint

Criar uma pipeline com Sonar onde:

- Testes rodam.
- Cobertura é gerada.
- Análise é enviada para SonarCloud/SonarQube.
- Quality Gate é avaliado.
- A PR só pode ser mergeada se passar nos checks.

---

# Fase 6: Questionário e consolidação

## Aula

- Questionário

## Objetivo

Consolidar o aprendizado e identificar pontos fracos antes de considerar o curso concluído.

## Exercícios práticos

- Responder o questionário.
- Revisar erros.
- Explicar com minhas palavras cada resposta errada.
- Criar um guia pessoal de CI.
- Criar um repositório final aplicando tudo.

## Projeto final sugerido

Criar um repositório de simulação profissional contendo:

- Aplicação simples com testes
- Workflow de GitHub Actions
- Pipeline rodando em Pull Request
- Pipeline rodando em push na branch principal
- Status check obrigatório
- Strategy Matrix
- Dockerfile
- Build de imagem Docker via CI
- Push automático para registry
- Secrets configurados
- SonarCloud ou SonarQube configurado
- Cobertura de código
- Quality Gate
- README explicando o fluxo
- PR de exemplo mostrando pipeline passando e falhando

## Critérios de sucesso

O projeto final precisa demonstrar:

- CI rodando automaticamente
- Testes bloqueando código quebrado
- Status check protegendo branch
- Matrix funcionando
- Docker build automatizado
- Publicação de imagem com secrets
- Sonar analisando qualidade
- Coverage integrado
- Quality Gate funcionando
- README claro
- Capacidade de explicar cada decisão

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

O curso tem cerca de 3h01 de videoaulas, mas o foco é praticar bastante.

## Sugestão de ritmo em 8 dias

### Dia 1

- Introdução à Integração Contínua
- Conceitos de CI
- Projeto base
- Comandos locais de teste e build

### Dia 2

- GitHub Actions
- Primeiro workflow
- Jobs e steps
- Pipeline rodando em push e PR

### Dia 3

- Pipeline falhando
- Correção de erro
- Status check obrigatório
- Proteção de branch

### Dia 4

- Strategy Matrix
- Execução em múltiplas versões
- Otimização de pipeline

### Dia 5

- Dockerfile
- Build de imagem local
- Build de imagem via CI

### Dia 6

- Push automático de imagem
- Registry
- Secrets
- Tags de imagem

### Dia 7

- SonarQube/SonarCloud
- Coverage
- Quality Gate
- Integração com CI

### Dia 8

- Projeto final
- Questionário
- Revisão geral
- README final

---

# Perguntas clássicas de entrevista e trabalho real

Ao final do plano, eu devo conseguir responder:

1. O que é Integração Contínua?
2. Qual a diferença entre CI e CD?
3. O que é uma pipeline?
4. O que é um workflow no GitHub Actions?
5. Qual a diferença entre workflow, job e step?
6. O que é um runner?
7. Quando usar trigger de `push`?
8. Quando usar trigger de `pull_request`?
9. O que é status check?
10. Por que status check protege a branch principal?
11. O que é Strategy Matrix?
12. Quando uma pipeline deve falhar?
13. Por que é bom fazer a pipeline falhar de propósito durante o aprendizado?
14. Como Docker entra na CI?
15. Por que buildar imagem Docker na pipeline?
16. Como publicar imagem Docker automaticamente?
17. O que são secrets?
18. Por que não colocar token direto no workflow?
19. O que é SonarQube?
20. O que é SonarCloud?
21. O que é Quality Gate?
22. O que é coverage?
23. Coverage alto garante qualidade?
24. O que são bugs, vulnerabilities e code smells?
25. Como CI ajuda no Code Review?
26. Como CI ajuda em times remotos?
27. Como CI se conecta com Pull Requests?
28. Como CI ajuda em deploys mais seguros?

---

# Regras da mentoria

Durante todo o curso, a prioridade é meu aprendizado.

Não entregue respostas completas de primeira.

Antes de responder uma dúvida, tente me fazer pensar.

Quando eu errar, corrija diretamente e explique o motivo.

Quando eu acertar, diga o que está bom e como posso melhorar.

Sempre que possível, conecte o assunto com situações reais de trabalho, como:

- PR quebrando pipeline
- Merge bloqueado por status check
- Teste local passando e CI falhando
- Docker build funcionando localmente e quebrando na pipeline
- Secret mal configurado
- Token exposto sem querer
- Imagem Docker publicada com tag ruim
- Sonar bloqueando PR por Quality Gate
- Coverage insuficiente
- Code smell que deveria ser corrigido antes do merge
- Pipeline lenta demais por matrix exagerada
- Time remoto usando CI como contrato de qualidade

---

# Primeira missão

Assistir à aula:

> Iniciando com Integração contínua

Depois responder com minhas palavras:

> O que uma pipeline de CI deveria proteger antes de permitir o merge de uma Pull Request?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
