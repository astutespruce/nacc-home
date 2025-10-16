<script lang="ts">
	import TeamIcon from '$lib/assets/images/team.svg'
	import SARPLogo from '$lib/assets/images/sarp_logo.png'
	import AmericanRiversLogo from '$lib/assets/images/american_rivers_logo.svg'
	import TNCLogo from '$lib/assets/images/tnc_logo.svg'
</script>

<svelte:head>
	<title>Aquatic Connectivity Teams | National Aquatic Connectivity Collaborative</title>
</svelte:head>

<div class="max-h-[16rem] overflow-hidden relative">
	<enhanced:img src="$lib/assets/images/30557776285_90ce5f6683_6k.jpg" />

	<div class="absolute bottom-0 right-0 py-1 px-2 bg-black/75 text-white text-xs">
		Photo: Biologists collect and move fish from a de-watered river reach as part of Cane River Dam
		removal, 2016<a
			href="https://www.flickr.com/photos/usfwssoutheast/30557776285/"
			target="_blank"
			class="text-white no-underline hover:underline"
			>U.S. Fish & Wildlife Service Southeast Region</a
		>
	</div>
</div>

<div class="container mt-8 pb-16">
	<h1
		class="text-3xl md:text-4xl lg:text-5xl py-4 flex items-center gap-4 border-b border-b-grey-5"
	>
		<img src={TeamIcon} alt="Team icon" class="h-20" />

		Aquatic Connectivity Teams
	</h1>
	<div class="grid grid-cols-[1.5fr_1fr] gap-8 mt-8">
		<p class="text-xl">
			Aquatic connectivity teams and other aquatic connectivity collaboratives make barrier removal
			projects a reality. By combining efforts across organizations and jurisdictions, partners work
			together to identify, prioritize, and implement barrier removal projects. These networks of
			partners provide a forum to streamline efforts, as well as work on policy, education and
			outreach, and cross sector communication, efforts that are necessary for true measurable
			conservation to occur on the ground.
		</p>
		<div>
			<enhanced:img
				src="$lib/assets/images/16308836863_69be1a706b_o.jpg"
				alt="Marion Ice Dam Removal"
			/>
			<div class="text-xs text-grey-8 text-right">
				Photo: Marion Ice Dam Removal | <a
					href="https://www.flickr.com/photos/usfwsnortheast/16308836863/in/album-72157651143991469"
					>U.S. Fish and Wildlife Service Northeast Region</a
				>
			</div>
		</div>
	</div>

	<div class="sm:grid grid-cols-[1fr_1.5fr] gap-8 mt-16">
		<div>
			<enhanced:img src="$lib/assets/images/22730228429_5819b16fbf_o.jpg" alt="" />
			<div class="text-xs text-grey-8 text-right">
				Photo: Fish monitoring of the Westecunk Creek barrier removal project | <a
					href="https://www.flickr.com/photos/usfwsnortheast/22730228429/"
					>U.S. Fish and Wildlife Service Northeast Region</a
				>
			</div>
		</div>

		<div class="mt-12 sm:mt-0">
			<p class="text-xl">
				Aquatic connectivity teams are coordinated at the state level by local and state leaders,
				with regional facilitation provided by SARP, American Rivers, and The Nature Conservancy.
			</p>
			<div class="grid grid-cols-3 gap-8 mt-8 items-center">
				<div>
					<a
						href="https://southeastaquatics.net/sarps-programs/aquatic-connectivity-program-act"
						target="_blank"
					>
						<img src={SARPLogo} alt="SARP logo" class="max-w-[132px]" />
					</a>
				</div>

				<div>
					<a href="https://www.americanrivers.org/" target="_blank">
						<img src={AmericanRiversLogo} alt="American Rivers logo" class="" />
					</a>
				</div>

				<div>
					<a href="https://www.nature.org/" target="_blank">
						<img src={TNCLogo} alt="TNC logo" class="" />
					</a>
				</div>
			</div>
		</div>
	</div>

	<p class="text-xl mt-12">
		To learn more about Aquatic connectivity teams or to join one in your state, go to the
		<a href="https://www.americanrivers.org/aquatic-connectivity-groups/" target="_blank">
			Aquatic Connectivity Groups</a
		> page managed by American Rivers.
	</p>

	<!-- <div class="flex items-center justify-between gap-4 mt-16">
		<div class="flex-none">
			<a
				href="https://southeastaquatics.net/sarps-programs/aquatic-connectivity-program-act"
				target="_blank"
			>
				<img src={SARPLogo} alt="SARP logo" class="w-[190px]" />
			</a>
		</div>

		<div class="flex-none">
			<a href="https://www.americanrivers.org/" target="_blank">
				<img src={AmericanRiversLogo} alt="American Rivers logo" class="w-[200px]" />
			</a>
		</div>

		<div class="flex-none">
			<a href="https://www.nature.org/" target="_blank">
				<img src={TNCLogo} alt="TNC logo" class="w-[200px]" />
			</a>
		</div>
	</div> -->

	<hr />

	<div class="grid grid-cols-3 gap-2 [&>div]:max-h-[10rem] [&>div]:overflow-hidden">
		<div>
			<enhanced:img
				src="$lib/assets/images/Arkansas_team.jpg"
				alt="Arkansas Aquatic Connectivity Team"
			/>
		</div>
		<div>
			<enhanced:img
				src="$lib/assets/images/Georgia_team.jpg"
				alt="Georgia Aquatic Connectivity Team"
				class="mt-[-1rem]"
			/>
		</div>
		<!-- <div>
			<enhanced:img
				src="$lib/assets/images/South_Carolina_team.jpg"
				alt="South Carolina Aquatic Connectivity Team"
			/>
		</div> -->
		<div>
			<enhanced:img
				src="$lib/assets/images/Tennessee_team.jpg"
				alt="Tennessee Aquatic Connectivity Team"
				class="mt-[-2rem]"
			/>
		</div>
	</div>
</div>
