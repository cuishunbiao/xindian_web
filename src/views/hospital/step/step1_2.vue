<template>
	<h2>阶段1：医院接洽</h2>
	<div class="step_box">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">联盟是否已通知医院</div>
				<div class="step_box_right" :class="{ step_box_red: !lianmeng_1_tz_status.length }">
					<label class="step_label"
						><input type="radio" value="是" v-model="lianmeng_1_tz_status" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="lianmeng_1_tz_status" />否</label>
				</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">形式</div>
				<div class="step_box_right" :class="{ step_box_red: !stepData.lianmeng_1_tz_type.length }">
					<input type="text" v-model="stepData.lianmeng_1_tz_type" placeholder="请输入通知形式" />
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">时间</div>
				<div class="step_box_right width80">
					<div
						ref="tongzhiTime"
						id="tongzhiTime"
						class="select-tab-bg"
						:class="{ step_box_red: stepData.lianmeng_1_tz_time === '点击选择日期' }"
					>
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
				<div class="step_box_right" :class="{ step_box_red: !stepData.lianmeng_1_yuanfang_name.length }">
					<input type="text" v-model="stepData.lianmeng_1_yuanfang_name" placeholder="请输入姓名" />
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">职位</div>
				<div class="step_box_right" :class="{ step_box_red: !stepData.lianmeng_1_yuanfang_zhiwei.length }">
					<input type="text" v-model="stepData.lianmeng_1_yuanfang_zhiwei" placeholder="请输入职位" />
				</div>
			</div>
		</div>
		<div class="step_box_content paddingB30">
			<div class="step_box_content_flex">
				<div class="step_box_left">院方反馈联盟信息</div>
			</div>
			<div
				class="step_box_content_flex border borderAll"
				:class="{ step_box_red: !lianmeng_1_yuanfang_fankui.length }"
			>
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
				<div class="step_box_left">医院是否已在联盟官网报名</div>
				<div class="step_box_right" :class="{ step_box_red: !lianmeng_1_baoming.length }">
					<label class="step_label"
						><input type="radio" value="是" v-model="lianmeng_1_baoming" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="lianmeng_1_baoming" />否</label>
				</div>
			</div>
		</div>
	</div>
	<!-- AZ -->
	<h2 class="mt35">红方</h2>
	<div class="step_box step_box_false step_box_false_bg mt35">
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">红方是否已给院方初步介绍方案</div>
				<div class="step_box_right">{{ az_1_fangan }}</div>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">院方联系人</div>
			</div>
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left step_box_left_label">姓名</div>
				<div class="step_box_right">{{ stepData.az_1_yuanfang_name }}</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">职位</div>
				<div class="step_box_right">{{ stepData.az_1_yuanfang_zhiwei }}</div>
			</div>
		</div>
		<div class="step_box_content paddingB30">
			<div class="step_box_content_flex">
				<div class="step_box_left">院方反馈</div>
			</div>
			<div class="step_box_content_flex">
				{{ az_1_yuanfang_fankui }}
			</div>
		</div>
	</div>
	<div ref="stepBoxAZCONX" class="step_box step_box_false step_box_false_bg mt35">
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">康乃心是否已对接院方详细介绍方案</div>
				<div class="step_box_right">
					<label class="step_label"
						><input type="radio" value="是" v-model="az_1_xiangxi_fangan" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="az_1_xiangxi_fangan" />否</label>
				</div>
			</div>
			<div class="step_box_content_flex">
				<div class="step_box_left step_box_left_label">康乃心详细介绍方案日期</div>
				<div class="step_box_right">
					<div ref="xiangxifanganTime" id="xiangxifanganTime" class="select-tab-bg">
						{{ stepData.az_1_xiangxi_fangan_time }}
					</div>
				</div>
			</div>
		</div>
		<div class="step_box_content paddingB30">
			<div class="step_box_content_flex">
				<div class="step_box_left">院方反馈（尽可能详述）</div>
			</div>
			<div class="step_box_content_flex border borderAll">
				<textarea cols="30" rows="5" v-model="az_1_xiangxi_fankui" placeholder="请输入院方反馈"></textarea>
			</div>
		</div>
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">是否已确认方案</div>
				<div class="step_box_right">
					<label class="step_label"
						><input type="radio" value="是" v-model="az_1_xiangxi_queren" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"><input type="radio" value="否" v-model="az_1_xiangxi_queren" />否</label>
				</div>
			</div>
		</div>
		<div class="step_box_false_bg_after"></div>
	</div>
	<!-- AZ 和 CONX -->
	<h2 class="mt35">康乃心</h2>
	<div class="step_box step_box_false step_box_false_bg mt35">
		<div class="step_box_content">
			<div class="step_box_content_flex border borderBottom">
				<div class="step_box_left">康乃心是否已对接院方详细介绍方案</div>
				<div class="step_box_right">
					<label class="step_label"
						><input type="radio" value="是" v-model="conx_1_xiangxi_fangan" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"
						><input type="radio" value="否" v-model="conx_1_xiangxi_fangan" />否</label
					>
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
				<div class="step_box_right">
					<label class="step_label"
						><input type="radio" value="是" v-model="conx_1_xiangxi_queren" />是&nbsp;&nbsp;</label
					>
					<label class="step_label"
						><input type="radio" value="否" v-model="conx_1_xiangxi_queren" />否</label
					>
				</div>
			</div>
		</div>
	</div>
	<div class="info_footer">
		<button class="info_back" @click="backFn()">返回上一页</button>
		<button class="info_submit" @click="submitFn">保存并转至下一页</button>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postEditStepApi, getStepApi } from '@Request/api'
