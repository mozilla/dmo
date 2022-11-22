<script>
	import { products } from '$lib/data/products';

	import { page } from '$app/stores';
	export let product;

	$: product = products.filter((p) => p.app_id === $page.params.product)[0];
</script>

<section class="mzp-c-call-out">
	<div class="mzp-l-content ">
		<img class="mzp-c-card-image" src="/{product.app_id}.svg" alt="product logo" width="80px" />
		<h3 class="mzp-c-call-out-title">{product.name}</h3>
	</div>
</section>

<div class="mzp-l-content grid">
	{#each product['dashboards'] as dashboard}
		<a class="dashboard mzp-c-emphasis-box" href={dashboard.url}>
			<h4>{dashboard.name}</h4>
			<p>{dashboard.description}</p>
		</a>
	{/each}
</div>

<style lang="scss">
	@import './src/styles/protocol/css/components/_call-out.scss';
	@import './src/styles/protocol/css/components/_emphasis-box.scss';

	.mzp-c-card-content {
		p {
			color: $color-marketing-gray-60;
			font-size: 14px;
		}
	}
	.mzp-c-card-media-wrapper {
		box-shadow: 0 0 0 2px $color-marketing-gray-20;
	}
	.dashboard {
		display: block;
		cursor: pointer;
		text-decoration: none;
		color: $color-dark-gray-60;
		&:hover {
			h4 {
				color: $color-blue-50;
			}
			box-shadow: 0 8px 12px 1px #1d11332a, 0 3px 16px 2px #09204d1f, 0 5px 10px -3px #1d11331f;
		}
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
</style>
