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

export default{
    login
}