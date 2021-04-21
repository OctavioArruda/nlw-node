import express from "express";

import "./database";
import {routes} from "./routes";  

const listenPort = 3333;
const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => `Server is running on port ${listenPort}`);

