<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
	import FloatingContact from '$lib/components/FloatingContact/FloatingContact.svelte';
	import { PHONE_MAIN, PHONE_MAIN_LINK, WHATSAPP } from '$lib/assets/data';
	import { untrack } from 'svelte';

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
		<div class="d-loc">📍 {p.loc}</div>
		<div class="d-feat">{p.feat}</div>

		{#if p.description}
			<div class="d-desc">{p.description}</div>
		{/if}

		<div class="d-cta">
			<a class="btn wa" href={WHATSAPP}>Request information on WhatsApp</a>
			<a class="btn" href={PHONE_MAIN_LINK}>📞 Call {PHONE_MAIN}</a>
		</div>
		<div class="answer">We answer in 5 minutes</div>
	</div>
</div>

<SiteFooter />
<FloatingContact />
