import * as http from 'http'

/**
 *  This function will find the most optimal DriverService
 * instance and return the URL of it.
 */
export const findDriverServiceURL = (req: http.IncomingMessage) => {
    const driverServiceURLs = ["http://localhost:5001"] // TODO: Fetch dynamically
    const optimalDriverServiceUrl = driverServiceURLs[0];
    const path = req.url;
    return optimalDriverServiceUrl + path;
}