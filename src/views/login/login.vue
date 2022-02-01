<template>
    <div class="login_head_circle">
        <span class="cicle_box"></span>
    </div>
    <div class="login_body">
        <div class="login_body_logo"><img src="/src/assets/images/logo.png" alt="心电一张网"></div>
        <div class="login_body_content">
            <li>
                <div class="content_label">所属机构</div>
                <div class="content_form border-1px">
                    <select name="" id="">
                        <option value="-1">请选择所属机构</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                    </select>
                </div>
            </li>
            <li>
                <div class="content_label">账号</div>
                <div class="content_form border-1px">
                    <select name="" id="">
                        <option value="-1">请选择账号</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                        <option value="红方">红方</option>
                    </select>
                </div>
            </li>
            <li>
                <div class="content_label">密码</div>
                <div class="content_form border-1px">
                    <input type="password" placeholder="请输入密码">
                </div>
            </li>
        </div>
    </div>
    <div class="login_footer">
        <button class="login_submit">登录</button>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.login_head_circle{
    width: 100%;
    overflow: hidden;
    height: 3.13rem;
    .cicle_box{
        width: 3.13rem;
        height: 3.13rem;
        display: block;
        background: url('/src/assets/images/login_head_circle.png') no-repeat left top;
        background-size: 100% 100%;
    }
}
.login_body{
    margin: 1rem auto .2rem auto;
    width: 80%;
    .login_body_logo{
        width: 5.11rem;
        height: .88rem;
        img{
            max-width: 100%;
        }
    }
    .login_body_content{
        text-align: left;
        li{
            margin-top: .8rem;
            .content_label{
                color: #333;
            }
            .content_form{
                padding-bottom: 1px;
                input,select{
                    position: relative;
                    z-index: 1;
                    font-size: .4rem;
                    color: #999;
                }
                select{
                    width: 100%;
                    height: 1.27rem;
                    background: url('/src/assets/images/login_arrow_down.png') no-repeat right center;
                    background-size: .4rem .22rem;
                }
                input{
                    width: 100%;
                    padding: .4rem 0;
                }
            }
        }
    }
}
.login_footer{
    background: url('/src/assets/images/login_footer_bg.png') no-repeat left top;
    background-size: 100% 100%;
    height: 7.73rem;
    .login_submit{
        width: 8rem;
        margin: .33rem auto 0 auto;
        height: 1.31rem;
        background: linear-gradient(90deg, #8E0052 0%, #E14145 99%);
        border-radius: .65rem;
        font-size: .48rem;
        color: #fff;
        transition: background .2s linear;
        cursor: pointer;
        &:hover,&:focus{
            background: linear-gradient(90deg, #900052 0%, #BA1D4A 99%);
        }
    }
}
@media screen and (min-width: 751px ){
	.login_footer{
		height: 10rem;
	}
}
</style>