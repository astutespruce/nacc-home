<script lang="ts">
	import { Analytics } from '$lib/components/layout'

	import '../app.css';

	let { children } = $props();
</script>

<Analytics />

<div class="flex flex-col h-full w-full overflow-none">
	{@render children()}
</div>
