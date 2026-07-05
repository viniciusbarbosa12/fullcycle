# Phase 11: Namespaces, Service Accounts and RBAC

## Lessons

- Namespaces
- Contexts by namespace
- Understanding Service Accounts
- Creating Service Account and Roles
- ClusterRole

## Objective

Understand logical isolation and access control in Kubernetes.

Namespaces help organize resources. Service Accounts represent application identities or automations. Roles and ClusterRoles control permissions. Without RBAC well configured, the cluster becomes a party with the door open and the DJ sleeping.

## Main concepts

- Namespace
- Context by namespace
- Service Account
- RBAC
- Roll
- RoleBending
- ClusterRole
- ClusterRoleBinding
- Least privilege
- Permissions by namespace
- Global permissions
- Workload Identity

## Practical exercises

- Create namespaces.
- Apply resources in different namesspaces.
- Configure default context by namespace.
- Create Service Account.
- Create Scroll with limited permissions.
- Create RoleBending.
- Test access allowed.
- Test access denied.
- Create ClusterRole.
- Compare Role and ClusterRole.

## Reflection questions

- What are namesspaces for?
- Namespace is complete security isolation?
- What Service Account is?
- What is the difference between user and Service Account?
- What is RBAC?
- What is the difference between Role and ClusterRole?
- What is the difference between RoleBinding and ClusterRoleBinding?
- Why apply least privilege?
- What risk is there in giving too much permission?

## Checkpoint

Have a namespace with Service Account and limited permissions running via RBAC.
