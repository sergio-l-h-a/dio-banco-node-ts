import { Request, Response } from "express";
import { contas } from "../database/database";
import { v4 as uuidv4 } from "uuid";

export function criarContaController(req: Request, res: Response) {
    const { nome } = req.body || {};

    if (!nome) {
        return res.status(400).json({ error: "Nome é obrigatório" });
    }

    const novaConta = {
        id: uuidv4(),
        nome,
        saldo: 0,
        extrato: []
    };

    contas.push(novaConta);

    return res.status(201).json(novaConta);
}