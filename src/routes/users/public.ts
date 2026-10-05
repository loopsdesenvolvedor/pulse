import { Router, Request, Response } from "express";
const usersPublic = Router();

usersPublic.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Pulse - Notícias do Brasil e do mundo",
  });
});

export { usersPublic };
