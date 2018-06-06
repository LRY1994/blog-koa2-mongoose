<template>
    <div>
        <el-dialog
            title="删除文章"
            v-if="delDialogVisible"
            :visible.sync="delDialogVisible"
            width="25%">
           <span>确定删除{{item.title}}吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="delDialogVisible = false">取 消</el-button>
                <el-button  size="mini" type="primary" @click="confirmDelete()">确 定</el-button>
            </span>
        </el-dialog>

        <div class="post-item">
            <h3>{{item.title}}
                <template v-for="tag in item.tags">
                    <el-tag size="mini">{{tag}}</el-tag>
                </template>
            </h3>
            <span style="background-color:pink;padding:5px;color:#fff;border-radius:5px 0">{{item.category }}</span>
            <span class="desc-font">create at :{{item.createAt }}</span>
            <span class="desc-font">last modified :{{item.updateAt}}</span> 
            <el-button  size="mini" type="danger" style="float:right;margin:0 5px " @click="delDialogVisible = true">
                <i class="el-icon-delete"></i>
            </el-button>
            <router-link :to="`Post/${item._id}`">
                <el-button  size="mini" type="success" style="float:right" >
                    <i class="el-icon-view"></i>
                </el-button>              
            </router-link>
            
        </div>
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

<style lang="scss">
.post-item{
    height: 80px;
    border-bottom:1px #d3d3d3 solid;
    margin:5px;    
}
</style>
