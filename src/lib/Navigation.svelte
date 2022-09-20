<script>
	import NavDropdownMenu from '../lib/NavDropdownMenu.svelte';
	import { navigations } from './data/navigation';
</script>

<div class="mzp-c-navigation">
	<div class="mzp-c-navigation-l-content">
		<div class="mzp-c-navigation-container">
			<div class="mzp-c-navigation-logo">
				<a href="/">data@mozilla</a>
			</div>

			<nav class="mzp-c-menu mzp-is-basic">
				<ul class="mzp-c-menu-category-list">
					{#each navigations as navigation}
						<li class="mzp-c-menu-category mzp-has-drop-down mzp-js-expandable">
							<a class="mzp-c-menu-title" aria-haspopup="true">{navigation.name}</a>
							{#if navigation.items && navigation.items.length}
								<div class="mzp-c-menu-panel mzp-c-emphasis-box">
									<button
										class="mzp-c-menu-button-close"
										type="button"
										aria-controls="mzp-c-menu-panel-example"
									>
										Close menu
									</button>
									<div class="mzp-c-menu-panel-content">
										<ul class="li-container">
											<li>
												<NavDropdownMenu items={navigation.items} />
											</li>
										</ul>
									</div>
								</div>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
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
		background-image: url('/data-org.svg');
		background-repeat: no-repeat;
		display: block;
		background-size: 100%;
		width: 180px;
		height: 50px;
	}

	.mzp-c-menu-panel {
		right: 0;
		left: auto;
		margin-top: 0px;
		max-width: 760px;
		&-content > ul.li-container.li-container {
			margin: 0;
			right: 0;
			width: 20px;
			::after {
				margin: 0;
			}
		}
	}
</style>
