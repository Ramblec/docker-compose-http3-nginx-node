const http = require('http')
const server = http.createServer((req, res) => {
	console.log("Hello, World!");
})

server.listen(process.env.PORT || 3000, () => console.log(`server running on ${server.address().port}`))
