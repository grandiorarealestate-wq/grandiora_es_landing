<script>
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import FloatingContact from '$lib/components/FloatingContact/FloatingContact.svelte';
	import PropertyCard from '$lib/components/PropertyCard/PropertyCard.svelte';
	import { saleProperties, PHONE_MAIN, PHONE_MAIN_LINK, WHATSAPP, TELEGRAM } from '$lib/assets/sale';

	const HERO_IMG = '/img/hero_rental.jpg';

	let visible = $state(9);
	function showMore() {
		visible += 9;
	}

	// Lead form — same Lambda → CADDIES pipeline, source 'villas-sale'
	const ENDPOINT_URL = 'https://g5joqg9b5m.execute-api.eu-north-1.amazonaws.com/default/grandiora_landing_leads';
	let name = $state('');
	let phone = $state('');
	let city = $state('');
	let family = $state('');
	let msg = $state('');
	let formMsg = $state('');
	let msgColor = $state('#2f8f4e');

	function submit(event) {
		event.preventDefault();
		if (!name.trim() || !phone.trim()) {
			formMsg = 'Please fill in your name and phone.';
			msgColor = '#c0392b';
			return;
		}
		try {
			fetch(ENDPOINT_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name.trim(),
					phone: phone.trim(),
					message: [city.trim(), family.trim(), msg.trim()].filter(Boolean).join(' | '),
					source: 'villas-sale'
				})
			});
		} catch (e) {}
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'generate_lead');
			window.gtag('event', 'conversion', { send_to: 'AW-17552999108/7743873281' });
		} else if (window.dataLayer) {
			window.dataLayer.push({ event: 'generate_lead' });
		}
		formMsg = 'Thank you! We answer within minutes.';
		msgColor = '#2f8f4e';
		name = '';
		phone = '';
		city = '';
		family = '';
		msg = '';
	}
</script>

<svelte:head>
	<title>Luxury Villas for Sale — Barcelona & Maresme | Grandiora</title>
	<meta
		name="description"
		content="Exclusive luxury homes and villas for sale in Barcelona and Maresme. From prime penthouses to private estates — with expert representation and turnkey service. Grandiora Real Estate."
	/>
	<meta property="og:title" content="Luxury Villas for Sale — Barcelona & Maresme | Grandiora" />
	<meta property="og:description" content="Exclusive luxury homes and villas for sale in Barcelona and Maresme. Expert representation, turnkey service." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={HERO_IMG} />
</svelte:head>

<Header />

<!-- ===== Hero — full-width image, content below ===== -->
<div class="hero">
	<div class="hero-media">
		<img src={HERO_IMG} alt="Luxury villa with pool in Maresme, Barcelona" />
	</div>
	<div class="hero-copy">
		<div class="eyebrow">For sale · Barcelona · Maresme</div>
		<h1>Luxury homes <em>for sale</em>. Barcelona &amp; Maresme</h1>
		<p>Exclusive penthouses, villas and estates — with expert representation and turnkey service.</p>
		<div class="hero-trust"><span>Prime locations</span> · Expert negotiation · Turnkey</div>
		<div class="cta">
			<a class="btn" href="#catalogue">View homes for sale</a>
		</div>
		<div class="cat-note">Sale catalogue · Barcelona · Maresme</div>
	</div>
</div>

<!-- ===== Cross-link to rentals ===== -->
<div class="cross">
	<div class="cross-in">
		<span>Looking to rent instead?</span>
		<a class="clink" href="/villas-maresme">View luxury rentals →</a>
	</div>
</div>

