<script>
	import Logo from './Logo.svelte';

	export let items;
</script>

<section class="mzp-c-menu-item">
	{#each items as item}
		<a href={item.url} class="mzp-c-menu-item-head">
			<Logo product={item.name} />
			<a href={item.url} class="menu-item-title">{item.name}</a>
			<br />
			<p class="menu-item-desc">
				{#if item.description}
					{item.description}
				{/if}
			</p>
		</a>
	{/each}
</section>

<style lang="scss">
	@import './src/styles/protocol/css/components/_menu.scss';
	@import './src/styles/protocol/css/components/_menu-item.scss';

	.menu-item-title {
		font-family: 'Zilla Slab', Inter, X-LocaleSpecific, sans-serif;
		color: #000000;
		font-weight: bold;
		font-size: 18px;
		margin: 0 0 0.5em;
		line-height: 1.08;
		text-decoration: none;
	}
	.menu-item-desc {
		font-size: 14px;
		color: $color-marketing-gray-70;
	}

	.mzp-c-menu-item {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		width: 700px;
		&:hover {
			box-shadow: none;
		}
		&-head {
			display: block;
			text-decoration: none;
			flex: 1 1 300px;
			&:hover {
				border-radius: $border-radius-md;
				background-color: $color-marketing-gray-10;
			}
		}
	}
</style>
