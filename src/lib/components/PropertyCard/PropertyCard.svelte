<script>
	let { p } = $props();
	const href = $derived('contact?p=' + encodeURIComponent(p.title));
</script>

<div class="card">
	<div class="img"><img src={p.img} alt={p.title} /></div>
	<div class="body">
		<div class="price">{p.price}</div>
		<div class="type">{p.type}</div>
		<h3>{p.title}</h3>
		<div class="loc">📍 {p.loc}</div>
		<div class="feat">{p.feat}</div>
		<a class="btn" href={href}>Request information</a>
	</div>
</div>
