<script lang="ts">
	import FAQIcon from '@lucide/svelte/icons/circle-question-mark'
	import SurveyFormsIcon from '@lucide/svelte/icons/clipboard-pen-line'

	import { resolve } from '$app/paths'

	const items = [
		{ id: 'faq', url: '/faq/', label: 'Frequently asked questions', icon: FAQIcon },
		{
			id: 'forms',
			url: '/survey-forms/',
			label: 'Field survey forms & manuals',
			icon: SurveyFormsIcon
		}
	]
</script>

{#each items as item, i (item.id)}
	<div>
		{#if i > 0}
			<hr class="border-t-0 my-4 border-t-grey-2 sm:border-t" />
		{/if}
		<div class="flex gap-2">
			<item.icon class="size-5 text-muted-foreground flex-none" />
			<a href={resolve(item.url)} class="block flex-auto leading-snug">{item.label}</a>
		</div>
	</div>
{/each}
