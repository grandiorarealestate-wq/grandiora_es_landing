<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>Buying Luxury Property in Barcelona: What to Know (2026) — Grandiora</title>
	<meta
		name="description"
		content="Thinking of buying luxury property in Barcelona or Maresme? Prices, areas, taxes and what to look for — straight from a Barcelona real estate agency."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('gbuy.h1')}</h1>
	<p class="lead">{t('gbuy.lead')}</p>

	<h2>{t('gbuy.h2a')}</h2>
	<p>{t('gbuy.p1')}</p>
	<p>{t('gbuy.p2')}</p>
	<p>{t('gbuy.p3')}</p>

	<h2>{t('gbuy.h2b')}</h2>
	<p>{t('gbuy.p4')}</p>
	<p>{t('gbuy.p5')}</p>

	<h2>{t('gbuy.h2c')}</h2>
	<p>{t('gbuy.p6')}</p>
	<p>{t('gbuy.p7')}</p>

	<h2>{t('gbuy.h2d')}</h2>
	<ul>
		<li>{t('gbuy.li1')}</li>
		<li>{t('gbuy.li2')}</li>
		<li>{t('gbuy.li3')}</li>
		<li>{t('gbuy.li4')}</li>
		<li>{t('gbuy.li5')}</li>
	</ul>

	<h2>{t('gbuy.h2e')}</h2>
	<p>{t('gbuy.p8')}</p>

	<div class="cta-box">
		<h3>{t('gbuy.cta.h')}</h3>
		<p>{t('gbuy.cta.p')}</p>
		<a class="btn" href="/contact">{t('gbuy.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('gbuy.cta.link')}</a>
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
	.article ul {
		margin: 0 0 16px 22px;
	}
	.article li {
		font-size: 15px;
		line-height: 1.7;
		color: #333;
		margin-bottom: 8px;
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
