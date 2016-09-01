'use strict'

var path = require('path')
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

module.exports = config