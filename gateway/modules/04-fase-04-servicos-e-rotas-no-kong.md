# Phase 4: Services and routes in Kong

## Lessons

- Services
- Routes

## Objective

Learn the Heart of Kong: Set up internal services and create public routes to access them.

## Main concepts

- Service in Kong
- Route in Kong
- Upstream service
- Path
- Host
- Method
- Route
- Reverse proxy
- Request flow
- Separation between Service and Route

## Practical exercises

- Create a service in Kong pointing to an internal API.
- Create a route for this service.
- Test called through Kong.
- Create a second route to another endpoint.
- Test path routing.
- Test HTTP routing, if applicable.
- Draw client flow -> Kong -> Internal API.

## Reflection questions

- What is the difference between Service and Route in Kong?
- Why Kong Separates These Two Concepts?
- What happens if the route is right, but the service points to the wrong URL?
- How would I debug a 404 error coming from Kong?
- How would I debug a 502 error coming from Kong?

## Checkpoint

Getting access to an internal API via Kong using a public route.
