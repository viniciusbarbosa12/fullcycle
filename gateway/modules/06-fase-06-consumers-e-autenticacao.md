# Phase 6: Consumers and authentication

## Lessons

- Consumers
- Basic Auth
- Key authentication

## Objective

Understanding how Kong identifies consumers and applies authentication to APIs.

## Main concepts

- Consumer
- Accreditations
- Basic Auth
- Key Authentication
- API Key
- Security
- Customer identification
- Consumer credentials
- Gateway Authentication
- Consumer policies

## Practical exercises

- Create a consumer.
- Configure Basic Auth.
- Test call without credentials.
- Test called with invalid credentials.
- Test call with valid credentials.
- Configure Key Authentication.
- Create a key API for the consumer.
- Test access using key.
- Compare Basic Auth and Key Auth.

## Reflection questions

- What is a consumer in Kong?
- Why authenticate on gateway?
- Basic Auth is sufficient in production?
- When API Key makes sense.?
- What is the risk of leaking an API key?
- How I would rotate a key?
- What is the difference between authentication and authorization?
- What would still need to stay in the application even using gateway authentication?

## Checkpoint

Have a route that can only be accessed by an authenticated consumer.
