<script lang="ts">
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'grandiora_cookie_consent';
	const GA4_ID = 'G-41WZVW3LTB';
	const CLARITY_ID = 'yaxyjdoptr';
	const META_PIXEL_ID = '1495796461670945';

	let visible = $state(false);

	function initMetaPixel() {
		if (typeof window === 'undefined') return;
		if ((window as any).__grandiora_fbq_loaded) return;
		(window as any).__grandiora_fbq_loaded = true;
		// ==== Meta Pixel (ретаргетинг) — инициализируем сразу, грузится всегда ====
		const w = window as any;
		w.fbq = w.fbq || function () {
			w.fbq.callMethod ? w.fbq.callMethod.apply(w.fbq, arguments) : w.fbq.queue.push(arguments);
		};
		if (!w._fbq) w._fbq = w.fbq;
		w.fbq.push = w.fbq;
		w.fbq.loaded = true;
		w.fbq.version = '2.0';
		w.fbq.queue = [];
		const s = document.createElement('script');
		s.async = true;
		s.src = 'https://connect.facebook.net/en_US/fbevents.js';
		document.head.appendChild(s);
		w.fbq('init', META_PIXEL_ID);
		w.fbq('track', 'PageView');
	}

	function initGtag() {
		if (typeof window === 'undefined') return;
		if ((window as any).__grandiora_gtag_loaded) return;
		(window as any).__grandiora_gtag_loaded = true;
		// Consent Mode v2 — конверсия Google Ads работает сразу, согласие управляет полнотой данных.
		// dataLayer-очередь и window.gtag инициализируются СРАЗУ, до согласия → conversion всегда уйдёт.
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};
		window.gtag('consent', 'default', {
			ad_storage: 'denied',
			analytics_storage: 'denied',
			wait_for_update: 500
		});
		// загружаем gtag.js сразу (без блокировки cookie-баннером)
		const s = document.createElement('script');
		s.async = true;
		s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
		document.head.appendChild(s);
		window.gtag('js', new Date());
		window.gtag('config', GA4_ID);
		// Google Ads (conversion tracking)
		window.gtag('config', 'AW-17552999108');
	}

	function grantConsent() {
		if (typeof window === 'undefined' || !window.dataLayer) return;
		window.gtag('consent', 'update', {
			ad_storage: 'granted',
			analytics_storage: 'granted'
		});
	}

	function loadClarity() {
		if (typeof window === 'undefined') return;
		if ((window as any).__grandiora_clarity_loaded) return;
		(window as any).__grandiora_clarity_loaded = true;
		// Канонический сниппет Clarity: сначала создаём глобальную функцию window.clarity
		// (очередь), затем грузим loader clarity.ms/tag/<id>. Без функции-очереди loader
		// падает на первом же вызове window.clarity(...) → Clarity не инициализируется.
		const w = window as any;
		const a = 'clarity';
		const r = 'script';
		w[a] = w[a] || function () { (w[a].q = w[a].q || []).push(arguments); };
		const s = document.createElement(r);
		s.async = true;
		s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
		const y = document.getElementsByTagName(r)[0];
		y.parentNode.insertBefore(s, y);
	}

	function accept() {
		localStorage.setItem(STORAGE_KEY, 'accepted');
		visible = false;
		loadClarity();
		grantConsent();
	}

	onMount(() => {
		// Meta Pixel (ретаргетинг) — грузим сразу, без согласия, чтобы собирать аудиторию
		initMetaPixel();
		// GA4 + Google Ads конверсия: инициализируем сразу (Consent Mode v2, default denied)
		initGtag();
		// Clarity — функциональная аналитика, грузим сразу для всех без согласия
		loadClarity();
		// если уже принимали ранее — сразу даём полный консент
		if (localStorage.getItem(STORAGE_KEY) === 'accepted') {
			grantConsent();
		} else {
			visible = true;
		}
	});
</script>

{#if visible}
	<div class="cookie-banner" role="dialog" aria-label="Cookie consent">
		<div class="cb-inner">
			<div class="cb-text">
				<p>
					We use cookies to improve your experience and analyse traffic. See our
					<a href="/privacy">Privacy Policy</a>.
				</p>
			</div>
			<div class="cb-actions">
				<button class="cb-accept" onclick={accept}>OK</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9999;
		background: #202221;
		color: #f2f2f2;
		box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.25);
		padding: 14px 20px;
		font-family: 'Poppins', sans-serif;
	}
	.cb-inner {
		max-width: 1080px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		flex-wrap: wrap;
	}
	.cb-text p {
		margin: 0;
		font-size: 14px;
		line-height: 1.5;
	}
	.cb-text a {
		color: #d5b376;
		text-decoration: underline;
	}
	.cb-actions {
		display: flex;
		gap: 10px;
	}
	.cb-actions button {
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		font-weight: 600;
		padding: 9px 20px;
		border-radius: 6px;
		cursor: pointer;
		border: none;
		transition: opacity 0.2s;
	}
	.cb-actions button:hover {
		opacity: 0.85;
	}
	.cb-decline {
		background: transparent;
		color: #f2f2f2;
		border: 1px solid #555 !important;
	}
	.cb-accept {
		background: #d5b376;
		color: #202221;
	}
	@media (max-width: 600px) {
		.cb-inner {
			flex-direction: column;
			align-items: stretch;
			text-align: center;
		}
		.cb-actions {
			justify-content: center;
		}
	}
</style>
