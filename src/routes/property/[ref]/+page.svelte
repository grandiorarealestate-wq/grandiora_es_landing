<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import FloatingContact from '$lib/components/FloatingContact/FloatingContact.svelte';
	import { PHONE_MAIN, PHONE_MAIN_LINK, WHATSAPP } from '$lib/assets/data';
	import { untrack, onMount } from 'svelte';

	let { data } = $props();
	const p = untrack(() => data.property);
	const photos = $derived(p.gallery && p.gallery.length ? p.gallery : [p.img]);
	let idx = $state(0);

	function prev() {
		idx = (idx - 1 + photos.length) % photos.length;
	}
	function next() {
		idx = (idx + 1) % photos.length;
	}

	onMount(() => {
		const gtag = typeof window !== 'undefined' ? window.gtag : undefined;
		const dl = typeof window !== 'undefined' ? window.dataLayer : undefined;
		const payload = {
			item_id: p.ref,
			item_name: p.title,
			price: p.price,
			item_category: p.type,
			location_id: p.loc
		};
		if (typeof gtag === 'function') gtag('event', 'view_item', { items: [payload] });
		else if (dl) dl.push({ event: 'view_item', items: [payload] });
	});

	// Лид-действия (WhatsApp / звонок) — считаем как конверсию Google Ads
	function trackLead() {
		const gtag = typeof window !== 'undefined' ? window.gtag : undefined;
		const dl = typeof window !== 'undefined' ? window.dataLayer : undefined;
		if (typeof gtag === 'function') {
			gtag('event', 'generate_lead');
			gtag('event', 'conversion', { send_to: 'AW-17552999108/7743873281' });
		} else if (dl) {
			dl.push({ event: 'generate_lead' });
		}
	}
</script>

<svelte:head>
	<title>{p.title} — Grandiora Real Estate</title>
	<meta name="description" content={p.description?.slice(0, 160)} />
	<meta property="og:title" content={p.title} />
	<meta property="og:description" content={p.description?.slice(0, 160)} />
	<meta property="og:image" content={photos[0]} />
</svelte:head>

<Header />

<div class="wrap">
	<div class="back"><a href="/">← Back to properties</a></div>
</div>

<div class="wrap detail">
	<div class="d-gallery">
		<div class="d-main">
			<img src={photos[idx]} alt={p.title} />
			{#if photos.length > 1}
				<button class="nav prev" onclick={prev} aria-label="Previous photo">‹</button>
				<button class="nav next" onclick={next} aria-label="Next photo">›</button>
			{/if}
			<div class="d-count">{idx + 1} / {photos.length}</div>
		</div>
		{#if photos.length > 1}
			<div class="d-thumbs">
				{#each photos as ph, i (ph)}
					<button class="thumb" class:active={i === idx} onclick={() => (idx = i)}>
						<img src={ph} alt="" />
					</button>
				{/each}
			</div>
		{/if}
	</div>

	<div class="d-info">
		<div class="d-price">{p.price}</div>
		<div class="d-type">{p.type}</div>
		<h1>{p.title}</h1>
		<div class="d-loc"><svg class="loc-pin" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#d5b376" stroke="#a9853f" stroke-width="1.2"/><circle cx="12" cy="9" r="2.6" fill="#202221"/></svg>{p.loc}</div>
		<div class="d-feat">{p.feat}</div>

		{#if p.description}
			<div class="d-desc">{p.description}</div>
		{/if}

		<div class="d-cta">
			<a class="btn wa" href={WHATSAPP} onclick={trackLead}>Request information on WhatsApp</a>
			<a class="btn" href={PHONE_MAIN_LINK} onclick={trackLead}>📞 Call {PHONE_MAIN}</a>
		</div>
		<div class="answer">We answer in 5 minutes</div>
	</div>
</div>

<SiteFooter />
<FloatingContact />
