<script lang="ts" module>
	// style overrides: change accent to white/20, change to ring-white
	// remove bg-background text-accent usage
	// change chevron to size-4
	import { cn } from "$lib/utils.js";
	import { tv } from "tailwind-variants";

	export const navigationMenuTriggerStyle = tv({
		base: "hover:bg-white/20 focus:bg-white/20 data-[state=open]:hover:bg-white/20 data-[state=open]:focus:bg-white/20 data-[state=open]:bg-white/10 data-[state=open]:ring-white data-[state=open]:ring-[1px] focus-visible:ring-white group inline-flex h-9 w-max items-center justify-center rounded-md p-2 text-sm font-medium transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50",
	});
</script>

<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: NavigationMenuPrimitive.TriggerProps = $props();
</script>

<NavigationMenuPrimitive.Trigger
	bind:ref
	data-slot="navigation-menu-trigger"
	class={cn(navigationMenuTriggerStyle(), 'group', className)}
	{...restProps}
>
	{@render children?.()}

	<ChevronDownIcon
		class="relative top-[1px] size-4 transition duration-300 group-data-[state=open]:rotate-180"
		aria-hidden="true"
	/>
</NavigationMenuPrimitive.Trigger>
