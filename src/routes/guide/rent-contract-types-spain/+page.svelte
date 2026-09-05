<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>Rental Contract Types in Spain: Vivienda vs Temporary Lease — Grandiora</title>
	<meta
		name="description"
		content="Arrendamiento de vivienda vs temporary lease in Spain: what the difference means for your rights, how long you can stay, and why the wording matters. Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>{t('gcon.h1')}</h1>
	<p class="lead">{t('gcon.lead')}</p>

	<h2>{t('gcon.h2a')}</h2>
	<p>{t('gcon.p1')}</p>
	<p>{t('gcon.p2')}</p>

	<h2>{t('gcon.h2b')}</h2>
	<p>{t('gcon.p3')}</p>
	<p>{t('gcon.p4')}</p>

	<h2>{t('gcon.h2c')}</h2>
	<p>{t('gcon.p5')}</p>

	<h2>{t('gcon.h2d')}</h2>
	<p>{t('gcon.p6')}</p>

	<h2>{t('gcon.h2e')}</h2>
	<p>{t('gcon.p7')} <a href="/guide/fianza-deposits-how-much-landlords-can-ask">{t('gfia.h1')}</a></p>

	<h2>{t('gcon.h2f')}</h2>
	<ul>
		<li>{t('gcon.li1')}</li>
		<li>{t('gcon.li2')}</li>
		<li>{t('gcon.li3')}</li>
		<li>{t('gcon.li4')}</li>
	</ul>
	<p>{t('gcon.p8')}</p>
	<p>{t('gcon.p9')} <a href="/guide/best-areas-maresme">{t('garea.h1')}</a></p>

	<div class="cta-box">
		<h3>{t('gcon.cta.h')}</h3>
		<p>{t('gcon.cta.p')}</p>
		<a class="btn" href="/contact">{t('gcon.cta.btn')}</a>
		<a class="btn-link" href="/checklist.pdf">{t('gcon.cta.link')}</a>
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
