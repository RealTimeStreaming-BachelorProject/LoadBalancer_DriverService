import * as express from "express";
import * as http from "http";
import * as cors from "cors";
import {
  getProxy,
  getService,
  registerservice,
} from "./util/serviceRegistration";

const PORT = 5010;
http.globalAgent.maxSockets = 10240;

// const app = express();
// app.use(cors());
// app.use(express.json())

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  console.log("Request")

  if (req.url === "/register-service") {
    console.log("Service registered");
  }

  const proxy = getProxy.random();
  proxy.web(req, res);
});

// // REGISTER SERVICE
// app.post("/register-service", (req, res) => {
//   const { port } = req.body;
//   const { hostname } = req;
//   registerservice({host: hostname, port: 5002});
//   res.json("Ok");
// })

// // PROXY WEBSOCKET
// app.get("*", (req, res) => {
//   const proxy = getProxy.random();
//   proxy.web(req, res);
// })

server.on("upgrade", (req, socket, head) => {
  const proxy = getProxy.random();
  proxy.web(req, socket, head);

  proxy.on("error", function (err, req, socket) {
    console.log(err)
    console.log("Socket upgrade error");
    socket.end();
  });
});

process.on("uncaughtException", (error) => {
  if ((error as any).code === "ECONNREFUSED") {
    console.log("Error trying to connect to DriverService");
  }
});

server.listen(PORT);
