<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu'

	import { browser } from '$app/environment'
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import { Root, Trigger, Content } from '$lib/components/ui/sheet'

	const { items } = $props()
	let isOpen = $state(false)

	const isActivePath = (path: string) => browser && page.url.pathname.endsWith(path)

	const close = () => {
		isOpen = false
	}
</script>

<Root bind:open={isOpen}>
	<Trigger class="lg:hidden">
		<MenuIcon class="text-white mr-2" />
	</Trigger>
	<Content side="top" class="px-4 pt-4 pb-8">
		<nav
			class="[&>a]:not-first:mt-6 leading-tight [&>a]:flex [&>a]:gap-2 [&>a]:items-center [&>a]:data-[is-active=true]:font-bold"
		>
			<a href={resolve('/')} onclick={close}>National Aquatic Connectivity Collaborative</a>

			{#each items as item (item.url)}
				{#if item.url.startsWith('http')}
					<a href={item.url} target="_blank" rel="external" onclick={close}>
						<item.icon class="size-5" />
						{item.label}
					</a>
				{:else}
					<a
						href={resolve(item.url)}
						data-is-active={isActivePath(item.url).toString()}
						onclick={close}
					>
						<item.icon class="size-5" />
						{item.label}
					</a>
				{/if}
			{/each}
		</nav>
	</Content>
</Root>
