# Phase 10: Cert-manager and TLS

## Lessons

- Installing cert manager
- Configuring and issuing certificate

## Objective

Automate the issue and renewal of TLS certificates in Kubernetes.

Manual certificate is a trap with an expiration date. Cert-manager automates emission and renewal using issuers, certificates and secrets.

## Main concepts

- TLS
- HTTPS
- cert-manager
- Certificate
- Issue
- ClusterIssuer
- Secret TLS
- ACME
- Let's Encrypt
- Automatic renewal
- Ingress TLS

## Practical exercises

- Install cert-manager.
- Cert-manager Validate pods.
- Create Issue or Cluster.
- Create Certificate.
- Validate Secret TLS generated.
- Configure Ingress with TLS.
- Test access HTTPS.
- Check certificate status.

## Reflection questions

- Why Automate Certificates?
- What is the role of cert-manager?
- What is the difference between Issuer and ClusterIsuer?
- Where the certificate is stored?
- How Ingress Uses Certificate?
- What happens when the certificate wins?
- What care would I have in production?

## Checkpoint

Have application accessible via HTTPS with cert-manager-managed certificate.
