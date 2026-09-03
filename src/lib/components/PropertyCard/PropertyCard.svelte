<script>
	let { p } = $props();
	const href = $derived('/property/' + p.ref);

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
</script>

<a class="card" href={href} onclick={trackSelect}>
	<div class="img"><img src={p.img} alt={p.title} /></div>
	<div class="body">
		<div class="price">{p.price}</div>
		<div class="type">{p.type}</div>
		<h3>{p.title}</h3>
		<div class="loc"><svg class="loc-pin" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#d5b376" stroke="#a9853f" stroke-width="1.2"/><circle cx="12" cy="9" r="2.6" fill="#202221"/></svg>{p.loc}</div>
		<div class="feat">{p.feat}</div>
		<span class="btn">Request information</span>
	</div>
</a>
