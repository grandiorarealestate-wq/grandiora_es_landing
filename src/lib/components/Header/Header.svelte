<script>
	import { PHONE_MAIN, PHONE_MAIN_LINK } from '$lib/assets/data';
	import CurrencyToggle from '$lib/components/CurrencyToggle/CurrencyToggle.svelte';

	let { back = false } = $props();
</script>

<div class="topline"></div>
<header>
	<div class="wrap header-in">
		<div class="brand"><a href="/">GRANDIORA</a><small>REAL ESTATE · BARCELONA</small></div>
		{#if back}
			<div class="back"><a href="./">← Back</a></div>
		{:else}
			<div class="header-cta">
				<a class="tel-link" href={PHONE_MAIN_LINK}>{PHONE_MAIN}</a>
				<CurrencyToggle />
				<a class="guide-link" href="/">Rentals</a>
				<a class="guide-link" href="/sale">For sale</a>
				<a class="guide-link" href="/guide/rent-villa-barcelona">Guides</a>
				<a class="btn" href="/contact">Contact us</a>
			</div>
		{/if}
	</div>
</header>
