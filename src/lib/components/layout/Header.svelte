<script lang="ts">
	import FAQIcon from '@lucide/svelte/icons/circle-question-mark'
	import InventoryIcon from '@lucide/svelte/icons/pencil-ruler'
	import PrioritizationToolIcon from '@lucide/svelte/icons/search-check'
	import TeamsIcon from '@lucide/svelte/icons/users'
	import TrainingIcon from '@lucide/svelte/icons/clipboard-clock'

	import { resolve } from '$app/paths'
	import Logo from '$lib/assets/images/nacc_logo_white.svg'

	import { PRIORITZATION_TOOL_URL } from '$lib/env'
	import Nav from './Nav.svelte'
	import MobileNav from './MobileNav.svelte'

	const navItems = [
		{ url: '/inventory/', label: 'Inventory', icon: InventoryIcon },
		{ url: PRIORITZATION_TOOL_URL, label: 'Prioritization Tool', icon: PrioritizationToolIcon },
		{ url: '/teams/', label: 'Teams', icon: TeamsIcon },
		{ url: '/training/', label: 'Training', icon: TrainingIcon },
		{ url: '/faq/', label: 'FAQ', icon: FAQIcon }
	]
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
	<Nav items={navItems} />
	<MobileNav items={navItems} />
</header>
