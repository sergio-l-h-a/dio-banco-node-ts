import { Router } from "express";
import { criarContaController } from "../controllers/criarContaController";
import { depositoController } from "../controllers/depositoController";
import { saqueController } from "../controllers/saqueController";
import { extratoController } from "../controllers/extratoController";
import { transferenciaController } from "../controllers/transferenciaController";
import { listarContasController } from "../controllers/listarContasController";

const router = Router();

router.post("/contas", criarContaController);
router.post("/contas/:id/deposito", depositoController);
router.post("/contas/:id/saque", saqueController);
router.get("/contas/:id/extrato", extratoController);
router.post("/contas/:idOrigem/transferir/:idDestino", transferenciaController);
router.get("/contas", listarContasController);

export default router;
