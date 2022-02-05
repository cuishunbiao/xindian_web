import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/login/login.vue')
const Logout = () => import('@/views/logout/logout.vue')
const Province = () => import('@/views/login/province.vue')
const Hospital = () => import('@/views/hospital/hospital.vue')
const Info = () => import('@/views/hospital/info.vue')
const Step1_1 = () => import('@/views/hospital/step/step1_1.vue')
const Step1_2 = () => import('@/views/hospital/step/step1_2.vue')
const Step1_3 = () => import('@/views/hospital/step/step1_3.vue')
const Step2 = () => import('@/views/hospital/step/step2.vue')
const Step3 = () => import('@/views/hospital/step/step3.vue')
const Step4 = () => import('@/views/hospital/step/step4.vue')

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
		component: Info,
		children: [
			{
				path: '',
				name: 'step1_1',
				component: Step1_1
			},
			{
				path: 'step1_1',
				component: Step1_1
			},
			{
				path: 'step1_2',
				component: Step1_2
			},
			{
				path: 'step1_3',
				component: Step1_3
			},
			{
				path: 'step2',
				component: Step2
			},
			{
				path: 'step3',
				component: Step3
			},
			{
				path: 'step4',
				component: Step4
			}
		]
	},
	{
		path: '/logout',
		name: 'logout',
		component: Logout
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
