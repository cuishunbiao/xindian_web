<template>
	<h2>红方 - 阶段3：合同签署</h2>
	<div ref="stepBoxAZ" class="step_box step_box_false step_box_false_bg">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否完成签署</div>
				<div class="step_box_right" :class="{ step_box_red: !az_3_qianshu.length }">
					<label class="step_label"
						><input type="radio" value="是" v-model="az_3_qianshu" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="az_3_qianshu" />否</label>
				</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right width80">
					<div
						ref="qianshu1Time"
						id="qianshu1Time"
						class="select-tab-bg"
						:class="{ step_box_red: stepData.az_3_qianshu_shijian === '点击选择日期' }"
					>
						{{ stepData.az_3_qianshu_shijian }}
					</div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否开票付款</div>
				<div class="step_box_right" :class="{ step_box_red: !az_3_kaipiao.length }">
					<label class="step_label"
						><input type="radio" value="是" v-model="az_3_kaipiao" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="az_3_kaipiao" />否</label>
				</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">金额</div>
				<div class="step_box_right" :class="{ step_box_red: !stepData.az_3_kaipiao_jine.length }">
					<input type="number" v-model="stepData.az_3_kaipiao_jine" placeholder="请输入金额" />
				</div>
			</div>
		</div>
		<div class="step_box_false_bg_after"></div>
	</div>
	<h2>康乃心 - 阶段3：合同签署</h2>
	<div ref="stepBoxCONX" class="step_box step_box_false step_box_false_bg">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否完成签署</div>
				<div class="step_box_right" :class="{ step_box_red: !conx_3_qianshu.length }">
					<label class="step_label"
						><input type="radio" value="是" v-model="conx_3_qianshu" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="conx_3_qianshu" />否</label>
				</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right width80">
					<div
						ref="qianshu2Time"
						id="qianshu2Time"
						class="select-tab-bg"
						:class="{ step_box_red: stepData.conx_3_qianshu_shijian === '点击选择日期' }"
					>
						{{ stepData.conx_3_qianshu_shijian }}
					</div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否开票付款</div>
				<div class="step_box_right" :class="{ step_box_red: !conx_3_kaipiao.length }">
					<label class="step_label"
						><input type="radio" value="是" v-model="conx_3_kaipiao" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="conx_3_kaipiao" />否</label>
				</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">金额</div>
				<div class="step_box_right" :class="{ step_box_red: !stepData.conx_3_kaipiao_jine.length }">
					<input type="number" v-model="stepData.conx_3_kaipiao_jine" placeholder="请输入金额" />
				</div>
			</div>
		</div>
		<div class="step_box_false_bg_after"></div>
	</div>
	<div class="info_footer">
		<button class="info_back" @click="backFn()">上一步阶段2</button>
		<button class="info_submit" @click="submitFn()">
			{{ type === '1' ? '完成' : '保存并转至下一页' }}
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MONTHNUM, YEARNUM, DAYNUM, errorFn } from '../../../assets/ts/common'
import { getStepApi, postEditStepApi } from '@Request/api'
const qianshu1Time = ref<HTMLElement | null>(null)
const qianshu2Time = ref<HTMLElement | null>(null)
const router = useRouter()
const route = useRoute()
const { type, hospital_id, step, city } = route.query
const stepBoxAZ = ref<HTMLElement | null>(null)
const stepBoxCONX = ref<HTMLElement | null>(null)

const backFn = () => {
	router.push({
		path: `/info/step2`,
		query: {
			...route.query,
			step: 2
		}
	})
}

