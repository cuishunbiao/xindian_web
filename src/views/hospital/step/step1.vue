<template>
	<h2>阶段1</h2>
	<div v-if="type === '2'" class="step_box">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否已通知医院</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: lianmeng_1_tz_status === '是' }"
						@click="isBooleanFn('lianmeng_1_tz_status', lianmeng_1_tz_status)"
					></div>
				</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">形式</div>
				<div class="step_box_right">
					<input type="text" v-model="stepData.lianmeng_1_tz_type" placeholder="请输入通知形式" />
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right width80">
					<div ref="tongzhiTime" id="tongzhiTime" class="select-tab-bg">
						{{ stepData.lianmeng_1_tz_time }}
					</div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">院方联系人</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">姓名</div>
				<div class="step_box_right">
					<input type="text" v-model="stepData.lianmeng_1_yuanfang_name" placeholder="请输入姓名" />
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">职位</div>
				<div class="step_box_right">
					<input type="text" v-model="stepData.lianmeng_1_yuanfang_zhiwei" placeholder="请输入职位" />
				</div>
			</div>
		</div>
		<div class="step_box_content paddingB30">
			<div class="step_box_content_flex">
				<div class="step_box_left">院方反馈</div>
			</div>
			<div class="step_box_content_flex border borderAll">
				<textarea
					cols="30"
					rows="5"
					v-model="lianmeng_1_yuanfang_fankui"
					placeholder="请输入院方反馈"
				></textarea>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">是否已在联盟官网提交报名</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: lianmeng_1_baoming === '是' }"
						@click="isBooleanFn('lianmeng_1_baoming', lianmeng_1_baoming)"
					></div>
				</div>
			</div>
		</div>
	</div>
	<!-- AZ -->
	<div v-if="type === '1' || type === '2'" ref="stepBoxAZ" class="step_box mt35">
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">是否已给院方初步介绍方案</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: az_1_fangan === '是' }"
						@click="isBooleanFn('az_1_fangan', az_1_fangan)"
					></div>
				</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">院方联系人</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">姓名</div>
				<div class="step_box_right">
					<input type="text" v-model="stepData.az_1_yuanfang_name" placeholder="请输入姓名" />
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">职位</div>
				<div class="step_box_right">
					<input type="text" v-model="stepData.az_1_yuanfang_zhiwei" placeholder="请输入职位" />
				</div>
			</div>
		</div>
		<div class="step_box_content paddingB30">
			<div class="step_box_content_flex">
				<div class="step_box_left">院方反馈</div>
			</div>
			<div class="step_box_content_flex border borderAll">
				<textarea cols="30" rows="5" v-model="az_1_yuanfang_fankui" placeholder="请输入院方反馈"></textarea>
			</div>
		</div>
	</div>
	<!-- AZ 和 CONX -->
	<div ref="stepBoxCONX" class="step_box mt35">
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">是否已对接院方详细介绍方案</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: az_conx_1_xiangxi_fangan === '是' }"
						@click="isBooleanFn('az_conx_1_xiangxi_fangan', az_conx_1_xiangxi_fangan)"
					></div>
				</div>
			</div>
		</div>
		<div class="step_box_content paddingB30">
			<div class="step_box_content_flex">
				<div class="step_box_left">院方反馈（尽可能详述）</div>
			</div>
			<div class="step_box_content_flex border borderAll">
				<textarea cols="30" rows="5" v-model="az_conx_1_xiangxi_fankui" placeholder="请输入院方反馈"></textarea>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">是否已确认方案</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: az_conx_1_xiangxi_queren === '是' }"
						@click="isBooleanFn('az_conx_1_xiangxi_queren', az_conx_1_xiangxi_queren)"
					></div>
				</div>
			</div>
		</div>
	</div>
	<div class="info_footer">
		<button class="info_submit" @click="submitFn">下一步阶段2</button>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postEditStepApi, getIsLoginApi, getStepApi } from '@Request/api'
