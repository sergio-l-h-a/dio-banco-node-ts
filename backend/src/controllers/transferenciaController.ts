import { Request, Response } from "express";
import { contas } from "../database/database";

export function transferenciaController(req: Request, res: Response) {
  const { idOrigem, idDestino } = req.params;
  const { valor } = req.body;

  if (!valor || valor <= 0) {
    return res.status(400).json({ erro: "Valor inválido" });
  }

  const origem = contas.find((c) => c.id === idOrigem);
  const destino = contas.find((c) => c.id === idDestino);

  if (!origem || !destino) {
    return res.status(404).json({ erro: "Conta não encontrada" });
  }

  if (origem.saldo < valor) {
    return res.status(400).json({ erro: "Saldo insuficiente" });
  }

  origem.saldo -= valor;
  destino.saldo += valor;

  origem.extrato.push({
    tipo: "transferencia",
    valor: -valor,
    data: new Date()
  });

  destino.extrato.push({
    tipo: "transferencia",
    valor: valor,
    data: new Date()
  });

  return res.status(200).json({
    mensagem: "Transferência realizada com sucesso",
    saldoOrigem: origem.saldo,
    saldoDestino: destino.saldo
  });
}
