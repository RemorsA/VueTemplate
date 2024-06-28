import { createRouter, createWebHistory } from "vue-router"
import App from "@/App.vue"
import Home from "@/pages/Home.vue"

const routes = [
	{
		path: "/",
		name: "index",
		redirect: "/home",
		component: App,
		children: [
			{
				path: "/home",
				name: "home",
				component: Home,
			},
		],
	},
]

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})
