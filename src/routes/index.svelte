<script>
	import { kpis, products } from '$lib/data/products';
	import Product from './products/[product].svelte';
</script>

<svelte:head>
	<title>Data@Mozilla</title>
</svelte:head>
<div class="mzp-l-content mzp-l-columns mzp-t-columns-two ">
	<div>
		<h3 class="split-title mzp-has-zap-1"><strong>Company</strong></h3>
		<br />
		<div class="mzp-l-content mzp-l-card">
			{#each kpis as product}
				<section class="mzp-c-card">
					<a class="mzp-c-card-block-link" href={product.url}>
						<div class="mzp-c-card-media-wrapper">
							<img class="mzp-c-card-image" src="/dashboard.svg" alt="product logo" />
						</div>
						<div class="mzp-c-card-content">
							<h5>{product.name}</h5>
						</div>
					</a>
				</section>
			{/each}
		</div>
	</div>
	<div>
		<h3 class="split-title mzp-has-zap-1"><strong>Products</strong></h3>
		<br />
		<div class="mzp-l-content mzp-l-card">
			{#each products as product}
				<section class="mzp-c-card">
					<a
						class="mzp-c-card-block-link"
						href={product.url ? product.url : `/products/${product.app_id}`}
					>
						<div class="mzp-c-card-media-wrapper">
							<img class="mzp-c-card-image" src="/{product.app_id}.svg" alt="product logo" />
						</div>
						<div class="mzp-c-card-content">
							<h5>{product.name}</h5>
						</div>
					</a>
				</section>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import './src/styles/protocol/css/components/_zap.scss';
	@import './src/styles/protocol/css/components/_emphasis-box.scss';
	@import './src/styles/protocol/css/components/_call-out.scss';
	@import './src/styles/protocol/css/components/_card.scss';
	@import './src/styles/protocol/css/templates/_card-layout.scss';
	@import './src/styles/protocol/css/templates/_multi-column.scss';

	.mzp-has-zap-1 strong:after {
		background-image: url('/zaps/zap-01.svg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		content: '';
		display: block;
		height: 0.3em;
		left: -0.2em;
		position: absolute;
		top: calc(100% - 0.15em);
		width: calc(100% + 0.4em);
	}

	.mzp-l-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.mzp-c-card {
		width: 75%;
	}
	.mzp-c-card-content {
		text-align: center;
	}

	.hero {
		display: inline-block;
		width: 100%;
		position: relative;
	}
	.mzp-c-hero {
		padding: 2%;
	}

	.split-title {
		text-align: center;
		font-size: 35px;
	}
</style>
