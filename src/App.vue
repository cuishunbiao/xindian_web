<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
// 先创建一个style标签
// 给标签添加内容，内容就为根标签的字体大小
// 然后将创建的style标签放到head标签中
(function () {
	let styleNode = document.createElement('style')
	let width = 40;
	if(document.documentElement.clientWidth <= 750){
		width = document.documentElement.clientWidth/10;
	}
	styleNode.innerHTML = "html {font-size: "+ width +"px !important}"
	document.head.appendChild(styleNode)
})()
</script>

<style lang="scss">
#app {
	max-width: 100%;
	margin: 0 auto;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
@media screen and (min-width: 751px ){
	#app{
		max-width: 650px;
	}
}
</style>
