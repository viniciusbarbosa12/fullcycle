# Example - CODEOWNERS

Create as `.github/CODEOWNERS` in the training repository.

```txt
# Standard owner of the repository
* @your-usuary

# Owners by area
/docs/
/src/payments/ @time-payments
/src/auth/ @time-identity
```

## What to Watch

- `*` sets standard owner.
- More specific rules help call experts.
- CODEOWNERS works best along with branch protection.
