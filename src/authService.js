import { createAuth0Client } from '@auth0/auth0-spa-js';
import { user, isAuthenticated } from './store';
import { config } from './auth_config';

async function createClient() {
	let auth0Client = await createAuth0Client({
		domain: config.domain,
		clientId: config.clientId
	});

	return auth0Client;
}

async function loginWithRedirect(client, options) {
	try {
		await client.loginWithRedirect(options);

		user.set(await client.getUser());
		isAuthenticated.set(true);
	} catch (e) {
		// eslint-disable-next-line
		console.error(e);
	} finally {
		console.log('redirected successfully');
	}
}

function logout(client) {
	return client.logout();
}

export const auth = {
	createClient,
	loginWithRedirect,
	logout
};
