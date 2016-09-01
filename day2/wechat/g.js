'use strict'


var sha1 = require('sha1')
var getRawBody = require('raw-body')
var Wechat = require('./wechat')
var util = require('./util')

module.exports = function(opts){
	var wechat = new Wechat(opts)

	return function *(next){
		var token = opts.token
		var signature = this.query.signature
		var nonce = this.query.nonce
		var timestamp = this.query.timestamp
		var echostr = this.query.echostr
		var str = [token, timestamp, nonce].sort().join('')
		var sha = sha1(str)

		if(this.method === 'GET'){
			if(sha === signature){
				this.body = echostr + ''
			}else{
				this.body = 'wrong'
			}		
		}
		else if(this.method === 'POST'){
			if(sha != signature){
				this.body = 'wrong'
				return false
			}

			var data = yield getRawBody(this.req,{
				length: this.length,
				encoding:this.charset,
				limit: '1mb'
			})

			var content = yield util.parseXMLAsync(data)
			console.log(content)

			var message = util.formatMessage(content.xml)
			console.log(message)

			this.weixin = message

			// yield handler.call(this,next)
			console.log('this:'+ this._proto_)
			wechat.reply.call(this)
		}
	}
}