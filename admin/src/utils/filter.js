import Vue from 'vue';
import moment from  'moment';
/*
 * @descript 时间戳转化成格式化的时间字符串
 * @param val {String|Number} 时间戳
 * @param str {String} 格式化参数 默认 yyyy-mm-dd hh:MM:ss
 */
Vue.filter('dateformat', (input,pattern) => {
    if(pattern) return moment(input).format(pattern);
    return moment(input).format('YYYY-MM-DD HH:mm:ss');
});