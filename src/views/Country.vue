<script setup>
	import { onMounted, ref } from "vue";
	import { RouterLink, useRoute } from "vue-router";

	import Back from "@/assets/icons/Back.vue";

	const country = ref(null);
	const route = useRoute();

	const getCountryData = async (cca3) => {
		const response = await fetch(
			`https://restcountries.com/v3.1/alpha/${cca3}`
		);
		const data = await response.json();
		console.log(data);
		country.value = data[0];
		console.log(country.value);
	};

	const getNativeName = (nativeName) => {
		if (nativeName) {
			for (const key in nativeName) {
				if (nativeName[key].common) {
					return nativeName[key].common;
				}
			}
		}
		return null;
	};

	const getBorders = (borders) => {
		if (borders && borders.length > 0) {
			return borders.join(", ");
		}
		return "N/A";
	};

	const getCurrencies = (currencies) => {
		if (currencies) {
			const currencyArray = [];
			for (const key in currencies) {
				if (currencies[key].name && currencies[key].symbol) {
					currencyArray.push(
						`${currencies[key].name} (${currencies[key].symbol})`
					);
				}
			}
			return currencyArray.join(", ");
		}
		return "N/A";
	};

	const getLanguages = (languages) => {
		if (languages) {
			return Object.values(languages).join(", ");
		}
	};

	onMounted(() => {
		getCountryData(route.params.cca3);
	});
</script>

<template>
	<section
		v-if="country"
		class="py-8 bg-lightModeBackground dark:bg-darkModeBackground px-4 min-h-screen"
	>
		<div class="xl:max-w-[1200px] xl:mx-auto">
			<div class="flex">
				<RouterLink
					class="flex items-center bg-lightWhite dark:bg-darkModeElements py-2 px-6 gap-2 shadow-md"
					to="/"
					><Back /><span
						class="text-lightModeText dark:text-lightWhite"
						>Back</span
					></RouterLink
				>
			</div>
			<div
				class="py-8 text-lightModeText dark:text-lightWhite flex flex-col justify-center md:flex-row md:items-center md:justify-between gap-12"
			>
				<img class="max-w-[500px]" :src="country.flags.svg" alt="" />
				<div class="grid gap-8">
					<h3 class="text-2xl font-bold">
						{{ country.name.common }}
					</h3>
					<div class="flex flex-col gap-8 xl:gap-12 xl:flex-row">
						<div class="grid gap-4">
							<p class="font-semibold">
								Native name:
								<span class="font-light">{{
									getNativeName(country.name.nativeName)
								}}</span>
							</p>
							<p class="font-semibold">
								Population:
								<span class="font-light">{{
									country.population
								}}</span>
							</p>
							<p class="font-semibold">
								Region:
								<span class="font-light">{{
									country.region
								}}</span>
							</p>
							<p class="font-semibold">
								Sub-Region:
								<span class="font-light">{{
									country.subregion
								}}</span>
							</p>
							<p class="font-semibold">
								Capital:
								<span class="font-light">{{
									country.capital
										? country.capital.join(", ")
										: "N/A"
								}}</span>
							</p>
						</div>
						<div class="grid">
							<p class="font-semibold">
								Top Level Domain:
								<span class="font-light">{{
									country.tld[0]
								}}</span>
							</p>
							<p class="font-semibold">
								Currencies:
								<span class="font-light">{{
									getCurrencies(country.currencies)
								}}</span>
							</p>
							<p class="font-semibold">
								Languages:
								<span class="font-light">{{
									getLanguages(country.languages)
								}}</span>
							</p>
						</div>
					</div>
					<div class="">
						<p class="font-semibold">
							Border Countries:
							<span class="font-light">{{
								getBorders(country.borders)
							}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section v-else>
		<h1>Loading....</h1>
	</section>
</template>
