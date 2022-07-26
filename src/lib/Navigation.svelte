<script>
	import NavDropdownMenu from '../lib/NavDropdownMenu.svelte';
	import { navigations } from './data/navigation';
</script>

<div class="mzp-c-navigation">
	<div class="mzp-c-navigation-l-content">
		<div class="mzp-c-navigation-container">
			<button class="mzp-c-navigation-menu-button" type="button" aria-controls="navigation-demo"
				>Menu</button
			>
			<div class="mzp-c-navigation-logo">
				<a href="/">data@mozilla</a>
			</div>
			<nav class="mzp-c-menu mzp-is-basic">
				<ul class="mzp-c-menu-category-list">
					{#each navigations as navigation}
						<li class="mzp-c-menu-category mzp-has-drop-down mzp-js-expandable">
							<a class="mzp-c-menu-title disabled" href="/#" aria-haspopup="true"
								>{navigation.name}</a
							>
							{#if navigation.items && navigation.items.length}
								<div class="mzp-c-menu-panel mzp-c-emphasis-box">
									<div class="mzp-c-menu-panel-container">
										<div class="mzp-c-menu-panel-content">
											<ul>
												<li>
													<NavDropdownMenu items={navigation.items} />
												</li>
											</ul>
										</div>
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
</style>
