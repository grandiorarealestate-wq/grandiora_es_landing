<script>
	import { formatPrice } from '$lib/currency.svelte.ts';
	import { WHATSAPP } from '$lib/assets/data';

	let { p } = $props();
	const href = $derived('/property/' + p.ref);
	const wa = $derived(
		WHATSAPP + '?text=' + encodeURIComponent(`Hi, I'm interested in ref ${p.ref} — ${p.title}`)
	);

	function trackSelect() {
		const gtag = typeof window !== 'undefined' ? window.gtag : undefined;
		const dl = typeof window !== 'undefined' ? window.dataLayer : undefined;
		const payload = {
			item_id: p.ref,
			item_name: p.title,
			price: p.price,
			item_category: p.type,
			location_id: p.loc
		};
		if (typeof gtag === 'function') gtag('event', 'select_item', { items: [payload] });
		else if (dl) dl.push({ event: 'select_item', items: [payload] });
	}

	function trackWhatsApp() {
		const gtag = typeof window !== 'undefined' ? window.gtag : undefined;
		const dl = typeof window !== 'undefined' ? window.dataLayer : undefined;
		const payload = { item_id: p.ref, item_name: p.title, method: 'whatsapp' };
		if (typeof gtag === 'function') gtag('event', 'click_whatsapp', payload);
		else if (dl) dl.push({ event: 'click_whatsapp', ...payload });
	}
</script>

<div class="card">
	<a class="card-link" href={href} onclick={trackSelect}>
		<div class="img"><img src={p.img} alt={p.title} /></div>
		<div class="body">
			<div class="price">{formatPrice(p.priceEur, p.perMonth)}</div>
			<div class="type">{p.type}</div>
			<h3>{p.title}</h3>
			<div class="loc"><svg class="loc-pin" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#d5b376" stroke="#a9853f" stroke-width="1.2"/><circle cx="12" cy="9" r="2.6" fill="#202221"/></svg>{p.loc}</div>
			<div class="feat">{p.feat}</div>
		</div>
	</a>
	<div class="card-actions">
		<a class="btn" href={wa} target="_blank" rel="noopener" onclick={trackWhatsApp}>
			WhatsApp · Ref {p.ref}
		</a>
	</div>
</div>

<style>
	.card-link {
		color: inherit;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.card-actions {
		padding: 0 18px 18px;
	}
	.card-actions .btn {
		width: 100%;
		box-sizing: border-box;
		text-align: center;
	}
</style>
