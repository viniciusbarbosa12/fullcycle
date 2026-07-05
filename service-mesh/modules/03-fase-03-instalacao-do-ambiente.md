# Phase 3: Installation of the environment

## Lessons

- About the installation process
- Installing k3d
- Creating cluster
- Installing istio ctl
- Installing istio in cluster
- Injecting sidecar proxy
- Configuring addons

## Objective

Mount a local cluster with k3d, install Istio and prepare the environment to observe and control traffic.

## Main concepts

- k3d
- Local Kubernetes
- Cluster
- Namespace
- istioctl
- Istio installation profile
- Sidecar injection
- Namespace Label
- Envoy proxy
- Addons
- Kiali
- Prometheus
- Grafana
- Jaeger

## Practical exercises

- Install k3d.
- Create a local cluster.
- Validate cluster with `kubectl`.
- Install `istioctl`.
- Install Istio in cluster.
- Create namespace for the application.
- Enable sidecar injection in namespace.
- Move application up.
- Check if pods received sidecar.
- Install/configure addons.
- Open Kiali and observe topology.

## Reflection questions

- What is k3d and why use locally?
- What? `istioctl` does?
- What happens when active sidecar injection?
- How do I know the sidecar was injected correctly??
- Why Envoy stays next to the application?
- What's Kiali's role??
- What addons help to view?

## Checkpoint

Have an environment where:

- Cluster k3d is running.
- Istio is installed.
- Application namespace has sidecar injection enabled.
- Pods have sidecar Envoy.
- Kiali/Prometheus/Grafana/Jaeger are accessible.
- The application responds within the cluster.
