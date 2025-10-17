<script lang="ts">
	import { resolve } from '$app/paths'

	import NACCLogo from '$lib/assets/images/nacc_logo.svg'
	import SARPLogo from '$lib/assets/images/sarp_logo.png'
	import NFHPLogo from '$lib/assets/images/nfhp_logo.svg'
	import AmericanRiversLogo from '$lib/assets/images/american_rivers_logo.svg'
	import TNCLogo from '$lib/assets/images/tnc_logo.svg'
	import TULogo from '$lib/assets/images/trout_unlimited_logo.svg'
	import USFSLogo from '$lib/assets/images/usfs_logo.svg'
	import USFWSLogo from '$lib/assets/images/usfws_logo.svg'
	import { CONTACT_EMAIL, PRIORITZATION_TOOL_URL } from '$lib/env'
</script>

<svelte:head>
	<title>National Aquatic Connectivity Collaborative</title>
</svelte:head>

<div class="container mt-10">
	<img src={NACCLogo} alt="National Aquatic Connectivity Collaborative logo" />
</div>
<div
	class="py-4 text-white text-shadow-black"
	style="background:radial-gradient(farthest-corner circle at 50% 85% in oklch, var(--blue-8), var(--blue-9)); text-shadow: 1px 1px 3px #000;"
>
	<div class="container">
		<h1 class="text-3xl md:text-5xl lg:text-6xl py-4">
			National Aquatic Connectivity Collaborative
		</h1>
	</div>
</div>

