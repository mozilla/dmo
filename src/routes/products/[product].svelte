<script>
	import { products } from '$lib/data/products';

	import { page } from '$app/stores';
	export let product;

	$: product = products.filter((p) => p.app_id === $page.params.product)[0];
</script>

<section class="mzp-c-call-out">
	<div class="mzp-l-content ">
		<img class="mzp-c-card-image" src="/{product.app_id}.svg" alt="product logo" width="40px" />
		<h3 class="mzp-c-call-out-title">{product.name}</h3>
	</div>
</section>

{#each product['dashboards'] as section}
	<div class="mzp-l-content mzp-l-card-quarter">
		<h3>{section.name}</h3>
		<p>{section.description}</p>
		{#each section.links as dashboard}
			<section class="mzp-c-card">
				<a class="mzp-c-card-block-link" href={dashboard.url}>
					<div class="mzp-c-card-media-wrapper">
						<img class="mzp-c-card-image" src="/dashboard.jpg" alt="" />
					</div>
					<div class="mzp-c-card-content">
						<h5>{dashboard.name}</h5>
						<p>{dashboard.description}</p>
					</div>
				</a>
			</section>
		{/each}
	</div>{/each}

<style lang="scss">
	@import './src/styles/protocol/css/components/_card.scss';
	@import './src/styles/protocol/css/templates/_card-layout.scss';
	@import './src/styles/protocol/css/components/_call-out.scss';

	.mzp-c-card-block-link {
		box-shadow: 0 0 0 4px $color-marketing-gray-20;
	}
	.mzp-c-card-content {
		p {
			color: $color-marketing-gray-60;
		}
	}
</style>
