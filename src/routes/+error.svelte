<script>
	import { page } from '$app/stores';
    import * as m from "$paraglide/messages";
</script>

<h1>{`${m.error_title()} ${$page.status}`}</h1>

{#if $page.status === 404}
    <p>{m.error_404_message()}</p>
{:else}
    <p>{$page.error.message}</p>
{/if}