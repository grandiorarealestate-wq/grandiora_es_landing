<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>Moving to Barcelona as an Expat: The Honest Guide (2026) — Grandiora</title>
	<meta
		name="description"
		content="Moving to Barcelona as an expat in 2026? The real steps: paperwork, NIE, neighbourhoods, schools and housing — minus the sugar-coating. Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('gmove.h1')}</h1>
	<p class="lead">{t('gmove.lead')}</p>

	<h2>{t('gmove.h2a')}</h2>
	<p>{t('gmove.p1')}</p>
	<p>{t('gmove.p2')}</p>

	<h2>{t('gmove.h2b')}</h2>
	<p>{t('gmove.p3')}</p>
	<p>{t('gmove.p4')}</p>

	<h2>{t('gmove.h2c')}</h2>
	<p>{t('gmove.p5')}</p>
	<p>{t('gmove.p6')}</p>

	<h2>{t('gmove.h2d')}</h2>
	<ul>
		<li>{t('gmove.li1')}</li>
		<li>{t('gmove.li2')}</li>
		<li>{t('gmove.li3')}</li>
		<li>{t('gmove.li4')}</li>
		<li>{t('gmove.li5')}</li>
	</ul>

	<h2>{t('gmove.h2e')}</h2>
	<p>{t('gmove.p7')}</p>

	<div class="cta-box">
		<h3>{t('gmove.cta.h')}</h3>
		<p>{t('gmove.cta.p')}</p>
		<a class="btn" href="/contact">{t('gmove.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('gmove.cta.link')}</a>
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
