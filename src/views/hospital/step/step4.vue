<template>
	<div v-if="type === '2'">
		<h2>阶段4：设备运营</h2>
		<div class="step_box">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">数据是否已对接联盟平台</div>
					<div class="step_box_right">
						<label class="step_label"
							><input type="radio" value="是" v-model="lianmeng_4_duijie" />是&nbsp;&nbsp;</label
						>
						<label class="step_label"
							><input type="radio" value="否" v-model="lianmeng_4_duijie" />否</label
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-if="type === '3'">
		<h2>阶段4：设备运营</h2>
		<div class="step_box">
			<div class="step_box_content">
				<div class="step_box_content_flex border borderBottom">
					<div class="step_box_left">数据是否已对接联盟平台</div>
					<div class="step_box_right">
						<label class="step_label"
							><input type="radio" value="是" v-model="conx_4_duijie" />是&nbsp;&nbsp;</label
						>
						<label class="step_label"><input type="radio" value="否" v-model="conx_4_duijie" />否</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="info_footer">
		<button class="info_back" @click="backFn()">上一步阶段3</button>
		<button class="info_submit" @click="submitFn()">完成</button>
	</div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { errorFn } from '@Assets/ts/common'
import { getStepApi, postEditStepApi } from '@Request/api'
const router = useRouter()
const route = useRoute()
const { type, hospital_id, step, city } = route.query
// conx_4_duijie
// lianmeng_4_duijie
//声明类型
interface stepDataTS {
	conx_4_duijie: String
	lianmeng_4_duijie: String
}
//声明类型值
type stepDataType = 'conx_4_duijie' | 'lianmeng_4_duijie'
let stepData = reactive<stepDataTS>({
	conx_4_duijie: '否',
	lianmeng_4_duijie: '否'
})

const isBooleanFn = (type: stepDataType, bool: Boolean) => {
	stepData[type] === '是' ? (stepData[type] = '否') : (stepData[type] = '是')
}

const backFn = () => {
	router.push({
		path: `/info/step3`,
		query: {
			...route.query,
			step: 3
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
				path: `/hospital`,
				query: {
					type,
					city
				}
			})
		} else {
			errorFn(res.msg)
		}
	})
}
const { lianmeng_4_duijie, conx_4_duijie } = { ...toRefs(stepData) }
</script>
