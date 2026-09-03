// Currency state — shared reactive store (Svelte 5 runes).
// EUR is the base currency; USD is derived from a live exchange rate.
import { browser } from '$app/environment';

export const currency = $state({
	code: 'eur' as 'eur' | 'usd',
	rate: 1.16 // EUR -> USD fallback; replaced by live rate on load
});

export function toggleCurrency() {
	currency.code = currency.code === 'eur' ? 'usd' : 'eur';
}

// Load live EUR->USD rate (open.er-api.com, free, no key, updates daily).
// Cached per-day in localStorage so we don't hit the API on every page view.
export async function loadRate() {
	if (!browser) return;
	try {
		const today = new Date().toISOString().slice(0, 10);
		const cached = localStorage.getItem('g_usd_rate');
		const cachedDate = localStorage.getItem('g_usd_rate_date');
		if (cached && cachedDate === today) {
			currency.rate = parseFloat(cached);
			return;
		}
		const r = await fetch('https://open.er-api.com/v6/latest/EUR');
		const d = await r.json();
		if (d && d.result === 'success' && d.rates && d.rates.USD) {
			currency.rate = d.rates.USD;
			localStorage.setItem('g_usd_rate', String(d.rates.USD));
			localStorage.setItem('g_usd_rate_date', today);
		}
	} catch (e) {
		// keep fallback rate on network error
	}
}

// Format a EUR price for the current currency. `perMonth` appends " /month".
export function formatPrice(priceEur: number | null, perMonth = false): string {
	if (priceEur == null) return 'On request';
	const suffix = perMonth ? ' /month' : '';
	if (currency.code === 'eur') {
		return '€' + priceEur.toLocaleString('en-US') + suffix;
	}
	const usd = Math.round(priceEur * currency.rate);
	return '$' + usd.toLocaleString('en-US') + suffix;
}
