<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>NIE for Renting in Spain: What It Is and How to Get It (2026) — Grandiora</title>
	<meta
		name="description"
		content="Do you need an NIE to rent a home in Spain? What it is, why landlords ask for it, and how to apply step by step. Plain-language guide by Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('gnie.h1')}</h1>
	<p class="lead">{t('gnie.lead')}</p>

	<h2>{t('gnie.h2a')}</h2>
	<p>{t('gnie.p1')}</p>
	<p>{t('gnie.p2')}</p>

	<h2>{t('gnie.h2b')}</h2>
	<p>{t('gnie.p3')}</p>
	<p>{t('gnie.p4')}</p>

	<h2>{t('gnie.h2c')}</h2>
	<p>{t('gnie.p5')}</p>
	<ul>
		<li>{t('gnie.li1')}</li>
		<li>{t('gnie.li2')}</li>
		<li>{t('gnie.li3')}</li>
		<li>{t('gnie.li4')}</li>
		<li>{t('gnie.li5')}</li>
	</ul>
	<p>{t('gnie.p6')}</p>

	<h2>{t('gnie.h2d')}</h2>
	<p>{t('gnie.p7')}</p>
	<p>{t('gnie.p8')}</p>

	<h2>{t('gnie.h2e')}</h2>
	<p>{t('gnie.p9')}</p>

	<div class="cta-box">
		<h3>{t('gnie.cta.h')}</h3>
		<p>{t('gnie.cta.p')}</p>
		<a class="btn" href="/contact">{t('gnie.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('gnie.cta.link')}</a>
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
