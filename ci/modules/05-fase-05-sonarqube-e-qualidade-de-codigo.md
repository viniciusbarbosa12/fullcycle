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
