<script>
	import { PHONE_MAIN, PHONE_MAIN_LINK, EMAIL } from '$lib/assets/data.js';
	import { t } from '$lib/i18n.svelte.ts';
</script>

<div class="contact">
	<div class="wrap">
		<a href={PHONE_MAIN_LINK}><b>{PHONE_MAIN}</b></a> ·
		<a href={`mailto:${EMAIL}`}>{EMAIL}</a> ·
		<a href="https://maps.app.goo.gl/TPkTr1h5eRiX1ZfT7" target="_blank" rel="noopener">Passeig de Gràcia 55, 4-6, 08007 Barcelona</a>
	</div>
</div>
<footer>
	<div class="wrap">GRANDIORA · grandiorarealestate.com</div>
	<div class="wrap guide-links">
		<a href="/guide/rent-villa-barcelona">{t('flink.rent-villa')}</a>
		<span>·</span>
		<a href="/guide/best-areas-maresme">{t('flink.best-areas')}</a>
		<span>·</span>
		<a href="/guide/nie-for-renting-in-spain">{t('flink.nie')}</a>
		<span>·</span>
		<a href="/guide/cost-of-living-barcelona-expats">{t('flink.cost-living')}</a>
		<span>·</span>
		<a href="/guide/moving-to-barcelona-expat-guide">{t('flink.moving')}</a>
		<span>·</span>
		<a href="/guide/buy-luxury-property-barcelona">{t('flink.buy-luxury')}</a>
		<span>·</span>
		<a href="/guide/rent-house-with-pool-maresme">{t('flink.rent-pool')}</a>
		<span>·</span>
		<a href="/guide/best-neighborhoods-barcelona-families-schools">{t('flink.best-nbhd')}</a>
	</div>
</footer>

<style>
	.contact a { color: inherit; text-decoration: none; }
	.contact a:hover { text-decoration: underline; }
	.guide-links {
		margin-top: 10px;
		font-size: 13px;
		color: #888;
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.guide-links a {
		color: #b8924f;
		text-decoration: none;
	}
	.guide-links a:hover {
		text-decoration: underline;
	}
</style>
