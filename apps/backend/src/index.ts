import express from "express";
import 'dotenv/config'
import healthCheker from "./controllers/healthcheck.controller";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", healthCheker);

app.listen(port,()=>{
    console.log(`App is serving on ${port}`);
})