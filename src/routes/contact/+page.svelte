<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';

	// ── Lead form config ──
	const WHATSAPP_NUMBER = '34604561945';
	// AWS Lambda (API Gateway) URL: создаёт лид в CADDIES + шлёт email через SES.
	// Пусто = только WhatsApp. См. lambda/ и template.yaml.
	const ENDPOINT_URL = 'https://g5joqg9b5m.execute-api.eu-north-1.amazonaws.com/default/grandiora_landing_leads';

	let name = $state('');
	let phone = $state('');
	let city = $state('');
	let family = $state('');
	let msg = $state('');
	let formMsg = $state('');
	let msgColor = $state('#2f8f4e');

	onMount(() => {
		const q = new URLSearchParams(window.location.search);
		const p = q.get('p');
		if (p) msg = p;
	});

	function submit(event: Event) {
		event.preventDefault();
		if (!name.trim() || !phone.trim()) {
			formMsg = 'Please fill in your name and phone.';
			msgColor = '#c0392b';
			flash();
			return;
		}

		const text =
			'Hello Grandiora! 👋\n' +
			'Name: ' + name.trim() + '\n' +
			'Phone: ' + phone.trim() + '\n' +
			(city ? 'City: ' + city.trim() + '\n' : '') +
			(family ? 'Family: ' + family.trim() + '\n' : '') +
			(msg.trim() ? 'Looking for: ' + msg.trim() : '');

		window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text), '_blank');

		if (ENDPOINT_URL) {
			try {
				fetch(ENDPOINT_URL, {
					method: 'POST',
					mode: 'no-cors',
					headers: { 'Content-Type': 'text/plain;charset=utf-8' },
					body: JSON.stringify({
						name: name.trim(),
						phone: phone.trim(),
						message: [city.trim(), family.trim(), msg.trim()].filter(Boolean).join(' | '),
						source: 'rental-en'
					})
				});
			} catch (e) {}
		}

		// Событие конверсии для Google Ads / GA4 — срабатывает после успешной отправки формы
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'generate_lead');
		} else if (window.dataLayer) {
			window.dataLayer.push({ event: 'generate_lead' });
		}

		formMsg = 'Thank you! Your message is on its way — we answer within minutes.';
		msgColor = '#2f8f4e';
		flash();

		name = '';
		phone = '';
		city = '';
		family = '';
		msg = '';
	}

  let timeout: ReturnType<typeof setTimeout>;

	function flash() {
		clearTimeout(timeout);
		timeout = setTimeout(() => (formMsg = ''), 8000);
	}
</script>

<svelte:head>
	<title>Contact Us — Grandiora</title>
	<meta
		name="description"
		content="Contact Grandiora Real Estate. We answer within minutes. Luxury villas and apartments for rent in Maresme and Barcelona."
	/>
</svelte:head>

<Header back />

<div class="hero">
	<div class="wrap">
		<div class="kick">Luxury Rental · Maresme</div>
		<div class="rule"></div>
		<h1>Contact <span>Us</span></h1>
		<p>Leave your details — we answer within minutes with everything you need.</p>
	</div>
</div>

<section class="form-sec">
	<div class="wrap" id="form">
		<div class="form-panel">
			<div class="form-grid">
				<div class="form-side">
					<div class="mava">A</div>
					<h4>Anastasia</h4>
					<ul class="langs">
						<li>Russian</li>
						<li>Ukrainian</li>
						<li>Spanish</li>
						<li>English</li>
					</ul>
					<div class="side-note">WhatsApp · Telegram · Phone</div>
				</div>
				<div class="form-fields">
					<h3>Contact us</h3>
					<form onsubmit={submit} novalidate>
						<label for="name">Your name</label>
						<input id="name" type="text" bind:value={name} placeholder="John Smith" autocomplete="name" required />

						<label for="phone">Phone / WhatsApp</label>
						<input id="phone" type="tel" bind:value={phone} placeholder="+34 ..." autocomplete="tel" required />

						<label for="city">City / Area</label>
						<select id="city" bind:value={city}>
							<option value="">Select…</option>
							<option>Barcelona</option>
							<option>Cabrils</option>
							<option>Premià de Dalt</option>
							<option>Sant Andreu de Llavaneres</option>
							<option>Caldes d'Estrac</option>
							<option>Alella</option>
							<option>Other</option>
						</select>

						<label for="family">Family / Household</label>
						<select id="family" bind:value={family}>
							<option value="">Select…</option>
							<option>Single</option>
							<option>Couple</option>
							<option>Couple + children</option>
							<option>Family with 3+ children</option>
							<option>Other</option>
						</select>

						<label for="msg">What are you looking for?</label>
						<textarea
							id="msg"
							bind:value={msg}
							placeholder="Area, bedrooms, budget, move-in date..."
						></textarea>

						<button type="submit">Send message</button>
						<div class="form-msg" style="display:{formMsg ? 'block' : 'none'}; color:{msgColor}">
							{formMsg}
						</div>
						<div class="answer">We answer within minutes</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<SiteFooter />
