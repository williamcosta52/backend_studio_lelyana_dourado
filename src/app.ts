import express from 'express';
import cors from 'cors';
import route from './routes/index.route';

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);

export { app, server };
