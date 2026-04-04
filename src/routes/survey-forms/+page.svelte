<script lang="ts">
	import SurveyFormsIcon from '@lucide/svelte/icons/clipboard-pen-line'

	import { asset } from '$app/paths'
	import { Alert } from '$lib/components/alert'
</script>

<svelte:head>
	<title>Field Survey Forms | National Aquatic Connectivity Collaborative</title>
</svelte:head>

<div class="max-h-64 overflow-hidden relative">
	<enhanced:img src="$lib/assets/images/21854400142_f959bbc579_o.jpg" alt="" />

	<div class="absolute bottom-0 right-0 py-1 px-2 bg-black/75 text-white text-xs">
		Photo: <a
			href="https://www.flickr.com/photos/mypubliclands/21854400142/in/album-72157659266694221"
			target="_blank"
			rel="external"
			class="text-white no-underline hover:underline">BLM Oregon</a
		>
	</div>
</div>

<div class="container mt-8 pb-8">
	<h1
		class="text-3xl md:text-4xl lg:text-5xl py-4 flex items-center gap-4 border-b border-b-grey-5"
	>
		<SurveyFormsIcon class="size-12 text-grey-8" /> Field Survey Forms and Manuals
	</h1>

	<h2 class="text-2xl mt-8">Field survey forms</h2>
	<ul class="mt-2 list-disc pl-6 [&>li+li]:mt-2">
		<li>
			<a href={asset('/documents/NACC_Survey_Form_Nontidal_Aquatic_2025.pdf')} target="_blank">
				Non-tidal road/stream crossings field survey form (2025)
			</a>
		</li>
		<li>
			<a href={asset('/documents/NACC_Survey_Form_Tidal_Aquatic_2025.pdf')} target="_blank">
				Tidal road/stream crossings field survey form (2025)
			</a>
		</li>
		<li>
			<a
				href={asset('/documents/NACC_Survey_Form_Terrestial_Passability_2025.pdf')}
				target="_blank"
			>
				Terrestrial passage assessment field survey form (2025)
			</a>
		</li>
	</ul>

	<h2 class="text-2xl mt-8">Field survey manuals</h2>
	<ul class="mt-2 list-disc pl-6 [&>li+li]:mt-2">
		<li>
			<a href={asset('/documents/NACC_Manual_Nontidal_Aquatic_2025.pdf')} target="_blank">
				Non-tidal road/stream crossings field manual (2025)
			</a>
		</li>
		<li>
			<a href={asset('/documents/NACC_Manual_Combined_Aquatic_2025.pdf')} target="_blank">
				Combined tidal and non-tidal road/stream crossings field manual (2025)
			</a>
		</li>
	</ul>

	<!-- FIXME: -->

	<Alert title="Head's up" class=" mt-12">
		<p>
			These survey forms and manuals were adapted from those used by the North Atlantic Aquatic
			Connectivity Collaborative (NAACC). However, they may include additional fields and values not
			currently available for data entry within the NAACC Data Center. We therefore recommend you
			use the NAACC specific forms for collecting data for entry into NAACC.
		</p>
	</Alert>
</div>
