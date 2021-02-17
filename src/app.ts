import * as express from "express";
import * as cors from "cors";
const app = express();
import {
  findDriverServiceURL,
  registerDriverService,
} from "./util/driverService";

const PORT = 5010;
app.use(cors());

/**
 * This function will respond to any request to the server.
 * It responds with a JSON object like {url: "http:/..."} which
 * points a DriverService server.
 */
app.get("/", (req, res) => {
  const url = findDriverServiceURL(req);
  res.write(JSON.stringify({ url }));
});

app.get("/register", (req, res) => {
  const { url } = req.body;
  registerDriverService(url);
  res.json("Ok");
});

app.listen(PORT, () => {
  console.log(`👮🏻‍♂️ Coordinator Service is running on port ${PORT}`);
});
