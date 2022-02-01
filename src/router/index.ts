import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/login/login.vue')
const Province = () => import('@/views/login/province.vue')
const Hospital = () => import('@/views/hospital/hospital.vue')
const Info = () => import('@/views/hospital/info.vue')

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/province',
		name: 'province',
		component: Province
	},
	{
		path: '/',
		component: Login
	},
	{
		path: '/hospital',
		name: 'hospital',
		component: Hospital
	},
	{
		path: '/info',
		name: 'info',
		component: Info
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
