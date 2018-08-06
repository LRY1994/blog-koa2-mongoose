const API_LIST = {
    /**登录 */
    LOGIN :{
        method:'post',
        url :'/user/check'
    },
    /**文章 */
    ADD_POST :{
        method:'post',
        url :'/post/add',
        headers: { 'Content-Type': `multipart/form-data`},
    },
    LIST_POST:{
        method:'get',
        url :'/post/list'
    },
    GET_POST:{
        method:'get',
        url :'/post/get'
    },
    EDIT_POST:{
        method:'post',
        url :'/post/edit',
        // headers: { 'Content-Type': `multipart/form-data;boundary=${Math.random()}` },
    },
    DEL_POST:{
        method:'get',
        url :'/post/del'
    },
    // IMG_UPLOAD:{
    //     method: 'post',
    //     url:'/img/upload',
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // }
}


export default API_LIST