<script lang="ts">
	import { browser } from '$app/environment'
	import { GOOGLE_ANALYTICS_ID } from '$lib/env'

	if (browser && GOOGLE_ANALYTICS_ID) {
		// @ts-expect-error dataLayer is dynamically added by google analytics
		window.dataLayer = window.dataLayer || []

		function gtag() {
			// @ts-expect-error dataLayer is dynamically added by google analytics
			window.dataLayer.push(arguments)
		}

		// @ts-expect-error props based on examples
		gtag('js', new Date())
		// @ts-expect-error props based on examples
		gtag('config', GOOGLE_ANALYTICS_ID)
	}
</script>

<svelte:head>
	{#if browser && typeof GOOGLE_ANALYTICS_ID !== 'undefined'}
		<script
			async
			src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
		></script>
	{/if}
</svelte:head>
