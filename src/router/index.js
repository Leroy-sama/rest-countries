import { createRouter, createWebHistory } from "vue-router";

import AllCountries from "../components/AllCountries.vue";
import Country from "@/components/Country.vue";

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
        {
            path: "/allcountries/:id",
            component: Country,
            props: true,
        },
    ],
});

export default router;
