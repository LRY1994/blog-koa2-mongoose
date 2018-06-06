import Vue from 'vue';

/*
 * @descript 时间戳转化成格式化的时间字符串
 * @param val {String|Number} 时间戳
 * @param str {String} 格式化参数 默认 yyyy-mm-dd hh:MM:ss
 */
Vue.filter('dateformat', (val) => {
let tidx = val.indexOf('T'),
    zidx = val.indexOf('Z');
return mystr.replace("T"," ")
});