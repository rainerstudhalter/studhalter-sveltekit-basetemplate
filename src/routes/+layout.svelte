<script lang="ts">
	// css
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import '$lib/styles/app.scss';

	// i18n
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { languageTag } from "$paraglide/runtime";
	import { i18n } from '$lib/i18n';
	let lang = languageTag();

	// load i18n messages
	import * as m from "$paraglide/messages";

	// basic imports
	import { dev } from "$app/environment";
	import { page } from "$app/stores";

	// stores
	//import { blah } from '$lib/stores.ts';

	// components
	import DevBreakpoints from '$lib/components/dev-breakpoints.svelte';
</script>

<svelte:head>
	<ParaglideJS {i18n}>
		<title>{m['route_' + $page.data.id + '_title'] ? `${m['route_' + $page.data.id + '_title']()} - ${m.website_title()}` : m.website_title()}</title>
		<meta name="description" content="{m['route_' + $page.data.id + '_description'] ? m['route_' + $page.data.id + '_description']() : m.website_description()}" />
		<meta name="keywords" content="{m['route_' + $page.data.id + '_keywords'] ? m['route_' + $page.data.id + '_keywords']() : m.website_keywords()}" />
	</ParaglideJS>
</svelte:head>

<ParaglideJS {i18n}>
	<div
		id="page"
		class="
			page-{$page.data.id ?? ($page.error ? 'error' : 'unknown')}
			page-lang-{lang}
		"
	>
    	<slot />
	</div>
	<DevBreakpoints />
</ParaglideJS>