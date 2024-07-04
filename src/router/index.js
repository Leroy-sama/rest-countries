import { createRouter, createWebHistory } from "vue-router";

import AllCountries from "@/views/AllCountries.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: AllCountries,
		},
		{
			path: "/country/:cca3",
			props: true,
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/Country.vue"),
		},
	],
});

export default router;
