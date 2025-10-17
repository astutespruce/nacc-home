<script lang="ts">
	import InventoryIcon from '$lib/assets/images/inventory.svg'
	import summaryData from '$data/summary_stats.json'
	import { formatNumber } from '$lib/util/format'
	import { CONTACT_EMAIL, PRIORITZATION_TOOL_URL } from '$lib/env'

	const {
		dams,
		removed_dams,
		unsurveyed_road_crossings,
		total_small_barriers,
		small_barriers,
		removed_small_barriers
	} = summaryData
	const total_road_barriers = unsurveyed_road_crossings + total_small_barriers
</script>

<svelte:head>
	<title>National Aquatic Barrier Inventory | National Aquatic Connectivity Collaborative</title>
</svelte:head>

<div class="max-h-[16rem] overflow-hidden relative">
	<enhanced:img src="$lib/assets/images/zack-dutra-2d7Y5Yi3aq8-unsplash.jpg" />

	<div class="absolute bottom-0 right-0 py-1 px-2 bg-black/75 text-white text-xs">
		Photo: <a
			href="https://unsplash.com/photos/2d7Y5Yi3aq8"
			target="_blank"
			class="text-white no-underline hover:underline">Zach Dutra</a
		>
	</div>
</div>

<div class="container mt-8">
	<h1 class="py-4 flex items-center gap-4">
		<img src={InventoryIcon} alt="Inventory icon" class="h-20" />

		<div>
			<div class="text-2xl italic">National</div>
			<div class="text-3xl md:text-4xl lg:text-5xl">Aquatic Barrier Inventory</div>
		</div>
	</h1>
</div>

