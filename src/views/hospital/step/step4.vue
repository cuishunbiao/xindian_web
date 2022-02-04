<template>
<h2>阶段4</h2>
<div class="step_box">
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">数据是否已对接联盟平台</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.lianmeng_conx_4_duijie}" @click="isBooleanFn('lianmeng_conx_4_duijie', stepData.lianmeng_conx_4_duijie)"></div>
            </div>
        </div>
    </div>
</div>
<div class="info_footer">
    <button class="info_submit">完成</button>
</div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
// conx_4_duijie
// lianmeng_4_duijie
//声明类型
interface stepDataTS {
    lianmeng_conx_4_duijie: Boolean;
}
//声明类型值
type stepDataType = 'lianmeng_conx_4_duijie'
const stepData = reactive<stepDataTS>({
    lianmeng_conx_4_duijie: false
})
const isBooleanFn = (type: stepDataType, bool: Boolean) => {
    stepData[type] = !bool
}

</script>