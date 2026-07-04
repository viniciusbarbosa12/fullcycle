# Fase 11: Namespaces, Service Accounts e RBAC

## Aulas

- Namespaces
- Contextos por namespace
- Entendendo Service Accounts
- Criando Service Account e Roles
- ClusterRole

## Objetivo

Entender isolamento lógico e controle de acesso no Kubernetes.

Namespaces ajudam a organizar recursos. Service Accounts representam identidades de aplicações ou automações. Roles e ClusterRoles controlam permissões. Sem RBAC bem configurado, o cluster vira uma festa com a porta aberta e o DJ dormindo.

## Conceitos principais

- Namespace
- Context por namespace
- Service Account
- RBAC
- Role
- RoleBinding
- ClusterRole
- ClusterRoleBinding
- Least privilege
- Permissões por namespace
- Permissões globais
- Identidade de workload

## Exercícios práticos

- Criar namespaces.
- Aplicar recursos em namespaces diferentes.
- Configurar contexto padrão por namespace.
- Criar Service Account.
- Criar Role com permissões limitadas.
- Criar RoleBinding.
- Testar acesso permitido.
- Testar acesso negado.
- Criar ClusterRole.
- Comparar Role e ClusterRole.

## Perguntas de reflexão

- Para que servem namespaces?
- Namespace é isolamento de segurança completo?
- O que é Service Account?
- Qual a diferença entre usuário e Service Account?
- O que é RBAC?
- Qual a diferença entre Role e ClusterRole?
- Qual a diferença entre RoleBinding e ClusterRoleBinding?
- Por que aplicar least privilege?
- Que risco existe em dar permissão demais?

## Checkpoint

Ter um namespace com Service Account e permissões limitadas funcionando via RBAC.
