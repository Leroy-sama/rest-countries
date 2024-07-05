<script setup>
	import { onMounted, onUnmounted } from "vue";
	import TheHeader from "./layout/TheHeader.vue";

	const updateTheme = (e) => {
		if (e.matches) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	onMounted(() => {
		const userPrefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (userPrefersDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", updateTheme);
	});

	onUnmounted(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.removeEventListener("change", updateTheme);
	});
</script>

<template>
	<TheHeader />
	<RouterView />
</template>
