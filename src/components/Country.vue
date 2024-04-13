<template>
    <section class="">
        <div class="country__wrapper">
            <RouterLink to="/">Back</RouterLink>
            <div class="image">
                <img src="" alt="" />
            </div>
            <div class="text">
                <h1 class="text__head"></h1>
                <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold">Native name</span>:
                    {{ country.continent }}
                </p>
                <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold">Population</span>:
                    {{ country.continent }}
                </p>
                <!-- <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold">Region</span>:
                    {{ country.continent }}
                </p>
                <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold">SubRegion</span>:
                    {{ country.continent }}
                </p>
                <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold">Capital</span>:
                    {{ country.continent }}
                </p>
                <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold"
                        >Top Level Domain</span
                    >:
                    {{ country.continent }}
                </p>
                <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold">Currencies</span>:
                    {{ country.continent }}
                </p>
                <p class="text-lightWhite">
                    <span class="text-lightWhite font-bold">Languages</span>:
                    {{ country.continent }}
                </p>
                <div class="border">
                    <p class="text-lightWhite">
                        <span class="text-lightWhite font-bold"
                            >Border Countries</span
                        >:
                        {{ country.continent }}
                    </p>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        id: {
            type: String,
            required: false,
        },
    });

    const country = ref({});

    const APILINK = `https://restcountries.com/v3.1/alpha/${props.id}`;

    const fetchCountryDeets = async () => {
        try {
            const response = await fetch(APILINK);
            const date = await response.json();
            country.value = data;
        } catch (error) {
            console.error("Error fetching country details:", error);
        }
    };

    fetchCountryDeets();
</script>

<style scoped></style>
