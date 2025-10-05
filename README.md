# Steps to repro

```bash
git clone https://github.com/nikelborm/effect-language-service-performance-repro.git
cd effect-language-service-performance-repro
bun install
code . ./index.ts
```

Then put the cursor on the word `issues`. And wait. The popup will render slow
as hell. Removing `@effect/language-service` plugin from `tsconfig.json` makes
it instant.
