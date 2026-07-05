# Phase 6: Load balancing, sticky session and consistent hash

## Lessons

- Types of load balancing
- Sticky session and consistent hash
- Consistent hash dynamics
- Consistent hash in practice

## Objective

Understanding how Istio distributes traffic between instances and how to maintain affinity when necessary.

## Main concepts

- Load balancing
- Round robin
- Random
- Least request
- Sticky session
- Consistent hash
- Cookie affinity
- Header affinity
- Session affinity
- DestinationRule traffic Policy

## Practical exercises

- Test Standard Traffic Distribution.
- Configure a load balancing policy.
- Simulate multiple instances of a version.
- Configure consistent hash using header or cookie.
- Make multiple calls and observe if traffic maintains affinity.
- Compare behavior with and without consistent hash.

## Reflection questions

- Why not all traffic can be randomly distributed?
- ♪ When Sticky Session makes sense ♪?
- When Sticky Session Can Be Bad?
- What Consistent Hash Solves?
- Why stateless applications reduce the need for static session?
- What kind of system could need affinity?

## Checkpoint

To demonstrate traffic with and without consistent hash and explain the difference.
