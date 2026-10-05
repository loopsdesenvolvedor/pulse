import express, { NextFunction, Request, Response } from "express";
import routes from "./routes/index.js";
const app = express();
const PORT = process.env.PORT || 3000;

routes(app);

app.listen(PORT, () => console.log(`App is running on port:${PORT}`));
