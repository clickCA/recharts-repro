# Vite 8.0.8 + Rolldown + Recharts Bundling Bug

Minimal reproduction of Vite 8.0.8 + `@rolldown/plugin-babel` incorrectly bundling recharts.

## The Bug

Vite's pre-bundling creates broken code:
```js
var require_isUnsafeProperty = require_isUnsafeProperty();  // ← Self-reference!
```

This causes: `Uncaught TypeError: require_isUnsafeProperty is not a function`

## Environment

- **vite:** 8.0.8
- **@rolldown/plugin-babel:** 0.2.3
- **recharts:** 3.8.1

## Reproduce

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` and check browser console for the error.

## Verify

```bash
grep "require_isUnsafeProperty = require_isUnsafeProperty()" node_modules/.vite/deps/recharts.js
```

## Workaround

```ts
// vite.config.ts
optimizeDeps: {
  exclude: ['recharts'],
},
```

**Note:** Bug is fixed in vite 8.0.12+