import { MONTHNUM, YEARNUM, DAYNUM, errorFn } from '@Assets/ts/common'

const tongzhiTime = ref<HTMLElement | null>(null)
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
	az_1_xiangxi_fangan_time: String
	conx_1_xiangxi_fangan: String
	conx_1_xiangxi_fankui: String
	conx_1_xiangxi_queren: String
	conx_1_xiangxi_fangan_time: String
}
//声明类型值
type stepDataType =
	| 'lianmeng_1_tz_status'
	| 'lianmeng_1_baoming'
	| 'az_1_fangan'
	| 'az_1_xiangxi_fangan'
	| 'az_1_xiangxi_queren'
	| 'conx_1_xiangxi_fangan'
let stepData = reactive<stepDataTS>({
	lianmeng_1_tz_status: '',
	lianmeng_1_tz_type: '',
	lianmeng_1_tz_time: '',
	lianmeng_1_yuanfang_name: '',
	lianmeng_1_yuanfang_zhiwei: '',
	lianmeng_1_yuanfang_fankui: '',
	lianmeng_1_baoming: '',
	az_1_fangan: '',
	az_1_yuanfang_name: '',
	az_1_yuanfang_zhiwei: '',
	az_1_yuanfang_fankui: '',
	az_1_xiangxi_fangan: '',
	az_1_xiangxi_fankui: '',
	az_1_xiangxi_queren: '',
	az_1_xiangxi_fangan_time: '',
	conx_1_xiangxi_fangan_time: '',
	conx_1_xiangxi_fangan: '',
	conx_1_xiangxi_fankui: '',
	conx_1_xiangxi_queren: ''
})

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
			if (!tongzhiTime.value) return
			const time = `${data[0]}-${data[1]}-${data[2]}`
			stepData.lianmeng_1_tz_time = time
		}
	})
}

//判断当前医院在第几步
getStepApi({
	hospital_id
}).then((res: any) => {
	if (res.status === 1) {
		stepData = Object.assign(stepData, res.data.step_info[Number(step)])
		if (stepData.lianmeng_1_tz_time === '') {
			stepData.lianmeng_1_tz_time = '点击选择日期'
		}
	} else {
		errorFn(res.msg)
	}
})

//提交数据
const submitFn = () => {
	//根据当前页面来判断是哪个阶段
	if (stepData.lianmeng_1_tz_time === '点击选择日期') {
		stepData.lianmeng_1_tz_time = ''
	}
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
onMounted(() => {
	selectTimeFn()
})
// 解构
const {
	lianmeng_1_tz_status,
	lianmeng_1_baoming,
	lianmeng_1_yuanfang_fankui,
	az_1_yuanfang_fankui,
	az_1_fangan,
	az_1_xiangxi_fangan,
	az_1_xiangxi_fankui,
	az_1_xiangxi_queren,
	conx_1_xiangxi_fangan,
	conx_1_xiangxi_fankui,
	conx_1_xiangxi_queren
} = {
	...toRefs(stepData)
}
</script>
