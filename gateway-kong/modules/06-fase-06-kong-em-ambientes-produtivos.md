# Phase 6: Kong in production environments

## Lessons

- Setting up apps logs
- Configuring kong log collection
- Analyzing kong

## Objective

Understanding how to operate Kong in production.

Climbing Kong is a small part of the story. The real job is to keep the gateway healthy, observable and safe: collect logs, analyze behavior, investigate error, measure latency and understand the impact of routes and plugins.

## Main concepts

- Production
- Application logs
- Kong Logs
- Centralised collection
- Observability
- Metrics
- Tracing
- Error rate
- Latency
- Access logs
- Proxy logs
- Admin logs
- Troubleshooting
- Dashboards
- Alerts
- Operation day two
- Traffic analysis

## Practical exercises

- Configure application logs.
- Configure Kong logs.
- Send logs to a centralized tool if available.
- Make valid and invalid requests.
- Watch generated logs.
- Simulate Error 404.
- Simulate Error 401.
- Simulate Error 502.
- Analyze logs and identify problem source.
- Create a personal troubleshooting guide.

## Reflection questions

- Which logs are important in Kong?
- How to differentiate gateway error and application error?
- How to investigate error 401?
- How to investigate error 404?
- How to investigate error 502?
- Which data should not log?
- How correlation id would help here?
- What warnings I would create for production?
- What it means to operate Kong on day two?

## Checkpoint

Create an operation guide with:

- Important metrics
- Important logs
- How to investigate 4xx error
- How to investigate error 5xx
- How to investigate latency
- How to validate if the problem is in Kong or API
- Recommended Alerts
