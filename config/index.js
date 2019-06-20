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
      replyAll: true, //是否开启全部用户回复,默认关闭
      useUsers: ['小九','zhaoyunx',''],  //使用机器人的用户 跟上面的name和nickName使用一样
      ignoreUsers: ['微信运动','微信开发者','微信读书','微信','小九'] //忽略的用户,可以是公众号名称
    },
}
