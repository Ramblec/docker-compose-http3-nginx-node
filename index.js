const http = require('http')
const server = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'text/html' })

	//if (req.url === '/add?delay') {
		//const delay = req.query.delay//("delay")
		var str = req.url
		var delaystr = str.substring(8) //8:https://localhost:8080?delay=10000, 10:8080/?2&delay=100000
		var delaynum = Number(delaystr)
		var delayns = delaynum/1000000
		//console.log(delayns)
		const t1 = Date.now() //millisecond
		//console.log(t1)
		setTimeout(() => {
			const t2 = Date.now()
			const delta = t2 - t1
			console.log(delta.toString());
			//res.write(delta.toString());
			res.end()
		}, delayns); //millisecond
		//res.write('<h1>waaiNode and Nginx on Docker is Working</h1>')
		//res.end()
	//} else {
	//	res.write('<h1>404 Nout Found</h1>')
	//	res.end()
	//}
})

server.listen(process.env.PORT || 3000, () => console.log(`server running on ${server.address().port}`))