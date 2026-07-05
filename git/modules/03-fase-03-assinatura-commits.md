# Phase 3 - Commit signing

## Lessons

- Understanding about subscriptions.
- Generating GPG key and signing commits.
- Adding another email to key.

## Objective

Understanding how commit signatures help prove authorship, increase trust in history and improve safety in professional repositories.

## Main concepts

- Signed commit.
- GPG.
- Public Key.
- Private key.
- Verified commit.
- Identity of the author.
- Safety in history.
- Key associated email.
- Global and local configuration of Git.

## Guide concept

A signed commit helps confirm that that change was created by someone who has the private key associated with the configured identity. This increases confidence, but does not replace review, testing or correct permission in the repository.

## Real project example

In a sensitive repository, the company may require signed commits to reduce the risk of someone falsifying authorship using someone else's email.

## Practical exercises

Implement on `../labs/fase-03-assinatura-commits/`:

1. Check user configured in Git.
2. Generate GPG key.
3. Link key to Git.
4. Make a signed commit.
5. Verify that commit appears as signed.
6. Add another email key.
7. Test commit with different email.

## Reflection Questions

1. What a commit signature proves?
2. What she doesn't prove?
3. Why teams or companies may require signed commits?
4. What's the risk of someone committing using someone else's email??
5. What is the difference between public key and private key?
6. Why should I never share my private key?

## Checkpoint

Answer with your words:

> Why signed commits are important in professional projects?

## Success criteria

You can advance when you know how to explain the difference between authorship declared in the commit and authorship verified by signature.
