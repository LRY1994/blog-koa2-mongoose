<template>
    <div>
        <el-dialog
            title="删除文章"
            v-if="delDialogVisible"
            :visible.sync="delDialogVisible"
            width="25%">
           <span>确定删除{{item.title}}吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmDelete()">确 定</el-button>
            </span>
        </el-dialog>

        <el-card>
             标题：{{item.title}}
            创建时间：{{item.createTime}}
            上次修改时间：{{item.lastEditTime}} 
            <router-link :to="`Post/${item._id}`">详情</router-link>
            <el-button @click="delDialogVisible = true">删除</el-button>
        </el-card>
    </div>
</template>

<script>
import request from '../api/request.js';
export default {
    data(){
        return{
            delDialogVisible :false
        }

    },
props:{
    item:{
        type:Object,
        required:true
    }
},
methods:{   
    confirmDelete(){
        request.delPost({postId:this.item._id}).then(res=>{
            console.log(res)
            this.$message.success('删除成功！');
            this.delDialogVisible = false;
            this.$parent.loadData();
        }).catch(err=>{
            console.log(err)
            this.$message.error('删除失败！')
        })
    }
}
}
</script>

<style>

</style>
