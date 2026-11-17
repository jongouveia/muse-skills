## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Design lint

After any UI change, run `npm run lint:design` and fix every finding you added. `npm run build` runs it first and fails on any finding. Colours and sizes come from `@theme` tokens in `src/styles/global.css`: add a token, never a raw palette class, hex value or off-token arbitrary value. After you fix a baseline finding, run `npm run lint:design:prune`. Never re-record the baseline with `--suppress-all`. The lint does not see inline `style=""` colours or class strings in `.ts` files that never reach a class attribute; check those by hand.
