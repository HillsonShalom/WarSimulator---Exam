import exp from "express";
import http from 'http'
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import dbConnection from "./DB/dbConnection";
import { Server } from "socket.io";
import { accountRouter, attackRouter, defenseRouter, purchasesRouter } from "./routes";
const port = process.env.PORT;

dbConnection();

const app = exp();
const server = http.createServer(app)

const io = new Server(server)
// const socket = new SocketRouter(io)
// io.on('connection', socket.connection)

app.use(cors())
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
app.use(exp.json());
app.use(cookieParser());

app.use('/account', accountRouter)
app.use('/attack', attackRouter)
app.use('/defense', defenseRouter)
app.use('/store', purchasesRouter)


server.listen(port || 5000, () => {
  console.log(`Listening on port ${port}...`);
});