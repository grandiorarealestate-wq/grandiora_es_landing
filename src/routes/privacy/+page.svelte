<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<svelte:head>
	<title>Privacy Policy — Grandiora Real Estate</title>
	<meta
		name="description"
		content="Privacy Policy of Grandiora Real Estate. How we collect, use and protect your personal data."
	/>
</svelte:head>

<Header />

<div class="wrap legal">
	<h1>{t('gprv.h1')}</h1>
	<p class="lead">{t('gprv.lead')}</p>
	<ul>
		<li>{t('gprv.li1')}</li>
		<li>{t('gprv.li2')}</li>
		<li>{t('gprv.li3')}</li>
		<li>{t('gprv.li4')}</li>
		<li>{t('gprv.li5')}</li>
		<li>{t('gprv.li6')}</li>
	</ul>

	<h2>{t('gprv.h2a')}</h2>
	<p>Garante Urbana S.L. (Grandiora Real Estate)<br />Tax ID (CIF): B22538706<br />Passeig de Gràcia 55, Barcelona, Spain<br />Email: info@grandiora.es</p>

	<h2>{t('gprv.h2b')}</h2>
	<h3>{t('gprv.h3a')}</h3>
	<p><strong>Purpose:</strong> {t('gprv.p1')}</p>
	<p><strong>Legal Basis:</strong> {t('gprv.p2')}</p>
	<p><strong>Retention Period:</strong> {t('gprv.p3')}</p>

	<h3>{t('gprv.h3b')}</h3>
	<p><strong>Purpose:</strong> {t('gprv.p4')}</p>
	<p><strong>Legal Basis:</strong> {t('gprv.p5')}</p>
	<p><strong>Retention Period:</strong> {t('gprv.p6')}</p>

	<h2>{t('gprv.h2c')}</h2>
	<p>{t('gprv.p7')}</p>

	<h2>{t('gprv.h2d')}</h2>
	<p>{t('gprv.p8')}</p>

	<h2>{t('gprv.h2e')}</h2>
	<p>{t('gprv.p9')}</p>
	<ul>
		<li>{t('gprv.li7')}</li>
		<li>{t('gprv.li8')}</li>
		<li>{t('gprv.li9')}</li>
		<li>{t('gprv.li10')}</li>
		<li>{t('gprv.li11')}</li>
		<li>{t('gprv.li12')}</li>
	</ul>
	<p>{t('gprv.p10')}</p>

	<h2>{t('gprv.h2f')}</h2>
	<p>{t('gprv.p11')}</p>

	<h2>{t('gprv.h2g')}</h2>
	<p>{t('gprv.p12')}</p>
	<p>{t('gprv.p13')}</p>
</div>

<SiteFooter />

<style>
	.legal {
		max-width: 820px;
		margin: 0 auto;
		padding: 48px 20px 64px;
	}
	.legal h1 {
		font-size: 34px;
		margin-bottom: 18px;
	}
	.legal h2 {
		font-size: 22px;
		margin: 32px 0 12px;
	}
	.legal h3 {
		font-size: 18px;
		margin: 22px 0 8px;
	}
	.legal p {
		font-size: 15px;
		line-height: 1.7;
		margin-bottom: 12px;
		color: #333;
	}
	.legal .lead {
		font-size: 16px;
	}
	.legal ul {
		margin: 0 0 16px 22px;
	}
	.legal li {
		font-size: 15px;
		line-height: 1.7;
		color: #333;
	}
	.legal a {
		color: #b8924f;
	}
</style>
