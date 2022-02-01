import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/login.vue')
	},
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/hospital/hospital.vue')
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
