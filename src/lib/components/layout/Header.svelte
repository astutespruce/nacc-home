<script lang="ts">
	import { browser } from '$app/environment'
	import { resolve } from '$app/paths'
	import { page } from '$app/state'

	import TrainingIcon from '@lucide/svelte/icons/clipboard-clock'
	import FAQIcon from '@lucide/svelte/icons/circle-question-mark'
	import InventoryIcon from '@lucide/svelte/icons/pencil-ruler'
	import PrioritizationToolIcon from '@lucide/svelte/icons/search-check'
	import UsersIcon from '@lucide/svelte/icons/users'

	import { PRIORITZATION_TOOL_URL } from '$lib/env'

	import Logo from '$lib/assets/images/nacc_logo_white.svg'

	const isActivePath = (path: string) => browser && page.url.pathname.endsWith(path)
</script>

<header
	class="flex-none leading-none bg-blue-8 flex gap-6 items-center justify-between p-1 border-b-4 border-blue-9"
>
	<div class="flex-auto flex gap-3 items-center">
		<div class="flex-none">
			<a href={resolve('/')} class="no-underline">
				<img src={Logo} class="h-10 my-px" alt="National Aquatic Connectivity Collaborative logo" />
			</a>
		</div>
		<div>
			<a href={resolve('/')} class=" no-underline text-white">
				<div class="italic text-sm leading-tight">National</div>
				<div class="text-xl leading-none">Aquatic Connectivity Collaborative</div>
			</a>
		</div>
	</div>
	<nav class="flex flex-wrap items-center text-md leading-none text-white">
		<div>
			<div class={isActivePath('/inventory/') ? 'active' : null}>
				<a href={resolve('/inventory/')}>
					<InventoryIcon class="size-6" />
					Inventory
				</a>
			</div>
		</div>
		<div>
			<div>
				<a href={PRIORITZATION_TOOL_URL} target="_blank">
					<PrioritizationToolIcon class="size-6" />

					<div class="xl:hidden">Tool</div>
					<div class="hidden xl:block">Prioritization Tool</div>
				</a>
			</div>
		</div>
		<div>
			<div class={isActivePath('/teams/') ? 'active' : null}>
				<a href={resolve('/teams/')}>
					<UsersIcon class="size-6" />
					Teams</a
				>
			</div>
		</div>
		<div>
			<div class={isActivePath('/training/') ? 'active' : null}>
				<a href={resolve('/training/')}>
					<TrainingIcon class="size-6" />
					Training</a
				>
			</div>
		</div>
		<div>
			<div class={isActivePath('/faq/') ? 'active' : null}>
				<a href={resolve('/faq/')}>
					<FAQIcon class="size-6" />
					FAQ</a
				>
			</div>
		</div>
	</nav>
</header>
