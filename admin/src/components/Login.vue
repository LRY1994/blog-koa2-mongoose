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
    <p style="color:red">{{note}}</p>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">登录</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</el-card>
  
</template>

<script>
import request from '../api/request.js';
import md5 from 'md5'
 export default{
   data(){
     return{
       username:'',
       password:'',
       note:''
     }
   },
   methods:{
     submitForm(){
         request.login({
          username:this.username,
          password:md5(this.password).toUpperCase()
        }) 
        .then(res=>{
          console.log(res)
          if(res.data=='code.ok'){
            this.note="Login successful!"
          }else{
            this.note="Wrong password!"
          }
        }).catch(err=>{
          this.note="Server Error!"
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
