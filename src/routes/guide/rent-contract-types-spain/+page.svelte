<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
</script>

<svelte:head>
	<title>Rental Contract Types in Spain: Vivienda vs Temporary Lease — Grandiora</title>
	<meta
		name="description"
		content="Arrendamiento de vivienda vs temporary lease in Spain: what the difference means for your rights, how long you can stay, and why the wording matters. Grandiora Real Estate."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>Rental Contract Types in Spain: Why the Wording Decides Your Rights</h1>
	<p class="lead">
		Two leases can look almost identical on paper and give you completely different protections.
		In Spain the label on the contract, the exact words at the top, decide whether you can stay
		five years or get asked to leave in eleven months. This is what each type actually means.
	</p>

	<h2>Arrendamiento de vivienda, the one you want</h2>
	<p>
		This is the long-term residential lease, the contract for a home that's your main residence.
		It's the strongest option a renter can get. The law (the Ley de Arrendamientos Urbanos)
		protects you by letting you renew it for up to <strong>5 years</strong> if the landlord is a
		private individual, or <strong>7 years</strong> if the owner is a company. The landlord
		can't just end it because they feel like it.
	</p>
	<p>
		The catch: to get those protections, the contract has to say <em>arrendamiento de vivienda</em>
		and the home has to actually be your habitual residence. If you're renting a villa in Alella
		to live there full-time with your family, this is the type you want.
	</p>

	<h2>Arrendamiento de temporada, the one to watch out for</h2>
	<p>
		A temporary or seasonal lease (<em>arrendamiento de temporada</em>) is meant for people who
		need a home for a fixed, non-permanent reason. Work, study, a sabbatical. It doesn't carry
		the five or seven year protection because it's not your permanent residence.
	</p>
	<p>
		Here's the problem. Some landlords use the temporary label on what is really a long-term
		rental, to keep the flexibility to end it sooner. They'll offer a one-year contract you
		expect to renew, but because it's marked temporary, that renewal is not guaranteed. If the
		wording matters to you, read it before you sign, not after.
	</p>

	<h2>Arrendamiento por habitaciones, the room rental</h2>
	<p>
		If you're renting just a room in a shared flat, that's a different thing again. It's not
		covered by the same housing law, your protection is thinner, and the deposit and notice rules
		are set by the agreement itself. For most people looking at villas in Maresme this won't come
		up, but it's worth knowing the term so you don't confuse it with a full home.
	</p>

	<h2>Tourist and short-stay rental, a separate world</h2>
	<p>
		A holiday let (<em>arrendamiento turístico</em>) sits outside the housing law entirely. It's
		regulated by tourism rules, and in Catalonia it needs a licence. If you're planning to live
		in a place for months, a tourist contract is the wrong tool. It usually costs more and gives
		you almost no protection as a tenant.
	</p>

	<h2>Why the label changes what you pay</h2>
	<p>
		The contract type also shifts the deposit. A vivienda lease means one month fianza as the
		legal minimum. Other uses can mean two. On top of that, a landlord can ask for extra
		guarantees up to a couple more months depending on the contract length. Our guide on
		<a href="/guide/fianza-deposits-how-much-landlords-can-ask">fianza and deposits in Spain</a>
		breaks that down in detail, because it's the other number that catches people out.
	</p>

	<h2>How to check the contract before you sign</h2>
	<ul>
		<li>What's the exact title of the contract, word for word?</li>
		<li>Does it state this is your habitual residence, or something temporary?</li>
		<li>What's the minimum term, and what happens when it ends?</li>
		<li>What does the exit clause say if you need to leave early?</li>
	</ul>
	<p>
		Thirty seconds reading the first paragraph tells you more than a whole page of small print.
		The title and the stated purpose are what a court would look at if anything went wrong.
	</p>
	<p>
		If you'd rather not decode Spanish rental law on your own, that's a big part of what we do.
		We help families and expats find and secure homes across Barcelona and the Maresme coast, and
		we check the contract type and terms before you commit. Start with our guide on
		<a href="/guide/best-areas-maresme">the best areas in Maresme</a> if you're still choosing
		where to live.
	</p>

	<div class="cta-box">
		<h3>Not sure which contract a landlord is offering you?</h3>
		<p>
			Send us the details and we'll tell you plainly what it means and whether it protects you
			the way you expect.
		</p>
		<a class="btn" href="/contact">Ask us about your contract</a>
		<a class="btn-link" href="/checklist.pdf">Download the free Pre-Signing Checklist</a>
	</div>
</div>

<SiteFooter />

<style>
	.article {
		max-width: 820px;
		margin: 0 auto;
		padding: 48px 20px 64px;
	}
	.article h1 {
		font-size: 34px;
		line-height: 1.25;
		margin-bottom: 18px;
	}
	.article h2 {
		font-size: 22px;
		margin: 32px 0 12px;
	}
	.article p {
		font-size: 15px;
		line-height: 1.7;
		margin-bottom: 12px;
		color: #333;
	}
	.article .lead {
		font-size: 16px;
	}
	.article ul,
	.article ol {
		margin: 0 0 16px 22px;
	}
	.article li {
		font-size: 15px;
		line-height: 1.7;
		color: #333;
		margin-bottom: 6px;
	}
	.cta-box {
		margin-top: 36px;
		padding: 28px 24px;
		background: #f2f2f2;
		border-radius: 12px;
		text-align: center;
	}
	.cta-box h3 {
		font-size: 20px;
		margin-bottom: 8px;
	}
	.cta-box .btn {
		display: inline-block;
		margin-top: 14px;
	}
	.cta-box .btn-link {
		display: block;
		margin-top: 12px;
		color: #b8924f;
		font-size: 14px;
	}
</style>
