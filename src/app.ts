import * as http from 'http'
import { enableCors } from './util/cors';
import { findDriverServiceURL } from './util/driverService';
const PORT = 5002;

/**
 * This function will respond to any request to the server.
 * It responds with a JSON object like {url: "http:/..."} which
 * points a DriverService server.
 */
const handleRequests = (req: http.IncomingMessage, res: http.ServerResponse) => {
    enableCors(res);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const url = findDriverServiceURL(req);
    res.write(JSON.stringify({url}))
    res.end();
}

http.createServer(handleRequests).listen(PORT);

