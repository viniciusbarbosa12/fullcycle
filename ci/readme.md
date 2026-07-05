# Continuous Integration, GitHub Actions, Docker, and SonarQube Learning Plan

This plan was created to study Continuous Integration in a practical way, focusing on real learning.

The idea is not just to watch lessons, but to understand how a CI pipeline works in a professional project: run tests automatically, block broken code, use status checks, work with strategy matrix, build Docker images, publish images automatically and validate quality with SonarQube/SonarCloud.

By the end of this course, I should be able to create a CI pipeline on my own, understand errors, fix failures and connect this flow with Pull Requests, Code Review and secure software delivery.

## How We Will Study

Whenever I start a new lesson, mentoring should follow this format:

1. Explain concepts clearly and gradually.
2. Split big subjects into small parts.
3. Propose practical exercises for me to implement on my own.
4. Avoid delivering the complete solution upfront.
5. Ask questions that lead me to reason before answering.
6. If I ask for help, just give hints or small chunks of code/commands.
7. Only show the complete solution if I ask explicitly or after I really try to solve.

When I finish an exercise, the review should follow this format:

1. Do a professional review of what I did.
2. Point out errors, improvements and good practices.
3. Explain the reason for each suggestion.
4. Say what I did right.
5. Tell me what I still need to study.
6. Connect the content to real project scenarios and development teams.

The goal is to prioritize deep learning, not speed.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercises and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- `final-project/`: course final consolidation guide.

## Course Outline

### Introduction

- Starting with Continuous Integration - 22:21

### Source code

- Source code - no duration

### Starting with CI

- Creating Example Software - 05:28
- Creating first workflow - 12:07
- Making github actions not pass - 05:46
- Activating status check - 12:39
- Working with Strategy Matrix - 10:46

### CI with Docker

- Creating Dockerfile - 05:22
- Errata - Creating Dockerfile - no duration
- Generating image build via CI - 15:21
- Pushing the image automatically - 08:33

### SonarQube

- Starting with Sonarqube - 05:05
- Main Concepts - 13:50
- Installing first project - 09:50
- Working with code coverage - 10:52
- Covering JavaScript code - 11:37
- Preparing environment for SonarCloud - 09:08
- Running SonarCloud - 17:31
- Changing Quality Gate - 05:18

### Questionnaire

- Questionnaire - no duration

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [Introduction and mental model of CI](modules/01-fase-01-introducao-e-base-mental-de-ci.md)
2. [Source code and base project](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [First workflow with GitHub Actions](modules/03-fase-03-primeiro-workflow-com-github-actions.md)
4. [CI with Docker](modules/04-fase-04-ci-com-docker.md)
5. [SonarQube and code quality](modules/05-fase-05-sonarqube-e-qualidade-de-codigo.md)
6. [Questionnaire and Consolidation](modules/06-fase-06-questionario-e-consolidacao.md)
7. [Classic interview questions](modules/07-perguntas-entrevista.md)

## Recommended rhythm

The course has about 3h01 of video lessons, but the focus is to practice a lot.

### Suggestion of rhythm in 8 days

#### Day 1

- Introduction to Continuous Integration
- CI concepts
- Base project
- Local test and build commands

#### Day 2

- GitHub Actions
- First workflow
- Jobs and steps
- Pipeline running in push and PR

#### Day 3

- Pipeline Failing
- Error correction
- Required status check
- Branch Protection

#### Day 4

- Strategy Matrix
- Multiple version execution
- Pipeline optimization

#### Day 5

- Dockerfile
- Local Image Build
- Image build via CI

#### Day 6

- Automatic image push
- Registry
- Secrets
- Image tags

#### Day 7

- SonarQube/SonarCloud
- Coverage
- Quality Gate
- CI integration

#### Day 8

- Final project
- Questionnaire
- General review
- Final README

## First Mission

Watch the lesson:

> Starting with Continuous Integration

Then answer with my words:

> What should a CI pipeline protect before allowing the merge of a Pull Request?

It does not have to be a perfect answer. The important thing is to show my initial reasoning so we can correct, adjust and deepen.
