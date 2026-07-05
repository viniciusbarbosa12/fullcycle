# Phase 5: Cross-cutting plugins and policies

## Lessons

- Plugins
- Correlation id
- Rate limiting ip
- Response transformer

## Objective

Understanding how plugins allow you to apply cross policies without changing API code.

This is one of the most important parts of the course. The gateway begins to shine when it centralizes behaviors such as request correlation, rate limit, response transformation and security rules.

## Main concepts

- Plugin
- Global Plugin
- Plugin per service
- Plugin per route
- Correlation ID
- Traceability
- Rate limiting
- IP Limit
- Protection against abuse
- Response Transformer
- Standardization of responses
- Cross-cutting policies

## Practical exercises

- Enable correlation id plugin.
- Request and check the generated header.
- Enable IP-limited rate.
- Make multiple calls to reach the limit.
- Observe behavior when the limit is blown.
- Enable response transform.
- Change or remove some response header.
- Document in which layers each plugin has been applied.

## Reflection questions

- What is a plugin in Kong?
- When applying global plugin?
- When applying plugin per service?
- When applying plugin per route?
- Why correlation id production aid?
- Rate limiting protects against which problems?
- What is the risk of wrongly configured rate limiting?
- What Response Transformer Solves?
- What I shouldn't turn into the gateway?

## Checkpoint

Have a route protected by rate limiting, with active correlation id and response transformed in a controlled way.
