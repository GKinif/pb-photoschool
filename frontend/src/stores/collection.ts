import { writable } from 'svelte/store';
import { pbClient } from '../services/pbClient';
// import type {Record} from 'pocketbase';

/**
 * @param  {string} collection collection path, reference, or query
 * @param  {[]} startWith optional default data
 * @returns a store with realtime updates on collection data
 */
export function collectionStore<T>(
    collection: string,
    startWith: any
) {
    let unsubscribe: () => void;

    // Fallback for SSR
    if (!globalThis.window) {
        console.warn('[collectionStore] PocketBase is not initialized or not in browser');
        const { subscribe } = writable(startWith);
        return {
            subscribe,
            ref: null,
        }
    }

    const { subscribe } = writable(startWith, (set) => {
        console.log('Subscribe to collection: ', collection);
        pbClient.collection(collection).subscribe('*', function (e) {
            console.log(collection, 'collection data: ', e);
            set(e.record);
        });

        return () => {
            pbClient.collection(collection).unsubscribe('*');
        };
    });

    return {
        subscribe,
        collection,
    };
}