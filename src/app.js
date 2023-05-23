import "dotenv/config";
import express from "express";
import cors from "cors";
import { dirname, join} from "path";
import {fileURLToPath} from "url";

import routeconvert from './routes/routeconvert.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());

app.use(express.json());

app.use("/api",routeconvert);

// static files
app.use(express.static(join(__dirname, 'public')));

app.use((req, res, next) => {
  res.status(404).send("<h1>404</h1><h3>Route Not Found</h3>");
});


export default app;
