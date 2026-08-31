<script lang="ts">
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'grandiora_cookie_consent';
	const GA4_ID = 'G-41WZVW3LTB';
	const CLARITY_ID = 'yaxyjdoptr';

	let visible = $state(false);
	let lang: 'en' | 'es' = 'en';

	function detectLang(): 'en' | 'es' {
		const nav = typeof navigator !== 'undefined' ? navigator.language || '' : '';
		return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
	}

	function loadGa4() {
		if (typeof window === 'undefined') return;
		// защита от двойной загрузки
		if ((window as any).__grandiora_ga4_loaded) return;
		(window as any).__grandiora_ga4_loaded = true;
		const s = document.createElement('script');
		s.async = true;
		s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
		document.head.appendChild(s);
		(window as any).dataLayer = (window as any).dataLayer || [];
		(window as any).gtag = function () {
			(window as any).dataLayer.push(arguments);
		};
		(window as any).gtag('js', new Date());
		(window as any).gtag('config', GA4_ID);
	}

	function loadClarity() {
		if (typeof window === 'undefined') return;
		if ((window as any).__grandiora_clarity_loaded) return;
		(window as any).__grandiora_clarity_loaded = true;
		const s = document.createElement('script');
		s.async = true;
		s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
		document.head.appendChild(s);
	}

	function accept() {
		localStorage.setItem(STORAGE_KEY, 'accepted');
		visible = false;
		loadGa4();
		loadClarity();
	}

	function decline() {
		localStorage.setItem(STORAGE_KEY, 'declined');
		visible = false;
	}

	onMount(() => {
		lang = detectLang();
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved === 'accepted') {
			// уже дал согласие ранее — грузим аналитику без баннера
			loadGa4();
			loadClarity();
		} else if (saved === 'declined') {
			// отказался ранее — не грузим и не показываем
		} else {
			visible = true;
		}
	});
</script>

{#if visible}
	<div class="cookie-banner" role="dialog" aria-label="Cookie consent">
		<div class="cb-inner">
			<div class="cb-text">
				{#if lang === 'es'}
					<p>
						Utilizamos cookies para mejorar tu experiencia y analizar el tráfico.
						Consulta nuestra <a href="/privacy">Política de Privacidad</a>.
					</p>
				{:else}
					<p>
						We use cookies to improve your experience and analyse traffic.
						See our <a href="/privacy">Privacy Policy</a>.
					</p>
				{/if}
			</div>
			<div class="cb-actions">
				<button class="cb-decline" onclick={decline}>{lang === 'es' ? 'Rechazar' : 'Decline'}</button>
				<button class="cb-accept" onclick={accept}>{lang === 'es' ? 'Aceptar' : 'Accept'}</button>
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
