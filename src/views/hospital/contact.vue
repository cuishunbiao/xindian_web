<template>
	<div class="contact">
		<h2 style="margin-top: 0">三方联系人信息</h2>
		<div ref="lianmengBox" class="step_box step_box_false step_box_false_bg">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">联盟</div>
				</div>
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left step_box_left_label">负责人(姓名及联系方式)</div>
					<div class="step_box_right">
						<input type="text" v-model="lianmeng" placeholder="请输入姓名及联系方式" />
					</div>
				</div>
			</div>
			<div class="step_box_false_bg_after"></div>
		</div>
		<div ref="azBox" class="step_box step_box_false step_box_false_bg mt35">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">红方</div>
				</div>
				<!-- <div class="step_box_content_flex border borderBottom">
					<div class="step_box_left step_box_left_label">联系人</div>
					<div class="step_box_right step_box_right70">{{ az_lianxi }}</div>
				</div> -->
				<div class="step_box_content_flex">
					<div class="step_box_left step_box_left_label">志愿者(姓名及联系方式)</div>
					<div class="step_box_right">
						<input type="text" v-model="az_zhiyuan" placeholder="请输入姓名及联系方式" />
					</div>
				</div>
			</div>
			<div class="step_box_false_bg_after"></div>
		</div>
		<div ref="conxBox" class="step_box step_box_false step_box_false_bg mt35">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">康乃心</div>
				</div>
				<!-- <div class="step_box_content_flex border borderBottom">
					<div class="step_box_left step_box_left_label">联系人</div>
					<div class="step_box_right step_box_right70">{{ conx_lianxi }}</div>
				</div> -->
				<div class="step_box_content_flex">
					<div class="step_box_left step_box_left_label">志愿者(姓名及联系方式)</div>
					<div class="step_box_right">
						<input type="text" v-model="conx_zhiyuan" placeholder="请输入姓名及联系方式" />
					</div>
				</div>
			</div>
			<div class="step_box_false_bg_after"></div>
		</div>
		<div class="info_footer">
			<button class="info_back" @click="backFn()">返回上一页</button>
			<button class="info_submit" @click="submitFn()">保存并转至下一页</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postEditZhiyuanApi, getStepApi } from '@Request/api'
import { errorFn } from '@Assets/ts/common'
const route = useRoute()
const { hospital_id, step, type, city, province, id } = route.query
const router = useRouter()
const azBox = ref<HTMLElement | null>(null)
const conxBox = ref<HTMLElement | null>(null)
const lianmengBox = ref<HTMLElement | null>(null)

const backFn = () => {
	router.push({
		path: `/hospital`,
		query: {
			type,
			city,
			province
		}
	})
}

const nextFn = () => {
	router.push({
		path: `/hospital`,
		query: {
			type,
			city,
			province
		}
	})
}
//声明类型
interface stepDataTS {
	lianmeng: String
	az_lianxi: String
	az_zhiyuan: String
	conx_lianxi: String
	conx_zhiyuan: String
}
let stepData = reactive<stepDataTS>({
	lianmeng: '',
	az_lianxi: '',
	az_zhiyuan: '',
	conx_lianxi: '',
	conx_zhiyuan: ''
})

//判断当前医院在第几步
getStepApi({
	hospital_id: id
}).then((res: any) => {
	if (res.status === 1) {
		stepData = Object.assign(stepData, res.data.hospital_info)
	} else {
		errorFn(res.msg)
	}
})

//提交数据
const submitFn = () => {
	//根据当前页面来判断是哪个阶段
	postEditZhiyuanApi({
		hospital_id: id,
		...stepData
	}).then((res: any) => {
		if (res.status === 1) {
			errorFn(res.msg)
			toStepPageFn()
		} else {
			errorFn(res.msg)
		}
	})
}

const toStepPageFn = () => {
	/**
	 * step  是联盟当前阶段
	 * az_step  是红方当前阶段
	 * conx_step 是 conx 当前步骤
	 *
	 * type = 1 红方
	 * type = 2 联盟
	 * type = 3 CONX
	 */
	const { az_step, step, conx_step } = route.query
	//根据 type 判断走哪个页面
	let stepNumber = 1
	if (type === '1') {
		stepNumber += Number(az_step === '3' ? 2 : az_step)
	} else if (type === '2') {
		stepNumber += Number(step === '4' ? 3 : step)
	} else if (type === '3') {
		stepNumber += Number(conx_step === '4' ? 3 : conx_step)
	}
	let routeType = ''
	if (stepNumber === 1) {
		routeType = `_${route.query.type}`
	}
	router.push({
		path: `/info/step${stepNumber}${routeType}`,
		query: {
			type,
			hospital_id: id,
			step: stepNumber,
			city,
			province
		}
	})
}

// 解构
const { lianmeng, az_lianxi, az_zhiyuan, conx_lianxi, conx_zhiyuan } = {
	...toRefs(stepData)
}

//根据类型判断模块显示多少
const showBoxFn = () => {
	//如果是联盟
	if (type === '2') {
		if (lianmengBox.value) {
			lianmengBox.value.className = 'step_box'
		}
	}
	//如果是红方
	if (type === '1') {
		if (azBox.value) {
			azBox.value.className = 'step_box mt35'
		}
	}
	//如果是康乃心
	if (type === '3') {
		if (conxBox.value) {
			conxBox.value.className = 'step_box mt35'
		}
	}
}
onMounted(() => {
	showBoxFn()
})
</script>
<style lang="scss">
@import './../../assets/scss/step.scss';
.contact {
	background-color: #f7f7f7;
	min-height: 100%;
	padding-bottom: 2.4rem;
	padding: 0.5rem;
}
</style>
