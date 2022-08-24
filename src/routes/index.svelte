<script>
	import { kpis, products } from '$lib/data/products';
</script>

<svelte:head>
	<title>Data@Mozilla</title>
</svelte:head>

<section class="mzp-c-hero mzp-has-image">
	<div class="mzp-l-content ">
		<div class="mzp-c-hero-body">
			<h3 class="mzp-has-zap-1 mzp-c-hero-title">Data@Mozilla</h3>
			<div class="mzp-c-hero-desc">
				<p>
					Building a sustainable, global and independent Mozilla that ethically leverages data for
					the common good.
				</p>
			</div>

			<p class="mzp-c-hero-cta">
				<a class="mzp-c-button" href="https://blog.mozilla.org/data/">Read Our Blog</a>
			</p>
		</div>
	</div>
	<div class="mzp-c-hero-image">
		<img src="/hero.jpg" alt="" />
	</div>
</section>

<div class="mzp-l-content mzp-l-columns mzp-t-columns-two ">
	<div>
		<h4 class="split-title mzp-has-zap-1"><strong>Company</strong></h4>
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
		<h4 class="split-title mzp-has-zap-1"><strong>Products</strong></h4>
		<br />
		<div class="mzp-l-content mzp-l-card">
			{#each products as product}
				<section class="mzp-c-card">
					<a class="mzp-c-card-block-link" href="/products/{product.app_id}">
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
	@import './src/styles/protocol/css/components/_hero.scss';
	@import './src/styles/protocol/css/components/_button.scss';
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
		width: 90%;
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
	}
</style>
