export const kpis = [
	{
		name: '2022 MoCo KPIs',
		url: ' https://mozilla.cloud.looker.com/dashboards/519'
	},
	{
		name: '2021 MoCo KPIs',
		url: ' https://mozilla.cloud.looker.com/dashboards/101'
	},
	{
		name: 'Numbers That Matter',
		url: 'https://mozilla.cloud.looker.com/dashboards/66'
	},
	{
		name: 'Browser Reports',
		url: 'https://mozilla.cloud.looker.com/folders/742'
	}
];

export const products = [
	{
		name: 'Firefox Desktop',
		app_id: 'firefox_desktop',
		dashboards: [
			{
				name: 'Looker dashboards',
				description: 'Looker is the primary tool for analyzing data at Mozilla.',
				links: [
					{
						name: 'Looker folder',
						description:
							'Firefox desktop dashboards and explores: KPI, Search, User Journey, Translations, etc.',
						url: 'https://mozilla.cloud.looker.com/folders/747'
					}
				]
			},
			{
				name: 'More',
				description: "Dashboards that we haven't migrated to Looker yet",
				links: [
					{
						name: 'Default Browser Setting By Platform',
						url: 'https://sql.telemetry.mozilla.org/dashboard/default-browser-setting-by-platform',
						description: 'Default browser setting in Desktop, iOS, Android'
					},
					{
						name: 'New profiles and retention per country',
						url: 'https://sql.telemetry.mozilla.org/queries/69256/source#174699',
						description:
							"New profiles and retention per country ('US', 'GB', 'CA', 'FR', 'DE','CN','IN','BR')"
					},
					{
						name: 'New Profile Activation Timeseries 28 Day Basis',
						url: 'https://sql.telemetry.mozilla.org/queries/74181/source#187560',
						description: 'The number of users meeting criteria per 28D period, etc.'
					},
					{
						name: 'Regular VS core users per segments',
						url: 'https://sql.telemetry.mozilla.org/dashboard/regular-vs-core-users-per-segments',
						description: 'Cohorts of users by days of engagement. Core = 21+ days out of 28.'
					},
					{
						name: 'Regular / Core Users',
						url: 'https://sql.telemetry.mozilla.org/dashboard/regular-core-users',
						description: 'An Alternative Metric to Consider: Weekly (or Monthly) Usage Days'
					},
					{
						name: 'Default Agent Dashboard',
						url: 'https://sql.telemetry.mozilla.org/dashboard/default-agent-dashboard',
						description: 'Users moving from FF to Edgium VS users moving from Edgium to FF on Win10'
					},
					{
						name: 'Daily users - shown vs recovered',
						url: 'https://sql.telemetry.mozilla.org/queries/76606/source#191008',
						description: 'WDBA notifications - % based'
					},
					{
						name: 'SAP Usage Share - Weekly',
						url: 'https://sql.telemetry.mozilla.org/queries/56499#147865',
						description: 'Recorded in release channel'
					}
				]
			}
		]
	},
	{
		name: 'Firefox Mobile',
		app_id: 'firefox_mobile',
		dashboards: [
			{
				name: 'Looker dashboards',
				description: 'Looker is the primary tool for analyzing data at Mozilla.',
				links: [
					{
						name: 'Looker folder',
						description: 'Android, iOS, Focus Android, Focus iOS, etc.',
						url: 'https://mozilla.cloud.looker.com/folders/748'
					}
				]
			},
			{
				name: 'More',
				description: "Dashboards that we haven't migrated to Looker yet",
				links: [
					{
						name: 'Mobile Product - Search Volume',
						description: 'Total Volume Search - Fenix, Firefox iOS, Focus, Legacy',
						url: 'https://sql.telemetry.mozilla.org/dashboard/search---mobile-products#156933'
					},
					{
						name: 'Mobile Search Accuracy',
						description: 'Google Revenue Efficiency',
						url: 'https://sql.telemetry.mozilla.org/dashboard/mobile-search-accuracy'
					}
				]
			}
		]
	},
	{
		name: 'Pocket',
		app_id: 'pocket',
		url: 'https://mozilla.cloud.looker.com/folders/498',
		dashboards: [
			{
				name: 'Looker dashboards',
				description: 'Looker is the primary tool for analyzing data at Mozilla.',
				links: [
					{
						name: 'Looker folder',
						description: 'Pocket Looker folder',
						url: 'https://mozilla.cloud.looker.com/folders/498'
					}
				]
			}
		]
	},
	{
		name: 'VPN',
		app_id: 'vpn',
		url: 'https://mozilla.cloud.looker.com/folders/375',
		dashboards: [
			{
				name: 'Looker dashboards',
				description: 'Looker is the primary tool for analyzing data at Mozilla.',
				links: [
					{
						name: 'Looker folder',
						description: 'VPN Looker folder',
						url: 'https://mozilla.cloud.looker.com/folders/375'
					}
				]
			}
		]
	}
];
