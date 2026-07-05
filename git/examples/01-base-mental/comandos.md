# Example - First commands

Use this file as reference after trying lab.

```bash
mkdir git-lab-base
cd git-lab-base
git init
printf "# Git Lab Base\n" > README.md
git add README.md
git commit -m "docs(readme): add initial project description"
git switch -c feature/first-change
printf "\nFirst study change.\n" >> README.md
git add README.md
git commit -m "docs(readme): describe first change"
git log --oneline --decorate --graph --all
```

## What to Watch

- Each commit has a small understanding.
- Branch makes it clear that the change is still isolated.
- Log shows the sequence of decisions.
