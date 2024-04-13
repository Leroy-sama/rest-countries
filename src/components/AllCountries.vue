<template>
    <section class="bg-darkModeBackground">
        <div class="flex flex-col md:justify-between md:flex-row gap-8 p-8">
            <div class="flex bg-darkModeElements gap-6 py-4 px-8 rounded">
                <Icon icon="material-symbols:search" color="white" width="25" />
                <input
                    type="text"
                    placeholder="Search for a country..."
                    class="bg-darkModeElements focus:outline-none text-lightWhite"
                />
            </div>
            <select
                name="region"
                id="region"
                class="bg-darkModeElements text-lightWhite p-6 focus:outline-none cursor-pointer"
            >
                <option value="" disabled selected>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        <div
            class="grid grid-cols-1 gap-12 max-w-7xl mx-auto px-8 md:grid-cols-4"
        >
            <div
                id="country"
                v-for="country in countries"
                :key="country"
                class="bg-darkModeElements"
            >
                <img :src="country.flags.svg" alt="" />
                <div class="details p-6">
                    <RouterLink :to="'/allcountries/' + country.cca3">
                        <h3 class="text-lightWhite text-xl py-4 font-bold">
                            {{ country.name.common }}
                        </h3>
                    </RouterLink>
                    <p class="text-lightWhite">
                        <span class="text-lightWhite font-bold">Population</span
                        >:
                        {{ country.population }}
                    </p>
                    <p class="text-lightWhite">
                        <span class="text-lightWhite font-bold">Region</span>:
                        {{ country.continent }}
                    </p>
                    <p class="text-lightWhite">
                        <span class="text-lightWhite font-bold">Capital</span>:
                        {{ country.capital }}
                    </p>
                </div>
            </div>
        </div>
        <button @click="fetchData" class="text-lightWhite">Click this!!</button>
    </section>
</template>

<script setup>
    import { Icon } from "@iconify/vue";
    import { ref, computed } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute();

    const countries = ref([]);

    const APIURL = "https://restcountries.com/v3.1/all";

    const fetchData = async () => {
        const response = await fetch(APIURL);
        const data = await response.json();
        console.log(data);
        countries.value = data;
    };

    fetchData();

    const countryLink = computed(() => {
        return route.path + "/" + country.cca3;
    });
</script>

<style scoped>
    /* .country__name {
        color: white;
        font-size: 2rem;
        padding: 1em 0;
    } */
</style>
