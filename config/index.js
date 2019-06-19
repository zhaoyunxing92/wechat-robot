// 配置文件
module.exports = {
    // 基础定时发送功能配置项（必填项）
    NAME: 'test', //女朋友备注姓名
    NICKNAME: 'test', //女朋友昵称
    MEMORIAL_DAY: '2015/04/18', //你和女朋友的纪念日
    CITY: 'shanghai', //女朋友所在城市
    LOCATION: "pudong-new-district", //女朋友所在区（可以访问墨迹天气网站后，查询区的英文拼写）
    SENDDATE: '30 * * * * *', //每隔30秒发送一次信息，规则见 /schedule/index.js
    ONE: 'http://wufazhuce.com/',//ONE的web版网站
    SWEET_NOTHINGS: 'https://api.lovelive.tools/api/SweetNothings', //土味情话
    MOJI_HOST: 'https://tianqi.moji.com/weather/china/', //中国墨迹天气url

    //高级功能配置项（非必填项）
    AUTOREPLY: true, //自动聊天功能 默认开启
    AIBOTAPI: 'http://api.tianapi.com/txapi/robot/', //天行机器人API 注册地址https://www.tianapi.com/signup.html?source=474284281
    APIKEY: '天行机器人apikey', //天行机器人apikey
    robotg: 'http://www.robot-g.com/g/data.php',
    ignoreRobotUser: [''], //排除那些人不使用机器人 是微信的名称，不是昵称
    useRobotUsers: ['小九']  // 那些人使用机器人 是微信的名称，不是昵称
}