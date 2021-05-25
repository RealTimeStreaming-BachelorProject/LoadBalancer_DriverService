import * as express from "express";
import * as cors from "cors";
const app = express();
// import {
//   findDriverServiceURL,
//   registerDriverService,
// } from "./util/serviceRegistration";

const PORT = 5010;
app.use(cors());
app.use(express.json());



/**
 * This function will respond to any request to the server.
 * It responds with a JSON object like {url: "http:/..."} which
 * points a DriverService server.
 */
app.get("/", (req, res) => {
  const url = findDriverServiceURL(req);
  if (url) {
    res.json(JSON.stringify({ url }));
  } else {
    res.status(404).json("No DriverService found");
  }
});

app.post("/register", (req, res) => {
  const { port } = req.body;
  const { protocol, hostname } = req;
  const url = protocol + "://" + hostname + ":" + port;
  registerDriverService(url);
  res.json("Ok");
});

app.listen(PORT, () => {
  console.log(`👮🏻‍♂️ Coordinator Service is running on port ${PORT}`);
});

const serviceUrls = ["http://localhost:5002", "http://localhost:5003", "http://localhost:5004"]

const findDriverServiceURL = (req) => {
    const randomIndex = Math.floor(Math.random() * serviceUrls.length)
    return serviceUrls[randomIndex]
}

const registerDriverService = (url) => {
    serviceUrls.push(url)
}