const superagent = require('superagent')

// http://www.robot-g.com/ 机器人
function robotG(url,method, params, data, cookies) {
  return new Promise(function (resolve,reject) {
	superagent(method, url)
	    .send(params)
		.set('content-type','application/x-www-form-urlencoded')
		.set('Accept','*/*')
		.set('Host','www.robot-g.com')
		.set('Origin','http://www.robot-g.com')
		.set('Referer','http://www.robot-g.com/g/c.php?bot=&hash=5d09fdb6b0022')
		.set('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36')
		.set('X-Requested-With','XMLHttpRequest')
		.end(function (err, response) {
		  if (err) {
			reject(err)
		  }
		  resolve(response)
		})
  })
}

//请求
function req(url,method, params, data, cookies) {
	return new Promise(function (resolve,reject) {
	  superagent(method, url)
		  .query(params)
		  .send(data)
		  .set('Content-Type','application/x-www-form-urlencoded')
		  .end(function (err, response) {
			if (err) {
			  reject(err)
			}
			resolve(response)
		  })
	})
  }

module.exports = {
  robotG,
  req
}
