<script>
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import FloatingContact from '$lib/components/FloatingContact/FloatingContact.svelte';
	import PropertyCard from '$lib/components/PropertyCard/PropertyCard.svelte';
	import { properties, PHONE_MAIN, PHONE_MAIN_LINK, WHATSAPP, TELEGRAM } from '$lib/assets/data';

	let visible = $state(9);
	function showMore() {
		visible += 9;
	}

	// Lead magnet — checklist
	const ENDPOINT_URL = 'https://g5joqg9b5m.execute-api.eu-north-1.amazonaws.com/default/grandiora_landing_leads';
	let leadName = $state('');
	let leadContact = $state('');
	let leadMsg = $state('');
	let leadOk = $state(false);

	function requestChecklist(event) {
		event.preventDefault();
		if (!leadName.trim() || !leadContact.trim()) {
			leadMsg = 'Enter your name and email/phone.';
			leadOk = false;
			return;
		}
		try {
			fetch(ENDPOINT_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: leadName.trim(),
					phone: leadContact.trim(),
					message: 'Requested checklist (lead magnet)',
					source: 'rental-en'
				})
			});
		} catch (e) {}
		leadOk = true;
		leadMsg = '';
		window.open('/checklist.pdf', '_blank');
	}
</script>

<svelte:head>
	<title>Grandiora — Luxury villas for rent in Maresme</title>
	<meta
		name="description"
		content="Best luxury villas and apartments for rent in Maresme and Barcelona. Off-market portfolio for expats & internationals, answer within minutes. Grandiora Real Estate."
	/>
	<meta property="og:title" content="Grandiora — Luxury villas for rent in Maresme" />
	<meta
		property="og:description"
		content="Top selection of luxury rental properties for expats & internationals on long stays. We answer within minutes."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://grandiorarealestate.com/rental-en/img/villa1.jpg" />
</svelte:head>

<Header />

<div class="hero-lux">
	<div class="hero-media">
		<img src="/img/hero_rental.jpg" alt="Luxury villa with pool in Maresme, Barcelona" />
	</div>
	<div class="hero-copy">
		<div class="eyebrow">Rentals · Barcelona · Maresme</div>
		<h1>Luxury villa <em>rentals</em>. Maresme &amp; Barcelona</h1>
		<p>Exclusive villas and apartments for rent, with the utmost hospitality.</p>
		<div class="hero-trust"><span>Verified homes</span> · Flexible stays · Turnkey</div>
		<div class="cta">
			<a class="btn" href="#top">View rental properties</a>
		</div>
		<div class="cat-note">Rental catalogue · Maresme · Barcelona</div>
	</div>
</div>

<div class="trust">
	<div class="wrap inner">
		<div class="item"><b>+10</b><span>years of experience</span></div>
		<div class="item"><b>+8</b><span>languages spoken</span></div>
		<div class="item"><b>+200</b><span>properties</span></div>
	</div>
</div>

