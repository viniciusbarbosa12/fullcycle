# Phase 6: Exporters, Containers and Grafana

## Lessons

- Using cAdvisor
- Introducing Grafana

## Objective

Learn how to collect container metrics and view data more user-friendlyly with Grafana.

Prometheus collects and stores. Grafana turns this into a useful panel for tired humans trying to understand why production turned into a frying pan.

## Main concepts

- cAdvisor
- Container metrics
- Grafana
- Data source
- Dashboard
- Panel
- Query
- Preview
- CPU per container
- Memory per container
- Network usage
- Disk usage

## Practical exercises

- Up cAdvisor.
- Configure Prometheus to collect cAdvisor metrics.
- Check if target is active.
- Up Grafana.
- Configure Prometheus as data source.
- Create a simple dashboard.
- Create CPU and Memory Panels.
- Document Queries Used.

## Reflection questions

- What cAdvisor Collects?
- Why container metrics are important?
- What is the difference between Prometheus and Grafana?
- Why Grafana does not replace Prometheus?
- Which makes a dashboard useful?
- Which panel would I create for an API in production?

## Checkpoint

Having a dashboard in Grafana displaying metrics collected by Prometheus.
