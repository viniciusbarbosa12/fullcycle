# Phase 5: SonarQube and code quality

## Lessons

- Starting with Sonarqube
- Main concepts
- Installing first project
- Working with code coverage
- Covering JavaScript Code
- Preparing Environment for SonarCloud
- Running SonarCloud
- Changing Quality Gate

## Objective

Understand how to use SonarQube/SonarCloud to analyze code quality, coverage, bugs, vulnerabilities, code smells and block bad changes using a Quality Gate.

## Main concepts

- SonarQube
- SonarCloud
- Code Quality
- Bugs
- Vulnerabilities
- Code Smells
- Coverage
- Duplication
- Quality Gate
- Quality Profile
- Scanner
- Token
- CI integration
- Coverage report
- Quality metrics

## Practical exercises

- Set up or configure a project in SonarQube/SonarCloud.
- Generate authentication token.
- Configure Scanner.
- Run local analysis or via CI.
- Generate test coverage.
- Send coverage to Sonar.
- Analyze bugs, code smells, and coverage.
- Change Quality Gate.
- Make the pipeline fail because of quality.
- Fix the problem and pass again.

## Reflection questions

- What does SonarQube analyze?
- What is the difference between bug, vulnerability and code smell?
- What is coverage?
- Does high coverage ensure good code?
- What is Quality Gate?
- When does it make sense to block a PR by Quality Gate?
- What is the risk of setting the Quality Gate too strictly?
- What is the risk of setting the Quality Gate too loosely?

## Checkpoint

Create a pipeline with Sonar where:

- Tests run.
- Coverage is generated.
- The analysis is sent to SonarCloud/SonarQube.
- Quality Gate is evaluated.
- PR can only be merged if it passes checks.
