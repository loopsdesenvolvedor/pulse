import express, { NextFunction, Request, Response } from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

// Qualquer URL que não tenha rota chega aqui
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
app.listen(PORT, () => console.log(`App is running on port:${PORT}`));
