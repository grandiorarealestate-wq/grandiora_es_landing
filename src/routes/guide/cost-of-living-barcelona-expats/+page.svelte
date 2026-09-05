<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>Cost of Living in Barcelona for Expats: Real Numbers (2026) — Grandiora</title>
	<meta
		name="description"
		content="What does it actually cost to live in Barcelona and the Maresme coast as an expat? Real figures for rent, utilities, groceries, schools and transport in 2026. Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('gcost.h1')}</h1>
	<p class="lead">{t('gcost.lead')}</p>

	<h2>{t('gcost.h2a')}</h2>
	<p>{t('gcost.p1')}</p>
	<p>{t('gcost.p2')}</p>
	<p>{t('gcost.p3')}</p>

	<h2>{t('gcost.h2b')}</h2>
	<p>{t('gcost.p4')}</p>
	<p>{t('gcost.p5')}</p>

	<h2>{t('gcost.h2c')}</h2>
	<p>{t('gcost.p6')}</p>
	<p>{t('gcost.p7')}</p>

	<h2>{t('gcost.h2d')}</h2>
	<p>{t('gcost.p8')}</p>

	<h2>{t('gcost.h2e')}</h2>
	<p>{t('gcost.p9')}</p>

	<h2>{t('gcost.h2f')}</h2>
	<p>{t('gcost.p10')}</p>
	<p>{t('gcost.p11')}</p>

	<div class="cta-box">
		<h3>{t('gcost.cta.h')}</h3>
		<p>{t('gcost.cta.p')}</p>
		<a class="btn" href="/contact">{t('gcost.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('gcost.cta.link')}</a>
	</div>
</div>

<SiteFooter />

<style>
	.article {
		max-width: 820px;
		margin: 0 auto;
		padding: 48px 20px 64px;
	}
	.article h1 {
		font-size: 34px;
		line-height: 1.25;
		margin-bottom: 18px;
	}
	.article h2 {
		font-size: 22px;
		margin: 32px 0 12px;
	}
	.article p {
		font-size: 15px;
		line-height: 1.7;
		margin-bottom: 12px;
		color: #333;
	}
	.article .lead {
		font-size: 16px;
	}
	.article ul,
	.article ol {
		margin: 0 0 16px 22px;
	}
	.article li {
		font-size: 15px;
		line-height: 1.7;
		color: #333;
		margin-bottom: 6px;
	}
	.cta-box {
		margin-top: 36px;
		padding: 28px 24px;
		background: #f2f2f2;
		border-radius: 12px;
		text-align: center;
	}
	.cta-box h3 {
		font-size: 20px;
		margin-bottom: 8px;
	}
	.cta-box .btn {
		display: inline-block;
		margin-top: 14px;
	}
	.cta-box .btn-link {
		display: block;
		margin-top: 12px;
		color: #b8924f;
		font-size: 14px;
	}
</style>
