import * as http from 'http'
import { enableCors } from './util/cors';
const PORT = 5002;

http.createServer((req, res) => {
    enableCors(res);
    const driverServiceURL = "http://localhost:5001"
    const path = req.url;
    console.log(path)
    res.writeHead(302, {
        'Location': driverServiceURL + path
    })
    res.end();
}).listen(PORT)