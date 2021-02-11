import * as httpProxy from 'http-proxy'
const PORT = 5002;

const proxy = httpProxy.createProxyServer({target:'http://localhost:5001'})
proxy.on("proxyRes", (proxyReq, req, res) => {
    console.log("Request")
})
proxy.listen(PORT);

// http.createServer((req, res) => {
//     enableCors(res);
//     const driverServiceURL = "http://localhost:5001"
//     const path = req.url;
//     proxy.web(req, res), 
//     // res.writeHead(302, {
//     //     'Location': driverServiceURL + path
//     // })
//     // res.end();
// }).listen(PORT);