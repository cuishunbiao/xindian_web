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
                    <select v-model="provinceIndex" @change="provinceChangeFn(provinceIndex)">
                        <option value="">请选择省</option>
                        <option v-for="(item, index) in provinceData" :key="index" :value="index">{{item.name}}</option>
                    </select>
                </div>
            </li>
            <li>
                <div class="content_label">选择市</div>
                <div class="content_form border borderBottom">
                    <select v-model="city">
                        <option value="">请选择市</option>
                        <option v-for="(item,index) in cityData" :key="index" :value="item">{{item}}</option>
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
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { getSearchApi } from '@Request/api'
    import { errorFn } from '@Assets/ts/common'
    const router = useRouter();

    const provinceIndex = ref("")
    const provinceData = ref<any[]>([])

    const city = ref("")
    const cityData = ref<any[]>([])

    //获取省市
    getSearchApi().then((res: any)=>{
        if (res.status === 1){
            provinceData.value = res.data.search
        } else {
            errorFn(res.msg)
        }
    })

    //选择省
    const provinceChangeFn = (index: any) => {
        cityData.value = provinceData.value[index].children;
    }

    const submitFn = () => {
        router.push({
            path: '/hospital',
            query: {
                city: city.value
            }
        });
    }
</script>

<style lang="scss" scoped>
@import './loginProvince.scss';
</style>