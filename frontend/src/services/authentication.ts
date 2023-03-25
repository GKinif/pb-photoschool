import { pbClient } from './pbClient';

export async function authenticateUserByEmail(email: string, password: string) {
	return pbClient.collection('users').authWithPassword(email, password);
}

export async function authenticateAdminByEmail(email: string, password: string) {
	return pbClient.admins.authWithPassword(email, password);
}

export const logoutUser = () => {
	pbClient.authStore.clear();
};
