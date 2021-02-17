import * as http from 'http'

const driverServiceURLs = []

/**
 *  This function will find the most optimal DriverService
 * instance and return the URL of it.
 */
export const findDriverServiceURL = (req: http.IncomingMessage) => {
    const optimalDriverServiceUrl = driverServiceURLs[0];
    const path = req.url;
    return optimalDriverServiceUrl + path;
}

export const registerDriverService = (url: string): void => {
    driverServiceURLs.push(url);
}