<template>
	<div class="hospital">
		<div class="hospital_content">
			<div class="hospital_search">
				<input v-model="hospital_name" type="text" placeholder="请输入医院名称" />
			</div>
			<div class="hospital_list">
				<li v-for="(item, index) in hospitalLists" :key="index" @click="toStepPageFn(item)">
					{{ item.name }}
				</li>
			</div>
		</div>
		<div class="info_footer">
			<button class="info_submit width80" style="width: 8rem; margin-left: 0" @click="backAreaFn()">
				返回上一页
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getHospitalApi } from '@Request/api'
import { errorFn } from '@Assets/ts/common'
import router from '@/router'
const route = useRoute()
const { city, province, type } = route.query
const hospitalLists = ref<any[]>([])
const hospital_name = ref('')

const backAreaFn = () => {
	router.push({
		path: '/province',
		query: {
			type
		}
	})
}

//获取医院
const getHospitalFn = () => {
	getHospitalApi({
		city,
		province,
		hospital_name: hospital_name.value
	}).then((res: any) => {
		if (res.status === 1) {
			hospitalLists.value = res.data.lists
		} else {
			errorFn(res.msg)
		}
	})
}
getHospitalFn()

const toStepPageFn = (item: any) => {
	router.push({
		path: '/contact',
		query: {
			...item,
			type,
			city,
			province
		}
	})
}

// const toStepPageFn = (item: any) => {
// 	/**
// 	 * step  是联盟当前阶段
// 	 * az_step  是红方当前阶段
// 	 * conx_step 是 conx 当前步骤
// 	 *
// 	 * type = 1 红方
// 	 * type = 2 联盟
// 	 * type = 3 CONX
// 	 */
// 	//根据 type 判断走哪个页面
// 	let stepNumber = 1
// 	if (type === '1') {
// 		stepNumber += Number(item.az_step === '3' ? 2 : item.az_step)
// 	} else if (type === '2') {
// 		stepNumber += Number(item.step === '4' ? 3 : item.step)
// 	} else if (type === '3') {
// 		stepNumber += Number(item.conx_step === '4' ? 3 : item.conx_step)
// 	}
// 	let routeType = ''
// 	if (stepNumber === 1) {
// 		routeType = `_${route.query.type}`
// 	}
// 	router.push({
// 		path: `/info/step${stepNumber}${routeType}`,
// 		query: {
// 			type,
// 			hospital_id: item.id,
// 			step: stepNumber,
// 			city
// 		}
// 	})
// }

watch(
	() => hospital_name.value,
	(val) => {
		getHospitalFn()
	}
)
</script>

<style lang="scss" scoped>
.hospital {
	background-color: #f7f7f7;
	width: 100%;
	min-height: 100%;
	padding-top: 0.35rem;
	padding-bottom: 2.4rem;
	.hospital_content {
		width: 92%;
		margin: 0 auto;
	}
	.hospital_search {
		height: 0.88rem;
		border: 1px solid #e8e8e8;
		border-radius: 0.44rem;
		overflow: hidden;
		background: url('/src/assets/images/icon_search.png') no-repeat 0.45rem center #fff;
		background-size: 0.33rem 0.33rem;
		padding-left: 1rem;
		input {
			padding: 0.22rem 0;
			width: 100%;
			color: #666;
		}
	}
	.hospital_list {
		margin-top: 0.32rem;
		li {
			display: block;
			padding: 0.27rem 0.8rem 0.27rem 0.44rem;
			background: #ffffff;
			box-shadow: 0px 2px 0.57rem 0px rgba(183, 183, 183, 0.1);
			border-radius: 0.27rem;
			margin-bottom: 0.2rem;
			font-size: 0.37rem;
			font-weight: bold;
			position: relative;
			overflow: hidden;
			&::before {
				position: absolute;
				left: 0;
				top: 0;
				width: 0.13rem;
				height: 100%;
				content: '';
				background-color: #b62940;
			}
			&::after {
				content: '';
				position: absolute;
				right: 0.4rem;
				top: 50%;
				width: 0.31rem;
				height: 0.49rem;
				margin-top: -0.24rem;
				background: url('/src/assets/images/icon_arrow_right.png') no-repeat left center;
				background-size: 0.31rem 0.49rem;
			}
		}
	}
}
</style>
