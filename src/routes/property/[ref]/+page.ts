import { error } from '@sveltejs/kit';
import { properties } from '$lib/assets/data';

export const prerender = true;

export function entries() {
	return properties.map((p) => ({ ref: p.ref }));
}

export function load({ params }) {
	const property = properties.find((p) => p.ref === params.ref);
	if (!property) error(404, 'Property not found');
	return { property };
}
