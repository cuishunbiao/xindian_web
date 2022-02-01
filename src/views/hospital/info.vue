<template>
<div class="info">
    <ul class="info_tabs">
        <li class="on">
            <div class="info_tabs_content">
                <span></span>
                <p>阶段1</p>
            </div>
        </li>
        <li class="on">
            <div class="info_tabs_content">
                <span></span>
                <p>阶段2</p>
            </div>
        </li>
        <li class="on">
            <div class="info_tabs_content">
                <span></span>
                <p>阶段3</p>
            </div>
        </li>
        <li class="on">
            <div class="info_tabs_content">
                <span></span>
                <p>阶段4</p>
            </div>
        </li>
    </ul>
    <div class="info_content">
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
    </div>
</div>
</template>

<script setup lang="ts">
    import StepOne from '@/components/Step/StepOne.vue';
    import StepTwo from '@/components/Step/StepTwo.vue';
    import StepThree from '@/components/Step/StepThree.vue';
    import StepFour from '@/components/Step/StepFour.vue';
</script>

<style lang="scss" scoped>
.info{
    background-color: #f7f7f7;
    height: 100%;
}
.info_tabs{
    display: flex;
    width: 100%;
    height: 2.09rem;
    color: #fff;
    background: linear-gradient(9deg, rgba(219, 60, 71, 1), rgba(146, 3, 81, 1));
    li{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -.25rem;
            width: 50%;
            height: .05rem;
            background-color: #fff;
        }
        &::after{
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -.25rem;
            width: 50%;
            height: .05rem;
            background-color: #fff;
        }
        &:first-child::before{
            width: 0;
        }
        &:last-child::after{
            width: 0;
        }
        .info_tabs_content{
            width: 100%;
            text-align: center;
            padding-top: .2rem;
            span{
                width: .4rem;
                height: .4rem;
                display: block;
                margin: 0 auto;
                background: url('/src/assets/images/icon_tabs_false.png') no-repeat left center;
                background-size: .4rem .4rem;
                position: relative;
                z-index: 1;
            }
            p{
                margin-top: .15rem;
                font-size: .35rem;
            }
        }
        &.on .info_tabs_content span{
            background: url('/src/assets/images/icon_tabs_true.png') no-repeat left center;
                background-size: .4rem .4rem;
        }
    }
}
.info_content{
    width: 92%;
    margin: 0 auto;
}
</style>