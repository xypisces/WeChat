'use strict'

exports.reply = function *(next) {
    var message = this.weixin

    if(message.MsgType === 'event'){
        if(message.Event === 'subscribe'){
            if(message.EventKey){
                console.log('扫描二维码'+ message.EventKey +' '+ message.ticket)
            }
            this.body = '因为你关注了这个公众号,颜值属性+666'
        }
        else if(message.Event === 'unsubscribe'){
            console.log('无情取关了我')
            this.body = ''
        }
    }
    else if(message.MsgType === 'text'){
        var content = message.Content
        var reply = '你说的啥?,我听不懂啊!'
        if( content === '1' ){
            reply = '我是天下第一!'
        }
        this.body = reply
    }
    yield next 
}