// az_3_qianshu
// az_3_qianshu_shijian
// az_3_kaipiao
// az_3_kaipiao_jine
// conx_3_qianshu
// conx_3_qianshu_shijian
// conx_3_kaipiao
// conx_3_kaipiao_jine
//声明类型
interface stepDataTS {
	az_3_qianshu: String
	az_3_qianshu_shijian: String
	az_3_kaipiao: String
	az_3_kaipiao_jine: String
	conx_3_qianshu: String
	conx_3_qianshu_shijian: String
	conx_3_kaipiao: String
	conx_3_kaipiao_jine: String
}
//声明类型值
type stepDataType = 'az_3_qianshu' | 'az_3_kaipiao' | 'conx_3_qianshu' | 'conx_3_kaipiao'
let stepData = reactive<stepDataTS>({
	az_3_qianshu: '',
	az_3_qianshu_shijian: '',
	az_3_kaipiao: '',
	az_3_kaipiao_jine: '',
	conx_3_qianshu: '',
	conx_3_qianshu_shijian: '',
	conx_3_kaipiao: '',
	conx_3_kaipiao_jine: ''
})

//选择时间
const selectTimeFn = () => {
	let myDate = new Date()
	let year = myDate.getFullYear() - 2018
	let month = myDate.getMonth()
	let date = myDate.getDate() - 1
	//选择开始时间
	const qianshu1TimeMobile = new MobileSelect({
		trigger: '#qianshu1Time',
		selectType: 'ymd',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }],
		position: [year, month, date],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]}`
			stepData.az_3_qianshu_shijian = time
		}
	})
	const qianshu2TimeMobile = new MobileSelect({
		trigger: '#qianshu2Time',
		selectType: 'ymd',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }],
		position: [year, month, date],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]}`
			stepData.conx_3_qianshu_shijian = time
		}
	})
}

//获取信息
getStepApi({
	hospital_id
}).then((res: any) => {
	if (res.status === 1) {
		stepData = Object.assign(stepData, res.data.step_info[Number(step)])
		if (stepData.az_3_qianshu_shijian === '') {
			stepData.az_3_qianshu_shijian = '点击选择日期'
		}
		if (stepData.conx_3_qianshu_shijian === '') {
			stepData.conx_3_qianshu_shijian = '点击选择日期'
		}
	} else {
		errorFn(res.msg)
	}
})

//根据类型判断模块显示多少
const showBoxFn = () => {
	if (type === '1') {
		if (stepBoxAZ.value) {
			stepBoxAZ.value.className = 'step_box'
		}
	}
	if (type === '3') {
		if (stepBoxCONX.value) {
			stepBoxCONX.value.className = 'step_box'
		}
	}
}

//提交数据
const submitFn = () => {
	if (type === '2') {
		router.push({
			path: `/info/step4`,
			query: {
				...route.query,
				step: Number(step) + 1
			}
		})
		return
	}
	//根据当前页面来判断是哪个阶段
	if (stepData.az_3_qianshu_shijian === '点击选择日期') {
		stepData.az_3_qianshu_shijian = ''
	}
	if (stepData.conx_3_qianshu_shijian === '点击选择日期') {
		stepData.conx_3_qianshu_shijian = ''
	}

	postEditStepApi({
		step,
		hospital_id,
		...stepData
	}).then((res: any) => {
		if (res.status === 1) {
			errorFn(res.msg)
			if (type === '1') {
				router.push({
					path: `/hospital`,
					query: {
						type,
						city
					}
				})
				return
			}
			router.push({
				path: `/info/step4`,
				query: {
					...route.query,
					step: Number(step) + 1
				}
			})
		} else {
			if (stepData.az_3_qianshu_shijian === '') {
				stepData.az_3_qianshu_shijian = '点击选择日期'
			}
			if (stepData.conx_3_qianshu_shijian === '') {
				stepData.conx_3_qianshu_shijian = '点击选择日期'
			}
			errorFn(res.msg)
		}
	})
}
const { az_3_qianshu, az_3_kaipiao, conx_3_qianshu, conx_3_kaipiao } = {
	...toRefs(stepData)
}
onMounted(() => {
	showBoxFn()
	if (type === '2') return
	selectTimeFn()
})
</script>
