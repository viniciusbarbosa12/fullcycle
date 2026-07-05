# Example - Commitlint

Use this file as reference after trying lab.

## Valid messages

```txt
feat(auth): add login validation
fix(api): handle null customer response
docs(readme): update setup instructions
refactor(order): simplify status validation
test(payment): add retry scenario
```

## Bad messages

```txt
adjustments
fix
fixed bug
Final changes
```

## Common configuration

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

## What to Watch

The type should explain the nature of the change. Scope helps locate the affected area.