<div class="container text-lg pt-4 pb-16">
	<h2 class="mt-6 md:mt-16 text-2xl md:text-4xl">Aquatic connectivity is essential</h2>
	<p class="text-xl mt-2">
		Fish and other aquatic organisms depend on high quality, connected river networks. A legacy of
		human use of river networks have left them fragmented by barriers such as dams and culverts.
		Fragmentation prevents species from dispersing and accessing habitats required for their
		persistence through changing conditions.
		<br /><br />
		The <b>National Aquatic Connectivity Collaborative</b> (NACC) is a national effort to build a
		community of practice of resource management partners working together to identify aquatic
		barriers, prioritize these barriers for removal or mitigation, and implement barrier removal
		projects across political boundaries. One aspect of this collaborative is field survey of road
		crossing barriers to populate the larger National Aquatic Barrier Inventory, using a
		standardized protocol developed by the
		<a href="https://streamcontinuity.org/" target="_blank"
			>North Atlantic Aquatic Connectivity Collaborative</a
		> (NAACC). In 2015, the Southeast Aquatic Resources Partnership (SARP) adopted the NAACC protocol
		and expanded it nationwide. As of 2025, this North Atlantic effort has merged with SARP, and is a
		foundational component of the new National Aquatic Connectivity Collaborative.
	</p>
	<div class="block sm:grid grid-cols-[1fr_200px] gap-8 mt-8 items-center">
		<p class="text-xl">
			The
			<b>National Aquatic Connectivity Collaborative</b> helps bring together the best available
			information on aquatic barriers and the community of practice to help identify barriers of
			interest for restoration efforts. Under this national effort, recently improved inventories
			and data collection tools, brought to you by the{' '}
			<a href="https://www.fishhabitat.org/" target="_blank">National Fish Habitat Partnership</a>,
			<a
				href="https://southeastaquatics.net/sarps-programs/aquatic-connectivity-program-act"
				target="_blank"
			>
				Southeast Aquatic Resources Partnership
			</a>{' '}
			(SARP), and partners, enable us to survey, describe, understand, and prioritize aquatic barriers
			for removal, restoration, and mitigation.
		</p>
		<div class="my-8 sm:my-0 flex flex-col items-center sm:items-end gap-5">
			<a href="https://fishhabitat.org/" target="_blank" class="block">
				<img src={NFHPLogo} alt="National FIsh Habitat Partnership logo" class="w-[200px]" />
			</a>
			<a
				href="https://southeastaquatics.net/sarps-programs/aquatic-connectivity-program-act"
				target="_blank"
				class="block"
			>
				<img src={SARPLogo} alt="SARP logo" class="w-[190px]" />
			</a>
		</div>
	</div>

	<p class="mt-16">
		The <b>National Aquatic Connectivity Collaborative</b> is made possible by funding from the{' '}
		<a href="https://www.fws.gov/program/national-fish-passage" target="_blank">
			U.S. Fish and Wildlife Service
		</a>
		,{' '}
		<a href="https://www.americanrivers.org/" target="_blank"> American Rivers </a>
		, the{' '}
		<a href="https://www.nfwf.org/" target="_blank"> National Fish and Wildlife Foundation </a>
		,{' '}
		<a href="https://www.fs.usda.gov/" target="_blank">
			U.S. Department of Agriculture, Forest Service
		</a>
		,{' '}
		<a href="https://www.nature.org/" target="_blank"> The Nature Conservancy </a>
		, <a href="https://www.tu.org/" target="_blank">Trout Unlimited</a>,{' '}
		and state wildlife grant funding from Florida and Texas. This effort would not be possible without
		the collaboration of our partners from numerous state, federal, and non profit organizations as well
		as the{' '}
		<a href="https://www.fishhabitat.org/" target="_blank">National Fish Habitat Partnership</a>.
	</p>

	<div class="flex flex-wrap items-center justify-between mt-2 gap-4">
		<div class="flex-none mt-4">
			<a href="https://www.fws.gov/program/national-fish-passage" target="_blank">
				<img src={USFWSLogo} alt="USFWS logo" class="h-[96px]" />
			</a>
		</div>
		<div class="flex-none mt-4">
			<a href="https://www.fs.usda.gov/" target="_blank">
				<img src={USFSLogo} alt="USFS logo" class="h-[96px]" />
			</a>
		</div>
		<div class="flex-none mt-4">
			<a href="https://www.nature.org/" target="_blank">
				<img src={TNCLogo} alt="TNC logo" class="w-[150px]" />
			</a>
		</div>

		<div class="flex-none mt-4">
			<a href="https://www.americanrivers.org/" target="_blank">
				<img src={AmericanRiversLogo} alt="American Rivers logo" class="w-[140px]" />
			</a>
		</div>

		<div class="flex-none mt-4">
			<a href="https://www.tu.org/" target="_blank">
				<img src={TULogo} alt="Trout Unlimited logo" class="h-[80px]" />
			</a>
		</div>
	</div>

	<hr />

	<h2 class="text-4xl">
		Enhancing aquatic connectivity by empowering people with actionable data:
	</h2>

	<div
		class="grid sm:grid-cols-3 gap-6 mt-6 [&>div]:bg-blue-1 [&>div]:rounded-2xl [&>div]:p-4 [&_h3]:border-b-4 [&_h3]:border-b-white [&_h3]:pb-2 [&_h3]:mb-2 [&_p]:leading-snug"
	>
		<div>
			<h3 class="text-2xl">Inventory</h3>
			<p>
				The aquatic barrier inventory is the foundation for identifying and prioritizing aquatic
				connectivity projects with partners. It combines existing datasets with ongoing field
				surveys. It provides essential information about the location, status, and characteristics
				of potential aquatic barriers.
				<br /><br />
				<a href={resolve('/inventory')}>Learn more about the inventory</a>.
			</p>
		</div>

		<div>
			<h3 class="text-2xl">Prioritization Tool</h3>
			<p>
				Aquatic barriers are prioritized based on their contribution to the aquatic network to help
				identify projects that maximize partner return on investment. Quantitative metrics provide
				actionable information to assist barrier removal projects.
				<br /><br />
				Go to the
				<a href={PRIORITZATION_TOOL_URL} target="_blank">Inventory & Prioritization Tool</a> to download
				and prioritize barriers for your area of interest.
			</p>
		</div>

		<div>
			<h3 class="text-2xl">Teams</h3>
			<p>
				Aquatic connectivity teams make barrier removal projects a reality. By combining effort
				across organizations and jurisdictions, partners work together to identify, prioritize, and
				implement barrier removal projects.
				<br /><br />
				<a href={resolve('/teams')}>Learn more about Aquatic Connectivity Teams</a>.
			</p>
		</div>
	</div>

	<hr />

	<div class="grid sm:grid-cols-[3fr_5fr] gap-10">
		<div>
			<h2 class="text-4xl">Get involved!</h2>
			<p class="mt-4">
				You can help improve the inventory by sharing data, assisting with field reconnaissance to
				evaluate the impact of aquatic barriers, joining an{' '}
				<a href="https://www.americanrivers.org/aquatic-connectivity-groups/" target="blank">
					Aquatic Connectivity Team
				</a>, or even by reporting issues with the inventory data in this tool.
				<br />
				<br />
				<a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a> to learn more about how you can help improve
				this barrier inventory and tool.
			</p>
		</div>

		<div>
			<enhanced:img
				src="$lib/assets/images/Roaring_River_dam_removal_-_All_the_Partners_-_DSC_0178.jpg"
				alt="Roaring River dam removal partners"
			/>
			<div class="text-xs text-grey-8 leading-tight">
				Roaring River Dam Removal, Tennessee, 2017. Mark Thurman, Tennessee Wildlife Resources
				Agency.
			</div>
		</div>
	</div>
</div>
