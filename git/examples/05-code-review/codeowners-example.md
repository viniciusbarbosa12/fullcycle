# Exemplo - CODEOWNERS

Crie como `.github/CODEOWNERS` no repositorio de treino.

```txt
# Dono padrao do repositorio
* @seu-usuario

# Donos por area
/docs/ @seu-usuario
/src/payments/ @time-pagamentos
/src/auth/ @time-identidade
```

## O que observar

- `*` define dono padrao.
- Regras mais especificas ajudam a chamar especialistas.
- CODEOWNERS funciona melhor junto com branch protection.
