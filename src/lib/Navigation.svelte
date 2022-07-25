<script>
	import NavDropdownMenu from '../lib/NavDropdownMenu.svelte';

	const navigations = [
		{
			name: 'Tools',
			items: [
				{
					name: 'Looker',
					url: 'Looker',
					description: `Mozilla's primary tool for analyzing data.`
				},
				{
					name: 'Glean Aggregated Metrics Dashboard (GLAM)',
					url: 'glam.telemetry.mozilla.org',
					description: `An interactive dashboard that examines the distributions of values of specific individual telemetry metrics, over various dimensions.`
				},
				{
					name: 'Experimenter',
					description: `The central resource for A/B experiments and feature rollouts in Firefox Mobile and Desktop`,
					url: 'https://experimenter.services.mozilla.com/?ordering=-latest_change&search=&status=Complete&firefox_channel=&firefox_version=&owner=&analysis_owner=&experiment_date_field=&date_range_after=&date_range_before='
				},
				{
					name: 'sql.telemetry.mozilla.org (STMO)',
					url: 'sql.telemetry.mozilla.org',
					description: `Mozilla instance of Redash that allows for SQL-based exploratory analysis and visualization / dashboard construction.`
				},
				{
					name: 'Nimbus',
					url: 'https://experimenter.services.mozilla.com/nimbus/?tab=completed',
					description: `Firefox's cross-platform experimentation tool.`
				},
				{
					name: 'Growth and Usage Dashboard (GUD)',
					url: 'https://gud.telemetry.mozilla.org/',
					description: `A tool to visualize growth metrics in a standard way across Mozilla’s products.`
				},
				{
					name: 'Glean Dictionary',
					url: 'dictionary.telemetry.mozilla.org',
					description: `A web-based tool that allows you to look up information on all the metrics defined in applications built using Glean, Mozilla's next-generation Telemetry SDK.`
				},
				{
					name: 'Probe Dictionary',
					url: 'https://probes.telemetry.mozilla.org/',
					description: `The Probe Dictionary is a web-based tool that allows you to look up information on all the probes defined in Firefox's source code.`
				}
			]
		},
		{
			name: 'Docs',
			items: [
				{
					name: 'DTMO',
					url: 'https://docs.telemetry.mozilla.org/',
					description: 'Central source for all things Data@Mozilla'
				},
				{
					name: 'Telemetry Docs',
					url: 'https://mozilla.github.io/glean/book/index.html',
					description: 'Firefox Source Documentations'
				},
				{
					name: 'Glean SDKs',
					url: 'https://mozilla.github.io/glean/book/index.html',
					description: 'Cross-platform Telemetry Libraries'
				},
				{
					name: 'BigQuery-ETL',
					url: 'https://mozilla.github.io/bigquery-etl/',
					description: `Mozilla's framework for creating derived datasets and user-defined functions in BigQuery.`
				},
				{ name: 'Experimentation', url: 'https://experimenter.info/' },
				{
					name: 'Looker Training',
					url: 'https://mana.mozilla.org/wiki/display/DATA/Looker+Training+Resources'
				}
			]
		}
	];
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
			<nav class="mzp-c-menu mzp-is-basic">
				<ul class="mzp-c-menu-category-list">
					{#each navigations as navigation}
						<li class="mzp-c-menu-category mzp-has-drop-down mzp-js-expandable">
							<a class="mzp-c-menu-title disabled" href="/#" aria-haspopup="true"
								>{navigation.name}</a
							>
							{#if navigation.items && navigation.items.length}
								<div class="mzp-c-menu-panel mzp-c-emphasis-box" id="mzp-c-menu-panel-example">
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
						</li>{/each}
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
