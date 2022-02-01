<template>
    <div class="login_head_circle">
        <span class="cicle_box"></span>
    </div>
    <div class="login_body">
        <div class="login_body_title">
            <h2>选择区域</h2>
        </div>
        <div class="login_body_content">
            <li>
                <div class="content_label">选择省</div>
                <div class="content_form border borderBottom">
                    <select name="" id="">
                        <option value="-1">请选择省</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                    </select>
                </div>
            </li>
            <li>
                <div class="content_label">选择市</div>
                <div class="content_form border borderBottom">
                    <select name="" id="">
                        <option value="-1">请选择市</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                    </select>
                </div>
            </li>
        </div>
    </div>
    <div class="login_footer">
        <button class="login_submit" @click="submitFn()">下一步</button>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const submitFn = () => {
        router.push("/hospital");
    }
</script>

<style lang="scss" scoped>
@import './loginProvince.scss';
</style>