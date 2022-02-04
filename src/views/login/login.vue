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
					<select v-model="loginData.type">
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
					<input type="text" v-model="loginData.account" />
					<!-- <select v-model="loginData.account">
                        <option value="-1">请选择账号</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                    </select> -->
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
import { getTypeApi, postLoginApi } from '@Request/api'
import { errorFn } from '@Assets/ts/common'

const typeData = ref<any[]>([])
const router = useRouter()
const loginData = reactive({
	account: '123',
	passwd: '12',
	type: 1
})

//获取Type
getTypeApi().then((res: any) => {
	if (res.status === 1) {
		typeData.value = res.data
	} else {
		errorFn(res.msg)
	}
})

//登录
const submitFn = () => {
	postLoginApi(loginData).then((res: any) => {
		router.push('/province')

		if (res.status === 1) {
			router.push('/province')
		} else {
			errorFn(res.msg)
		}
	})
}
</script>

<style lang="scss" scoped>
@import './loginProvince.scss';
</style>
