<script>
	import { PHONE_MAIN_LINK, WHATSAPP, TELEGRAM } from '$lib/assets/data.js';
</script>

<div class="sticky">
	<a class="tg" href={TELEGRAM} title="Telegram">TG</a>
	<a class="wa" href={WHATSAPP} title="WhatsApp">WA</a>
</div>

<div class="mbar">
	<a class="mcall" href={PHONE_MAIN_LINK}>📞 Call</a>
	<a class="mwa" href={WHATSAPP}>WhatsApp</a>
	<a class="mtg" href={TELEGRAM}>Telegram</a>
</div>
