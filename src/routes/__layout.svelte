<script>
	import Footer from '$lib/Footer.svelte';
	import Navigation from '$lib/Navigation.svelte';

	import { onMount } from 'svelte';
	import { auth } from '../authService';
	import { isAuthenticated, user, tasks } from '../store';

	let auth0Client;
	let newTask;

	onMount(async () => {
		auth0Client = await auth.createClient();

		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());
	});

	function login() {
		auth.loginWithRedirect(auth0Client);
	}

	function logout() {
		auth.logout(auth0Client);
	}

	$: if (!$isAuthenticated && auth0Client) {
		login();
	}
</script>

<main class="app">
	{#if $isAuthenticated}
		<Navigation />
		<slot />
		<Footer />
	{/if}
</main>

<style lang="scss">
	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	:root {
		font-family: 'Zilla Slab', Inter, X-LocaleSpecific, sans-serif;
	}
	.app {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 100%;
	}
</style>
