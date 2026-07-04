# Exemplo - Fluxo Gitflow manual

Use este arquivo como referencia depois de tentar o lab.

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
printf "\nFeature em desenvolvimento.\n" >> README.md
git add README.md
git commit -m "docs(readme): add project notes"
git switch develop
git merge --no-ff feature/add-readme

git switch -c release/1.0.0 develop
printf "\nNotas da release 1.0.0.\n" >> README.md
git add README.md
git commit -m "fix(release): adjust release notes"
git switch main
git merge --no-ff release/1.0.0
git tag v1.0.0
git switch develop
git merge --no-ff release/1.0.0

git switch main
git switch -c hotfix/fix-production-readme
printf "\nHotfix de producao.\n" >> README.md
git add README.md
git commit -m "fix(readme): correct production note"
git switch main
git merge --no-ff hotfix/fix-production-readme
git tag v1.0.1
git switch develop
git merge --no-ff hotfix/fix-production-readme
```

## O que observar

- Feature nasce de `develop`.
- Release estabiliza o que vai para producao.
- Hotfix nasce da `main` porque corrige producao.
- Release e hotfix voltam para `develop` para nao perder correcao.
