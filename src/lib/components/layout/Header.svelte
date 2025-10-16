<script lang="ts">
	import { resolve } from '$app/paths'
	import QuestionCircle from '~icons/fa-solid/question-circle'
	import ClipboardCheck from '~icons/fa-solid/clipboard-check'
	import RulerVertical from '~icons/fa-solid/ruler-vertical'
	import SearchLocation from '~icons/fa-solid/search-location'
	import Users from '~icons/fa-solid/users'

	import { PRIORITZATION_TOOL_URL } from '$lib/env'

	import Logo from '$lib/assets/images/nacc_logo_white.svg'
</script>

<header
	class="flex-none leading-none bg-blue-8 flex gap-6 items-center justify-between p-1 border-b-4 border-blue-9"
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
	<nav
		class="flex flex-wrap items-center text-md leading-none text-white [&>div+div]:border-l [&>div+div]:border-grey-5 [&>div]:px-2"
	>
		<div>
			<div class="py-2 px-3 hover:bg-blue-8 rounded">
				<a
					href="/inventory"
					class="text-white no-underline hover:underline flex items-center gap-1.5"
				>
					<RulerVertical class="w-4" />
					Inventory
				</a>
			</div>
		</div>
		<div>
			<div class="py-2 px-3 hover:bg-blue-8 rounded">
				<a
					href={PRIORITZATION_TOOL_URL}
					target="_blank"
					class="text-white no-underline hover:underline flex items-center gap-1.5"
				>
					<SearchLocation class="w-4" />

					<div class="xl:hidden">Tool</div>
					<div class="hidden xl:block">Prioritization Tool</div>
				</a>
			</div>
		</div>
		<div>
			<div class="py-2 px-3 hover:bg-blue-8 rounded">
				<a href="/teams" class="text-white no-underline hover:underline flex items-center gap-1.5">
					<Users class="w-5" />
					Teams</a
				>
			</div>
		</div>
		<div>
			<div class="py-2 px-3 hover:bg-blue-8 rounded">
				<a
					href="/training"
					class="text-white no-underline hover:underline flex items-center gap-1.5"
				>
					<ClipboardCheck class="w-4" />
					Training</a
				>
			</div>
		</div>
		<div>
			<div class="py-2 px-3 hover:bg-blue-8 rounded">
				<a href="/faq" class="text-white no-underline hover:underline flex items-center gap-1.5">
					<QuestionCircle class="w-4" />
					FAQ</a
				>
			</div>
		</div>
	</nav>
</header>
