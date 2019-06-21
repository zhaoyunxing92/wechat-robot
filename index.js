/**
 * WechatBot
 *  - https://github.com/gengchen528/wechatBot
 */
const { Wechaty, Friendship } = require('wechaty')
const schedule = require('./schedule/index')
const config = require('./config/index')
const untils = require('./untils/index')
const superagent = require('./superagent/index')

// 延时函数，防止检测出类似机器人行为操作
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

//  二维码生成
function onScan(qrcode, status) {
    require('qrcode-terminal').generate(qrcode) // 在console端显示二维码
    const qrcodeImageUrl = [
        'https://api.qrserver.com/v1/create-qr-code/?data=',
        encodeURIComponent(qrcode),
    ].join('')
    console.log(qrcodeImageUrl)
}

// 登录
async function onLogin(user) {
    console.log(`贴心小助理${user}登录了`)
   
    // 登陆后创建定时任务
    if(config.openTask){
      await initSchedule()
    }
    
}

//登出
function onLogout(user) {
    console.log(`小助手${user} 已经登出`)
}

// 监听对话
async function onMessage(msg) {
  
    const contact = msg.from() // 发消息人
    const content = msg.text() //消息内容
    const room = msg.room() //是否是群消息
    const name=contact.name()
    
    if(msg.type===1){
        console.log(`[${name}] 是公众号信息不理睬`)
        return 
    }
    // 过滤判断
    if (msg.self()||config.robotg.ignoreUsers.indexOf(name)!==-1) {
        console.log(`[${name}] 命中忽略规则不处理`)
        return
    }
    
    //好友判断
    if(!contact.friend()){
        console.log(`[${name}] 跟你不是好友不理睬`)
        return
    }
    
    if (room) { // 如果是群消息
        //const topic = await room.topic()
        console.log('群消息不处理')
       // console.log(`群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`)
    } else { // 如果非群消息
        console.log(`发消息人: ${name} 消息内容: ${content}`)
        console.log()
        // 如果开启自动聊天
        if (config.robotg.open) { 
            //需要发送的用户
            let useUsers=untils.subtraction(config.robotg.useUsers,config.robotg.ignoreUsers);
           
            if(useUsers.indexOf(name)!==-1 || useUsers.indexOf(contact.alias())!==-1 ||config.robotg.replyAll){
                console.log(`规则过滤可以使用robot-g用户：[${useUsers}]`)
                let reply
                if(content.indexOf('[收到了一个表情，请在手机上查看]')!==-1||content.indexOf('emoji')!==-1){
                    reply='暂时只支持文字哈 [g]'
                }else{
                    reply = await superagent.robot(content)+' [rg]'
                }
                console.log('robot-g >', reply)
                try {
                    await delay(2000)
                    await contact.say(reply)
                } catch (e) {
                    console.error(e)
                }
            }else{
                console.log(`用户[${name}]不在规则内，不处理`)
            }
            
        }
    }
    
}

// 定时任务发送
async function initSchedule() {
    console.log('定时任务开始加载')
    config.sweetNothingTask.users.forEach(user => {
        if(user.open){
            schedule.setSchedule(user.schedule, async() => {
                console.log(`用户：${user.name}开始定时任务`)
                let nothings=await superagent.sweetNothings()
                let contact = await bot.Contact.find({ name: user.nickName }) || await bot.Contact.find({ alias: user.name }) // 获取你要发送的联系人
                let logMsg
                try {
                    logMsg = nothings
                    await delay(2000)
                    await contact.say(logMsg) // 发送消息
                } catch (e) {
                    logMsg = e.message
                }
                 console.log(logMsg)   
            })
        }
    })
}

const bot = new Wechaty({ name: 'WechatEveryDay' })

bot.on('scan', onScan)
bot.on('login', onLogin)
bot.on('logout', onLogout)
bot.on('message', onMessage)

bot.start()
    .then(() => console.log('开始登陆微信'))
    .catch(e => console.error(e))