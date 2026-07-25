import { Request, Response } from "express";
import { contas } from "../database/database";

export function listarContasController(req: Request, res: Response) {
  return res.status(200).json(contas);
}
