import { browser } from '$app/environment';

export type Lang = 'en' | 'es' | 'ru';

const LANGS: Lang[] = ['en', 'es', 'ru'];

function detect(): Lang {
	if (!browser) return 'en';
	try {
		const saved = localStorage.getItem('grandiora_lang');
		if (saved && (LANGS as string[]).includes(saved)) return saved as Lang;
		const nav = navigator.language || 'en';
		if (nav.toLowerCase().startsWith('es')) return 'es';
		if (nav.toLowerCase().startsWith('ru')) return 'ru';
		return 'en';
	} catch {
		return 'en';
	}
}

let current = $state<Lang>(detect());

export function getLang(): Lang {
	return current;
}

export function setLang(l: Lang) {
	current = l;
	if (browser) {
		try {
			localStorage.setItem('grandiora_lang', l);
		} catch {
			/* ignore */
		}
		const html = document.documentElement;
		html.lang = l;
	}
}

const dict: Record<Lang, Record<string, string>> = {
	en: {
		'nav.rentals': 'Rentals',
		'nav.sale': 'For sale',
		'nav.guides': 'Guides',
		'nav.contact': 'Contact us',

		'hero.eyebrow': 'Rentals · Barcelona · Maresme',
		'hero.h1a': 'Luxury villa ',
		'hero.h1em': 'rentals',
		'hero.h1b': '. Maresme & Barcelona',
		'hero.sub': 'Exclusive villas and apartments for rent across Maresme & Barcelona — most never reach the public portals.',
		'hero.trust': 'Verified homes · Flexible stays · Turnkey',
		'hero.trust.span': 'Verified homes',
		'hero.name': 'Your name',
		'hero.phone': 'WhatsApp / phone',
		'hero.cta': 'Get the off-market list',
		'hero.note': 'Free · No spam · We answer within minutes',
		'hero.err': 'Enter your name and WhatsApp number.',
		'hero.ok': "Thanks! We'll reply within 5 minutes. ✅",
		'hero.browse': 'Browse rental properties ↓',

		'trust.years': 'years of experience',
		'trust.langs': 'languages spoken',
		'trust.props': 'properties',

		'why.title1': 'Why rent with ',
		'why.title2': 'Grandiora',
		'why.1.h': 'We speak your language',
		'why.1.p': 'Spanish, English, French, Portuguese, Russian and Ukrainian. No lost-in-translation moments when you\u2019re signing a lease abroad.',
		'why.2.h': 'Off-market access',
		'why.2.p': 'Most of our villas never reach Idealista or Fotocasa. They go to our clients first, before they\u2019re public.',
		'why.3.h': 'On Passeig de Gràcia',
		'why.3.p': 'A real office in the heart of Barcelona, not a call centre. Meet us, or handle everything remotely.',

		'gems.title1': 'Our ',
		'gems.title2': 'gems',
		'gems.more': 'Show more',

		'reviews.title1': 'What our ',
		'reviews.title2': 'clients',
		'reviews.title3': ' say',
		'reviews.rating': 'Rated on Google · Real client reviews',
		'reviews.more': 'Read all reviews on Google',
		'reviews.verified': 'Verified client',

		'checklist.h': 'Free checklist: rent in Spain without losing your deposit',
		'checklist.p': '10 points that save you from extra costs and headaches when renting.',
		'checklist.contact': 'Email or WhatsApp number',
		'checklist.cta': 'Get the free checklist',
		'checklist.ok': 'Your checklist is opening in a new tab. Good luck! ✅',

		'offmarket.h': "Can't find what you're looking for?",
		'offmarket.p': "Contact us and we'll share our entire off-market portfolio. We answer within minutes.",
		'offmarket.cta': 'Contact us',
		'offmarket.answer': 'We answer in 5 minutes',

		'manager.p': "I speak Spanish, English, French, Portuguese, Russian and Ukrainian. Contact me — I'll find the perfect home for you.",
		'manager.cta': 'Contact me — I answer in under 5 mins',

		'final.title1': "Let's ",
		'final.title2': 'talk',
		'final.call': 'Call',
		'final.whatsapp': 'WhatsApp',

		'phones.label': 'Call us in your language',

		'lead.err': 'Enter your name and email/phone.',
		'lead.ok': 'Your checklist is opening in a new tab. Good luck! ✅',

		'contact.h1a': 'Contact ',
		'contact.h1b': 'Us',
		'contact.sub': 'Leave your details — we answer within minutes with everything you need.',
		'contact.form.h': 'Contact us',
		'contact.name': 'Your name',
		'contact.phone': 'Phone / WhatsApp',
		'contact.city': 'City / Area',
		'contact.family': 'Family / Household',
		'contact.select': 'Select…',
		'contact.other': 'Other',
		'contact.msg': 'What are you looking for?',
		'contact.msg.ph': 'Area, bedrooms, budget, move-in date...',
		'contact.send': 'Send message',
		'contact.wa': 'Or write us on',
		'contact.answer': 'We answer within minutes',
		'contact.err': 'Please fill in your name and phone.',
		'contact.ok': 'Thank you! Your message is on its way — we answer within minutes.',

		'family.single': 'Single',
		'family.couple': 'Couple',
		'family.couple_kids': 'Couple + children',
		'family.family3': 'Family with 3+ children',
	},

	es: {
		'nav.rentals': 'Alquiler',
		'nav.sale': 'En venta',
		'nav.guides': 'Guías',
		'nav.contact': 'Contacto',

		'hero.eyebrow': 'Alquiler · Barcelona · Maresme',
		'hero.h1a': 'Villas de lujo en ',
		'hero.h1em': 'alquiler',
		'hero.h1b': '. Maresme y Barcelona',
		'hero.sub': 'Villas y apartamentos exclusivos en alquiler en Maresme y Barcelona — la mayoría nunca llegan a los portales públicos.',
		'hero.trust': 'Viviendas verificadas · Estancias flexibles · Llave en mano',
		'hero.trust.span': 'Viviendas verificadas',
		'hero.name': 'Tu nombre',
		'hero.phone': 'WhatsApp / teléfono',
		'hero.cta': 'Consigue la lista off-market',
		'hero.note': 'Gratis · Sin spam · Respondemos en minutos',
		'hero.err': 'Escribe tu nombre y número de WhatsApp.',
		'hero.ok': '¡Gracias! Te respondemos en 5 minutos. ✅',
		'hero.browse': 'Ver propiedades en alquiler ↓',

		'trust.years': 'años de experiencia',
		'trust.langs': 'idiomas hablados',
		'trust.props': 'propiedades',

		'why.title1': 'Por qué alquilar con ',
		'why.title2': 'Grandiora',
		'why.1.h': 'Hablamos tu idioma',
		'why.1.p': 'Español, inglés, francés, portugués, ruso y ucraniano. Sin confusiones al firmar un contrato en el extranjero.',
		'why.2.h': 'Acceso off-market',
		'why.2.p': 'La mayoría de nuestras villas nunca llegan a Idealista ni Fotocasa. Van primero a nuestros clientes, antes de ser públicas.',
		'why.3.h': 'En Passeig de Gràcia',
		'why.3.p': 'Una oficina real en el corazón de Barcelona, no un call center. Ven a vernos o gestiona todo a distancia.',

		'gems.title1': 'Nuestras ',
		'gems.title2': 'joyas',
		'gems.more': 'Ver más',

		'reviews.title1': 'Lo que dicen nuestros ',
		'reviews.title2': 'clientes',
		'reviews.title3': '',
		'reviews.rating': 'Valorado en Google · Opiniones reales',
		'reviews.more': 'Ver todas las opiniones en Google',
		'reviews.verified': 'Cliente verificado',

		'checklist.h': 'Checklist gratis: alquila en España sin perder tu fianza',
		'checklist.p': '10 puntos que te ahorran costes extra y dolores de cabeza al alquilar.',
		'checklist.contact': 'Email o número de WhatsApp',
		'checklist.cta': 'Descarga el checklist gratis',
		'checklist.ok': 'Tu checklist se abre en una pestaña nueva. ¡Suerte! ✅',

		'offmarket.h': '¿No encuentras lo que buscas?',
		'offmarket.p': 'Contáctanos y compartiremos toda nuestra cartera off-market. Respondemos en minutos.',
		'offmarket.cta': 'Contacto',
		'offmarket.answer': 'Respondemos en 5 minutos',

		'manager.p': 'Hablo español, inglés, francés, portugués, ruso y ucraniano. Contáctame y encontraré la casa perfecta para ti.',
		'manager.cta': 'Contáctame — respondo en menos de 5 minutos',

		'final.title1': 'Hablemos',
		'final.title2': '',
		'final.call': 'Llamar',
		'final.whatsapp': 'WhatsApp',

		'phones.label': 'Llámanos en tu idioma',

		'lead.err': 'Escribe tu nombre y email/teléfono.',
		'lead.ok': 'Tu checklist se abre en una pestaña nueva. ¡Suerte! ✅',

		'contact.h1a': 'Contacta ',
		'contact.h1b': 'con nosotros',
		'contact.sub': 'Deja tus datos y te respondemos en minutos con todo lo que necesitas.',
		'contact.form.h': 'Contacto',
		'contact.name': 'Tu nombre',
		'contact.phone': 'Teléfono / WhatsApp',
		'contact.city': 'Ciudad / Zona',
		'contact.family': 'Familia / Hogar',
		'contact.select': 'Elige…',
		'contact.other': 'Otro',
		'contact.msg': '¿Qué buscas?',
		'contact.msg.ph': 'Zona, habitaciones, presupuesto, fecha de entrada...',
		'contact.send': 'Enviar mensaje',
		'contact.wa': 'O escríbenos por',
		'contact.answer': 'Respondemos en minutos',
		'contact.err': 'Por favor, escribe tu nombre y teléfono.',
		'contact.ok': '¡Gracias! Tu mensaje está en camino — respondemos en minutos.',

		'family.single': 'Solo/a',
		'family.couple': 'Pareja',
		'family.couple_kids': 'Pareja + hijos',
		'family.family3': 'Familia con 3+ hijos',
	},

	ru: {
		'nav.rentals': 'Аренда',
		'nav.sale': 'Продажа',
		'nav.guides': 'Гайды',
		'nav.contact': 'Контакты',

		'hero.eyebrow': 'Аренда · Барселона · Маресме',
		'hero.h1a': 'Элитные виллы в ',
		'hero.h1em': 'аренду',
		'hero.h1b': '. Маресме и Барселона',
		'hero.sub': 'Эксклюзивные виллы и апартаменты в аренду в Маресме и Барселоне — большинство никогда не попадает на публичные порталы.',
		'hero.trust': 'Проверенные дома · Гибкие сроки · Под ключ',
		'hero.trust.span': 'Проверенные дома',
		'hero.name': 'Ваше имя',
		'hero.phone': 'WhatsApp / телефон',
		'hero.cta': 'Получить список off-market',
		'hero.note': 'Бесплатно · Без спама · Отвечаем за минуты',
		'hero.err': 'Введите имя и номер WhatsApp.',
		'hero.ok': 'Спасибо! Ответим в течение 5 минут. ✅',
		'hero.browse': 'Смотреть объекты в аренду ↓',

		'trust.years': 'лет опыта',
		'trust.langs': 'языков общения',
		'trust.props': 'объектов',

		'why.title1': 'Почему аренда с ',
		'why.title2': 'Grandiora',
		'why.1.h': 'Говорим на вашем языке',
		'why.1.p': 'Испанский, английский, французский, португальский, русский и украинский. Никаких «испорченного телефона» при подписании договора за границей.',
		'why.2.h': 'Доступ к off-market',
		'why.2.p': 'Большинство наших вилл никогда не попадает на Idealista или Fotocasa. Сначала их видят наши клиенты, до публикации.',
		'why.3.h': 'Офис на Passeig de Gràcia',
		'why.3.p': 'Настоящий офис в центре Барселоны, а не колл-центр. Приходите или решите всё удалённо.',

		'gems.title1': 'Наши ',
		'gems.title2': 'жемчужины',
		'gems.more': 'Показать ещё',

		'reviews.title1': 'Что говорят наши ',
		'reviews.title2': 'клиенты',
		'reviews.title3': '',
		'reviews.rating': 'Оценка в Google · Реальные отзывы',
		'reviews.more': 'Все отзывы в Google',
		'reviews.verified': 'Подтверждённый клиент',

		'checklist.h': 'Бесплатный чек-лист: аренда в Испании без потери залога',
		'checklist.p': '10 пунктов, которые сэкономят вам деньги и нервы при аренде.',
		'checklist.contact': 'Email или номер WhatsApp',
		'checklist.cta': 'Скачать бесплатный чек-лист',
		'checklist.ok': 'Чек-лист открывается в новой вкладке. Удачи! ✅',

		'offmarket.h': 'Не нашли то, что искали?',
		'offmarket.p': 'Свяжитесь с нами — поделимся всей off-market базой. Отвечаем за минуты.',
		'offmarket.cta': 'Связаться',
		'offmarket.answer': 'Отвечаем за 5 минут',

		'manager.p': 'Говорю на испанском, английском, французском, португальском, русском и украинском. Напишите мне — найду для вас идеальный дом.',
		'manager.cta': 'Написать мне — отвечу за 5 минут',

		'final.title1': 'Давайте ',
		'final.title2': 'поговорим',
		'final.call': 'Позвонить',
		'final.whatsapp': 'WhatsApp',

		'phones.label': 'Позвоните нам на вашем языке',

		'lead.err': 'Введите имя и email/телефон.',
		'lead.ok': 'Чек-лист открывается в новой вкладке. Удачи! ✅',

		'contact.h1a': 'Свяжитесь ',
		'contact.h1b': 'с нами',
		'contact.sub': 'Оставьте контакты — ответим за минуты со всем, что вам нужно.',
		'contact.form.h': 'Связаться с нами',
		'contact.name': 'Ваше имя',
		'contact.phone': 'Телефон / WhatsApp',
		'contact.city': 'Город / район',
		'contact.family': 'Семья / состав',
		'contact.select': 'Выберите…',
		'contact.other': 'Другое',
		'contact.msg': 'Что вы ищете?',
		'contact.msg.ph': 'Район, спальни, бюджет, дата заезда...',
		'contact.send': 'Отправить сообщение',
		'contact.wa': 'Или напишите нам в',
		'contact.answer': 'Отвечаем за минуты',
		'contact.err': 'Пожалуйста, укажите имя и телефон.',
		'contact.ok': 'Спасибо! Ваше сообщение отправлено — ответим за минуты.',

		'family.single': 'Один/одна',
		'family.couple': 'Пара',
		'family.couple_kids': 'Пара + дети',
		'family.family3': 'Семья с 3+ детьми',
	},
};

export function t(key: string): string {
	return dict[current]?.[key] ?? dict.en[key] ?? key;
}
