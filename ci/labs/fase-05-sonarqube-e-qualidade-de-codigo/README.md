# Lab Fase 5 - SonarQube e qualidade de código

## Missao

Pratique os conceitos da Fase 5 antes de pedir revisao.

## Exercicios praticos

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

## Antes de pedir revisao

- O que SonarQube analisa?
- Qual a diferença entre bug, vulnerability e code smell?
- O que é coverage?
- Cobertura alta garante código bom?
- O que é Quality Gate?
- Quando faz sentido bloquear uma PR por Quality Gate?
- Qual o risco de configurar Quality Gate rígido demais?
- Qual o risco de configurar Quality Gate frouxo demais?

## Criterio de sucesso

Criar uma pipeline com Sonar onde:

- Testes rodam.
- Cobertura é gerada.
- Análise é enviada para SonarCloud/SonarQube.
- Quality Gate é avaliado.
- A PR só pode ser mergeada se passar nos checks.
