const API_LIST = {
    /**登录 */
    LOGIN :{
        method:'post',
        url :'/user/signin'
    },
    /**文章 */
    ADD_POST :{
        method:'post',
        url :'/post/new',
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
        url :'/post/update',
        // headers: { 'Content-Type': `multipart/form-data;boundary=${Math.random()}` },
    },
    DEL_POST:{
        method:'get',
        url :'/post/delete'
    },
    // IMG_UPLOAD:{
    //     method: 'post',
    //     url:'/img/upload',
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // }
}


export default API_LIST