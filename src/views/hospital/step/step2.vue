<template>
	<h2>阶段2：院内流程</h2>
	<div ref="stepBoxLianmeng" class="step_box">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否已临床提单</div>
				<div class="step_box_right">
					<label class="step_label"
						><input type="radio" value="是" v-model="az_2_linchuang_tidan" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="az_2_linchuang_tidan" />否</label>
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">临床提单日期</div>
				<div class="step_box_right">
					<div ref="tidanTime" id="tidanTime" class="select-tab-bg">
						{{ az_2_linchuang_tidan_time }}
					</div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">相关科室</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">设备科是否已批准</div>
				<div class="step_box_right">
					<label class="step_label"
						><input type="radio" value="是" v-model="az_2_linchuang_pizhun" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"
						><input type="radio" value="否" v-model="az_2_linchuang_pizhun" />否</label
					>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">院内上会</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right width80">
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
	</div>
	<template v-if="type === '1'">
		<h4 class="mt35">红方</h4>
		<div ref="stepBoxAZZhaobiao" class="step_box mt20">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">是否需要招标</div>
					<div class="step_box_right">
						<label class="step_label"
							><input type="radio" value="是" v-model="az_2_zhaobiao" />是&nbsp;&nbsp;</label
						>
						<label class="step_label"><input type="radio" value="否" v-model="az_2_zhaobiao" />否</label>
					</div>
				</div>
			</div>
		</div>
		<div ref="stepBoxCONX" v-show="stepData.az_2_zhaobiao === '是'" class="step_box mt35">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">招标材料是否准备就绪</div>
					<div class="step_box_right">
						<label class="step_label"
							><input type="radio" value="是" v-model="az_2_zhaobiao_zhunbei" />是&nbsp;&nbsp;</label
						>
						<label class="step_label"
							><input type="radio" value="否" v-model="az_2_zhaobiao_zhunbei" />否</label
						>
					</div>
				</div>
			</div>
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">招投标</div>
				</div>
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left step_box_left_label">时间</div>
					<div class="step_box_right width80">
						<div ref="zhaobiaoTime" id="zhaobiaoTime" class="select-tab-bg">
							{{ az_2_zhaobiao_shijian }}
						</div>
					</div>
				</div>
				<div class="step_box_content_flex">
					<div class="step_box_left step_box_left_label">结果</div>
					<div class="step_box_right">
						<input type="text" v-model="az_2_zhaobiao_jieguo" placeholder="请输入结果" />
					</div>
				</div>
			</div>
		</div>
	</template>
	<!-- CONX -->
	<template v-if="type === '3'">
		<h4 class="mt35">康乃心</h4>
		<div ref="stepBoxCONXZhaobiao" class="step_box">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">是否需要招标</div>
					<div class="step_box_right">
						<label class="step_label"
							><input type="radio" value="是" v-model="conx_2_zhaobiao" />是&nbsp;&nbsp;</label
						>
						<label class="step_label"><input type="radio" value="否" v-model="conx_2_zhaobiao" />否</label>
					</div>
				</div>
			</div>
		</div>
		<div ref="stepBoxCONX" v-show="stepData.conx_2_zhaobiao === '是'" class="step_box mt35">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">招标材料是否准备就绪</div>
					<div class="step_box_right">
						<label class="step_label"
							><input type="radio" value="是" v-model="conx_2_zhaobiao_zhunbei" />是&nbsp;&nbsp;</label
						>
						<label class="step_label"
							><input type="radio" value="否" v-model="conx_2_zhaobiao_zhunbei" />否</label
						>
					</div>
				</div>
			</div>
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">招投标</div>
				</div>
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left step_box_left_label">时间</div>
					<div class="step_box_right width80">
						<div ref="zhaobiaoTime" id="zhaobiaoTime" class="select-tab-bg">
							{{ conx_2_zhaobiao_shijian }}
						</div>
					</div>
				</div>
				<div class="step_box_content_flex">
					<div class="step_box_left step_box_left_label">结果</div>
					<div class="step_box_right">
						<input type="text" v-model="conx_2_zhaobiao_jieguo" placeholder="请输入结果" />
					</div>
				</div>
			</div>
		</div>
	</template>

	<div class="info_footer">
		<button class="info_back" @click="backFn()">上一步阶段1</button>
		<button class="info_submit" @click="submitFn">保存并转至下一页</button>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MONTHNUM, YEARNUM, DAYNUM, errorFn } from '../../../assets/ts/common'
