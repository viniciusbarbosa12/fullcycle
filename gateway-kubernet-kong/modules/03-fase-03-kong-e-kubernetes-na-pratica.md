# Phase 3: Kong & Kubernetes in practice

## Lessons

- CRD plugins
- Kong ingress
- Open id provider
- Kong openid plugin

## Objective

Learn to configure Kong within Kubernetes using native features and CRDs.

Kong here begins to be treated as part of the cluster. Instead of manually configuring everything by Admin API, the configuration becomes declarative via YAML.

## Main concepts

- CRD
- KongPlugin
- KongClusterPlugin
- Kubernetes Entry
- Kong Ingress Controller
- Annotations
- Services
- Routes
- Declarative plugins
- OpenID Connect
- Identity Provider
- Token
- Gateway Authentication
- Authorization Code Flow
- Client ID
- Client Secret

## Practical exercises

- Create Ingress to display an API by Kong.
- Create simple KongPlugin.
- Apply plugin on a route.
- Create global plugin if it makes sense.
- Configure an OpenID provider.
- Configure OpenID plugin in Kong.
- Test call without authentication.
- Test authenticated call.
- Document authentication flow.

## Reflection questions

- What is a CRD?
- Why Kong uses CRDs in Kubernetes?
- What's the difference between KongPlugin and KongClusterPlugin?
- How Kong knows to apply a plugin to a route?
- What's the difference between authenticate in application and authenticate in gateway?
- What OpenID Connect is?
- What can go wrong in a gateway authentication configuration?

## Checkpoint

Have an API exposed by Kong Ingress and protected with plugin configured via Kubernetes.
