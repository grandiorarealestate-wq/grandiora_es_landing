// Currency state — shared reactive store (Svelte 5 runes).
// EUR is the base currency; others derived from a live exchange-rate table.
import { browser } from '$app/environment';

// Available currencies: code -> display prefix + rate relative to EUR (filled on load).
export const currency = $state({
	code: 'eur' as 'eur' | 'usd' | 'gbp' | 'chf' | 'rub' | 'aed' | 'cny',
	rates: {
		eur: 1,
		usd: 1.16,
		gbp: 0.86,
		chf: 0.94,
		rub: 100.75,
		aed: 4.25,
		cny: 7.80
	} as Record<string, number>
});

export const CURRENCIES = [
	{ code: 'eur', prefix: '€', name: 'EUR' },
	{ code: 'usd', prefix: '$', name: 'USD' },
	{ code: 'gbp', prefix: '£', name: 'GBP' },
	{ code: 'chf', prefix: 'CHF ', name: 'CHF' },
	{ code: 'rub', prefix: '₽', name: 'RUB' },
	{ code: 'aed', prefix: 'AED ', name: 'AED' },
	{ code: 'cny', prefix: 'CN¥', name: 'CNY' }
] as const;

export function setCurrency(code) {
	currency.code = code;
}

// Load live exchange-rate table (open.er-api.com, free, no key, updates daily).
// Cached per-day in localStorage so we don't hit the API on every page view.
export async function loadRate() {
	if (!browser) return;
	try {
		const today = new Date().toISOString().slice(0, 10);
		const cached = localStorage.getItem('g_rates');
		const cachedDate = localStorage.getItem('g_rates_date');
		if (cached && cachedDate === today) {
			currency.rates = { ...currency.rates, ...JSON.parse(cached) };
			return;
		}
		const r = await fetch('https://open.er-api.com/v6/latest/EUR');
		const d = await r.json();
		if (d && d.result === 'success' && d.rates) {
			currency.rates = { ...currency.rates, ...d.rates };
			localStorage.setItem('g_rates', JSON.stringify(d.rates));
			localStorage.setItem('g_rates_date', today);
		}
	} catch (e) {
		// keep fallback rates on network error
	}
}

// Format an EUR price in the current currency. `perMonth` appends " /month".
function fmt(n) {
	return Math.round(n).toLocaleString('en-US');
}
export function formatPrice(priceEur, perMonth = false) {
	if (priceEur == null) return 'On request';
	const suffix = perMonth ? ' /month' : '';
	const c = CURRENCIES.find((x) => x.code === currency.code);
	const rate = currency.rates[currency.code] || 1;
	return c.prefix + fmt(priceEur * rate) + suffix;
}
