'use strict'

var Koa = require('koa')
var path = require('path')
var wechat = require('./wechat/g')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt')

var config = {
	wechat: {
		appID: 'wxa3b73eef37f779d6',
		appSecret: 'd083f202f584ca6fb54b87c95aee8a02',
		token: 'imooctestwechatxypisces',
		getAccessToken : function(){
			return util.readFileAsync(wechat_file)
		},
		saveAccessToken:function(data){
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_file,data)
		}
	}
}

var app = new Koa()

app.use(wechat(config.wechat))
app.listen(1234)
console.log('Listening:1234')