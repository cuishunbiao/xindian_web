<template>
<h2>阶段1</h2>
<div class="step_box">
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">是否已通知医院</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.lianmeng_1_tz_status}" @click="isBooleanFn('lianmeng_1_tz_status', stepData.lianmeng_1_tz_status)"></div>
            </div>
        </div>
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left step_box_left_label">形式</div>
            <div class="step_box_right">
                <select class="step_box_right_select" v-model="stepData.lianmeng_1_tz_type">
                    <option value="-1">请选择通知形式</option>
                    <option value="红方">电话</option>
                    <option value="红方">短信</option>
                </select>
            </div>
        </div>
        <div class="step_box_content_flex">
            <div class="step_box_left step_box_left_label">时间</div>
            <div class="step_box_right">
                <div ref="tongzhiTime" id="tongzhiTime" class="select-tab-bg">请选择时间</div>
            </div>
        </div>
    </div>
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">院方联系人</div>
        </div>
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left step_box_left_label">姓名</div>
            <div class="step_box_right">
                <input type="text" v-model="stepData.lianmeng_1_yuanfang_name" placeholder="请输入姓名">
            </div>
        </div>
        <div class="step_box_content_flex">
            <div class="step_box_left step_box_left_label">职位</div>
            <div class="step_box_right">
                <input type="text" v-model="stepData.lianmeng_1_yuanfang_zhiwei" placeholder="请输入职位">
            </div>
        </div>
    </div>
    <div class="step_box_content paddingB30">
        <div class="step_box_content_flex">
            <div class="step_box_left">院方反馈</div>
        </div>
        <div class="step_box_content_flex border borderAll">
            <textarea cols="30" rows="5"  v-model="stepData.lianmeng_1_yuanfang_fankui" placeholder="请输入院方反馈"></textarea>
        </div>
    </div>
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">是否已在联盟官网提交报名</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.lianmeng_1_baoming}" @click="isBooleanFn('lianmeng_1_baoming', stepData.lianmeng_1_baoming)"></div>
            </div>
        </div>
    </div>
</div>
<!-- AZ -->
<div class="step_box step_box_false mt35">
    <div class="step_box_content">
        <div class="step_box_content_flex">
            <div class="step_box_left">是否已给院方初步介绍方案</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.az_1_fangan}" @click="isBooleanFn('az_1_fangan', stepData.az_1_fangan)"></div>
            </div>
        </div>
    </div>
    <div class="step_box_content">
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left">院方联系人</div>
        </div>
        <div class="step_box_content_flex border borderBottom">
            <div class="step_box_left step_box_left_label">姓名</div>
            <div class="step_box_right">
                <input type="text" v-model="stepData.az_1_yuanfang_name" placeholder="请输入姓名">
            </div>
        </div>
        <div class="step_box_content_flex">
            <div class="step_box_left step_box_left_label">职位</div>
            <div class="step_box_right">
                <input type="text" v-model="stepData.az_1_yuanfang_zhiwei" placeholder="请输入职位">
            </div>
        </div>
    </div>
    <div class="step_box_content paddingB30">
        <div class="step_box_content_flex">
            <div class="step_box_left">院方反馈</div>
        </div>
        <div class="step_box_content_flex border borderAll">
            <textarea cols="30" rows="5" v-model="stepData.az_1_yuanfang_fankui" placeholder="请输入院方反馈"></textarea>
        </div>
    </div>
</div>
<!-- AZ 和 CONX -->
<div class="step_box step_box_false mt35">
    <div class="step_box_content">
        <div class="step_box_content_flex">
            <div class="step_box_left">是否已对接院方详细介绍方案</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.az_conx_1_xiangxi_fangan}" @click="isBooleanFn('az_conx_1_xiangxi_fangan', stepData.az_conx_1_xiangxi_fangan)"></div>
            </div>
        </div>
    </div>
    <div class="step_box_content paddingB30">
        <div class="step_box_content_flex">
            <div class="step_box_left">院方反馈（尽可能详述）</div>
        </div>
        <div class="step_box_content_flex border borderAll">
            <textarea cols="30" rows="5" v-model="stepData.az_conx_1_xiangxi_fankui" placeholder="请输入院方反馈"></textarea>
        </div>
    </div>
    <div class="step_box_content">
        <div class="step_box_content_flex">
            <div class="step_box_left">是否已确认方案</div>
            <div class="step_box_right step_box_right_button">
                <div class="icon_boolean" :class="{'true': stepData.az_conx_1_xiangxi_queren}" @click="isBooleanFn('az_conx_1_xiangxi_queren', stepData.az_conx_1_xiangxi_queren)"></div>
            </div>
        </div>
    </div>
</div>
<div class="info_footer">
    <button class="info_submit">下一步阶段2</button>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue"
import { MONTHNUM, YEARNUM, DAYNUM, HOUR, MINUTER } from "../../../assets/ts/common";
const tongzhiTime = ref<HTMLElement | null>(null)
//声明类型
interface stepDataTS {
    lianmeng_1_tz_status: Boolean,
    lianmeng_1_tz_type: String | Number,
    lianmeng_1_tz_time: String,
    lianmeng_1_yuanfang_name: String,
    lianmeng_1_yuanfang_zhiwei: String,
    lianmeng_1_yuanfang_fankui: String,
    lianmeng_1_baoming: Boolean,
    az_1_fangan: Boolean,
    az_1_yuanfang_name: String,
    az_1_yuanfang_zhiwei: String,
    az_1_yuanfang_fankui: String,
    az_1_xiangxi_fangan: Boolean,
    az_1_xiangxi_fankui: String,
    az_1_xiangxi_queren: Boolean,
    conx_1_xiangxi_fangan: Boolean,
    conx_1_xiangxi_fankui: String,
    conx_1_xiangxi_queren: String,
    az_conx_1_xiangxi_fangan: Boolean,
    az_conx_1_xiangxi_fankui: String,
    az_conx_1_xiangxi_queren: Boolean,

}
//声明类型值
type stepDataType = 'lianmeng_1_tz_status' | 'lianmeng_1_baoming' | 'az_1_fangan' | 'az_1_xiangxi_fangan' | 'az_1_xiangxi_queren' | 'conx_1_xiangxi_fangan' | 'az_conx_1_xiangxi_queren' | 'az_conx_1_xiangxi_fangan'
const stepData = reactive<stepDataTS>({
    lianmeng_1_tz_status: false,
    lianmeng_1_tz_type: '',
    lianmeng_1_tz_time: '',
    lianmeng_1_yuanfang_name: '',
    lianmeng_1_yuanfang_zhiwei: '',
    lianmeng_1_yuanfang_fankui: '',
    lianmeng_1_baoming: false,
    az_1_fangan: false,
    az_1_yuanfang_name: '',
    az_1_yuanfang_zhiwei: '',
    az_1_yuanfang_fankui: '',
    az_1_xiangxi_fangan: false,
    az_1_xiangxi_fankui: '',
    az_1_xiangxi_queren: false,
    conx_1_xiangxi_fangan: false,
    conx_1_xiangxi_fankui: '',
    conx_1_xiangxi_queren: '',
    az_conx_1_xiangxi_fangan: false,
    az_conx_1_xiangxi_fankui: '',
    az_conx_1_xiangxi_queren: false
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
    const tongzhiTimeSelect = new MobileSelect({
        trigger: '#tongzhiTime',
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
            if(!tongzhiTime.value) return
            tongzhiTime.value.innerHTML = `${data[0]}-${data[1]}-${data[2]} ${data[3]}:${data[4]}`
        },
    });
}


onMounted(()=>{
    selectTimeFn()
})

</script>