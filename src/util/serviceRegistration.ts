import * as httpProxy from "http-proxy";

interface Service {
  host: string;
  port: number;
}

export const services: Service[] = [
  {
    host: "localhost",
    port: 5002,
  },
];

export const proxies: any[] = [];

export const getService = {
  random: () => {
    const randomService = services[Math.floor(Math.random() * services.length)];
    return randomService;
  },
};

export const getProxy = {
  random: () => {
    const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];
    return randomProxy;
  },
};

export const registerservice = (service: Service): void => {
  if (services.find((s) => JSON.stringify(s) === JSON.stringify(service)))
    return;
  const proxy = httpProxy.createProxyServer({
    target: service,
    ws: true,
    xfwd: true,
  });
  proxies.push(proxy);
  services.push(service);
  console.log(`Registered DriverService [${service.host}, ${service.port}]`);
};
