const API_LIST = {
    /**登录 */
    LOGIN :{
        method:'post',
        url :'/user/check'
    },
    /**文章 */
    ADD_POST :{
        method:'post',
        url :'/post/add'
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
        url :'/post/edit'
    },
    DEL_POST:{
        method:'get',
        url :'/post/del'
    },
    SEARCH_POST:{
        method:'get',
        url :'/post/search'
    }
}


export default API_LIST