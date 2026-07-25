# dio-banco-node-ts
back-end utilizando node JS para criar uma aplicação bancária utilizando os padrões Rest.

# 🏦 Sobre o projeto
Este projeto é uma API REST desenvolvida em Node.js + Express + TypeScript, simulando operações bancárias básicas.
Criado como parte do desafio da DIO, ele implementa:

🧾 Criação de contas

💰 Depósitos

🏧 Saques

🔁 Transferências

📄 Consulta de extrato

📋 Listagem de contas

Toda a lógica funciona em memória, sem banco de dados externo.


# 🚀 Tecnologias utilizadas
Este projeto foi construído utilizando tecnologias modernas e eficientes para desenvolvimento backend:

🟩 Node.js — Ambiente de execução JavaScript no servidor

🔷 TypeScript — Superset do JavaScript com tipagem estática

⚫ Express — Framework minimalista para criação de APIs

🆔 UUID — Geração de identificadores únicos

🔄 Nodemon — Atualização automática durante o desenvolvimento

⚡ Thunder Client — Testes das rotas diretamente no VS Code


📂 Estrutura do projeto
````
📁 src/
 ├── 📂 controllers/
 │    ├── 📄 criarContaController.ts
 │    ├── 📄 depositoController.ts
 │    ├── 📄 saqueController.ts
 │    ├── 📄 extratoController.ts
 │    ├── 📄 transferenciaController.ts
 │    └── 📄 listarContasController.ts
 ├── 📂 database/
 │    └── 📄 database.ts
 ├── 📂 routes/
 │    └── 📄 contasRoutes.ts
 └── 📄 server.ts
````


📡 Rotas da API
````
🔹 Criar conta
POST /contas
{
  "nome": "Francisco"
}


🔹 Listar contas
GET /contas


🔹 Depósito
POST /contas/:id/deposito
{
  "valor": 100
}


🔹 Saque
POST /contas/:id/saque
{
  "valor": 50
}


🔹 Transferência
POST /contas/:idOrigem/transferir/:idDestino
{
  "valor": 200
}


🔹 Extrato
GET /contas/:id/extrato

Retorna:

👤 Nome

💵 Saldo

📜 Histórico de operações
````
▶️ Como rodar o projeto
1️⃣ Instalar dependências

npm install

2️⃣ Rodar o servidor
npm run dev


Servidor disponível em:
http://localhost:3333


🧠 Modelo de dados

{
  id: string,
  nome: string,
  saldo: number,
  extrato: Array<{
    tipo: "deposito" | "saque" | "transferencia",
    valor: number,
    data: Date
  }>
}


👨‍💻 Autor
Francisco Sergio  
Desenvolvedor focado em lógica, backend e projetos práticos.