import { MONTHNUM, YEARNUM, DAYNUM, HOUR, MINUTER, errorFn } from '@Assets/ts/common'
const tongzhiTime = ref<HTMLElement | null>(null)
const route = useRoute()
const { hospital_id, step, type } = route.query
const router = useRouter()
const stepBoxAZ = ref<HTMLElement | null>(null)
const stepBoxCONX = ref<HTMLElement | null>(null)

//声明类型
interface stepDataTS {
	lianmeng_1_tz_status: String
	lianmeng_1_tz_type: String
	lianmeng_1_tz_time: String
	lianmeng_1_yuanfang_name: String
	lianmeng_1_yuanfang_zhiwei: String
	lianmeng_1_yuanfang_fankui: any
	lianmeng_1_baoming: String
	az_1_fangan: String
	az_1_yuanfang_name: String
	az_1_yuanfang_zhiwei: String
	az_1_yuanfang_fankui: any
	az_1_xiangxi_fangan: String
	az_1_xiangxi_fankui: String
	az_1_xiangxi_queren: String
	conx_1_xiangxi_fangan: String
	conx_1_xiangxi_fankui: String
	conx_1_xiangxi_queren: String
	az_conx_1_xiangxi_fangan: String
	az_conx_1_xiangxi_fankui: any
	az_conx_1_xiangxi_queren: String
}
//声明类型值
type stepDataType =
	| 'lianmeng_1_tz_status'
	| 'lianmeng_1_baoming'
	| 'az_1_fangan'
	| 'az_1_xiangxi_fangan'
	| 'az_1_xiangxi_queren'
	| 'conx_1_xiangxi_fangan'
	| 'az_conx_1_xiangxi_queren'
	| 'az_conx_1_xiangxi_fangan'
let stepData = reactive<stepDataTS>({
	lianmeng_1_tz_status: '否',
	lianmeng_1_tz_type: '',
	lianmeng_1_tz_time: '点击选择日期',
	lianmeng_1_yuanfang_name: '',
	lianmeng_1_yuanfang_zhiwei: '',
	lianmeng_1_yuanfang_fankui: '',
	lianmeng_1_baoming: '否',
	az_1_fangan: '否',
	az_1_yuanfang_name: '',
	az_1_yuanfang_zhiwei: '',
	az_1_yuanfang_fankui: '',
	az_1_xiangxi_fangan: '否',
	az_1_xiangxi_fankui: '',
	az_1_xiangxi_queren: '否',
	conx_1_xiangxi_fangan: '否',
	conx_1_xiangxi_fankui: '',
	conx_1_xiangxi_queren: '',
	az_conx_1_xiangxi_fangan: '否',
	az_conx_1_xiangxi_fankui: '',
	az_conx_1_xiangxi_queren: '否'
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
	//选择开始时间
	new MobileSelect({
		trigger: '#tongzhiTime',
		selectType: 'ymd',
		selectCla: 'start',
		wheels: [{ data: YEARNUM }, { data: MONTHNUM }, { data: DAYNUM }],
		position: [year, month, date],
		callback: function (indexArr: Number, data: any) {
			const time = `${data[0]}-${data[1]}-${data[2]}`
			stepData.lianmeng_1_tz_time = time
		}
	})
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

//获取登录状态
// getIsLoginApi().then((res: any) => {
// 	debugger
// 	console.log(res)
// })

//根据类型判断模块显示多少
const showBoxFn = () => {
	//如果是联盟，AZ和CONX 只能看，不能写
	if (type === '2') {
		if (stepBoxAZ.value) {
			stepBoxAZ.value.className = 'step_box mt35 step_box_false'
		}
		if (stepBoxCONX.value) {
			stepBoxCONX.value.className = 'step_box mt35 step_box_false'
		}
	}
}

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
					type,
					hospital_id,
					step: Number(step) + 1
				}
			})
			//provinceData.value = res.data.search
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
// 解构
const {
	lianmeng_1_tz_status,
	lianmeng_1_baoming,
	lianmeng_1_yuanfang_fankui,
	az_1_yuanfang_fankui,
	az_conx_1_xiangxi_fankui,
	az_conx_1_xiangxi_queren,
	az_conx_1_xiangxi_fangan,
	az_1_fangan
} = {
	...toRefs(stepData)
}
</script>
