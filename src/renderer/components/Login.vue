<template>
    <div class="login">
        <div class="login-box">
            <div class="login-title">智汇魔方在线客服系统</div>
            <el-form :model="form" status-icon :rules="rules" ref="form" class="login-form">
                <el-form-item label="" prop="name">
                    <el-input type="password" v-model="form.name" placeholder="请输入工号/手机号" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="" prop="pass">
                    <el-input type="password" v-model="form.pass" placeholder="请输入密码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
                    <!--<el-button @click="resetForm('form')">重置</el-button>-->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    name:'',
                    pass: ''
                },
                rules: {
                    name: [
                        { required: true,message: '请输入工号/手机号', trigger: 'blur' }
                    ],
                    pass: [
                        { required: true,message: '请输入密码', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push({
                            path:'/main/session'
                        });
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .login{
        height: 100%;
        box-sizing: border-box;
        background-color: darkblue;
        position: relative;
        text-align: center;
    }
    .login-box{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        min-height: 200px;
        border-radius: 6px;
        background-color: #fff;
        -webkit-app-region: no-drag;
    }
    .login-title{
        font-weight: bold;
        font-size: 1.5rem;
        padding:30px 0;
    }
    .login-form{
        display: inline-block;
        width: 80%;
        box-sizing: border-box;
        padding:20px;
    }
</style>