# Exemplo - Commitlint

Use este arquivo como referencia depois de tentar o lab.

## Mensagens validas

```txt
feat(auth): add login validation
fix(api): handle null customer response
docs(readme): update setup instructions
refactor(order): simplify status validation
test(payment): add retry scenario
```

## Mensagens ruins

```txt
ajustes
fix
arrumei bug
mudancas finais
```

## Configuracao comum

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

## O que observar

O tipo deve explicar a natureza da mudanca. O escopo ajuda a localizar a area afetada.