<!-- ===== Catalogue ===== -->
<div class="wrap" id="catalogue">
	<h2 class="sec">Featured <span>homes</span></h2>
	<div class="grid">
		{#each saleProperties.slice(0, visible) as p (p.ref)}
			<PropertyCard {p} />
		{/each}
	</div>
	{#if visible < saleProperties.length}
		<div class="show-more">
			<button class="btn" onclick={showMore}>Show more</button>
		</div>
	{/if}
</div>

<!-- ===== Lead form ===== -->
<div class="wrap lead-sec">
	<div class="lead">
		<h3>Tell us what you're looking for</h3>
		<p>Leave your details — we share our full portfolio and answer within minutes.</p>
		<form onsubmit={submit} novalidate>
			<div class="row">
				<input type="text" bind:value={name} placeholder="Your name" autocomplete="name" required />
				<input type="tel" bind:value={phone} placeholder="Phone / WhatsApp" autocomplete="tel" required />
			</div>
			<div class="row">
				<select bind:value={city}>
					<option value="">City / Area…</option>
					<option>Barcelona</option>
					<option>Alella</option>
					<option>Cabrils</option>
					<option>Cabrera de Mar</option>
					<option>Sant Andreu de Llavaneres</option>
					<option>Cardedeu</option>
					<option>Other</option>
				</select>
				<select bind:value={family}>
					<option value="">Household…</option>
					<option>Single</option>
					<option>Couple</option>
					<option>Couple + children</option>
					<option>Family 3+</option>
					<option>Investor</option>
					<option>Other</option>
				</select>
			</div>
			<textarea bind:value={msg} placeholder="Area, bedrooms, budget, move-in date…"></textarea>
			<button class="btn" type="submit">Request information</button>
		</form>
		{#if formMsg}<div class="form-msg" style="color:{msgColor}">{formMsg}</div>{/if}
	</div>
</div>

<!-- ===== Final CTA ===== -->
<div class="wrap final">
	<h2 class="sec">Let's <span>talk</span></h2>
	<div class="fc-row">
		<a class="btn" href={PHONE_MAIN_LINK}>📞 Call {PHONE_MAIN}</a>
		<a class="btn wa" href={WHATSAPP}>WhatsApp</a>
		<a class="btn tg" href={TELEGRAM}>Telegram</a>
	</div>
</div>

<SiteFooter />
<FloatingContact />

<style>
	/* ===== Hero (light luxury, full-width image, content below) ===== */
	.hero {
		background: #f7f5f0;
		border-bottom: 1px solid #e7ddc7;
	}
	.hero-media img {
		width: 100%;
		aspect-ratio: 16 / 9;
		max-height: 520px;
		object-fit: cover;
		display: block;
	}
	.hero-copy {
		text-align: center;
		padding: 32px clamp(16px, 4vw, 26px) 40px;
		max-width: 760px;
		margin: 0 auto;
	}
	.eyebrow {
		font-size: 11px;
		letter-spacing: 5px;
		color: #a9853f;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 16px;
	}
	h1 {
		font-size: clamp(28px, 5.5vw, 44px);
		line-height: 1.12;
		letter-spacing: -0.3px;
		margin-bottom: 16px;
	}
	h1 em { color: #a9853f; font-style: italic; }
	p {
		color: #6b6b6b;
		font-size: 16px;
		font-weight: 300;
		margin-bottom: 18px;
	}
	.hero-trust {
		font-size: 11px;
		letter-spacing: 1.5px;
		color: #6b6b6b;
		text-transform: uppercase;
		margin-bottom: 24px;
	}
	.hero-trust span { color: #a9853f; font-weight: 700; }
	.cta a {
		display: block;
		max-width: 460px;
		margin: 0 auto;
		border-radius: 40px;
		padding: 16px 30px;
	}
	.cat-note {
		margin-top: 14px;
		color: #a3a099;
		font-size: 11px;
		letter-spacing: .5px;
	}

	/* ===== Cross-link strip ===== */
	.cross {
		background: #fff;
		border-bottom: 1px solid #e7ddc7;
	}
	.cross-in {
		max-width: 1160px;
		margin: 0 auto;
		padding: 16px clamp(16px, 4vw, 26px);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		flex-wrap: wrap;
		font-size: 14px;
		color: #6b6b6b;
	}
	.clink {
		color: #a9853f;
		font-weight: 700;
		text-decoration: none;
	}
	.clink:hover { text-decoration: underline; }

	/* ===== Catalogue ===== */
	.wrap { max-width: 1160px; margin: 0 auto; padding: 0 clamp(16px, 4vw, 26px); }
	#catalogue { padding-top: 36px; padding-bottom: 12px; }
	.sec { font-size: clamp(24px, 4vw, 32px); margin-bottom: 20px; }
	.sec span { color: #a9853f; font-style: italic; }
	.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
	@media (max-width: 860px) { .grid { grid-template-columns: repeat(2, 1fr); } }
	@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
	.show-more { text-align: center; margin: 24px 0; }

	/* ===== Lead form ===== */
	.lead-sec { padding-top: 28px; padding-bottom: 8px; }
	.lead { background: #f7f5f0; border: 1px solid #e7ddc7; border-radius: 6px; padding: 28px; }
	.lead h3 { font-size: 24px; margin-bottom: 6px; }
	.lead p { color: #6b6b6b; margin-bottom: 18px; }
	.lead .row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
	.lead input, .lead select, .lead textarea {
		width: 100%; padding: 12px 14px; border: 1px solid #e7ddc7; border-radius: 6px;
		font-family: inherit; font-size: 15px; background: #fff; color: #202221;
	}
	.lead textarea { min-height: 80px; resize: vertical; margin-bottom: 14px; }
	.lead .btn { border-radius: 40px; }
	.form-msg { margin-top: 12px; font-size: 14px; font-weight: 600; }
	@media (max-width: 560px) { .lead .row { grid-template-columns: 1fr; } }

	/* ===== Final CTA ===== */
	.final { padding-top: 28px; padding-bottom: 40px; }
	.fc-row { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
