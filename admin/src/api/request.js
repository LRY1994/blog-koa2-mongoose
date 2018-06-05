import axios from 'axios';
import config from '../config';
import APILIST from './api';

const BASE_URL = config.baseURL;

function setAllOption(options){
    options.baseURL = BASE_URL;
    return options;

}

function login(data){
    let options = {
        data: data ,
        ...APILIST.LOGIN    
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
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
function getPost(data){
    let options = {
        params: data ,
        ...APILIST.GET_POST 
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}

export default{
    login,
    addPost,
    listPost,
    getPost
}