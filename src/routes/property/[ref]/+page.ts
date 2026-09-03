import { error } from '@sveltejs/kit';
import { properties } from '$lib/assets/data';
import { saleProperties } from '$lib/assets/sale';

export const prerender = true;

export function entries() {
	// Render property pages for both rentals and sale listings.
	return [...properties, ...saleProperties].map((p) => ({ ref: p.ref }));
}

export function load({ params }) {
	const property =
		properties.find((p) => p.ref === params.ref) ||
		saleProperties.find((p) => p.ref === params.ref);
	if (!property) error(404, 'Property not found');
	return { property };
}
