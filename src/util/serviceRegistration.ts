interface Service {
  hostname: string;
  port: number;
}

export const services: Service[] = [
  // {
  //   hostname: "localhost",
  //   port: 5002,
  // },
];

export const getService = {
  random: () => {
    const randomService = services[Math.floor(Math.random() * services.length)];
    return randomService;
  },
};

export const registerservice = (service: Service): void => {
  if (services.find(s => JSON.stringify(s) === JSON.stringify(service))) return;
  services.push(service);
  console.log(`Registered DriverService [${service.hostname}, ${service.port}]`);
};
