<svelte:head>
	<title>Data@Mozilla</title>
</svelte:head>

<section class="mzp-c-hero mzp-has-image">
	<div class="mzp-l-content ">
		<div class="mzp-c-hero-body">
			<h3 class="mzp-has-zap-1 mzp-c-hero-title"><strong>Data</strong>@Mozilla</h3>

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
</section>

<style lang="scss">
	@import './src/styles/protocol/css/components/_hero.scss';
	@import './src/styles/protocol/css/components/_button.scss';
	@import './src/styles/protocol/css/components/_zap.scss';
	@import './src/styles/protocol/css/components/_emphasis-box.scss';
	@import './src/styles/protocol/css/components/_call-out.scss';

	.hero {
		display: inline-block;
		width: 100%;
		position: relative;
	}
	.mzp-c-hero {
		padding: 2%;
	}
	.mzp-c-hero-desc {
		p {
			font-size: 21px;
		}
	}
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
</style>
