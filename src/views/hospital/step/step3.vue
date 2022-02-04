<template>
<h2>阶段3</h2>
<div class="step_box">
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">是否完成签署</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.az_conx_3_qianshu}" @click="isBooleanFn('az_conx_3_qianshu', stepData.az_conx_3_qianshu)"></div>
            </div>
        </div>
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left step_box_left_label">时间</div>
            <div class="step_box_right">
                <div ref="shanghuiTime" id="shanghuiTime" class="select-tab-bg">请选择时间</div>
            </div>
        </div>
    </div>
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">是否开票付款</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.az_conx_3_kaipiao}" @click="isBooleanFn('az_conx_3_kaipiao', stepData.az_conx_3_kaipiao)"></div>
            </div>
        </div>
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left step_box_left_label">金额</div>
            <div class="step_box_right">
                <input type="text" v-model="stepData.az_conx_3_kaipiao_jine" placeholder="请输入金额">
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
// az_3_qianshu
// az_3_qianshu_shijian
// az_3_kaipiao
// az_3_kaipiao_jine   
// conx_3_qianshu      
// conx_3_qianshu_shijian
// conx_3_kaipiao      
// conx_3_kaipiao_jine 
//声明类型
interface stepDataTS {
    az_conx_3_qianshu: Boolean;
    az_conx_3_qianshu_shijian: String;
    az_conx_3_kaipiao: Boolean;
    az_conx_3_kaipiao_jine: String;
}
//声明类型值
type stepDataType = 'az_conx_3_qianshu' | 'az_conx_3_kaipiao'
const stepData = reactive<stepDataTS>({
    az_conx_3_qianshu: false,
    az_conx_3_qianshu_shijian: '',
    az_conx_3_kaipiao: false,
    az_conx_3_kaipiao_jine: '',
})
const isBooleanFn = (type: stepDataType, bool: Boolean) => {
    stepData[type] = !bool
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