import express, {
  Express,
  Router,
  Request,
  Response,
  NextFunction,
} from "express";
import path from "path";
import { fileURLToPath } from "url";
import { usersPublic } from "./users/public.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

export default (app: Express): void => {
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));

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
