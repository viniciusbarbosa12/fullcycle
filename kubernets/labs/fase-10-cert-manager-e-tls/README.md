# Lab Fase 10 - Cert-manager e TLS

## Missao

Pratique os conceitos da Fase 10 antes de pedir revisao.

## Exercicios praticos

- Instalar cert-manager.
- Validar pods do cert-manager.
- Criar Issuer ou ClusterIssuer.
- Criar Certificate.
- Validar Secret TLS gerado.
- Configurar Ingress com TLS.
- Testar acesso HTTPS.
- Verificar status do certificado.

## Antes de pedir revisao

- Por que automatizar certificados?
- Qual o papel do cert-manager?
- Qual a diferença entre Issuer e ClusterIssuer?
- Onde o certificado fica armazenado?
- Como o Ingress usa o certificado?
- O que acontece quando o certificado vence?
- Que cuidados eu teria em produção?

## Criterio de sucesso

Ter aplicação acessível via HTTPS com certificado gerenciado pelo cert-manager.
