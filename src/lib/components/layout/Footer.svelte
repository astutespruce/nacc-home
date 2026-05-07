<script>
	import { resolve } from '$app/paths'
</script>

<footer
	class="flex-none leading-none bg-blue-9 lg:flex items-center justify-between p-2 text-[0.8rem] gap-6 text-white [&_a]:text-white [&_a]:no-underline"
>
	<div
		class="flex-auto flex gap-3 [&>a]:not-first:border-l [&>a]:not-first:border-grey-4 [&>a]:not-first:pl-3"
	>
		<a href="https://www.fishhabitat.org/" target="_blank">National Fish Habitat Partnership</a>
		<a href="https://southeastaquatics.net/sarps-programs/aquatic-connectivity-program-act"
			>Southeast Aquatic Resources Partnership</a
		>
		<a href="https://southeastaquatics.net/about/contact-us">Contact Us </a>
		<a href={resolve('/terms-of-use/')}>Terms of Use</a>
	</div>
	<div class="hidden lg:block">
		Created by
		<a href="https://astutespruce.com" class="text-white no-underline hover:underline"
			>Astute Spruce, LLC</a
		>
	</div>
</footer>
