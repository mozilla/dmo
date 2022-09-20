export const navigations = [
	{
		name: 'Tools',
		items: [
			{
				name: 'Glean Aggregated Metrics Dashboard (GLAM)',
				url: 'https://glam.telemetry.mozilla.org',
				description: `An interactive dashboard that examines the distributions of values of specific individual telemetry metrics, over various dimensions.`
			},
			{
				name: 'sql.telemetry.mozilla.org (STMO)',
				url: 'https://sql.telemetry.mozilla.org',
				description: `Mozilla instance of Redash that allows for SQL-based exploratory analysis and visualization / dashboard construction.`
			},
			{
				name: 'Looker',
				url: 'https://mana.mozilla.org/wiki/pages/viewpage.action?spaceKey=DATA&title=Looker+Training+Resources',
				description: `Mozilla's primary tool for analyzing data.`
			},
			{
				name: 'Experimentation',
				url: 'https://experimenter.services.mozilla.com/)',
				description: `Mozilla’s experiment management tool.`
			},
			{
				name: 'Glean Dictionary',
				url: 'https://dictionary.telemetry.mozilla.org',
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
				name: 'docs.telemetry.mozilla.org',
				url: 'https://docs.telemetry.mozilla.org/',
				description: 'Central source for all things Data@Mozilla'
			},
			{
				name: 'Telemetry Docs',
				url: 'https://firefox-source-docs.mozilla.org/',
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
				description: `Mozilla's framework for creating derived datasets and user-defined functions in BigQuery`
			},
			{
				name: 'Looker Training',
				url: 'https://mana.mozilla.org/wiki/display/DATA/Looker+Training+Resources',
				description: `Resources for learning how to use Looker`
			},
			{
				name: 'Nimbus',
				url: 'https://experimenter.info/',
				description: `Documentation for Mozilla’s experimentation platform`
			}
		]
	}
];
