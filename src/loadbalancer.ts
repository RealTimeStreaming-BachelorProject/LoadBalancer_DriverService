import * as express from "express";
import * as http from "http";
import * as cors from "cors";
import { getProxy, getService, registerservice } from "./util/serviceRegistration";

const PORT = 5010;


const app = express();
app.use(cors());
app.use(express.json())

const proxyServer = http.createServer(express);
let target = {};

// REGISTER SERVICE
app.post("/register-service", (req, res) => {
  const { port } = req.body;
  const { hostname } = req;
  registerservice({host: hostname, port});
  res.json("Ok");
})  

// PROXY WEBSOCKET
app.get("*", (req, res) => {
  const proxy = getProxy.random();
  proxy.web(req, res);
})


// proxyServer.on("upgrade", (req, socket, head) => {
//   // target = getService.random();
//   // proxy.ws(req, socket, head, {
//   //   target,
//   // });
// });

process.on("uncaughtException", (error) => {
    if ((error as any).code === "ECONNREFUSED") {
        console.log("Error trying to connect to DriverService")
    }
})

app.listen(PORT, () => console.log("Server is up"))

proxyServer.listen(PORT);
// app.listen(PORT, () => console.log("Server started"))
