import * as http from 'http'
import { enableCors } from './util/cors';
const PORT = 5002;

// const proxy = httpProxy.createProxyServer({target:'http://localhost:5001'})
// proxy.on("proxyRes", (proxyReq, req, res) => {
//     console.log("Request")
// })
// proxy.listen(PORT);

http.createServer((req, res) => {
    enableCors(res);
    const driverServiceURLs = ["http://localhost:5001"]
    const path = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const newUrl = driverServiceURLs[0] + path;
    res.write(JSON.stringify({url: newUrl}))
    // res.writeHead(302, {
    //     'Location': driverServiceURL + path
    // })
    res.end();
}).listen(PORT);