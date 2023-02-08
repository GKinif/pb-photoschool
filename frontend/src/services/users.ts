import {pbClient} from "./pbClient";

export async function listUsers(page = 1, limit = 100) {
    const result = await pbClient.collection('users').getList(page, limit);

    if (result?.items?.length) {
        return result.items;
    } else {
        throw new Error("Unable to fetch photos");
    }
}
