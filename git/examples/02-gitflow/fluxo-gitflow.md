# Example - Manual Gitflow Flow

Use this file as reference after trying lab.

```bash
mkdir git-lab-gitflow
cd git-lab-gitflow
git init
git switch -c main
printf "# Gitflow Lab\n" > README.md
git add README.md
git commit -m "docs(readme): add initial project description"

git switch -c develop
git switch -c feature/add-readme develop
printf "\nFeature in development.\n" >> README.md
git add README.md
git commit -m "docs(readme): add project notes"
git switch develop
git merge --no-ff feature/add-readme

git switch -c release/1.0.0 develop
printf "\nRelease 1.0.0 notes.\n" >> README.md
git add README.md
git commit -m "fix(release): adjust release notes"
git switch main
git merge --no-ff release/1.0.0
git tag v1.0.0
git switch develop
git merge --no-ff release/1.0.0

git switch main
git switch -c hotfix/fix-production-readme
printf "\nProduction hotfix.\n" >> README.md
git add README.md
git commit -m "fix(readme): correct production note"
git switch main
git merge --no-ff hotfix/fix-production-readme
git tag v1.0.1
git switch develop
git merge --no-ff hotfix/fix-production-readme
```

## What to Watch

- Feature is born of `develop`.
- Release stabilizes what goes for production.
- Hotfix is born from `main` because it corrects production.
- Release and hotfix back to `develop` to not lose correction.
