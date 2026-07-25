import { Request, Response } from "express";
import { contas } from "../database/database";

export function extratoController(req: Request, res: Response) {
  const { id } = req.params;

  const conta = contas.find((c) => c.id === id);

  if (!conta) {
    return res.status(404).json({ erro: "Conta não encontrada" });
  }

  return res.status(200).json({
    nome: conta.nome,
    saldo: conta.saldo,
    extrato: conta.extrato
  });
}
