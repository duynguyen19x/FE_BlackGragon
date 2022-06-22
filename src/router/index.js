import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/users',
			name: 'users',
			component: () => import('../views/User/List.vue')
		},
		{
			path: '/user',
			name: 'user',
			component: () => import('../views/User/Form.vue')
		},
	],
})

export default router