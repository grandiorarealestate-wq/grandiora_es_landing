<script>
	import { currency, toggleCurrency, loadRate } from '$lib/currency.svelte.ts';
	import { onMount } from 'svelte';

	onMount(() => {
		loadRate();
	});
</script>

<button class="curr" type="button" onclick={toggleCurrency} aria-label="Switch currency" title="EUR / USD">
	<span class="opt" class:on={currency.code === 'eur'}>€</span>
	<span class="sep">/</span>
	<span class="opt" class:on={currency.code === 'usd'}>$</span>
</button>

<style>
	.curr {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 5px 10px;
		border: 1px solid #e0d8c2;
		border-radius: 20px;
		background: #fff;
		cursor: pointer;
		font-family: 'Poppins', sans-serif;
		font-size: 13px;
		line-height: 1;
		color: #a39b8a;
		transition: border-color 0.2s, background 0.2s;
	}
	.curr:hover {
		border-color: #c4a25e;
	}
	.sep {
		color: #d8d2c4;
	}
	.opt {
		padding: 2px 5px;
		border-radius: 12px;
		transition: background 0.2s, color 0.2s;
	}
	.opt.on {
		background: #202221;
		color: #d5b376;
		font-weight: 700;
	}
</style>
