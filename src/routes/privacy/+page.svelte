<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import SiteFooter from '$lib/components/Footer/Footer.svelte';
</script>

<svelte:head>
	<title>Privacy Policy — Grandiora Real Estate</title>
	<meta
		name="description"
		content="Privacy Policy of Grandiora Real Estate. How we collect, use and protect your personal data."
	/>
</svelte:head>

<Header />

<div class="wrap legal">
	<h1>Privacy Policy</h1>
	<p class="lead">
		Confidentiality and security are core values of Grandiora Real Estate. Accordingly, we are
		committed to ensuring the privacy of our users at all times and to collecting only the
		personal data that is strictly necessary. Below, we provide all the information you need
		regarding our Privacy Policy in relation to the personal data we collect, including:
	</p>
	<ul>
		<li>Who is responsible for processing your data.</li>
		<li>The purposes for which we collect your data.</li>
		<li>The legal basis for processing your data.</li>
		<li>How long we retain your data.</li>
		<li>Who your data may be shared with.</li>
		<li>Your rights and how to exercise them.</li>
	</ul>

	<h2>1. Data Controller</h2>
	<p>
		Garante Urbana S.L. (Grandiora Real Estate)<br />
		Email: info@grandiora.es<br />
		Barcelona, Spain
	</p>

	<h2>2. Purposes, Legal Basis and Data Retention</h2>
	<h3>Contact Form</h3>
	<p>
		<strong>Purpose:</strong> To provide you with a means of contacting us and responding to
		your requests for information, as well as sending you communications regarding our
		products, services, and activities, including by electronic means (email, WhatsApp,
		phone), provided you have given your consent.
	</p>
	<p>
		<strong>Legal Basis:</strong> Your consent when submitting an inquiry through our contact
		form and, where applicable, when consenting to receive marketing communications.
	</p>
	<p>
		<strong>Retention Period:</strong> Your data will be retained until your request has been
		resolved, unless a further relationship is established. If you have consented to receive
		marketing communications, your data will be retained until you unsubscribe.
	</p>

	<h3>Email and Phone Communications</h3>
	<p>
		<strong>Purpose:</strong> To respond to your requests for information, answer your
		inquiries, and address your questions.
	</p>
	<p>
		<strong>Legal Basis:</strong> Your consent when contacting us by email, phone or WhatsApp.
	</p>
	<p>
		<strong>Retention Period:</strong> Your personal data will be retained until your request
		has been answered, unless a further relationship is established.
	</p>

	<h2>3. Recipients of Your Data</h2>
	<p>
		Your personal data is treated confidentially and will not be disclosed to third parties
		unless required by law.
	</p>

	<h2>4. Cookies</h2>
	<p>
		This website uses technical, analytics and advertising cookies, both first-party and
		third-party (Google Analytics, Microsoft Clarity), which process connection and/or device
		data, as well as browsing habits, for statistical and advertising purposes. Accordingly,
		upon accessing our website, we request your consent for the use of these cookies, in
		compliance with Article 22 of the Spanish Information Society Services Act (LSSI).
	</p>

	<h2>5. Your Rights</h2>
	<p>
		You may withdraw your consent at any time where processing is based on your consent. You
		have the right to:
	</p>
	<ul>
		<li>Request access to your personal data.</li>
		<li>Request the correction of inaccurate or incomplete personal data.</li>
		<li>Request the deletion of your personal data where it is no longer necessary.</li>
		<li>Request the restriction of processing under certain circumstances.</li>
		<li>Object to the processing of your personal data.</li>
		<li>Request the portability of your personal data where applicable.</li>
	</ul>
	<p>
		You may exercise your rights by sending a written request to the Data Controller at
		info@grandiora.es, stating “Personal Data” and specifying the right you wish to exercise.
		If you believe your personal data has been processed in breach of applicable legislation,
		you may lodge a complaint with the Spanish Data Protection Agency (AEPD) at
		<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>.
	</p>

	<h2>6. Security of Your Personal Data</h2>
	<p>
		We have implemented all necessary technical and organisational measures to protect your
		personal data against alteration, loss, unauthorised processing, or unauthorised access.
	</p>

	<h2>7. Keeping Your Information Up to Date</h2>
	<p>
		To ensure that your personal data remains accurate and up to date, please inform us
		promptly of any changes. We are not responsible for the privacy policies or data
		processing practices of third-party websites that may be accessed through links available
		on our website.
	</p>
	<p>
		This Privacy Policy was last updated in August 2026 and may be amended from time to time
		to reflect changes to our website, applicable legislation, or relevant case law.
	</p>
</div>

<SiteFooter />

<style>
	.legal {
		max-width: 820px;
		margin: 0 auto;
		padding: 48px 20px 64px;
	}
	.legal h1 {
		font-size: 34px;
		margin-bottom: 18px;
	}
	.legal h2 {
		font-size: 22px;
		margin: 32px 0 12px;
	}
	.legal h3 {
		font-size: 18px;
		margin: 22px 0 8px;
	}
	.legal p {
		font-size: 15px;
		line-height: 1.7;
		margin-bottom: 12px;
		color: #333;
	}
	.legal .lead {
		font-size: 16px;
	}
	.legal ul {
		margin: 0 0 16px 22px;
	}
	.legal li {
		font-size: 15px;
		line-height: 1.7;
		color: #333;
	}
	.legal a {
		color: #b8924f;
	}
</style>
