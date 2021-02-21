import * as express from "express";
import * as http from "http";
import * as httpProxy from "http-proxy";
import * as cors from "cors";

const PORT = 5010;

const targets = [
  {
    host: "localhost",
    port: 5002,
  },
];

const proxy = httpProxy.createProxyServer();
const proxyServer = http.createServer((req, res) => proxy.web(req, res));
let target = {};

const getRandomTarget = () => {
  const randomTarget = targets[Math.floor(Math.random() * targets.length)];
  return randomTarget;
};

proxyServer.on("upgrade", (req, socket, head) => {
  target = getRandomTarget();
  proxy.ws(req, socket, head, {
    target,
  });
});

process.on("uncaughtException", (error) => {
    if ((error as any).code === "ECONNREFUSED") {
        console.log("Error trying to connect to DriverService")
    }
})

proxyServer.listen(PORT);

// app.get("/register-service", (req, res) => {
//     res.send("REGISTER SERVICE")
// })

// app.get("*", (req, res) => {
//     console.log(`Request to ${req.headers}`)
//     const randomTarget = targets[Math.floor(Math.random() * targets.length)];
//     proxyServer.web(req, res, {
//       target: randomTarget,
//     });
// })

// app.listen(PORT, () => console.log("Server started"))
