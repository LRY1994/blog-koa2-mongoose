<template>
    <div>
        <el-select v-model="postNew.category" clearable placeholder="选择分类" size="small" >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>
        <div class="tags" style="margin:10px 10px;display:inline-block">
            <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputTagVisible"
                v-model="inputTag"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </div>
        
        <el-input label="标题" placeholder="标题" v-model="postNew.title" > </el-input>
        <mavon-editor ref="mavon"
            v-model="postNew.body"            
            @imgAdd="$imgAdd" 
            @imgDel="$imgDel"/>
        
    </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import {BASE_URL}from '../config/index.js'
export default {
    props:{
        postOld:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    data(){
        return{
            postNew:this.postOld,
            dynamicTags:[],
            inputTagVisible:false,
            inputTag:'',
            options:[
                {label:'学习',value:'study'},
                {label:'生活',value:'life'},
                {label:'旅行',value:'trip'}
            ],
             img_file: {}//统一上传
        }
    },
    components:{ mavonEditor},
    created(){
        if(this.postNew.tags ==undefined){
            this.postNew.tags=[];
        }
        this.dynamicTags = this.postNew.tags;
        
    },
    watch:{
        dynamicTags(newval){
            this.postNew.tags = newval;
        },

    }, 
    mounted() {   
        /**
         * 例如：返回数据为 res = [[pos, url], [pos, url]...]
         * pos 为原图片标志（0）
         * url 为上传后图片的url地址
         */         
       
            let imgList = this.postOld.imgList;
            if(imgList){
                for (let  i=0;i<imgList.length;i++) {
                    let img = imgList[i]
                    this.$refs.mavon.$img2Url(img[0]-0, BASE_URL+img[1]);
                }
            }
            
      
    },
    methods:{
        showInput() {
            this.inputTagVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            
        },
        handleInputConfirm() {
            let inputTag = this.inputTag;
            if (inputTag) {
            this.dynamicTags.push(inputTag);
            }
            this.inputTagVisible = false;
            this.inputTag = '';            
        },


         $imgAdd(pos, $file){
            this.img_file[pos] = $file;
        },
        $imgDel(pos){
            delete this.img_file[pos];
        },
       
    
}
}
</script>

<style>

</style>
