# Lab Phase 5 - Cross-cutting plugins and policies

## Mission

Practice Phase 5 concepts before requesting review.

## Practical exercises

- Enable correlation id plugin.
- Request and check the generated header.
- Enable IP-limited rate.
- Make multiple calls to reach the limit.
- Observe behavior when the limit is blown.
- Enable response transform.
- Change or remove some response header.
- Document in which layers each plugin has been applied.

## Before asking for review

- What is a plugin in Kong?
- When applying global plugin?
- When applying plugin per service?
- When applying plugin per route?
- Why correlation id production aid?
- Rate limiting protects against which problems?
- What is the risk of wrongly configured rate limiting?
- What Response Transformer Solves?
- What I shouldn't turn into the gateway?

## Success criteria

Have a route protected by rate limiting, with active correlation id and response transformed in a controlled way.
