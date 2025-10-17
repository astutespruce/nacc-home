<script lang="ts">
	import QuestionCircle from '~icons/fa-regular/question-circle'
	import { CONTACT_EMAIL, PRIORITZATION_TOOL_URL } from '$lib/env'

	const MAP_SERVICES = {
		dams: 'https://services.arcgis.com/QVENGdaPbd4LUkLV/arcgis/rest/services/Aquatic_Barrier_Prioritization_Dams_v360/FeatureServer',
		small_barriers:
			'https://services.arcgis.com/QVENGdaPbd4LUkLV/arcgis/rest/services/Aquatic_Barrier_Prioritization_RoadBarriers_v360/FeatureServer',
		combined_barriers:
			'https://services.arcgis.com/QVENGdaPbd4LUkLV/arcgis/rest/services/Aquatic_Barrier_Prioritization_Dams_Crossings_Indicators_05242024/FeatureServer'
	}
</script>

<svelte:head>
	<title>FAQ | National Aquatic Connectivity Collaborative</title>
</svelte:head>

<div class="max-h-[16rem] overflow-hidden relative">
	<enhanced:img src="$lib/assets/images/kazuend-cCthPLHmrzI-unsplash.jpg" />

	<div class="absolute bottom-0 right-0 py-1 px-2 bg-black/75 text-white text-xs">
		Photo: <a
			href="https://unsplash.com/photos/cCthPLHmrzI"
			target="_blank"
			class="text-white no-underline hover:underline">Kazuend</a
		>
	</div>
</div>

