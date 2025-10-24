<script lang="ts">
	import ClipboardCheck from '~icons/fa-solid/clipboard-check'
	import { CONTACT_EMAIL } from '$lib/env'
</script>

<svelte:head>
	<title>Data Collection Protocol Training | National Aquatic Connectivity Collaborative</title>
</svelte:head>

<div class="max-h-[16rem] overflow-hidden relative">
	<enhanced:img src="$lib/assets/images/21854400142_f959bbc579_o.jpg" alt="" />

	<div class="absolute bottom-0 right-0 py-1 px-2 bg-black/75 text-white text-xs">
		Photo: <a
			href="https://www.flickr.com/photos/mypubliclands/21854400142/in/album-72157659266694221"
			target="_blank"
			class="text-white no-underline hover:underline">BLM Oregon</a
		>
	</div>
</div>

<div class="container mt-8">
	<h1
		class="text-3xl md:text-4xl lg:text-5xl py-4 flex items-center gap-4 border-b border-b-grey-5"
	>
		<ClipboardCheck class="w-12 h-12 text-grey-8" />

		Data Collection Protocol Training
	</h1>
	<div class="mt-8 grid grid-cols-[2fr_1fr] gap-4">
		<p class="text-xl">
			While data collected using multiple protocols exist within the National Inventory, the NACC
			supports standardized protocols originally developed by the <a
				href="https://streamcontinuity.org/"
				target="_blank">North Atlantic Aquatic Connectivity Collaborative</a
			>
			(NAACC) to measure road/stream crossings in the field. This includes protocols for non-tidal streams,
			tidal streams, culvert condition, and passage by terrestrial species.
			<br /><br />
			<b>
				You must be certified for collecting data according to these protocols by participating in
				online training and field-based training.
			</b>
			<br /><br />
			We are currently developing a training system for the National Aquatic Connectivity Collaborative
			based on the online trainings originally developed by the NAACC. Until that training system is
			online, please complete these trainings using NAACC's existing training system if you are located
			in the Northeast, or
			<a href={`mailto:${CONTACT_EMAIL}`}>contact us</a> for training outside the Northeast.
			<br /><br />
			We expect the new training system to be online in early 2026.
		</p>
		<div>
			<enhanced:img
				src="$lib/assets/images/21869136895_c3f4b44628_o.jpg"
				alt="field survey in Alaska"
			/>
			<div class="text-xs text-grey-8 text-right">
				Photo: <a href="https://www.flickr.com/photos/mypubliclands/21869136895/" target="_blank"
					>BLM Alaska</a
				>
			</div>
		</div>
	</div>
</div>
