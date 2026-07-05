# Lab Phase 5 - SonarQube and code quality

## Mission

Practice Phase 5 concepts before requesting review.

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

## Before asking for review

- What does SonarQube analyze?
- What is the difference between bug, vulnerability and code smell?
- What is coverage?
- Does high coverage ensure good code?
- What is Quality Gate?
- When does it make sense to block a PR by Quality Gate?
- What is the risk of setting the Quality Gate too strictly?
- What is the risk of setting the Quality Gate too loosely?

## Success criteria

Create a pipeline with Sonar where:

- Tests run.
- Coverage is generated.
- The analysis is sent to SonarCloud/SonarQube.
- Quality Gate is evaluated.
- PR can only be merged if it passes checks.
