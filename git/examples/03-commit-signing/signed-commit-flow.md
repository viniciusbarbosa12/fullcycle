# Example - Signed commit flow

Use this file as reference after trying lab.

## Check current Git identity

```bash
git config --global user.name
git config --global user.email
git config --global commit.gpgsign
```

## Generate a GPG key

```bash
gpg --full-generate-key
gpg --list-secret-keys --keyid-format=long
```

Look for the key id in a line similar to this:

```txt
sec   rsa4096/ABC123DEF4567890 2026-07-07 [SC]
```

In this example, the key id is `ABC123DEF4567890`.

## Configure Git to sign commits

```bash
git config --global user.signingkey ABC123DEF4567890
git config --global commit.gpgsign true
```

If Git cannot find the GPG program, configure it explicitly:

```bash
git config --global gpg.program gpg
```

## Create a signed commit

```bash
mkdir git-lab-signed-commits
cd git-lab-signed-commits
git init
printf "# Signed Commits Lab\n" > README.md
git add README.md
git commit -S -m "docs(readme): add signed commit lab"
```

## Verify the signature locally

```bash
git log --show-signature --oneline -1
git verify-commit HEAD
```

## Add another email to the same key

Use this when your Git author email is different from the email already attached to the key.

```bash
gpg --edit-key ABC123DEF4567890
```

Inside the GPG prompt:

```txt
adduid
save
```

Then configure Git with the email you want to use:

```bash
git config --global user.email "your-email@example.com"
```

## What to Watch

- The commit author email must match an email associated with the signing key.
- The private key stays only with you.
- A verified signature proves the commit was signed by whoever controls the private key.
- A signature does not prove the code is correct, reviewed or safe to deploy.
