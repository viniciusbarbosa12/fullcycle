# Exemplo - Primeiros comandos

Use este arquivo como referencia depois de tentar o lab.

```bash
mkdir git-lab-base
cd git-lab-base
git init
printf "# Git Lab Base\n" > README.md
git add README.md
git commit -m "docs(readme): add initial project description"
git switch -c feature/primeira-alteracao
printf "\nPrimeira alteracao de estudo.\n" >> README.md
git add README.md
git commit -m "docs(readme): describe first change"
git log --oneline --decorate --graph --all
```

## O que observar

- Cada commit tem uma intencao pequena.
- A branch deixa claro que a alteracao ainda esta isolada.
- O log mostra a sequencia de decisoes.
