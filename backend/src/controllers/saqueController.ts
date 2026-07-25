import { Request, Response } from "express";
import { contas } from "../database/database";

export function saqueController(req: Request, res: Response) {
  const { id } = req.params;
  const { valor } = req.body;

  if (!valor || valor <= 0) {
    return res.status(400).json({ erro: "Valor inválido" });
  }

  const conta = contas.find((c) => c.id === id);

  if (!conta) {
    return res.status(404).json({ erro: "Conta não encontrada" });
  }

  if (conta.saldo < valor) {
    return res.status(400).json({ erro: "Saldo insuficiente" });
  }

  conta.saldo -= valor;

  conta.extrato.push({
    tipo: "saque",
    valor,
    data: new Date()
  });

  return res.status(200).json({
    mensagem: "Saque realizado com sucesso",
    saldoAtual: conta.saldo
  });
}
