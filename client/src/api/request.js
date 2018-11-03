import axios from 'axios';
import config from '@/config/index.js';
import APILIST from './api';

const BASE_URL = config.BASE_URL;

function setAllOption(options){
    options.baseURL = BASE_URL;
    return options;

}

function listPost({params}){
    let options = {
        params,
        ...APILIST.LIST_POST    
    };
    options = setAllOption(options);
    console.log(options)
   
    return axios(options);
}
function getPost({params}){
    let options = {
        params ,
        ...APILIST.GET_POST 
    };
    options = setAllOption(options);
    console.log(options)
    return axios(options);
}
export default{
    listPost,
    getPost,
    
}