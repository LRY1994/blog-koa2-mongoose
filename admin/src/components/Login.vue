<template>
<el-card id="loginForm">
  <h4>只有我才可以发表文章</h4>
  <el-form  status-icon  label-width="100px"  ref="loginForm" size="mini">
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="password" auto-complete="off"></el-input>
    </el-form-item>
  
    <el-form-item>
      <el-button type="primary" @click="submitForm()">登录</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</el-card>
  
</template>

<script>
import request from '../api/request.js';
import axios from 'axios';
 export default{
   data(){
     return{
       username:'',
       password:''
     }
   },
   methods:{
     submitForm(){
       let username = this.username,
           password = this.password;
         request.login({
          username,password
        }) 
        .then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
      }
   },
   resetForm() {
        this.$refs['loginForm'].resetFields();
    }
 }
</script>

<style lang="scss">

  #loginForm{
    width:30%;
    margin:0 auto;
  }
</style>
