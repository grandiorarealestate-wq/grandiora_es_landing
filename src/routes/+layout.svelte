<script>
	import '$lib/styles/app.scss';
	import CookieConsent from '$lib/components/CookieConsent/CookieConsent.svelte';

	let { children } = $props();
</script>

{@render children()}
<CookieConsent />
