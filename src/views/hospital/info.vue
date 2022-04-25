<template>
	<div class="info">
		<ul class="info_tabs">
			<li class="on">
				<div class="info_tabs_content">
					<span></span>
					<p>阶段1</p>
				</div>
			</li>
			<li :class="{ on: currentIndex >= 2 }">
				<div class="info_tabs_content">
					<span></span>
					<p>阶段2</p>
				</div>
			</li>
			<li :class="{ on: currentIndex >= 3 }">
				<div class="info_tabs_content">
					<span></span>
					<p>阶段3</p>
				</div>
			</li>
			<li v-if="type != '1'" :class="{ on: currentIndex >= 4 }">
				<div class="info_tabs_content">
					<span></span>
					<p>阶段4</p>
				</div>
			</li>
		</ul>
		<div class="info_content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const currentIndex = ref(1)
const { type, city, province } = route.query

//判断当前医院在第几步
// getStepApi({
// 	hospital_id: route.query.hospital_id
// }).then((res: any) => {
// 	if (res.status === 1) {
// 		currentIndex.value = Number(res.data.step) + 1
// 		//选择页面
// 		selectStepFn(route.path)
// 	} else {
// 		errorFn(res.msg)
// 	}
// })

const selectStepFn = (path: String) => {
	switch (path) {
		case '/info/step1':
			currentIndex.value = 1
			break
		case '/info/step2':
			currentIndex.value = 2
			break
		case '/info/step3':
			currentIndex.value = 3
			break
		case '/info/step4':
			currentIndex.value = 4
			break
		default:
			currentIndex.value = 1
			return
	}
}
selectStepFn(route.path)

watch(
	() => route.path,
	(path) => {
		selectStepFn(path)
	}
)

const goStepFn = (stepNumber: Number) => {
	console.log(Number(route.query.step), stepNumber)
	// if (Number(route.query.step) <= stepNumber) return
	let type = ''
	if (stepNumber === 1) {
		type = `_${route.query.type}`
	}
	router.push({
		path: `/info/step${stepNumber}${type}`,
		query: {
			...route.query,
			step: Number(stepNumber)
		}
	})
}
</script>

<style lang="scss">
@import './../../assets/scss/step.scss';
.info {
	background-color: #f7f7f7;
	min-height: 100%;
	padding-bottom: 2.4rem;
}
.info_tabs {
	display: flex;
	width: 100%;
	height: 2.09rem;
	color: #fff;
	background: linear-gradient(9deg, rgba(219, 60, 71, 1), rgba(146, 3, 81, 1));
	li {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			margin-top: -0.25rem;
			width: 50%;
			height: 0.05rem;
			background-color: #fff;
		}
		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 50%;
			margin-top: -0.25rem;
			width: 50%;
			height: 0.05rem;
			background-color: #fff;
		}
		&:first-child::before {
			width: 0;
		}
		&:last-child::after {
			width: 0;
		}
		.info_tabs_content {
			width: 100%;
			text-align: center;
			padding-top: 0.2rem;
			span {
				width: 0.4rem;
				height: 0.4rem;
				display: block;
				margin: 0 auto;
				background: url('/src/assets/images/icon_tabs_false.png') no-repeat left center;
				background-size: 0.4rem 0.4rem;
				position: relative;
				z-index: 1;
			}
			p {
				margin-top: 0.15rem;
				font-size: 0.35rem;
			}
		}
		&.on .info_tabs_content span {
			background: url('/src/assets/images/icon_tabs_true.png') no-repeat left center;
			background-size: 0.4rem 0.4rem;
		}
	}
}
.info_content {
	width: 92%;
	margin: 0 auto;
}
</style>
