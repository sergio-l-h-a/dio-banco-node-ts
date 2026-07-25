import express from "express";
import contasRoutes from "./routes/contasRoutes";

const app = express();
app.use(express.json());

app.use(contasRoutes);


app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
});
