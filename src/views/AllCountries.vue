<script setup>
	import { ref, computed } from "vue";

	import Search from "@/assets/icons/Search.vue";

	const countries = ref([]);
	const searchQuery = ref("");
	const selectedRegion = ref("");

	const APIURL = "https://restcountries.com/v3.1/all";

	const fetchCountries = async () => {
		const response = await fetch(APIURL);
		const data = await response.json();
		console.log(data);
		countries.value = data;
	};

	fetchCountries();

	const filteredCountries = computed(() => {
		let filtered = countries.value;

		if (searchQuery.value) {
			const query = searchQuery.value.toLowerCase();
			filtered = filtered.filter((country) =>
				country.name.common.toLowerCase().includes(query)
			);
		}

		if (selectedRegion.value) {
			filtered = filtered.filter(
				(country) =>
					country.region.toLowerCase() ===
					selectedRegion.value.toLowerCase()
			);
		}

		return filtered;
	});
</script>

<template>
	<main
		class="bg-lightModeBackground dark:bg-darkModeBackground min-h-screen"
	>
		<div
			class="py-12 flex flex-col gap-12 mx-4 md:flex-row md:justify-between md:mx-4 xl:max-w-[1200px] xl:mx-auto"
		>
			<div
				class="flex items-center gap-4 py-4 px-8 bg-lightWhite dark:bg-darkModeElements shadow-md"
			>
				<Search />
				<input
					type="text"
					placeholder="Search for a country..."
					class="bg-lightWhite dark:bg-darkModeElements focus:outline-none text-lightModeText dark:text-lightWhite w-full"
					v-model="searchQuery"
				/>
			</div>
			<select
				v-model="selectedRegion"
				class="p-4 focus:outline-none bg-lightWhite dark:bg-darkModeElements text-lightModeText dark:text-lightWhite max-w-52 shadow-md"
			>
				<option disabled selected value="">Filter by Region</option>
				<option value="africa">Africa</option>
				<option value="americas">Americas</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</div>
		<div
			class="grid gap-12 grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-[1200px] xl:mx-auto"
		>
			<div
				v-for="country in filteredCountries"
				:key="country.cca3"
				class="shadow-md"
			>
				<img
					:src="country.flags.svg"
					class="aspect-video object-cover"
				/>
				<div
					class="bg-lightWhite dark:bg-darkModeElements text-lightModeText dark:text-lightWhite p-6"
				>
					<!-- // using the cca3 to find the country and render the data required!! -->
					<RouterLink :to="{ path: `/country/${country.cca3}` }">
						<h3 class="text-xl font-bold">
							{{ country.name.common }}
						</h3>
					</RouterLink>
					<div class="grid gap-2 py-4">
						<p class="font-medium">
							Population:
							<span class="font-light">{{
								country.population
							}}</span>
						</p>
						<p class="font-medium">
							Region:
							<span class="font-light">{{ country.region }}</span>
						</p>
						<p class="font-medium">
							Capital:
							<span class="font-light">{{
								country.capital
									? country.capital.join(", ")
									: "N/A"
							}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
