<script>
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import FloatingContact from '$lib/components/FloatingContact/FloatingContact.svelte';
	import PropertyCard from '$lib/components/PropertyCard/PropertyCard.svelte';
	import { properties, PHONE_MAIN, PHONE_MAIN_LINK, WHATSAPP, TELEGRAM } from '$lib/assets/data.js';
</script>

<svelte:head>
	<title>Grandiora — Luxury villas for long-term rent in Maresme</title>
	<meta
		name="description"
		content="Best luxury villas and apartments for long-term rent in Maresme and Barcelona. Off-market portfolio, answer within minutes. Grandiora Real Estate."
	/>
	<meta property="og:title" content="Grandiora — Luxury villas for long-term rent in Maresme" />
	<meta
		property="og:description"
		content="Top selection of luxury rental properties for long-term stays. 80% off-market. We answer within minutes."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://grandiorarealestate.com/rental-en/img/villa1.jpg" />
</svelte:head>

<Header />

<div class="hero">
	<div class="wrap">
		<div class="kick">Long-term Luxury Rental · Maresme</div>
		<div class="rule"></div>
		<h1>Best luxury villas<br />in Maresme for <span>long-term</span> rent</h1>
		<p>See our top selection of properties — 80% off-market. Ideal for expats and long-term stays. Request a viewing today.</p>
		<div class="langs-line">Russian · Ukrainian · Spanish · English</div>
		<div class="ctas"><a class="btn" href="#top">View properties</a></div>
	</div>
</div>

<div class="trust">
	<div class="wrap inner">
		<div class="item"><b>+10</b><span>years of experience</span></div>
		<div class="item"><b>+8</b><span>languages spoken</span></div>
		<div class="item"><b>+200</b><span>properties</span></div>
	</div>
</div>

<div class="phones">
	<div class="wrap">
		<div class="label">Call us in your language</div>
		<div class="list">
			<div class="ph"><div class="lang">🇷🇺 Russian</div><div class="num soon">+7 ··· ··· ···</div></div>
			<div class="ph"><div class="lang">🇺🇦 Ukrainian</div><div class="num soon">+380 ··· ··· ···</div></div>
			<a class="ph" href={PHONE_MAIN_LINK}><div class="lang">🇪🇸 Español</div><div class="num">{PHONE_MAIN}</div></a>
			<div class="ph"><div class="lang">🇺🇸 English (US)</div><div class="num soon">+1 ··· ··· ···</div></div>
		</div>
	</div>
</div>

<div class="wrap" id="top">
	<h2 class="sec">Our <span>gems</span></h2>
	<div class="grid">
		{#each properties as p (p.title)}
			<PropertyCard {p} />
		{/each}
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
		<div class="mava">A</div>
		<div class="mbody">
			<h3>Anastasia</h3>
			<p>Contact us — we will obsess to find the perfect villa for you.</p>
			<a class="btn" href={WHATSAPP}>+34 604 561 944</a>
		</div>
	</div>
</div>

<div class="wrap" style="margin-top:26px">
	<div class="final-cta">
		<h2 class="sec">Let's <span>talk</span></h2>
		<div class="fc-row">
			<a class="btn" href={PHONE_MAIN_LINK}>📞 Call {PHONE_MAIN}</a>
			<a class="btn wa" href={WHATSAPP}>WhatsApp</a>
			<a class="btn tg" href={TELEGRAM}>Telegram</a>
		</div>
	</div>
</div>

<SiteFooter />
<FloatingContact />
