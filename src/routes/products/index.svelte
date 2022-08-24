<!-- <script>
	import products from '$lib/data.json';
</script>

<section class="mzp-c-hero mzp-has-image ">
	<div class="mzp-l-content ">
		<div class="mzp-c-hero-body">
			<h3 class="mzp-has-zap-1 mzp-c-hero-title">Products</h3>

			<div class="mzp-c-hero-desc">
				<p>
					Products that the Data org is currently supporting. We are working to expand this list to
					include more products.
				</p>
			</div>
		</div>
	</div>
	<div class="mzp-c-hero-image">
		<img src="/devices-high-res.png" alt="" />
	</div>
</section>

<div class="mzp-l-content mzp-l-card-quarter">
	{#each products as product}
		<section class="mzp-c-card">
			<a class="mzp-c-card-block-link" href="/products/{product.app_id}">
				<div class="mzp-c-card-media-wrapper">
					<img
						class="mzp-c-card-image"
						src="/{product.app_id}.svg"
						alt="product logo"
						max-width="20px"
					/>
				</div>
				<div class="mzp-c-card-content">
					<h2 class="mzp-c-card-title">{product.name}</h2>
				</div>
			</a>
		</section>
	{/each}
</div>

<style lang="scss">
	@import './src/styles/protocol/css/components/_card.scss';
	@import './src/styles/protocol/css/templates/_card-layout.scss';
	@import './src/styles/protocol/css/components/_hero.scss';

	.mzp-c-card {
		padding: 2%;
	}
	.mzp-c-card-block-link {
		box-shadow: 0 0 0 4px $color-marketing-gray-20;
	}
	.mzp-c-card-content {
		text-align: center;
	}
</style> -->
