<template>
    <div>
        <el-card>
             标题：{{item.title}}
            创建时间：{{item.createTime}}
            上次修改时间：{{item.lastEditTime}} 
            <router-link :to="`Post/${item._id}`">详情</router-link>
        </el-card>
    </div>
</template>

<script>
export default {
props:{
    item:{
        type:Object,
        required:true
    }
}
}
</script>

<style>

</style>
