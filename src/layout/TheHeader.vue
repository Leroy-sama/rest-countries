<template>
	<header
		class="flex justify-between items-center bg-lightWhite dark:bg-darkModeElements px-4 py-8 xl:px-[70px] shadow-md"
	>
		<h1 class="text-lightModeText dark:text-lightWhite font-bold text-xl">
			Where in the world?
		</h1>
		<div
			class="flex items-center gap-2 cursor-pointer"
			@click="toggleDarkMode"
		>
			<component
				:is="isDarkMode ? Sun : Moon"
				class="text-lightModeText dark:text-lightWhite"
			/>
			<p class="text-lightModeText dark:text-lightWhite">
				{{ isDarkMode ? "Light Mode" : "Dark Mode" }}
			</p>
		</div>
	</header>
</template>

<script setup>
	import { ref, watchEffect } from "vue";

	import Sun from "@/assets/icons/Sun.vue";
	import Moon from "@/assets/icons/Moon.vue";

	const isDarkMode = ref(true);

	const toggleDarkMode = () => {
		isDarkMode.value = !isDarkMode.value;
	};

	watchEffect(() => {
		if (isDarkMode.value) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});
</script>
