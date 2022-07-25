<script>
	import Footer from '$lib/Footer.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>

<main class="app">
	<Navigation />
	<slot />
	<Footer />
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
