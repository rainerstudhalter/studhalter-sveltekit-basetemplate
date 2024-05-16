# studhalter-sveltekit-basetemplate

SvelteKit Template with [UnoCSS](https://unocss.dev/), [SASS](https://sass-lang.com/), [inlang](https://inlang.com/c/svelte).

See https://github.com/rainerstudhalter/studhalter.dev for an example of how it might be used.

## Setup

```bash
project_name=domain.tld
git clone https://github.com/rainerstudhalter/studhalter-sveltekit-basetemplate.git $project_name
cd $project_name
npm install

# start dev server and go to http://localhost:5173
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## License

[MIT](LICENSE)