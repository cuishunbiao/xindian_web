<template>
    <div class="hospital">
        <div class="hospital_content">
            <div class="hospital_search">
                <input type="text" placeholder="请输入医院名称">
            </div>
            <div class="hospital_list">
                <router-link :to="{path:'/info/step1',query:{hospital_id: 1}}">北京大学人民医院</router-link>
                <router-link :to="{path:'/info/step2',query:{hospital_id: 2}}">北京大学人民医院</router-link>
                <router-link :to="{path:'/info/step3',query:{hospital_id: 3}}">北京大学人民医院</router-link>
                <router-link :to="{path:'/info/step4',query:{hospital_id: 4}}">北京大学人民医院</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.hospital{
    background-color: #F7F7F7;
    width: 100%;
    min-height: 100%;
    padding-top: .35rem;
    .hospital_content{
        width: 92%;
        margin: 0 auto;
    }
    .hospital_search{
        height: .88rem;
        border: 1px solid #E8E8E8;
        border-radius: .44rem;
        overflow: hidden;
        background: url('/src/assets/images/icon_search.png') no-repeat .45rem center #fff;
        background-size: .33rem .33rem;
        padding-left: 1rem;
        input{
            padding: .22rem 0;
            width: 100%;
            color: #666;
        }
    }
    .hospital_list{
        margin-top: .32rem;
        a{
            display: block;
            padding: .27rem .8rem .27rem .44rem;
            background: #FFFFFF;
            box-shadow: 0px 2px .57rem 0px rgba(183, 183, 183, 0.1);
            border-radius: .27rem;
            margin-bottom: .2rem;
            font-size: .37rem;
            font-weight: bold;
            position: relative;
            overflow: hidden;
            &::before{
                position: absolute;
                left: 0;
                top: 0;
                width: .13rem;
                height: 100%;
                content: "";
                background-color: #B62940;
            }
            &::after{
                content: "";
                position: absolute;
                right: .4rem;
                top: 50%;
                width: .31rem;
                height: .49rem;
                margin-top: -.24rem;
                background: url('/src/assets/images/icon_arrow_right.png') no-repeat left center;
                background-size: .31rem .49rem;
            }
        }
    }
}
</style>