<script>
	import { currency, CURRENCIES, setCurrency, loadRate } from '$lib/currency.svelte.ts';
	import { onMount } from 'svelte';

	onMount(() => {
		loadRate();
	});

	let open = $state(false);
	function pick(code) {
		setCurrency(code);
		open = false;
	}
	const current = $derived(CURRENCIES.find((c) => c.code === currency.code) || CURRENCIES[0]);
</script>

<div class="cur">
	<button class="cur-btn" type="button" onclick={() => (open = !open)} aria-label="Switch currency" aria-expanded={open} title="Currency">
		<span class="cur-code">{current.code}</span>
		<svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
	</button>
	{#if open}
		<div class="cur-menu">
			{#each CURRENCIES as c (c.code)}
				<button class="cur-item" class:on={c.code === currency.code} type="button" onclick={() => pick(c.code)}>
					<span class="cur-prefix">{c.prefix.trim() || c.code}</span>
					<span class="cur-name">{c.name}</span>
					{#if c.code === currency.code}<span class="check">✓</span>{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.cur {
		position: relative;
	}
	.cur-btn {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 6px 11px;
		border: 1px solid #e0d8c2;
		border-radius: 20px;
		background: #fff;
		cursor: pointer;
		font-family: 'Poppins', sans-serif;
		font-size: 12.5px;
		font-weight: 700;
		line-height: 1;
		color: #202221;
		letter-spacing: .02em;
		transition: border-color 0.2s;
	}
	.cur-btn:hover {
		border-color: #c4a25e;
	}
	.cur-btn svg {
		color: #a9853f;
	}
	.cur-menu {
		position: absolute;
		right: 0;
		top: calc(100% + 6px);
		z-index: 60;
		min-width: 128px;
		background: #fff;
		border: 1px solid #e7ddc7;
		border-radius: 10px;
		box-shadow: 0 8px 24px rgba(32, 34, 33, 0.12);
		padding: 5px;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.cur-item {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 7px 9px;
		border: none;
		background: transparent;
		border-radius: 7px;
		cursor: pointer;
		font-family: 'Poppins', sans-serif;
		font-size: 13px;
		color: #202221;
		text-align: left;
	}
	.cur-item:hover {
		background: #f7f5f0;
	}
	.cur-item.on {
		color: #a9853f;
		font-weight: 700;
	}
	.cur-prefix {
		width: 30px;
		color: #a9853f;
		font-weight: 700;
	}
	.cur-name {
		flex: 1;
	}
	.check {
		color: #a9853f;
		font-weight: 700;
	}
</style>
