import express, { Application, Request, Response, NextFunction } from "express";

import { router as userRoutes } from "./routes/user.routes";
import axios from "axios";

const app: Application = express();

app.use("/users", userRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});


/*app.use("/", (req: Request, res: Response, next: NextFunction): void => {
    async function getId() {
      return await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    }
});*/

export default app;