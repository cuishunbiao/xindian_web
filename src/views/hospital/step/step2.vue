<template>
	<h2>阶段2</h2>
	<div v-if="type === '1' || type === '2'" ref="stepBoxAZ" class="step_box">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否已临床提单</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: stepData.az_2_linchuang_tidan === '是' }"
						@click="isBooleanFn('az_2_linchuang_tidan', stepData.az_2_linchuang_tidan)"
					></div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">相关科室</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">设备科是否已批准</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: stepData.az_2_linchuang_pizhun === '是' }"
						@click="isBooleanFn('az_2_linchuang_pizhun', stepData.az_2_linchuang_pizhun)"
					></div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">院内上会</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right">
					<div ref="shanghuiTime" id="shanghuiTime" class="select-tab-bg">
						{{ stepData.az_2_shanghui_time }}
					</div>
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">结果</div>
				<div class="step_box_right">
					<input type="text" v-model="stepData.az_2_shanghui_jieguo" placeholder="请输入结果" />
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否需要招标</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: stepData.az_2_zhaobiao === '是' }"
						@click="isBooleanFn('az_2_zhaobiao', stepData.az_2_zhaobiao)"
					></div>
				</div>
			</div>
		</div>
	</div>
	<!-- CONX -->
	<div
		ref="stepBoxCONX"
		v-if="(type === '3' && stepData.az_2_zhaobiao === '是') || type === '2'"
		class="step_box mt35"
	>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">招标材料是否准备就绪</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: stepData.conx_2_zhaobiao_zhunbei === '是' }"
						@click="isBooleanFn('conx_2_zhaobiao_zhunbei', stepData.conx_2_zhaobiao_zhunbei)"
					></div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">招投标</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right">
					<div ref="zhaobiaoTime" id="zhaobiaoTime" class="select-tab-bg">
						{{ stepData.conx_2_zhaobiao_shijian }}
					</div>
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">结果</div>
				<div class="step_box_right">
					<input type="text" v-model="stepData.conx_2_zhaobiao_jieguo" placeholder="请输入结果" />
				</div>
			</div>
		</div>
	</div>
	<div class="info_footer">
		<button class="info_submit" @click="submitFn">下一步阶段3</button>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MONTHNUM, YEARNUM, DAYNUM, HOUR, MINUTER, errorFn } from '../../../assets/ts/common'
import { getStepApi, postEditStepApi } from '@Request/api'
const shanghuiTime = ref<HTMLElement | null>(null)
const router = useRouter()
const route = useRoute()
const { type, hospital_id, step } = route.query
const stepBoxAZ = ref<HTMLElement | null>(null)
const stepBoxCONX = ref<HTMLElement | null>(null)

//声明类型
interface stepDataTS {
	az_2_linchuang_tidan: String
	az_2_linchuang_pizhun: String
	az_2_shanghui_time: String
	az_2_shanghui_jieguo: String
	az_2_zhaobiao: String
	conx_2_zhaobiao_zhunbei: String
	conx_2_zhaobiao_shijian: String
	conx_2_zhaobiao_jieguo: String
}
//声明类型值
type stepDataType = 'az_2_linchuang_tidan' | 'az_2_linchuang_pizhun' | 'az_2_zhaobiao' | 'conx_2_zhaobiao_zhunbei'
let stepData = reactive<stepDataTS>({
	az_2_linchuang_tidan: '否',
	az_2_linchuang_pizhun: '否',
	az_2_shanghui_time: '请选择时间',
	az_2_shanghui_jieguo: '',
	az_2_zhaobiao: '否',
	conx_2_zhaobiao_zhunbei: '否',
	conx_2_zhaobiao_shijian: '请选择时间',
	conx_2_zhaobiao_jieguo: ''
})

const isBooleanFn = (type: stepDataType, bool: Boolean) => {
	stepData[type] === '是' ? (stepData[type] = '否') : (stepData[type] = '是')
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
	new MobileSelect({
		trigger: type === '1' ? '#shanghuiTime' : '#zhaobiaoTime',
		selectType: 'ymdhm',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }, { data: HOUR }, { data: MINUTER }],
		position: [year, month, date, hour, minuter],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]} ${data[3]}:${data[4]}`
			type === '1' ? (stepData.az_2_shanghui_time = time) : (stepData.conx_2_zhaobiao_shijian = time)
		}
	})
}

//根据类型判断模块显示多少
const showBoxFn = () => {
	//如果是联盟，AZ和CONX 只能看，不能写
	if (type === '2') {
		if (stepBoxAZ.value) {
			stepBoxAZ.value.className = 'step_box step_box_false step_box_false_bg'
		}
		if (stepBoxCONX.value) {
			stepBoxCONX.value.className = 'step_box step_box_false step_box_false_bg'
		}
	}
}

//获取信息
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
	if (type === '2') {
		router.push({
			path: `/info/step3`,
			query: {
				...route.query,
				step: Number(step) + 1
			}
		})
		return
	}
	//根据当前页面来判断是哪个阶段
	postEditStepApi({
		step,
		hospital_id,
		...stepData
	}).then((res: any) => {
		if (res.status === 1) {
			errorFn(res.msg)
			router.push({
				path: `/info/step3`,
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

onMounted(() => {
	//根据 type 来判断显示页面
	showBoxFn()
	selectTimeFn()
})
</script>
