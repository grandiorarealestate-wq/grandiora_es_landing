<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>How to Rent a Villa in Barcelona: Full Guide for Expats (2026) — Grandiora</title>
	<meta
		name="description"
		content="Complete guide to renting a villa in Barcelona for expats: documents, budget, lease length, and how to find off-market villas in Maresme. Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('gvilla.h1')}</h1>
	<p class="lead">{t('gvilla.lead')}</p>

	<h2>{t('gvilla.h2a')}</h2>
	<p>{t('gvilla.p1')}</p>
	<p>{t('gvilla.p2')}</p>

	<h2>{t('gvilla.h2b')}</h2>
	<ul>
		<li><strong>NIE</strong> {t('gvilla.li1')}</li>
		<li>{t('gvilla.li2')}</li>
		<li><strong>{t('gvilla.li3')}</strong></li>
		<li>{t('gvilla.li4')}</li>
		<li>{t('gvilla.li5')}</li>
	</ul>
	<p>{t('gvilla.p3')}</p>

	<h2>{t('gvilla.h2c')}</h2>
	<p>{t('gvilla.p4')}</p>
	<ul>
		<li>{t('gvilla.li6')}</li>
		<li>{t('gvilla.li7')}</li>
		<li>{t('gvilla.li8')}</li>
	</ul>
	<p>{t('gvilla.p5')}</p>

	<h2>{t('gvilla.h2d')}</h2>
	<ul>
		<li>{t('gvilla.li9')}</li>
		<li>{t('gvilla.li10')}</li>
		<li>{t('gvilla.li11')}</li>
	</ul>
	<p>{t('gvilla.p6')}</p>

	<h2>{t('gvilla.h2e')}</h2>
	<p>{t('gvilla.p7')}</p>

	<div class="cta-box">
		<h3>{t('gvilla.cta.h')}</h3>
		<p>{t('gvilla.cta.p')}</p>
		<a class="btn" href="/contact">{t('gvilla.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('gvilla.cta.link')}</a>
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
