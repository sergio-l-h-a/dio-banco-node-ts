import { Request, Response } from "express";
import { contas } from "../database/database";

export function depositoController(req: Request, res: Response) {
    const { id } = req.params;
    const { valor } =  req.body;

    if (!valor || valor <= 0) {
        return res.status(400).json({erro: "Valor de deposito inválido" });
    }

    const conta = contas.find((c) => c.id === id);

    if (!conta) {
        return res.status(404).json({ erro: "Conta não encontrada" });
    }

    conta.saldo += valor;

    conta.extrato.push({
        tipo: "deposito",
        valor,
        data: new Date()
    });

    return res.status(200).json({
        menssage: "Deposito realizado  com sucesso",
        saldoAtual: conta.saldo
    });
}