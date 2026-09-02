<script>
	import { PHONE_MAIN, PHONE_MAIN_LINK } from '$lib/assets/data';

	let { back = false } = $props();
</script>

<div class="topline"></div>
<header>
	<div class="wrap header-in">
		<div class="brand">GRANDIORA<small>REAL ESTATE · BARCELONA</small></div>
		{#if back}
			<div class="back"><a href="./">← Back</a></div>
		{:else}
			<div class="header-cta">
				<a class="tel-link" href={PHONE_MAIN_LINK}>{PHONE_MAIN}</a>
				<a class="guide-link" href="/guide/rent-villa-barcelona">Guides</a>
				<a class="btn" href="/contact">Contact us</a>
			</div>
		{/if}
	</div>
</header>