import { getStepApi, postEditStepApi } from '@Request/api'
const shanghuiTime = ref<HTMLElement | null>(null)
const router = useRouter()
const route = useRoute()
const { type, hospital_id, step, city } = route.query
const stepBoxAZ = ref<HTMLElement | null>(null)
const stepBoxCONX = ref<HTMLElement | null>(null)
const stepBoxAZZhaobiao = ref<HTMLElement | null>(null)
const stepBoxCONXZhaobiao = ref<HTMLElement | null>(null)

const backFn = () => {
	const { type } = route.query
	router.push({
		path: `/info/step1_${type}`,
		query: {
			...route.query,
			step: 1
		}
	})
}

//声明类型
interface stepDataTS {
	az_2_linchuang_tidan: String
	az_2_linchuang_pizhun: String
	az_2_shanghui_time: String
	az_2_shanghui_jieguo: String
	az_2_zhaobiao: String
	az_2_zhaobiao_zhunbei: String
	az_2_zhaobiao_shijian: String
	az_2_zhaobiao_jieguo: String
	conx_2_zhaobiao_zhunbei: String
	conx_2_zhaobiao_shijian: String
	conx_2_zhaobiao_jieguo: String
	conx_2_zhaobiao: String
	az_2_linchuang_tidan_time: String
}
//声明类型值
type stepDataType = 'az_2_linchuang_tidan' | 'az_2_linchuang_pizhun' | 'az_2_zhaobiao' | 'conx_2_zhaobiao_zhunbei'
let stepData = reactive<stepDataTS>({
	az_2_linchuang_tidan: '',
	az_2_linchuang_pizhun: '',
	az_2_shanghui_time: '',
	az_2_shanghui_jieguo: '',
	az_2_zhaobiao: '',
	az_2_zhaobiao_zhunbei: '',
	az_2_zhaobiao_shijian: '',
	az_2_zhaobiao_jieguo: '',
	conx_2_zhaobiao_zhunbei: '',
	conx_2_zhaobiao_shijian: '',
	conx_2_zhaobiao_jieguo: '',
	conx_2_zhaobiao: '',
	az_2_linchuang_tidan_time: ''
})

//选择时间
const selectTimeFn = () => {
	let myDate = new Date()
	let year = myDate.getFullYear() - 2018
	let month = myDate.getMonth()
	let date = myDate.getDate() - 1
	//选择开始时间
	const zhaobiao = new MobileSelect({
		trigger: '#zhaobiaoTime',
		selectType: 'ymd',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }],
		position: [year, month, date],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]}`
			stepData.conx_2_zhaobiao_shijian = time
		}
	})

	const shanghui = new MobileSelect({
		trigger: '#shanghuiTime',
		selectType: 'ymd',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }],
		position: [year, month, date],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]}`
			stepData.az_2_shanghui_time = time
		}
	})

	const tidan = new MobileSelect({
		trigger: '#tidanTime',
		selectType: 'ymd',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }],
		position: [year, month, date],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]}`
			stepData.az_2_linchuang_tidan_time = time
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
		if (stepBoxAZZhaobiao.value) {
			stepBoxAZZhaobiao.value.className = 'step_box step_box_false step_box_false_bg'
		}
		if (stepBoxCONXZhaobiao.value) {
			stepBoxCONXZhaobiao.value.className = 'step_box step_box_false step_box_false_bg'
		}
	}
	if (type === '3') {
		if (stepBoxAZ.value) {
			stepBoxAZ.value.className = 'step_box step_box_false step_box_false_bg'
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
	if (stepData.az_2_shanghui_time === '请选择时间') {
		stepData.az_2_shanghui_time = ''
	}
	if (stepData.conx_2_zhaobiao_shijian === '请选择时间') {
		stepData.conx_2_zhaobiao_shijian = ''
	}

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
const {
	az_2_linchuang_tidan,
	az_2_linchuang_pizhun,
	az_2_shanghui_time,
	az_2_shanghui_jieguo,
	az_2_zhaobiao,
	az_2_zhaobiao_zhunbei,
	az_2_zhaobiao_shijian,
	az_2_zhaobiao_jieguo,
	conx_2_zhaobiao_zhunbei,
	conx_2_zhaobiao_shijian,
	conx_2_zhaobiao_jieguo,
	conx_2_zhaobiao,
	az_2_linchuang_tidan_time
} = {
	...toRefs(stepData)
}

onMounted(() => {
	//根据 type 来判断显示页面
	showBoxFn()
	selectTimeFn()
})

let isWatch = false
watch([() => az_2_zhaobiao.value, () => conx_2_zhaobiao.value], (azval, conxval) => {
	if (!isWatch) {
		isWatch = true
		return
	}
	if (!azval[0] || !azval[1]) return
	if (azval[0] != azval[1]) {
		errorFn('红方和康乃心的是否招标不一致。')
	}
})
</script>
