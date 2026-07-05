# Phase 8: Circuit breaker

## Lessons

- Circuit breaker
- Preparing environment for circuit breaker
- Circuit breaker in practice

## Objective

Understanding how to prevent failures from spreading in cascades when a service starts to degrade.

## Main concepts

- Circuit breaker
- Fallout
- Outlier detection
- Connection pool
- Consecutive errors
- Ejection
- Timeout
- Retry
- Resilience
- Protection of dependencies

## Practical exercises

- Prepare environment with unstable service.
- Configure DestinationRule with circuit breaker policy.
- Simulate error in an instance.
- Observe bad instance ejection.
- Test Recovery.
- Compare behavior before and after the circuit breaker.

## Reflection questions

- What is cascade failure?
- How circuit breaker protects the system?
- What's the difference between retry and circuit breaker??
- What is outlier detection?
- What happens if the circuit breaker is too aggressive?
- What happens if it's too loose?
- In what critical service would I apply this?

## Checkpoint

To be able to demonstrate a bad instance being avoided by Istio and explain why this improves resilience.
