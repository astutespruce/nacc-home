<script lang="ts">
	import { browser } from '$app/environment'
	import { resolve } from '$app/paths'
	import { page } from '$app/state'

	import { Root, List, Item, Link } from '$lib/components/ui/navigation-menu'

	const { items } = $props()

	const isActivePath = (path: string) => browser && page.url.pathname.endsWith(path)
</script>

<Root class="flex-none pr-1 hidden lg:block">
	<List>
		{#each items as item (item.url)}
			<Item>
				{#if item.url.startsWith('http')}
					<Link href={item.url} target="_blank" rel="external">
						<item.icon class="text-white size-5" />
						{item.label}
					</Link>
				{:else}
					<Link href={resolve(item.url)} data-is-active={isActivePath(item.url).toString()}>
						<item.icon class="text-white size-5" />
						{item.label}
					</Link>
				{/if}
			</Item>
		{/each}
	</List>
</Root>