<div class="bg-blue-0 p-2 border-t border-b border-grey-5 mt-8">
	<div class="container">
		<div
			class="grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-2 bg-blue-0 p-2 [&>div]:pr-4 sm:[&>div+div]:border-l sm:[&>div+div]:border-l-grey-2 sm:[&>div+div]:pl-4"
		>
			<div>
				<div class="text-lg">
					<b class="text-xl sm:text-2xl">{formatNumber(dams)}</b> inventoried dams
				</div>
				<div class="text-sm text-grey-8">
					<b>{formatNumber(removed_dams)}</b> removed for conservation
				</div>
			</div>
			<div>
				<div class="text-lg">
					<b class="text-xl sm:text-2xl">{formatNumber(total_road_barriers)}</b> road/stream crossings
				</div>
				<div class="text-sm text-grey-8">
					<b>{formatNumber(total_small_barriers)}</b> assessed for impacts to aquatic organisms
					<br />
					<b>{formatNumber(small_barriers - removed_small_barriers)}</b> assessed barriers likely to
					impact aquatic organisms
					<br />
					<b>{formatNumber(removed_small_barriers)}</b> removed for conservation
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container pb-16">
	<p class="text-lg mt-8">
		This inventory is a growing and living database of dams, culverts, and other road crossings that
		spans all 50 states, Puerto Rico, and the US Virgin Islands, compiled by SARP with the generous
		support from many partners and funders. It integrates existing datasets from local, state, and
		federal partners with data collected from ongoing field surveys and local knowledge of specific
		structures.
	</p>

	<div class="grid sm:grid-cols-[1.5fr_1fr] gap-8 mt-8">
		<p class="text-lg">
			The inventory directly supports prioritization of barriers by including metrics that describe
			network connectivity, landscape condition, and presence of threatened and endangered aquatic
			organisms.
			<a href={`${PRIORITZATION_TOOL_URL}/regions/southeast/use_cases`} target="_blank">
				See an example of how the inventory can assist local partners to identify and prioritize
				barriers for removal.
			</a>
		</p>
		<a
			href={`${PRIORITZATION_TOOL_URL}/explore`}
			target="_blank"
			class="block text-white p-4 bg-blue-5 rounded-2xl border border-grey-2 no-underline"
		>
			<b class="block hover:underline text-lg leading-tight">
				National Aquatic Barrier Inventory & Prioritization Tool
			</b>
			<p class="leading-tight mt-4">
				Go to the Inventory & Prioritization Tool to download the comprehensive inventory with many
				value-added metrics.
			</p>
		</a>
	</div>

	<p class="text-lg mt-8">
		In addition to state and local datasets, national barrier datasets used in this inventory
		include the
		<a href="https://nid.sec.usace.army.mil/#/" target="_blank"> National Inventory of Dams</a>,
		<a
			href="https://www.usgs.gov/data/waterfalls-and-rapids-conterminous-united-states-linked-national-hydrography-datasets-v20"
			target="_blank"
		>
			USGS Waterfalls of the Conterminous U.S.
		</a>, and
		<a href="https://www.usgs.gov/data/database-stream-crossings-united-states" target="_blank">
			USGS Database of Stream Crossings in the U.S.
		</a>
		Barriers are snapped to aquatic networks derived from the
		<a
			href="https://www.usgs.gov/core-science-systems/ngp/national-hydrography/nhdplus-high-resolution"
			target="_blank">USGS High Resolution National Hydrography Dataset</a
		>
		supplemented with additional information from the
		<a href="https://www.fws.gov/program/national-wetlands-inventory" target="_blank"
			>National Wetlands Inventory</a
		>.
	</p>
	<div class="grid grid-cols-[1.5fr_1fr] gap-8 mt-8">
		<p class="text-lg">
			This inventory builds on regional and state efforts to collect barrier data using field
			surveys and other methods. This includes field data collected using rigorous protocols, such
			as those developed by the
			<a href="https://streamcontinuity.org/" target="_blank"
				>North Atlantic Aquatic Connectivity Collaborative</a
			>
			(NAACC). These data are regularly updated in the inventory.
			<br /><br />
			Beginning in early 2026, field surveys coordinated and housed under the current NAACC protocol
			system will be consolidated under the new National Aquatic Connectivity Collaborative and available
			at this site.
		</p>
		<div>
			<enhanced:img
				src="$lib/assets/images/8959617293_123e3f07b9_o.jpg"
				alt="T and Y Dam bypass channel"
			/>
			<div class="text-xs text-grey-8 text-right">
				Photo: T and Y dam, Montana | <a
					href="https://www.flickr.com/photos/usfwsmtnprairie/8959617293/in/album-72157633817428065"
					>Montana Fish, Wildlife, and Parks</a
				>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-[1fr_1.5fr] gap-8 mt-8">
		<div>
			<enhanced:img
				src="$lib/assets/images/53366114257_3bbe03a419_o.jpg"
				alt="Culvert on Ammonoosuc River"
			/>
			<div class="text-xs text-grey-8 text-right">
				Photo: Culvert on Ammonoosuc River | <a
					href="https://www.flickr.com/photos/usfs_eastern_region/53366114257/"
					>Myles N. Sornborger, USDA Forest Service</a
				>
			</div>
		</div>
		<p class="text-lg">
			To see a list of data sources as well as a link to submit a missing data source,
			<a
				href="https://docs.google.com/document/d/1mUwk9rHukmY1D_NInxjdIxbBVfILD1Y8Xr-lMqjV4xU/edit?usp=sharing"
				target="_blank">click here</a
			>.
			<b>
				To help improve this inventory or participate in field surveys in your area, please
				<a href={`mailto:${CONTACT_EMAIL}`}>contact us</a>!
			</b>

			<br /><br />
			This inventory was originally developed within the Southeast as part of
			<a
				href="https://southeastaquatics.net/sarps-programs/aquatic-connectivity-program-act"
				target="_blank">SARP's Aquatic Connectivity Program</a
			>, this inventory and tool have been expanded to a broader geographic area to empower
			state-level Aquatic Connectivity Teams and other collaborators with the best available
			information on aquatic barriers.
		</p>
	</div>
</div>
