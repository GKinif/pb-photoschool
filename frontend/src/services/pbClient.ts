import PocketBase from 'pocketbase'
import { browser } from '$app/environment';
// import {userStore} from "../stores/user";

export const pbClient = new PocketBase('http://127.0.0.1:8090');

pbClient.authStore.onChange((token: string, model: any) => {
    // userStore.set(model);
});

const refreshToken = async () => {
    try {
        await pbClient.users.refresh()
    } catch(error) {
        console.log('refresh error: ', error);
    }
}

if (browser) {
    refreshToken();
}
