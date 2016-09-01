'use strict'

exports.reply = function* (next) {
    var message = this.weixin
    if(message.MsgType === 'event'){
        if(message.Event === 'subscribe'){
            if(message.EventKey){
                console.log('扫描二维码'+ message.EventKey +' '+ message.ticket)
            }
            this.body = '正在开启天眼系统,请输入敌人姓名'
        }
        else if(message.Event === 'unsubscribe'){
            console.log('无情取关了我')
            this.body = ''
        }
    }
    else if(message.MsgType === 'text'){
        var content = message.Content
        var reply = '你说的啥?,我听不懂啊!'
        if( content === '施斯颖' ){
            reply = "姓名:施斯颖\n"+
                    "性别:男\n"+
                    "籍贯:汕尾\n"+
                    "身高:185\n"+
                    "女朋友:CWX\n"+
                    "爱好:不可描述\n"+
                    "地理位置:东莞理工学院真草足球场\n"+
                    "******\n"+
                    "[为了维护良好的上网环境,以下内容已屏蔽]"
        }
        else if ( content === '如何评价施斯颖在朋友圈的行为' ){
            reply = 'mdzz~'
        }
        else if ( content === '你认识李京华么'){
            reply = '啊'
        }
        else if ( content === '这样说不太好吧'){
            reply = '不好意思,我向来只说实话!'
        }
        this.body = reply
    }
    yield next 
}