<template>
	<h2>阶段1：医院接洽</h2>
	<div class="step_box mt35">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否已对接院方详细介绍方案</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: conx_1_xiangxi_fangan === '是' }"
						@click="isBooleanFn('conx_1_xiangxi_fangan', conx_1_xiangxi_fangan)"
					></div>
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right width80">
					<div ref="xiangxifanganTime" id="xiangxifanganTime" class="select-tab-bg">
						{{ stepData.conx_1_xiangxi_fangan_time }}
					</div>
				</div>
			</div>
		</div>
		<div class="step_box_content paddingB30">
			<div class="step_box_content_flex">
				<div class="step_box_left">院方反馈（尽可能详述）</div>
			</div>
			<div class="step_box_content_flex border borderAll">
				<textarea cols="30" rows="5" v-model="conx_1_xiangxi_fankui" placeholder="请输入院方反馈"></textarea>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">是否已确认方案</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: conx_1_xiangxi_queren === '是' }"
						@click="isBooleanFn('conx_1_xiangxi_queren', conx_1_xiangxi_queren)"
					></div>
				</div>
			</div>
		</div>
	</div>
	<div class="info_footer">
		<button class="info_back" @click="backFn()">返回上一页</button>
		<button class="info_submit" @click="submitFn">下一步阶段2</button>
	</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postEditStepApi, getStepApi } from '@Request/api'
import { MONTHNUM, YEARNUM, DAYNUM, HOUR, MINUTER, errorFn } from '@Assets/ts/common'
const route = useRoute()
const { hospital_id, step, type, city } = route.query
const router = useRouter()

const backFn = () => {
	router.push({
		path: `/hospital`,
		query: {
			type,
			city
		}
	})
}

//声明类型
interface stepDataTS {
	conx_1_xiangxi_fangan: String
	conx_1_xiangxi_fankui: any
	conx_1_xiangxi_queren: String
	conx_1_xiangxi_fangan_time: String
}
//声明类型值
type stepDataType = 'conx_1_xiangxi_fangan' | 'conx_1_xiangxi_fankui' | 'conx_1_xiangxi_queren'
let stepData = reactive<stepDataTS>({
	conx_1_xiangxi_fangan: '否',
	conx_1_xiangxi_fankui: '',
	conx_1_xiangxi_queren: '',
	conx_1_xiangxi_fangan_time: ''
})
const isBooleanFn = (type: stepDataType, bool: Boolean) => {
	stepData[type] === '是' ? (stepData[type] = '否') : (stepData[type] = '是')
}
//判断当前医院在第几步
getStepApi({
	hospital_id
}).then((res: any) => {
	if (res.status === 1) {
		stepData = Object.assign(stepData, res.data.step_info[Number(step)])
	} else {
		errorFn(res.msg)
	}
})

//提交数据
const submitFn = () => {
	//根据当前页面来判断是哪个阶段
	postEditStepApi({
		step,
		hospital_id,
		...stepData
	}).then((res: any) => {
		if (res.status === 1) {
			errorFn(res.msg)
			router.push({
				path: `/info/step2`,
				query: {
					...route.query,
					step: Number(step) + 1
				}
			})
		} else {
			errorFn(res.msg)
		}
	})
}
// 解构
const { conx_1_xiangxi_fangan, conx_1_xiangxi_fankui, conx_1_xiangxi_queren, conx_1_xiangxi_fangan_time } = {
	...toRefs(stepData)
}

//选择时间
const selectTimeFn = () => {
	let myDate = new Date()
	let year = myDate.getFullYear() - 2018
	let month = myDate.getMonth()
	let date = myDate.getDate() - 1
	let hour = myDate.getHours()
	let minuter = myDate.getMinutes()
	//选择开始时间
	const zhaobiao = new MobileSelect({
		trigger: '#xiangxifanganTime',
		selectType: 'ymdhm',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }, { data: HOUR }, { data: MINUTER }],
		position: [year, month, date, hour, minuter],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]} ${data[3]}:${data[4]}`
			stepData.conx_1_xiangxi_fangan_time = time
		}
	})
}
onMounted(() => {
	selectTimeFn()
})
</script>
