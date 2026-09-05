<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import { t } from '$lib/i18n.svelte.ts';

	// ── Lead form config ──
	const WHATSAPP_NUMBER = '34604561945';
	// AWS Lambda (API Gateway) URL: создаёт лид в CADDIES + шлёт email через SES.
	// Пусто = только WhatsApp. См. lambda/ и template.yaml.
	const ENDPOINT_URL = 'https://g5joqg9b5m.execute-api.eu-north-1.amazonaws.com/default/grandiora_landing_leads';

	let name = $state('');
	let phone = $state('');
	let city = $state('');
	let family = $state('');
	let countryCode = $state('+34');
	let msg = $state('');
	let formMsg = $state('');
	let msgColor = $state('#2f8f4e');

	let gclid = '';
	let utmSource = '';
	let utmCampaign = '';
	let utmMedium = '';

	onMount(() => {
		const q = new URLSearchParams(window.location.search);
		const p = q.get('p');
		if (p) msg = p;
		gclid = q.get('gclid') || '';
		utmSource = q.get('utm_source') || '';
		utmCampaign = q.get('utm_campaign') || '';
		utmMedium = q.get('utm_medium') || '';
	});

	function submit(event: Event) {
		event.preventDefault();
		if (!name.trim() || !phone.trim()) {
			formMsg = t('contact.err');
			msgColor = '#c0392b';
			flash();
			return;
		}

		if (ENDPOINT_URL) {
			try {
				fetch(ENDPOINT_URL, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: name.trim(),
						phone: countryCode + ' ' + phone.trim(),
						message: [city.trim(), family.trim(), msg.trim()].filter(Boolean).join(' | '),
						source: 'rental-en',
						gclid,
						utmSource,
						utmCampaign,
						utmMedium
					})
				});
			} catch (e) {}
		}

		// Событие конверсии для Google Ads / GA4 — срабатывает после успешной отправки формы
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'generate_lead');
			// Google Ads conversion (WEBPAGE action)
			window.gtag('event', 'conversion', { send_to: 'AW-17552999108/7743873281' });
		} else if (window.dataLayer) {
			window.dataLayer.push({ event: 'generate_lead' });
		}
		// Meta Pixel Lead
		if (typeof window.fbq === 'function') window.fbq('track', 'Lead');

		formMsg = t('contact.ok');
		msgColor = '#2f8f4e';
		flash();

		name = '';
		phone = '';
		city = '';
		family = '';
		countryCode = '+34';
		msg = '';
	}

  function trackFormStart() {
		const gtag = typeof window !== 'undefined' ? window.gtag : undefined;
		const dl = typeof window !== 'undefined' ? window.dataLayer : undefined;
		if (typeof gtag === 'function') gtag('event', 'form_start', { form_name: 'rental_contact' });
		else if (dl) dl.push({ event: 'form_start', form_name: 'rental_contact' });
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
		<h1>{t('contact.h1a')}<span>{t('contact.h1b')}</span></h1>
		<p>{t('contact.sub')}</p>
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
						<li>Spanish</li>
						<li>English</li>
						<li>French</li>
						<li>Portuguese</li>
						<li>Russian</li>
						<li>Ukrainian</li>
					</ul>
					<div class="side-note">WhatsApp · Telegram · Phone</div>
				</div>
				<div class="form-fields">
					<h3>{t('contact.form.h')}</h3>
					<form onsubmit={submit} oninput={trackFormStart} novalidate>
						<label for="name">{t('contact.name')}</label>
						<input id="name" type="text" bind:value={name} placeholder="John Smith" autocomplete="name" required />

						<label for="phone">{t('contact.phone')}</label>
						<div class="phone-row">
							<select class="cc" bind:value={countryCode} aria-label="Country code">
								<option value="+34">🇪🇸 +34</option>
								<option value="+7">🇷🇺 +7</option>
								<option value="+380">🇺🇦 +380</option>
								<option value="+375">🇧🇾 +375</option>
								<option value="+1">🇺🇸 +1</option>
								<option value="+44">🇬🇧 +44</option>
								<option value="+49">🇩🇪 +49</option>
								<option value="+33">🇫🇷 +33</option>
								<option value="+39">🇮🇹 +39</option>
								<option value="+351">🇵🇹 +351</option>
								<option value="+31">🇳🇱 +31</option>
								<option value="+32">🇧🇪 +32</option>
								<option value="+41">🇨🇭 +41</option>
								<option value="+46">🇸🇪 +46</option>
								<option value="+47">🇳🇴 +47</option>
								<option value="+45">🇩🇰 +45</option>
								<option value="+358">🇫🇮 +358</option>
								<option value="+48">🇵🇱 +48</option>
								<option value="+420">🇨🇿 +420</option>
								<option value="+36">🇭🇺 +36</option>
								<option value="+40">🇷🇴 +40</option>
								<option value="+30">🇬🇷 +30</option>
								<option value="+90">🇹🇷 +90</option>
								<option value="+972">🇮🇱 +972</option>
								<option value="+971">🇦🇪 +971</option>
								<option value="+86">🇨🇳 +86</option>
								<option value="+91">🇮🇳 +91</option>
								<option value="+81">🇯🇵 +81</option>
								<option value="+55">🇧🇷 +55</option>
								<option value="+52">🇲🇽 +52</option>
								<option value="+54">🇦🇷 +54</option>
								<option value="+56">🇨🇱 +56</option>
								<option value="+57">🇨🇴 +57</option>
							</select>
							<input id="phone" type="tel" bind:value={phone} placeholder="600 000 000" autocomplete="tel" required />
						</div>

						<label for="city">{t('contact.city')}</label>
						<select id="city" bind:value={city}>
							<option value="">{t('contact.select')}</option>
							<option>Barcelona</option>
							<option>Cabrils</option>
							<option>Premià de Dalt</option>
							<option>Sant Andreu de Llavaneres</option>
							<option>Caldes d'Estrac</option>
							<option>Alella</option>
							<option>{t('contact.other')}</option>
						</select>

						<label for="family">{t('contact.family')}</label>
						<select id="family" bind:value={family}>
							<option value="">{t('contact.select')}</option>
							<option>{t('family.single')}</option>
							<option>{t('family.couple')}</option>
							<option>{t('family.couple_kids')}</option>
							<option>{t('family.family3')}</option>
							<option>{t('contact.other')}</option>
						</select>

						<label for="msg">{t('contact.msg')}</label>
						<textarea
							id="msg"
							bind:value={msg}
							placeholder={t('contact.msg.ph')}
						></textarea>

						<button type="submit">{t('contact.send')}</button>
					<div class="wa-alt">
						{t('contact.wa')}
						<a href="https://wa.me/{WHATSAPP_NUMBER}" target="_blank" rel="noopener">WhatsApp</a>
					</div>
						<div class="form-msg" style="display:{formMsg ? 'block' : 'none'}; color:{msgColor}">
							{formMsg}
						</div>
						<div class="answer">{t('contact.answer')}</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<SiteFooter />
