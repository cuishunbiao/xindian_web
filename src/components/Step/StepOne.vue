<template>
    <h2>阶段1</h2>
    <div class="step_box">
        <div class="step_box_content">
            <div class="step_box_content_flex">
                <div class="step_box_left">是否已给院方初步介绍方案</div>
                <div class="step_box_right step_box_right_button">112</div>
            </div>
        </div>
        <div class="step_box_content">
            <div class="step_box_content_flex border borderBottom">
                <div class="step_box_left">院方联系人</div>
            </div>
            <div class="step_box_content_flex border borderBottom">
                <div class="step_box_left step_box_left_label">院方联系人</div>
                <div class="step_box_right">
                    <input type="text" placeholder="请输入院方联系人">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    @import './step.scss'
</style>