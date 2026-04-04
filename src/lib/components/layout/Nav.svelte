<script lang="ts">
	import { browser } from '$app/environment'
	import { resolve } from '$app/paths'
	import { page } from '$app/state'

	import { Root, List, Item, Trigger, Link, Content } from '$lib/components/ui/navigation-menu'
	import LearnMoreNav from './LearnMoreNav.svelte'

	const { items } = $props()

	const isActivePath = (path: string) => browser && page.url.pathname.endsWith(path)
</script>

<Root class="flex-none pr-1 hidden lg:block" viewport={false}>
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

		<Item>
			<Trigger>Learn more</Trigger>
			<Content>
				<div class="w-[320px] p-2">
					<LearnMoreNav />
				</div>
			</Content>
		</Item>
	</List>
</Root>
