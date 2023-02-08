import { writable } from 'svelte/store';
import produce from "immer"
import { pbClient } from '../services/pbClient';

/**
 * @param  {string} collection collection path, reference, or query
 * @param  {number} limit Maximum results returned
 * @param  {[]} startWith optional default data
 * @returns a store with realtime updates on collection data
 */
export function collectionStore<T>(
    collection: string,
    limit = 100,
    startWith: any[] = []
) {
    console.log('collectionStore: ', collection, limit, startWith);

    // Fallback for SSR
    if (!globalThis.window || startWith.length === 0) {
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
            const updatedCollection = produce(startWith, draft => {
                const index = draft.findIndex(record => record.id === e.record.id)
                if (index !== -1) {
                    draft[index] = e.record
                } else {
                    draft.push(e.record)
                }
            })
            console.log('updatedCollection: ', updatedCollection);
            set(updatedCollection);
        });
        return () => {
            pbClient.collection(collection).unsubscribe();
        };
    });

    return {
        subscribe,
        collection,
    };
}