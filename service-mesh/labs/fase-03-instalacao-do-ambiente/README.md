# Lab Fase 3 - Instalação do ambiente

## Missao

Pratique os conceitos da Fase 3 antes de pedir revisao.

## Exercicios praticos

- Instalar k3d.
- Criar um cluster local.
- Validar o cluster com `kubectl`.
- Instalar `istioctl`.
- Instalar Istio no cluster.
- Criar namespace para a aplicação.
- Ativar sidecar injection no namespace.
- Subir a aplicação.
- Verificar se os pods receberam sidecar.
- Instalar/configurar addons.
- Abrir Kiali e observar a topologia.

## Antes de pedir revisao

- O que é k3d e por que usar localmente?
- O que `istioctl` faz?
- O que acontece quando ativo sidecar injection?
- Como eu sei se o sidecar foi injetado corretamente?
- Por que o Envoy fica junto da aplicação?
- Qual o papel do Kiali?
- O que os addons ajudam a visualizar?

## Criterio de sucesso

Ter um ambiente onde:

- Cluster k3d está rodando.
- Istio está instalado.
- Namespace da aplicação tem sidecar injection ativado.
- Pods possuem sidecar Envoy.
- Kiali/Prometheus/Grafana/Jaeger estão acessíveis.
- A aplicação responde dentro do cluster.
