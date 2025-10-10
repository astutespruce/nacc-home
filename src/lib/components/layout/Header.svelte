<script lang="ts">
	import { resolve } from '$app/paths'
	import QuestionCircle from '~icons/fa-solid/question-circle'
	import RulerVertical from '~icons/fa-solid/ruler-vertical'
	import SearchLocation from '~icons/fa-solid/search-location'
	import Users from '~icons/fa-solid/users'

	import { PRIORITZATION_TOOL_URL } from '$lib/env'

	import Logo from '$lib/assets/images/nacc_logo_white.svg'
</script>

<header
	class="flex-none leading-none bg-blue-9 flex gap-6 items-center justify-between py-1 pl-1 pr-4 border-b-4 border-blue-8"
>
	<div class="flex-auto flex gap-3 items-center">
		<div class="flex-none">
			<a href="/" class="no-underline">
				<img
					src={Logo}
					class="h-[2.5rem] my-[1px]"
					alt="National Aquatic Connectivity Collaborative logo"
				/>
			</a>
		</div>
		<div>
			<a href="/" class=" no-underline text-white">
				<div class="italic text-sm leading-tight">National</div>
				<div class="text-xl leading-none">Aquatic Connectivity Collaborative</div>
			</a>
		</div>
	</div>
	<nav class="flex flex-wrap items-center gap-4 text-md leading-none text-white">
		<div class="py-2 px-3 hover:bg-blue-8 rounded">
			<a href="/teams" class="text-white no-underline hover:underline flex items-center gap-1.5">
				<Users class="w-5" />
				Teams</a
			>
		</div>
		<div class="py-2 px-3 hover:bg-blue-8 rounded">
			<a href="/survey" class="text-white no-underline hover:underline flex items-center gap-1.5">
				<RulerVertical class="w-4" />

				Survey Crossings</a
			>
		</div>
		<div class="py-2 px-3 hover:bg-blue-8 rounded">
			<a
				href={PRIORITZATION_TOOL_URL}
				class="text-white no-underline hover:underline flex items-center gap-1.5"
			>
				<SearchLocation class="w-4" />

				Barrier Inventory & Prioritization Tool</a
			>
		</div>
		<div class="py-2 px-3 hover:bg-blue-8 rounded">
			<a href="/faq" class="text-white no-underline hover:underline flex items-center gap-1.5">
				<QuestionCircle class="w-4" />
				FAQ</a
			>
		</div>
	</nav>
</header>
