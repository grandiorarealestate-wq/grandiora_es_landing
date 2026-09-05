<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
</script>

<svelte:head>
	<title>What a Spanish Rental Contract Must Include: A Plain-Language Checklist — Grandiora</title>
	<meta
		name="description"
		content="The clauses every Spanish rental contract should contain, what to check before you sign, and the red flags that matter. A practical checklist for expats renting in Barcelona and Maresme."
	/>
</svelte:head>

<Header />

<div class="wrap article">
	<h1>What a Spanish Rental Contract Must Include</h1>
	<p class="lead">
		You've found the villa, the landlord likes you, and now there's a contract in front of you in
		Spanish. Most people skim it and sign. That's a mistake, because the contract is the only
		thing that decides your rights for the next few years. This is what should be in it, and what
		to check before you put your name down.
	</p>

	<h2>The basics that have to be there</h2>
	<p>
		Spanish law doesn't demand a huge amount of paperwork, but a few things are essential. If any
		of these are missing, treat it as a warning sign:
	</p>
	<ul>
		<li>Full name and ID of both parties. For you that's your passport or NIE number, for the landlord their DNI or company details.</li>
		<li>A clear identification of the property: the full address and, ideally, the cadastral reference (<em>referencia catastral</em>).</li>
		<li>The type of contract. This matters more than anything else. It should say <em>arrendamiento de vivienda</em> if it's your main home.</li>
		<li>The monthly rent, in figures, and how and when it's paid.</li>
		<li>The duration of the lease and any renewal terms.</li>
		<li>The deposit (<em>fianza</em>) amount.</li>
	</ul>
	<p>
		That's the core. Everything else, the fine print about pets or garden maintenance or who pays
		the community fees, is negotiable and should be spelled out clearly.
	</p>

	<h2>The duration is the part people overlook</h2>
	<p>
		Under the Ley de Arrendamientos Urbanos, a residential lease signed with a private landlord
		can be renewed up to five years, or seven if the landlord is a company. You don't get that
		protection automatically. It depends on the contract being a genuine <em>arrendamiento de
		vivienda</em> for your habitual residence.
	</p>
	<p>
		Some landlords try to get around this by labelling the lease as temporary, <em>arrendamiento
		de temporada</em>, or by using a different wording at the top. That can cut your right to
		stay down to under a year. Before you sign, check exactly what the contract calls itself, and
		whether it states that the property is your main home. We cover the difference in detail in
		our guide to rental contract types.
	</p>

	<h2>What should be written down even if the law doesn't force it</h2>
	<p>
		Plenty of things that cause arguments later are not legally required, so if they're not in the
		contract they don't exist. Get these in writing:
	</p>
	<ul>
		<li>Who pays utilities and community fees, and whether they're included in the rent.</li>
		<li>Whether the property is furnished, and an inventory list if it is.</li>
		<li>The rules on pets, if you're bringing a dog.</li>
		<li>Who handles repairs. The landlord is responsible for keeping the home habitable, but minor upkeep is worth clarifying.</li>
		<li>How the rent is reviewed each year. Most contracts tie it to inflation.</li>
	</ul>
	<p>
		The inventory is the one that saves real money later. If there's a furnished villa involved, a
		detailed list with photos means you won't be blamed for a scratch that was already there.
	</p>

	<h2>Red flags to watch for</h2>
	<p>
		A few things should make you pause. If the landlord asks for the rent to be paid in cash with
		no receipt, walk away. If they refuse to put your name and NIE on the contract, or they want
		the deposit paid outside the contract, that's a problem. And if the contract doesn't mention
		the deposit at all, but you've already been asked to transfer several months' rent in
		advance, slow down and get legal advice.
	</p>
	<p>
		In Catalonia the deposit is normally deposited with INCASÒL, the regional housing institute.
		It's a small detail, but a landlord who does things properly on that front is usually doing
		the rest properly too.
	</p>

	<h2>Before you sign</h2>
	<p>
		Read the whole thing, even if your Spanish is shaky. Ask for a translation or bring someone
		who reads the language. Check the numbers, check the duration, check the type of contract.
		Those three things cover most of what goes wrong.
	</p>
	<p>
		Once you're happy, sign both copies and make sure you walk away with a fully signed original
		that has the landlord's signature on it, not just yours.
	</p>

	<div class="cta-box">
		<h3>Renting in Barcelona or Maresme and want a second pair of eyes?</h3>
		<p>
			We review rental contracts with our clients every week and we'll flag anything unusual
			before you sign. Get in touch and we'll help you through the whole process, from viewing to
			keys.
		</p>
		<a class="btn" href="/contact">Talk to us about your rental</a>
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
