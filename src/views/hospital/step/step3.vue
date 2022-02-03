<template>
<h2>阶段3</h2>
<div class="step_box">
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">是否完成签署</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepOne.is_yuanfang_fangan}" @click="isBooleanFn('is_yuanfang_fangan', stepOne.is_yuanfang_fangan)"></div>
            </div>
        </div>
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left step_box_left_label">时间</div>
            <div class="step_box_right">
                <div ref="shanghuiTime" id="shanghuiTime" class="select-tab-bg">请选择时间</div>
            </div>
        </div>
        <div class="step_box_content_flex">
            <div class="step_box_left step_box_left_label">结果</div>
            <div class="step_box_right">
                <select class="step_box_right_select" name="" id="">
                    <option value="-1">请选择结果</option>
                    <option value="红方">电话</option>
                    <option value="红方">短信</option>
                </select>
            </div>
        </div>
    </div>
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">是否开票付款</div>
        </div>
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left step_box_left_label">金额</div>
            <div class="step_box_right">
                <input type="text" placeholder="请输入金额">
            </div>
        </div>
    </div>
</div>

<div class="info_footer">
    <button class="info_submit">下一步阶段4</button>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue"
import { MONTHNUM, YEARNUM, DAYNUM, HOUR, MINUTER } from "../../../assets/ts/common";
const shanghuiTime = ref<HTMLElement | null>(null)
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
//选择时间
const selectTimeFn = () => {
    let myDate = new Date();
    let year = myDate.getFullYear() - 2018;
    let month = myDate.getMonth();
    let date = myDate.getDate() - 1;
    let hour = myDate.getHours();
    let minuter = myDate.getMinutes();
    //选择开始时间
    new MobileSelect({
        trigger: '#shanghuiTime',
        selectType: 'ymdhm',
        selectCla: 'start',
        wheels: [
            {data: YEARNUM},
            {data: MONTHNUM},
            {data: DAYNUM},
            {data: HOUR},
            {data: MINUTER},
        ],
        position: [year, month, date, hour, minuter],
        callback: function(indexArr: Number, data: any) {
            if(!shanghuiTime.value) return
            shanghuiTime.value.innerHTML = `${data[0]}-${data[1]}-${data[2]} ${data[3]}:${data[4]}`
        },
    });
}

onMounted(()=>{
    selectTimeFn()
})

</script>