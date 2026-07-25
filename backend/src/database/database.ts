
interface Conta {
    id: string;
    nome: string;
    saldo: number;
    extrato: {
        tipo: "deposito" | "saque" | "transferencia";
        valor: number;
        data: Date;
    }[];
}

export const contas: Conta[] = [];
