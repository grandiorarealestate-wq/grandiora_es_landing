<script>
	import { PHONE_MAIN, PHONE_MAIN_LINK, EMAIL } from '$lib/assets/data.js';
</script>

<div class="contact">
	<div class="wrap">
		<a href={PHONE_MAIN_LINK}><b>{PHONE_MAIN}</b></a> ·
		<a href={`mailto:${EMAIL}`}>{EMAIL}</a> ·
		Passeig de Gràcia 55, 4-6, 08007 Barcelona
	</div>
</div>
<footer>
	<div class="wrap">GRANDIORA · grandiorarealestate.com</div>
	<div class="wrap guide-links">
		<a href="/guide/rent-villa-barcelona">How to rent a villa in Barcelona</a>
		<span>·</span>
		<a href="/guide/best-areas-maresme">Best areas for expats in Maresme</a>
		<span>·</span>
		<a href="/guide/nie-for-renting-in-spain">NIE for renting in Spain</a>
		<span>·</span>
		<a href="/guide/cost-of-living-barcelona-expats">Cost of living in Barcelona</a>
	</div>
</footer>

<style>
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
