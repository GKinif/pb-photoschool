import PocketBase from 'pocketbase';
import { browser } from '$app/environment';
import { PUBLIC_PB_BASE_URL } from '$env/static/public';

export const pbClient = new PocketBase(PUBLIC_PB_BASE_URL);

const refreshToken = async () => {
	try {
		await pbClient.collection('users').authRefresh();
	} catch (error) {
		console.log('refresh error: ', error);
	}
};

if (browser) {
	refreshToken();
}
