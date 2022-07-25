<script>
	import desktop from './logos/desktop.svelte';
	import vpn from './logos/vpn.svelte';
	import mobile from './logos/mobile.svelte';
	import pocket from './logos/pocket.svelte';
	import looker from './logos/looker.svelte';
	import stmo from './logos/stmo.svelte';
	import glam from './logos/glam.svelte';
	import gud from './logos/gud.svelte';
	import experimenter from './logos/experimenter.svelte';
	import nimbus from './logos/nimbus.svelte';
	import probes from './logos/probes.svelte';
	import gleandictionary from './logos/gleandictionary.svelte';
	import docs from './logos/docs.svelte';
	import Kpi from './logos/kpi.svelte';

	const options = {
		'Firefox Desktop': desktop,
		VPN: vpn,
		'Firefox Mobile': mobile,
		Pocket: pocket,
		Looker: looker,
		'sql.telemetry.mozilla.org (STMO)': stmo,
		'Glean Aggregated Metrics Dashboard (GLAM)': glam,
		Nimbus: nimbus,
		Experimenter: experimenter,
		'Probe Dictionary': probes,
		'Growth and Usage Dashboard (GUD)': gud,
		'Glean Dictionary': gleandictionary,
		'2022 MoCo KPIs': Kpi,
		'2021 MoCo KPIs': Kpi,
		'Numbers That Matter': Kpi,
		'KPI Artifacts': Kpi
	};

	export let product;
</script>

<svelte:component this={options[product] ? options[product] : docs} />