<div class="wrap" id="top">
	<h2 class="sec">Our <span>gems</span></h2>
	<div class="grid">
		{#each properties.slice(0, visible) as p (p.title)}
			<PropertyCard {p} />
		{/each}
	</div>
	{#if visible < properties.length}
		<div class="show-more">
			<button class="btn" onclick={showMore}>Show more</button>
		</div>
	{/if}
</div>

<div class="wrap reviews-sec" style="margin-top:26px">
	<div class="reviews">
		<h2 class="sec">What our <span>clients</span> say</h2>
		<div class="rev-rating">
			<span class="stars">★★★★★</span>
			<span class="rev-note">Rated on Google · Real client reviews</span>
		</div>
		<div class="rev-grid">
			<div class="rev-card">
				<div class="rev-stars">★★★★★</div>
				<p>«The purchase process in Alella was organised very well, with great care in all communications. You can clearly see a high-class agency in Barcelona with deep knowledge of the Maresme region. Every property matched our requirements — no delays, everything fast and transparent.»</p>
				<div class="rev-name">Omar Mesa Garcia</div>
			</div>
			<div class="rev-card">
				<div class="rev-stars">★★★★★</div>
				<p>«Excellent understanding of the market and real experience in Barcelona. They immediately pointed out risks that other agencies preferred to keep quiet about. Special respect for that.»</p>
				<div class="rev-name">Alis Yakimenko</div>
			</div>
			<div class="rev-card">
				<div class="rev-stars">★★★★★</div>
				<p>«Daniela is a wonderful person and a very professional agent at Grandiora Real Estate. I highly recommend her — her services are excellent.»</p>
				<div class="rev-name">Verified client</div>
			</div>
			<div class="rev-card">
				<div class="rev-stars">★★★★★</div>
				<p>«On 28 July 2026 we signed the purchase agreement for our house in Alella. Throughout the whole process we were helped and kept informed by their agent Emanuela — professional, efficient and tactful. Five stars to Grandiora and Emanuela.»</p>
				<div class="rev-name">Client · Alella</div>
			</div>
			<div class="rev-card">
				<div class="rev-stars">★★★★★</div>
				<p>«Emanuela is simply amazing. She understands what we're looking for and has a great eye for beautiful homes. She made the whole process simple and transparent, and even worked with our mortgage broker to make it easier. 10/10, highly recommend!»</p>
				<div class="rev-name">Verified client</div>
			</div>
		</div>
		<div class="rev-more">
			<a class="btn" href="https://maps.app.goo.gl/FJBSBULG3MohFQcs7" target="_blank" rel="noopener">Read all reviews on Google</a>
		</div>
	</div>
</div>

<div class="wrap" style="margin-top:26px">
	<div class="leadmagnet">
		<h3>Free checklist: rent in Spain without losing your deposit</h3>
		<p>10 points that save you from extra costs and headaches when renting.</p>
		<form onsubmit={requestChecklist} novalidate>
			<input type="text" bind:value={leadName} placeholder="Your name" />
			<input type="text" bind:value={leadContact} placeholder="Email or WhatsApp number" />
			<button class="btn" type="submit">Get the free checklist</button>
		</form>
		{#if leadMsg}<div class="lead-msg">{leadMsg}</div>{/if}
		{#if leadOk}<div class="lead-ok">Your checklist is opening in a new tab. Good luck! ✅</div>{/if}
	</div>
</div>

<div class="wrap" style="margin-top:26px">
	<div class="offmarket">
		<h3>Can't find what you're looking for?</h3>
		<p>Contact us and we'll share our entire off-market portfolio. We answer within minutes.</p>
		<a class="btn" href="/contact">Contact us</a>
		<span class="answer">We answer in 5 minutes</span>
	</div>
</div>

<div class="wrap" style="margin-top:22px">
	<div class="manager">
		<div class="mava"><img src="/img/anastasia.png" alt="Anastasia" /></div>
		<div class="mbody">
			<h3>Anastasia</h3>
			<p>I speak Russian, English and Spanish. Contact me — I'll find the perfect home for you.</p>
			<a class="btn" href={WHATSAPP}>Contact me — I answer in under 5 mins</a>
		</div>
	</div>
</div>

<div class="wrap" style="margin-top:26px">
	<div class="final-cta">
		<h2 class="sec">Let's <span>talk</span></h2>
		<div class="fc-row">
			<a class="btn" href={PHONE_MAIN_LINK}>📞 Call {PHONE_MAIN}</a>
			<a class="btn wa" href={WHATSAPP}><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp</a>
			<a class="btn tg" href={TELEGRAM}><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> Telegram</a>
		</div>
	</div>
</div>

<div class="phones">
	<div class="wrap">
		<div class="label">Call us in your language</div>
		<div class="list">
			<!-- <a class="ph" href={TELEGRAM}><div class="lang">🇷🇺 Russian</div><div class="num">+7 9...</div></a> -->
			<a class="ph" href={PHONE_MAIN_LINK}><div class="lang">🇪🇸 Español</div><div class="num">{PHONE_MAIN}</div></a>
			<a class="ph" href={PHONE_MAIN_LINK}><div class="lang">🇺🇸 English (US)</div><div class="num"></div></a>
			<a class="ph" href="tel:+380503686776"><div class="lang">🇺🇦 Ukrainian</div><div class="num">+38 050 368 67 76</div></a>
			<!-- <a class="ph" href={PHONE_MAIN_LINK}><div class="lang">🇺🇸 English (US)</div><div class="num">+1 ...</div></a> -->
		</div>
	</div>
</div>

<SiteFooter />
<FloatingContact />

<style>
	/* ===== New hero (light luxury) — scoped, unique class names to avoid app.scss conflicts ===== */
	.hero-lux {
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
	.hero-copy .eyebrow {
		font-size: 11px;
		letter-spacing: 5px;
		color: #a9853f;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 16px;
	}
	.hero-copy h1 {
		font-size: clamp(28px, 5.5vw, 44px);
		line-height: 1.12;
		letter-spacing: -0.3px;
		margin-bottom: 16px;
		font-weight: 400;
	}
	.hero-copy h1 em {
		color: #a9853f;
		font-style: italic;
	}
	.hero-copy p {
		color: #6b6b6b;
		font-size: 16px;
		font-weight: 300;
		margin-bottom: 18px;
	}
	.hero-copy .hero-trust {
		font-size: 11px;
		letter-spacing: 1.5px;
		color: #6b6b6b;
		text-transform: uppercase;
		margin-bottom: 24px;
	}
	.hero-copy .hero-trust span {
		color: #a9853f;
		font-weight: 700;
	}
	.hero-copy .cta a {
		display: block;
		max-width: 460px;
		margin: 0 auto;
		border-radius: 40px;
		padding: 16px 30px;
	}
	.hero-copy .cat-note {
		margin-top: 14px;
		color: #a3a099;
		font-size: 11px;
		letter-spacing: .5px;
	}
</style>
