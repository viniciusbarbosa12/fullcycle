# Fase 10: Cert-manager e TLS

## Aulas

- Instalando cert manager
- Configurando e emitindo certificado

## Objetivo

Automatizar emissão e renovação de certificados TLS no Kubernetes.

Certificado manual é uma armadilha com prazo de validade. Cert-manager automatiza a emissão e renovação usando issuers, certificates e secrets.

## Conceitos principais

- TLS
- HTTPS
- cert-manager
- Certificate
- Issuer
- ClusterIssuer
- Secret TLS
- ACME
- Let's Encrypt
- Renovação automática
- Ingress TLS

## Exercícios práticos

- Instalar cert-manager.
- Validar pods do cert-manager.
- Criar Issuer ou ClusterIssuer.
- Criar Certificate.
- Validar Secret TLS gerado.
- Configurar Ingress com TLS.
- Testar acesso HTTPS.
- Verificar status do certificado.

## Perguntas de reflexão

- Por que automatizar certificados?
- Qual o papel do cert-manager?
- Qual a diferença entre Issuer e ClusterIssuer?
- Onde o certificado fica armazenado?
- Como o Ingress usa o certificado?
- O que acontece quando o certificado vence?
- Que cuidados eu teria em produção?

## Checkpoint

Ter aplicação acessível via HTTPS com certificado gerenciado pelo cert-manager.
