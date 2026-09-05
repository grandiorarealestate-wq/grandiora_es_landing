<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>Best Areas for Expats in Maresme: Where to Rent a Luxury Home — Grandiora</title>
	<meta
		name="description"
		content="The best Maresme towns for expats renting luxury homes near Barcelona: Alella, Sant Andreu de Llavaneres, Sant Vicenç de Montalt, Teià, Cabrils. Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('garea.h1')}</h1>
	<p class="lead">{t('garea.lead')}</p>

	<h2>{t('garea.h2a')}</h2>
	<p>{t('garea.p1')}</p>
	<ul>
		<li>{t('garea.li1')}</li>
		<li>{t('garea.li2')}</li>
		<li>{t('garea.li3')}</li>
	</ul>
	<p>{t('garea.p2')}</p>

	<h2>{t('garea.h2b')}</h2>
	<p>{t('garea.p3')}</p>
	<p>{t('garea.p4')}</p>
	<p>{t('garea.p5')}</p>
	<p>{t('garea.p6')}</p>
	<p>{t('garea.p7')}</p>

	<h2>{t('garea.h2c')}</h2>
	<p>{t('garea.p8')}</p>
	<ul>
		<li>{t('garea.li4')}</li>
		<li>{t('garea.li5')}</li>
		<li>{t('garea.li6')}</li>
	</ul>
	<p>{t('garea.p9')}</p>
	<p>{t('garea.p10')} <a href="/guide/rent-villa-barcelona">{t('gvilla.h1')}</a></p>

	<div class="cta-box">
		<h3>{t('garea.cta.h')}</h3>
		<p>{t('garea.cta.p')}</p>
		<a class="btn" href="/contact">{t('garea.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('garea.cta.link')}</a>
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
