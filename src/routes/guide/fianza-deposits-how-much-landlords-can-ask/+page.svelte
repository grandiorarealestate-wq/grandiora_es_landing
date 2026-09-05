<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>Fianza and Deposits in Spain: How Much Can a Landlord Ask? (2026) — Grandiora</title>
	<meta
		name="description"
		content="How much deposit can a landlord legally ask when renting in Spain? Fianza, additional guarantees, INCASÒL in Catalonia, and how to get your money back. Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('gfia.h1')}</h1>
	<p class="lead">{t('gfia.lead')}</p>

	<h2>{t('gfia.h2a')}</h2>
	<p>{t('gfia.p1')}</p>
	<p>{t('gfia.p2')}</p>

	<h2>{t('gfia.h2b')}</h2>
	<p>{t('gfia.p3')}</p>
	<p>{t('gfia.p4')}</p>
	<ul>
		<li>{t('gfia.li1')}</li>
		<li>{t('gfia.li2')}</li>
		<li>{t('gfia.li3')}</li>
	</ul>
	<p>{t('gfia.p5')}</p>

	<h2>{t('gfia.h2c')}</h2>
	<p>{t('gfia.p6')}</p>
	<p>{t('gfia.p7')}</p>

	<h2>{t('gfia.h2d')}</h2>
	<p>{t('gfia.p8')}</p>

	<h2>{t('gfia.h2e')}</h2>
	<p>{t('gfia.p9')}</p>
	<p>{t('gfia.p10')}</p>

	<h2>{t('gfia.h2f')}</h2>
	<ul>
		<li>{t('gfia.li4')}</li>
		<li>{t('gfia.li5')}</li>
		<li>{t('gfia.li6')}</li>
		<li>{t('gfia.li7')}</li>
	</ul>
	<p>{t('gfia.p11')} <a href="/guide/rent-villa-barcelona">{t('gvilla.h1')}</a></p>

	<div class="cta-box">
		<h3>{t('gfia.cta.h')}</h3>
		<p>{t('gfia.cta.p')}</p>
		<a class="btn" href="/contact">{t('gfia.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('gfia.cta.link')}</a>
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
