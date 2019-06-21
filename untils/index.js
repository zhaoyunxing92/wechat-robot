function getDay(date) {
    var date2 = new Date();
    var date1 = new Date(date);
    var iDays = parseInt(Math.abs(date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);
    return iDays;
}

function formatDate(date) {
    var tempDate = new Date(date);
    var year = tempDate.getFullYear();
    var month = tempDate.getMonth() + 1;
    var day = tempDate.getDate();
    var hour = tempDate.getHours();
    var min = tempDate.getMinutes();
    var second = tempDate.getSeconds();
    var week = tempDate.getDay();
    var str = ''
    if (week === 0) {
        str = '星期日'
    } else if (week === 1) {
        str = "星期一";
    } else if (week === 2) {
        str = "星期二";
    } else if (week === 3) {
        str = "星期三";
    } else if (week === 4) {
        str = "星期四";
    } else if (week === 5) {
        str = "星期五";
    } else if (week === 6) {
        str = "星期六";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return year + "-" + month + "-" + day + "日 " + hour + ":" + min  + ' '+ str;
}

// 数组减法
function subtraction(arr1,arr2){
    let newArr=new Array()
    uniquelize(arr1).forEach(arr=> { 
        if(arr2.indexOf(arr)===-1){
            newArr.push(arr) 
        }
    })
    return newArr;
}

// 数组去除重复,去除空字符串
function uniquelize (a){  
     let arr = new Array();
     for(var i = 0; i < a.length; i ++){  
         let str=a[i];
         if(arr.indexOf(str)===-1&&str.length>0){  
            arr.push(str);  
         }  
     }  
   return arr;
}
// 判断是否撤回信息 微信撤回纯数字19位的id
function revocationMsg(msg){

   return /^\d{19}$/.test(msg)
}

module.exports = {
    getDay, 
    formatDate,
    subtraction,
    uniquelize,
    revocationMsg 
}
