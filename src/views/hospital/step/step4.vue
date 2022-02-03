<template>
<h2>阶段4</h2>
<div class="step_box">
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">数据是否已对接联盟平台</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepOne.is_yuanfang_fangan}" @click="isBooleanFn('is_yuanfang_fangan', stepOne.is_yuanfang_fangan)"></div>
            </div>
        </div>
    </div>
</div>
<div class="info_footer">
    <button class="info_submit">完成</button>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue"
//声明类型
interface stepOneTS {
    is_yuanfang_fangan: Boolean;
    is_xiangxi_fangan: Boolean;
    is_fangan: Boolean;
}
//声明类型值
type stepOneType = 'is_yuanfang_fangan' | 'is_xiangxi_fangan' | 'is_fangan'
const stepOne = reactive<stepOneTS>({
    is_yuanfang_fangan: false,
    is_xiangxi_fangan: false,
    is_fangan: false
})
const isBooleanFn = (type: stepOneType, bool: Boolean) => {
    stepOne[type] = !bool
}

</script>