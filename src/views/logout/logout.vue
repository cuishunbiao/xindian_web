<template>
	<div class="logout">
		<button class="logout_submit" @click="logoutFn()">退出登录</button>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { postLogoutApi } from '@Request/api'
import { errorFn } from '@Assets/ts/common'

const router = useRouter()

//登录
const logoutFn = () => {
	postLogoutApi().then((res: any) => {
		if (res.status === 1) {
			router.push('/')
		} else {
			errorFn(res.msg)
		}
	})
}
</script>

<style lang="scss" scoped>
.logout {
	background-size: 100% 100%;
	text-align: center;
	.logout_submit {
		width: 8rem;
		margin: 0.33rem auto 0 auto;
		height: 1.31rem;
		background: linear-gradient(90deg, #8e0052 0%, #e14145 99%);
		border-radius: 0.65rem;
		font-size: 0.48rem;
		color: #fff;
		transition: background 0.2s linear;
		cursor: pointer;
		&:hover,
		&:focus {
			background: linear-gradient(90deg, #900052 0%, #ba1d4a 99%);
		}
	}
}
</style>
