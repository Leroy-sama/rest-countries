import AllCountriesVue from "@/components/AllCountries.vue";
import { createRouter, createWebHistory } from "vue-router";

import AllCountries from "../components/AllCountries.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/allcountries",
        },
        {
            path: "/allcountries",
            component: AllCountries,
        },
    ],
});

export default router;
