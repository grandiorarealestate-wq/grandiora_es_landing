<script lang="ts">
	import { getLang, setLang, type Lang } from '$lib/i18n.svelte.ts';

	const options: { code: Lang; label: string }[] = [
		{ code: 'en', label: 'EN' },
		{ code: 'es', label: 'ES' },
		{ code: 'ru', label: 'RU' }
	];

	function choose(code: Lang) {
		setLang(code);
	}
</script>

<div class="langsw">
	{#each options as o (o.code)}
		<button
			class="langsw-btn"
			class:on={getLang() === o.code}
			type="button"
			aria-pressed={getLang() === o.code}
			onclick={() => choose(o.code)}
		>
			{o.label}
		</button>
	{/each}
</div>

<style>
	.langsw {
		display: inline-flex;
		align-items: center;
		gap: 2px;
		border: 1px solid #e0d8c2;
		border-radius: 20px;
		padding: 3px;
		background: #fff;
	}
	.langsw-btn {
		border: none;
		background: transparent;
		border-radius: 16px;
		padding: 4px 9px;
		font-family: 'Poppins', sans-serif;
		font-size: 12px;
		font-weight: 700;
		color: #6b6b6b;
		cursor: pointer;
		line-height: 1;
		letter-spacing: 0.02em;
		transition: background 0.15s, color 0.15s;
	}
	.langsw-btn:hover {
		color: #202221;
	}
	.langsw-btn.on {
		background: #d5b376;
		color: #202221;
	}
</style>
