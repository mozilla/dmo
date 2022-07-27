export const navigations = [
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
				url: 'https://experimenter.services.mozilla.com/?ordering=-latest_change&search=&status=Complete&firefox_channel=&firefox_version=&owner=&analysis_owner=&experiment_date_field=&date_range_after=&date_range_before=',
				description: `The central resource for A/B experiments and feature rollouts in Firefox Mobile and Desktop`
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
