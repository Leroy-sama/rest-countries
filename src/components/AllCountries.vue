<template>
    <section class="bg-darkModeBackground">
        <div class="flex justify-between p-8">
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
                class="bg-darkModeElements text-lightWhite px-6 focus:outline-none cursor-pointer"
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
            id="country"
            v-for="country in countries"
            :key="country"
            class="bg-darkModeElements p-8"
        >
            <img :src="country.flags.svg" alt="" />
            <h2 class="text-lightWhite text-3xl py-4 font-bold">
                {{ country.name.common }}
            </h2>
            <p class="text-lightWhite">
                <span class="text-lightWhite font-bold">Population</span>:
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
        <button @click="fetchData">Click this!!</button>
    </section>
</template>

<script setup>
    import { Icon } from "@iconify/vue";
    import { ref } from "vue";

    const countries = ref([]);

    const APIURL = "https://restcountries.com/v3.1/all";

    const fetchData = async () => {
        const response = await fetch(APIURL);
        const data = await response.json();
        console.log(data);
        countries.value = data;
    };
</script>

<style scoped>
    /* .country__name {
        color: white;
        font-size: 2rem;
        padding: 1em 0;
    } */
</style>
