## 为什么有这个项目

   我朋友给我说如果有女生给你发信息你没有及时回复她会生气的，我之前也看过一些机器人的项目，于是就想自己折腾下，本代码由[wechatBot](https://github.com/gengchen528/wechatBot)改造出来

## 调整部分

 * [robot-g](http://www.robot-g.com)机器人，不用申请，开箱即用 
 
 * [土味情话](https://api.lovelive.tools/api/SweetNothings)添加

## config部分

``` js
// 配置文件
module.exports = {
    openTask: false,
    // 情话定时任务
    sweetNothingTask:{
        //url
        url:'https://api.lovelive.tools/api/SweetNothings',
        // 用户 可以怕配置多个
        users:[
            {
                open: false, //如果是false将不参与定时任务
                name:'用户一号', //你备注的好友名称 ,果然你区分不了就两个都写你备注的名称吧
                nickName:'小九',  // 好友的昵称
                schedule:'30 * * * * *' //每隔30秒发送一次信息，规则见 /schedule/index.js
            },
            {
                open: false, 
                name:'用户二号', 
                nickName:'小九',
                schedule:'10 * * * * *'
            }
        ]
    },

    //robot-g 机器人
    robotg:{
      open: true,// 是否开启自动回复
      url: 'http://www.robot-g.com/g/data.php',
      replyAll: false, //是否开启全部用户回复,默认关闭
      useUsers: ['小九','zhaoyunx',''],  //使用机器人的用户 跟上面的name和nickName使用一样
      ignoreUsers: ['小九'] //忽略的用户
    },
}
```