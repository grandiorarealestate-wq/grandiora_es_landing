<script>
	import { PHONE_MAIN, PHONE_MAIN_LINK } from '$lib/assets/data';
	import CurrencyToggle from '$lib/components/CurrencyToggle/CurrencyToggle.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher/LanguageSwitcher.svelte';
	import { t } from '$lib/i18n.svelte.ts';

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
				<LanguageSwitcher />
				<a class="guide-link" href="/">{t('nav.rentals')}</a>
				<a class="guide-link" href="/sale">{t('nav.sale')}</a>
				<a class="guide-link" href="/guide/rent-villa-barcelona">{t('nav.guides')}</a>
				<a class="btn" href="/contact">{t('nav.contact')}</a>
			</div>
		{/if}
	</div>
</header>
