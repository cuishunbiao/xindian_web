<template>
	<h2>阶段1</h2>
	<!-- AZ -->
	<div class="step_box mt35">
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
	<div class="step_box mt35" v-if="az_1_fangan === '是'">
		<div class="step_box_content">
			<div class="step_box_content_flex">
				<div class="step_box_left">是否已对接院方详细介绍方案</div>
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: az_1_xiangxi_fangan === '是' }"
						@click="isBooleanFn('az_1_xiangxi_fangan', az_1_xiangxi_fangan)"
					></div>
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
				<div class="step_box_right step_box_right_button">
					<div
						class="icon_boolean"
						:class="{ true: az_1_xiangxi_queren === '是' }"
						@click="isBooleanFn('az_1_xiangxi_queren', az_1_xiangxi_queren)"
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
import { ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postEditStepApi, getStepApi } from '@Request/api'
import { errorFn } from '@Assets/ts/common'
const route = useRoute()
const { hospital_id, step, type } = route.query
const router = useRouter()

//声明类型
interface stepDataTS {
	az_1_fangan: String
	az_1_yuanfang_name: String
	az_1_yuanfang_zhiwei: String
	az_1_yuanfang_fankui: any
	az_1_xiangxi_fangan: String
	az_1_xiangxi_fankui: any
	az_1_xiangxi_queren: String
}
//声明类型值
type stepDataType =
	| 'az_1_fangan'
	| 'az_1_xiangxi_fangan'
	| 'az_1_xiangxi_queren'
	| 'az_1_xiangxi_queren'
	| 'az_1_xiangxi_fangan'
let stepData = reactive<stepDataTS>({
	az_1_fangan: '否',
	az_1_yuanfang_name: '',
	az_1_yuanfang_zhiwei: '',
	az_1_yuanfang_fankui: '',
	az_1_xiangxi_fangan: '否',
	az_1_xiangxi_fankui: '',
	az_1_xiangxi_queren: '否'
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
const { az_1_yuanfang_fankui, az_1_xiangxi_fankui, az_1_xiangxi_queren, az_1_xiangxi_fangan, az_1_fangan } = {
	...toRefs(stepData)
}
</script>
