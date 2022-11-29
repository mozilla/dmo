export const config = {
	domain: import.meta.env.VITE_PUBLIC_AUTH0_DOMAIN || 'auth.mozilla.auth0.com',
	clientId: import.meta.env.VITE_PUBLIC_AUTH0_CLIENT_ID || ''
};
