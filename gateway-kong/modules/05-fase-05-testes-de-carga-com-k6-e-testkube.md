# Phase 5: K6 and Testkube load tests

## Lessons

- K6 testkube
- Preparing cluster
- Applying loads

## Objective

Learn to validate gateway and API behavior under load.

It's no use the route running once in Postman and dying when it gets real traffic. Here the focus is to start measuring performance, latency, throughput, errors and limits using load tests.

## Main concepts

- Load test
- K6
- Testkube
- Virtual users
- PSUR
- Latency
- Throughput
- Error rate
- Percentis
- P95
- P99
- Threholds
- Gargals
- Saturation
- Tests within the cluster
- Automated tests

## Practical exercises

- Create a simple K6 script.
- Rotate local test.
- Install or configure Testkube.
- Rotate test against route exposed by Kong.
- Increase load gradually.
- Observe latency and errors.
- Configure threads.
- Make the test fail by threshold.
- Adjust and rotate again.
- Document result.

## Reflection questions

- Why do load test in the API Gateway?
- What RPS is?
- What is P95?
- What is P99?
- Why Sleep Mean Can Deceiving?
- What type of plugin can impact performance?
- How rate limiting appears in a load test?
- What is the difference between load test and stress test?
- When I'd run it on a pipeline?

## Checkpoint

Have a load test running against a Kong route and manage to explain the results.
