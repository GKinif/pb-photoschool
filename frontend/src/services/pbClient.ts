import PocketBase from 'pocketbase'
import { browser } from '$app/environment';

export const pbClient = new PocketBase('http://127.0.0.1:8090');

const refreshToken = async () => {
    try {
        await pbClient.collection('users').authRefresh();
    } catch(error) {
        console.log('refresh error: ', error);
    }
}

if (browser) {
    refreshToken();
}
