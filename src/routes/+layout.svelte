<script lang="ts">
	import { browser } from '$app/environment'
	import { afterNavigate } from '$app/navigation'
	import { GOOGLE_ANALYTICS_ID } from '$lib/env'

	import { Footer, Header } from '$lib/components/layout'

	import '../app.css'

	let { children } = $props()

	// reset scroll of content node on navigate
	let contentNode: Element | null = $state(null)
	afterNavigate(() => {
		if (contentNode) {
			contentNode.scrollTop = 0
		}
	})

	const handleGTAGLoad = () => {
		if (!window.dataLayer) {
			console.warn('GTAG not properly initialized')
			return
		}

		console.debug('setting up GTAG')

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag('js', new Date())
		gtag('config', GOOGLE_ANALYTICS_ID)
		window.gtag = gtag
	}
</script>

<svelte:head>
	{#if browser && GOOGLE_ANALYTICS_ID}
		<script
			async
			src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
			onload={handleGTAGLoad}
		></script>
	{/if}
</svelte:head>

<div class="flex flex-col h-full w-full overflow-none">
	<Header />

	<div bind:this={contentNode} class="h-full w-full flex-auto overflow-auto">
		{@render children()}
	</div>
	<Footer />
</div>
