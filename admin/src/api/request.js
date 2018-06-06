import axios from 'axios';
import config from '../config';
import APILIST from './api';

const BASE_URL = config.baseURL;

function setAllOption(options){
    options.baseURL = BASE_URL;
    return options;

}
/**登录 */
function login(data){
    let options = {
        data: data ,
        ...APILIST.LOGIN    
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
/**文章 */
function addPost(data){
    let options = {
        data: data ,
        ...APILIST.ADD_POST    
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
function listPost(){
    let options = {
        ...APILIST.LIST_POST    
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
function getPost(params){
    let options = {
        params ,
        ...APILIST.GET_POST 
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
function editPost({data,params}){
    let options = {
        data,
        params,
        ...APILIST.EDIT_POST   
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
function delPost(params){
    let options = {
        params ,
        ...APILIST.DEL_POST 
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
function searchPost(params){
    let options = {
        params ,
        ...APILIST.SEARCH_POST 
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
export default{
    login,
    addPost,
    listPost,
    getPost,
    editPost,
    delPost,
    searchPost
}