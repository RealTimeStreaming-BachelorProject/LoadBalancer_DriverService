import * as http from 'http'

const driverServiceURLs = []

/**
 *  This function will find the most optimal DriverService
 * instance and return the URL of it.
 */
export const findDriverServiceURL = (req: http.IncomingMessage): string | null => {
    const optimalDriverServiceUrl = driverServiceURLs[0];
    if (!optimalDriverServiceUrl) return null
    const path = req.url;
    return optimalDriverServiceUrl + path;
}

export const registerDriverService = (url: string): void => {
    if (!isValidUrl(url)) return;
    driverServiceURLs.push(url);
    console.log(`Registered DriverService [${url}]`)
}

const isValidUrl = (url: string) => {
    // TODO: Check if url is valid
    return true;
}