<div class="container mt-8 pb-16">
	<h1
		class="text-3xl md:text-4xl lg:text-5xl py-4 flex items-center gap-4 border-b border-b-grey-5"
	>
		<QuestionCircle class="h-20 w-20 text-grey-8" />
		Frequently Asked Questions
	</h1>

	<div class="mt-8 [&_h2]:text-2xl [&_h2]:mb-2">
		<div>
			<h2>What is the National Aquatic Connectivity Collaborative?</h2>
			<p>
				The objective of this overall effort is to build a community of practice among resource
				managers and enable them to identify, prioritize, and implement high priority aquatic
				connectivity restoration projects. Regularly updating barriers in the inventory allows it to
				better reflect the degree of aquatic habitat fragmentation from aquatic barriers across
				political boundaries at a national scale. We provide a collaborative atmosphere where all
				resource managers can contribute to the collective effort of restoring rivers and streams
				through aquatic barrier removal.
				<br />
				<br />
				You can help improve the inventory by sharing data, assisting with field reconnaissance to evaluate
				the impact of aquatic barriers, joining a Aquatic Connectivity Team, or even by reporting issues
				with the inventory data.
				<br />
				<br />
				<a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a> to learn more about how you can help improve
				the inventory, tool, and other resources.
			</p>
		</div>

		<hr />

		<div>
			<h2>How does this relate to the North Atlantic Aquatic Connectivity Collaborative?</h2>
			<p>
				This effort builds on the years of investment by the <a
					href="https://streamcontinuity.org/"
					target="_blank">North Atlantic Aquatic Connectivity Collaborative</a
				>
				(NAACC) and partners to assess road/stream crossings for aquatic and terrestrial organism passage
				within the northeastern United States. In 2015, SARP adopted the NAACC protocol and expanded
				it to other states in the nation under a separate database and training system. Under this new
				National umbrella, NAACC data will be collected across the country using the same protocols within
				one unified database and new training system, directly feeding the national inventory in a more
				streamlined way. Through this new expansion, the North Atlantic Aquatic Connectivity Collaborative
				will be referred to as the National Aquatic Connectivity Collaborative and will also include
				efforts to prioritize barriers and build partnerships/aquatic connectivity teams. Therefore,
				the NAACC protocol will now be referred to as the NACC protocol. Until this new system is created,
				NAACC data is uploaded into the existing NAACC system, it will be separately imported into the
				<a href={PRIORITZATION_TOOL_URL} target="_blank">
					National Inventory and Prioritization Tool</a
				>.
			</p>
		</div>

		<hr />

		<div>
			<h2>What are Aquatic Connectivity Teams?</h2>
			<p>
				For many years, aquatic resource managers working on barrier removal have recognized the
				importance of collaborating with partners across sectors and political boundaries. Over
				time, geographically based connectivity collaborations or groups have formed to work
				together on streamlining the process of barrier identification, prioritization, and
				implementation. Within different regions of the United States, these groups span different
				geographic scales, such as watershed based groups and state based groups also referred to as
				Aquatic Connectivity Teams. These teams usually meet in person and online multiple times per
				year discussing current and active projects, prospective projects, education and outreach,
				policy development, funding, research, and other topics that help to make more barrier
				removal projects happen on the ground.

				<br /><br />

				To learn about existing aquatic connectivity groups and teams in your area and to join a
				group, visit the
				<a href="https://www.americanrivers.org/aquatic-connectivity-groups/" target="_blank">
					Aquatic Connectivity Groups</a
				> page managed by American Rivers.
			</p>
		</div>

		<hr />

		<div>
			<h2>What kind of barriers does the Inventory track?</h2>
			<p>
				We track dams (including diversions, weirs, low head dams), assessed road/stream crossings,
				and waterfalls. We do not track beaver dams or other non-structural barriers at this time,
				though it is possible that we may track other types of barriers in the future.
			</p>
		</div>

		<hr />

		<div>
			<h2>What data sources are included in the Inventory?</h2>
			<p>
				The inventory is compiled from multiple sources at multiple scales. To best leverage data
				sources that are regularly updated by their data providers within existing efforts, we
				update with the best available data from data providers approximately four times a year.
				<br />
				<br />
				For a list of datasets included in the inventory, please see
				<a
					href="https://docs.google.com/document/d/1mUwk9rHukmY1D_NInxjdIxbBVfILD1Y8Xr-lMqjV4xU/edit?usp=sharing"
					target="_blank"
				>
					this link
				</a>. If you know of a data source we have not included, please fill out
				<a href="https://forms.gle/5kWN3D56hSijLFrU6" target="_blank"> this form </a>
				and we will contact you to ensure that it is included.
			</p>
		</div>

		<hr />

		<div>
			<h2>How is the Inventory maintained and updated?</h2>
			<p>
				The objective of the inventory is to highlight the efforts of states and local partners by
				compiling information and readily updating it from living sources of truth on a regular
				basis. For efforts consistently maintained by partners, we have set up automatic scripts to
				extract data approximately four times a year and check for updates to incorporate into the
				National Inventory and Tool. For static efforts, data is incorporated into the inventory
				when identified. We readily work with our partners and technicians to edit data and identify
				new structures using aerial maps, as well as attribute social feasibility.
				<br />
				<br />
				If you are interested in helping to maintain our database and incorporate local relevance into
				its attributes using ArcGIS online, please
				<a href={`mailto:${CONTACT_EMAIL}`} target="_blank">contact us</a>.
			</p>
		</div>

		<hr />

		<div>
			<h2>How can I report a missing barrier?</h2>
			<p>
				Our inventory is the most comprehensive aquatic barrier inventory within the United States,
				but it is not perfect and is still lacking barriers, particularly low head dams and
				diversion structures. If you are exploring the tool and notice a missing barrier, please
				<a href={`mailto:${CONTACT_EMAIL}`}> contact us </a>
				with the coordinates, or when prioritizing within the tool, scroll to the bottom of the sidebar
				for the barrier in question and click
				<b>Report a problem with this barrier</b>.
				<br />
				<br />
				The master inventory will likely be updated fairly quickly, but it may take several weeks for
				the public facing tool to reflect the new barrier. If you would like to know the priority of
				the new barrier, we can provide you with offline results via email.
			</p>
		</div>

		<hr />

		<div>
			<h2>How can I download barriers for a specific area?</h2>
			<p>
				Use the
				<a href={`${PRIORITZATION_TOOL_URL}/explore`} target="_blank">
					<b>Explore &amp; Download</b>
				</a>
				page in the <b>Inventory & Prioritization Tool</b> to select one or more states, counties, or
				hydrologic units for your area of interest. You can then download all dams, road-related barriers,
				or both types for that area.
			</p>
		</div>

		<hr />

		<div>
			<h2>How can I download all available barriers?</h2>
			<p>
				Use the download button on the bottom left of the
				<a href={`${PRIORITZATION_TOOL_URL}/explore`} target="_blank">
					<b>Explore &amp; Download</b>
				</a>
				page in the <b>Inventory & Prioritization Tool</b> or the
				<a href={`${PRIORITZATION_TOOL_URL}/restoration`} target="_blank">
					<b>Restoration</b>
				</a>
				page to download all available dams and / or road-related barriers.
			</p>
		</div>

		<hr />

		<div>
			<h2>How can I download raw field survey data?</h2>
			<p>
				If your data was collected using the current NAACC system in the northeast, raw NAACC data
				with structure measurements can be downloaded via the
				<a href="https://naacc.org/naacc_data_center_home.cfm" target="_blank">NAACC Data Center</a
				>. If your data was collected in partnership with SARP using the NAACC (now NACC) protocol,
				<a href={`mailto:${CONTACT_EMAIL}`}>contact us</a>for raw data, until the new merged system
				is online. If your data was collected using a different methodology (Great Lakes Stream
				Crossing Collaborative, or in the states of WA, OR, and CA) please contact the managers of
				the collection system you used during your field surveys, or
				<a href={`mailto:${CONTACT_EMAIL}`}>contact us</a> for the appropriate contact person. Check
				back for updates about the new merged NACC system and download links.
			</p>
		</div>

		<hr />

		<div>
			<h2>How can I access map services to display barriers in a GIS application?</h2>
			<p>
				If you would like to access map services of a recent version of the aquatic barriers and
				connectivity results (may not match the exact version here), you can import one of the
				following connectivity analysis map services into your GIS tool of choice:
			</p>
			<ul class="list-disc list-inside mt-2 [&>li+li]:mt-1">
				<li>
					<a href={MAP_SERVICES.dams} target="_blank">Dams</a> based on networks that are cut by dams
					and waterfalls.
				</li>
				<li>
					<a href={MAP_SERVICES.small_barriers} target="_blank"> Assessed road crossings </a>{' '}
					based on networks that are cut by dams, waterfalls, and assessed crossings.
				</li>
				<li>
					<a href={MAP_SERVICES.combined_barriers} target="_blank">
						Dams and assessed road crossings
					</a>{' '}
					based on networks that are cut by dams, waterfalls, and assessed crossings.
				</li>
			</ul>
		</div>
	</div>
</div>
