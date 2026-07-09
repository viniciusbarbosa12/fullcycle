# Example - SemVer release simulation

Use this file as reference after trying lab.

## Start with a first stable release

```bash
mkdir git-lab-semver
cd git-lab-semver
git init
printf "# SemVer Lab\n\nPublic API v1.\n" > README.md
git add README.md
git commit -m "docs(readme): describe public api"
git tag v1.0.0
```

## PATCH: compatible bug fix

Use `PATCH` when you fix behavior without changing the public contract.

```bash
printf "\nFix: handle empty customer name.\n" >> CHANGELOG.md
git add CHANGELOG.md
git commit -m "fix(customer): handle empty customer name"
git tag v1.0.1
```

## MINOR: compatible feature

Use `MINOR` when you add capability without breaking existing consumers.

```bash
printf "\nFeature: add optional customer nickname field.\n" >> CHANGELOG.md
git add CHANGELOG.md
git commit -m "feat(customer): add optional nickname field"
git tag v1.1.0
```

## MAJOR: breaking change

Use `MAJOR` when consumers must change their code or expectations.

```bash
printf "\nBreaking: rename customer name to fullName.\n" >> CHANGELOG.md
git add CHANGELOG.md
git commit -m "feat(customer)!: rename name field to fullName"
git tag v2.0.0
```

## Inspect the release history

```bash
git log --oneline --decorate --graph --all
git tag --list
```

## Change classification examples

| Change | Version bump | Why |
| --- | --- | --- |
| Fix typo in documentation | PATCH | No public contract change |
| Fix null pointer in existing endpoint | PATCH | Compatible behavior fix |
| Add optional response field | MINOR | New capability, old clients still work |
| Add new endpoint | MINOR | New capability, old clients still work |
| Remove response field | MAJOR | Existing clients can break |
| Rename required request field | MAJOR | Existing clients must change |

## What to Watch

- Decide based on consumer impact, not diff size.
- A small code change can be `MAJOR` if it breaks the public contract.
- A large internal refactor can be `PATCH` if the behavior stays compatible.
- Conventional Commits can help automate release notes and version bumps.
