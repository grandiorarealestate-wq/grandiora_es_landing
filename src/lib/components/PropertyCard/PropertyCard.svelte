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
		<div class="loc">📍 {p.loc}</div>
		<div class="feat">{p.feat}</div>
		<span class="btn">Request information</span>
	</div>
</a>
