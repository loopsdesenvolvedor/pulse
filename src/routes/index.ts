import express, {
  Express,
  Router,
  Request,
  Response,
  NextFunction,
} from "express";
import path from "path";

import { usersPublic } from "./users/public.js";

const router = Router();

export default (app: Express): void => {
  app.use(express.json());
  app.use(express.static(path.join(process.cwd(), "public")));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");

  app.use(usersPublic);

  app.use((req: Request, res: Response) => {
    res.status(404).render("404");
  });

  // Erros lançados pelas rotas chegam aqui
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error);

    res.status(500).render("error", {
      message: "Ocorreu um erro no servidor.",
    });
  });
};
