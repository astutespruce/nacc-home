<script lang="ts">
	import { Analytics, Footer, Header } from '$lib/components/layout'

	import '../app.css'

	let { children } = $props()
</script>

<Analytics />

<div class="flex flex-col h-full w-full overflow-none">
	<Header />

	<div class="h-full w-full flex-auto overflow-auto">
		{@render children()}
	</div>
	<Footer />
</div>
