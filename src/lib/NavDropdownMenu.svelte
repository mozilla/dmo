<script>
	export let items;
</script>

<section class="mzp-c-menu-item">
	{#each items as item}
		<a href={item.url} class="mzp-c-menu-item-head">
			<a href={item.url} class="mzp-c-menu-item-title">{item.name}</a>
			<p class="mzp-c-menu-item-desc">
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

	.mzp-c-menu-item-title {
		font-family: 'Zilla Slab', Inter, X-LocaleSpecific, sans-serif;
		color: #000000;
		font-weight: bold;
		margin: 0 0 0.5em;
		font-size: 10px;
		line-height: 1.08;
		text-decoration: none;
	}
	.mzp-c-menu-item-desc {
		font-size: 4px;
		color: $color-marketing-gray-70;
	}
	.mzp-c-menu-item-head {
		display: block;
		text-decoration: none;
		width: 45%;
		padding: 5px;
		&:hover {
			border-radius: $border-radius-md;
			box-shadow: $box-shadow-sm;
			background-color: $color-marketing-gray-10;
		}
	}
	.mzp-c-menu-item {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		width: 200%;
		&:hover {
			box-shadow: none;
		}
	}
</style>
