<template>
	<div class="login_head_circle">
		<span class="cicle_box"></span>
	</div>
	<div class="login_body">
		<div class="login_body_logo"><img src="/src/assets/images/logo.png" alt="心电一张网" /></div>
		<div class="login_body_content">
			<li>
				<div class="content_label">所属机构</div>
				<div class="content_form border borderBottom">
					<select v-model="loginData.type" @change="getAccountFn(loginData.type)">
						<option value="-1">请选择所属机构</option>
						<option v-for="(item, index) in typeData" :key="index" :value="item.key">
							{{ item.name }}
						</option>
					</select>
				</div>
			</li>
			<li>
				<div class="content_label">账号</div>
				<div class="content_form border borderBottom">
					<select v-model="loginData.account">
						<option value="-1">请选择账号</option>
						<option v-for="(item, index) in accountData" :key="index" :value="item.account">
							{{ item.account }}
						</option>
					</select>
				</div>
			</li>
			<li>
				<div class="content_label">密码</div>
				<div class="content_form border borderBottom">
					<input v-model="loginData.passwd" type="password" placeholder="请输入密码" />
				</div>
			</li>
		</div>
	</div>
	<div class="login_footer">
		<button class="login_submit" @click="submitFn()">登录</button>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getTypeApi, getAccountApi, postLoginApi } from '@Request/api'
import { errorFn } from '@Assets/ts/common'

const typeData = ref<any[]>([])
const accountData = ref<any[]>([])
const router = useRouter()
const loginData = reactive({
	account: -1,
	passwd: '',
	type: -1
})

//获取Type
getTypeApi().then((res: any) => {
	if (res.status === 1) {
		typeData.value = res.data
	} else {
		errorFn(res.msg)
	}
})

//获取账号
const getAccountFn = (type: Number) => {
	getAccountApi({
		type
	}).then((res: any) => {
		if (res.status === 1) {
			accountData.value = res.data.lists
		} else {
			errorFn(res.msg)
		}
	})
}

//登录
const submitFn = () => {
	postLoginApi(loginData).then((res: any) => {
		if (res.status === 1) {
			router.push({
				path: '/province',
				query: {
					type: loginData.type
				}
			})
		} else {
			errorFn(res.msg)
		}
	})
}
</script>

<style lang="scss" scoped>
@import './loginProvince.scss';
</style>
