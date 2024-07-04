<template>
	<header
		class="flex justify-between items-center bg-lightWhite px-4 py-8 xl:px-[70px] shadow-md"
	>
		<h1 class="text-lightModeText font-bold text-xl">
			Where in the world?
		</h1>
		<div class="flex items-center gap-2">
			<Moon />
			<p class="lightModeText">Dark Mode</p>
		</div>
		<!-- <div class="flex items-center gap-2">
			<Sun />
			<p class="text-lightModeText font-semibold">Light Mode</p>
		</div> -->
	</header>
</template>

<script setup>
	import Sun from "@/assets/icons/Sun.vue";
	import Moon from "@/assets/icons/Moon.vue";
</script>
