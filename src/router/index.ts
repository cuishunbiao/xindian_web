import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/login/login.vue')
const Province = () => import('@/views/login/province.vue')
const Hospital = () => import('@/views/hospital/hospital.vue')
const Info = () => import('@/views/hospital/info.vue')
const Step1 = () => import('@/views/hospital/step/step1.vue')
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
				name: 'step1',
				component: Step1
			},
			{
				path: 'step1',
				component: Step1
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
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
