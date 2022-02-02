<template>
    <h2>阶段1</h2>
    <div class="step_box">
        <div class="step_box_content">
            <div class="step_box_content_flex border borderBottom">
                <div class="step_box_left">是否已通知医院</div>
                <div class="step_box_right step_box_right_button">
                    <div class="icon_boolean" :class="{'true': stepOne.is_yuanfang_fangan}" @click="isBooleanFn('is_yuanfang_fangan', stepOne.is_yuanfang_fangan)"></div>
                </div>
            </div>
            <div class="step_box_content_flex border borderBottom">
                <div class="step_box_left step_box_left_label">形式</div>
                <div class="step_box_right">
                    <select class="step_box_right_select" name="" id="">
                        <option value="-1">请选择所属机构</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                    </select>
                </div>
            </div>
            <div class="step_box_content_flex">
                <div class="step_box_left step_box_left_label">时间</div>
                <div class="step_box_right">
                    <div ref="startDate" id="data-start" class="select-tab-bg">开始时间</div>
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
                    <input type="text" placeholder="请输入姓名">
                </div>
            </div>
            <div class="step_box_content_flex">
                <div class="step_box_left step_box_left_label">职位</div>
                <div class="step_box_right">
                    <input type="text" placeholder="请输入职位">
                </div>
            </div>
        </div>
        <div class="step_box_content paddingB30">
            <div class="step_box_content_flex">
                <div class="step_box_left">院方反馈</div>
            </div>
            <div class="step_box_content_flex border borderAll">
                <textarea name="" id="" cols="30" rows="5" placeholder="请输入院方反馈"></textarea>
            </div>
        </div>
        <div class="step_box_content">
            <div class="step_box_content_flex border borderBottom">
                <div class="step_box_left">是否已在联盟官网提交报名</div>
                <div class="step_box_right step_box_right_button">
                    <div class="icon_boolean" :class="{'true': stepOne.is_yuanfang_fangan}" @click="isBooleanFn('is_yuanfang_fangan', stepOne.is_yuanfang_fangan)"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="step_box step_box_false mt35">
        <div class="step_box_content">
            <div class="step_box_content_flex">
                <div class="step_box_left">是否已给院方初步介绍方案</div>
                <div class="step_box_right step_box_right_button">
                    <div class="icon_boolean" :class="{'true': stepOne.is_yuanfang_fangan}" @click="isBooleanFn('is_yuanfang_fangan', stepOne.is_yuanfang_fangan)"></div>
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
                    <input type="text" placeholder="请输入姓名">
                </div>
            </div>
            <div class="step_box_content_flex">
                <div class="step_box_left step_box_left_label">职位</div>
                <div class="step_box_right">
                    <input type="text" placeholder="请输入职位">
                </div>
            </div>
        </div>
        <div class="step_box_content paddingB30">
            <div class="step_box_content_flex">
                <div class="step_box_left">院方反馈</div>
            </div>
            <div class="step_box_content_flex border borderAll">
                <textarea name="" id="" cols="30" rows="5" placeholder="请输入院方反馈"></textarea>
            </div>
        </div>
    </div>
    <div class="step_box step_box_false mt35">
        <div class="step_box_content">
            <div class="step_box_content_flex">
                <div class="step_box_left">是否已对接院方详细介绍方案</div>
                <div class="step_box_right step_box_right_button">
                    <div class="icon_boolean" :class="{'true': stepOne.is_xiangxi_fangan}" @click="isBooleanFn('is_xiangxi_fangan', stepOne.is_xiangxi_fangan)"></div>
                </div>
            </div>
        </div>
        <div class="step_box_content paddingB30">
            <div class="step_box_content_flex">
                <div class="step_box_left">院方反馈（尽可能详述）</div>
            </div>
            <div class="step_box_content_flex border borderAll">
                <textarea name="" id="" cols="30" rows="5" placeholder="请输入院方反馈"></textarea>
            </div>
        </div>
        <div class="step_box_content">
            <div class="step_box_content_flex">
                <div class="step_box_left">是否已确认方案</div>
                <div class="step_box_right step_box_right_button">
                    <div class="icon_boolean" :class="{'true': stepOne.is_fangan}" @click="isBooleanFn('is_fangan', stepOne.is_fangan)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
interface stepOneTS {
    is_yuanfang_fangan: Boolean;
    is_xiangxi_fangan: Boolean;
    is_fangan: Boolean;
}
type stepOneType = 'is_yuanfang_fangan' | 'is_xiangxi_fangan' | 'is_fangan'
const stepOne = reactive<stepOneTS>({
    is_yuanfang_fangan: false,
    is_xiangxi_fangan: false,
    is_fangan: false
})
const isBooleanFn = (type: stepOneType, bool: Boolean) => {
    stepOne[type] = !bool
}

var myDate = new Date();
var year = myDate.getFullYear() - 2018;
var month = myDate.getMonth();
var date = myDate.getDate() - 1;
//选择开始时间
// var timeStart = new MobileSelect({
//     trigger: '#data-start',
//     selectType: 'ym',
//     selectCla: 'start',
//     wheels: [
//         {data: YEARNUM},
//         {data: MONTHNUM},
//     ],
//     position: [year, month, date],
//     callback: function(indexArr: Number, data: any) {
//         // self.$refs.startDate.innerHTML = data[0] + '-' + data[1];
//         // self.start_date = data[0] + '-' + data[1];
//     },
// });

</script>

<style lang="scss" scoped>
    @import './step.scss'
</style>