<script>
</script>

<div class="mzp-c-navigation mzp-is-sticky mzp-has-sticky-navigation">
	<div class="mzp-c-navigation-l-content">
		<div class="mzp-c-navigation-container">
			<button class="mzp-c-navigation-menu-button" type="button" aria-controls="navigation-demo"
				>Menu</button
			>
			<div class="mzp-c-navigation-logo">
				<a href="/">data@mozilla</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import './src/styles/protocol/css/components/_navigation.scss';
	@import './src/styles/protocol/css/components/_menu.scss';
	@import './src/styles/protocol/css/components/_emphasis-box.scss';

	.mzp-c-navigation {
		background-color: inherit;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;

	}

	.mzp-c-navigation-logo a {
		background-image: url('../styles/protocol/img/logos/mozilla/data-org.svg');
		background-repeat: no-repeat;
		display: block;
		width: 180px;
		background-size: contain;
	}
	.disabled {
		pointer-events: none;
		cursor: default;
	}
	.mzp-c-menu-panel {
		width: 100%;
		margin: 2px 1px 2px 30%;
	}
</style>
