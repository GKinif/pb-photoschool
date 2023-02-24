import { writable } from 'svelte/store';
import { pbClient } from '../services/pbClient';
import type { Record, Admin } from 'pocketbase';

interface User {
	id: string;
	username: string;
	email?: string;
	name: string;
	avatar?: string;
	created: string;
	updated: string;
}

/**
 * @returns a store with the current pocketbase user
 */
export function userStore() {
	let unsubscribe: () => void;

	const { subscribe } = writable<User | Record | Admin | null>(
		pbClient.authStore.model ?? null,
		(set) => {
			unsubscribe = pbClient.authStore.onChange((token: string, model: Record | Admin | null) => {
				set(model);
			});

			return () => unsubscribe();
		}
	);

	return {
		subscribe
	};
}
