# Instatllation protocol

## setup

```
npm create svelte@latest studhalter-template
Which Svelte app template? › Skeleton project

cd studhalter-template
npm install

npx @inlang/paraglide-js@latest init
npm i -D @inlang/paraglide-sveltekit
npm install

npm i -D unocss @iconify/json @unocss/extractor-svelte @unocss/transformer-directives @unocss/transformer-variant-group
npm i -D sass
```

## vite.config.ts

```
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglide } from "@inlang/paraglide-sveltekit/vite"
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [
		UnoCSS(),
		sveltekit(),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
	]
});
```

## svelte.config.js

```
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$paraglide: "./src/paraglide",
		},
	}
};

export default config;
```

## project.inlang/settings.json

adjust path to messages

from

```
  "plugin.inlang.messageFormat": {
    "pathPattern": "./messages/{languageTag}.json"
  }
```

to

```
  "plugin.inlang.messageFormat": {
    "pathPattern": "./i18n/{languageTag}.json"
  }
```

## src/lib/i18n/index.ts
```
import { createI18n } from "@inlang/paraglide-sveltekit"
import * as runtime from "$lib/paraglide/runtime.js"

export const i18n = createI18n(runtime);
```