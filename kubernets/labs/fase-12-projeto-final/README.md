# Lab Fase 12 - Projeto final

## Missao

Pratique os conceitos da Fase 12 antes de pedir revisao.

## Projeto final sugerido

Criar um ambiente Kubernetes com uma aplicação completa contendo:

- Cluster Kind ou cluster cloud
- Aplicação containerizada
- Deployment
- ReplicaSet gerenciado pelo Deployment
- Rollout e rollback testados
- Service ClusterIP
- Service NodePort ou LoadBalancer para teste
- ConfigMap
- Secret
- Liveness probe
- Readiness probe
- Startup probe, se fizer sentido
- Requests e limits
- HPA funcionando
- Teste de stress com Fortio
- PersistentVolume e PVC
- StatefulSet com Headless Service
- Ingress Controller
- Recurso Ingress com host/path
- DNS ou host local configurado
- TLS com cert-manager
- Namespace próprio
- Service Account
- Role/RoleBinding
- README explicando toda a arquitetura

## Criterios de sucesso

O projeto final precisa demonstrar:

- Aplicação rodando em Kubernetes
- Deployments funcionando
- Rollout e rollback funcionando
- Services corretamente configurados
- Configuração separada via ConfigMap e Secret
- Probes bem configuradas
- Resources definidos
- HPA escalando sob carga
- Volume persistente funcionando
- StatefulSet compreendido
- Ingress expondo aplicação
- TLS configurado
- Namespace organizado
- RBAC com permissões mínimas
- README claro
- Capacidade de explicar decisões e trade-offs
