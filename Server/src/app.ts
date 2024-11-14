import exp from "express";
import http from 'http'
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import dbConnection from "./DB/dbConnection";
import { Server } from "socket.io";
import { accountRouter, attackRouter, defenseRouter, purchasesRouter } from "./routes";
import SocketRouter from "./socket/socket.router";
import { onlyAttacker, onlyDefenser } from "./middlewares/role.guards";
import { verifyToken } from "./middlewares/verifyToken.guard";
const port = process.env.PORT;

dbConnection();

const app = exp();
app.use(exp.static('client/dist'))
const server = http.createServer(app)

const io = new Server(server)
const socket = new SocketRouter()
io.on('connection', socket.connection)

app.use(cors())
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
app.use(exp.json());
app.use(cookieParser());

app.use('/api/account', accountRouter)
app.use('/api/attack', verifyToken, onlyAttacker, attackRouter)
app.use('/api/defense', verifyToken, onlyDefenser, defenseRouter)
app.use('/api/store', purchasesRouter)


server.listen(port || 5000, () => {
  console.log(`Listening on port ${port}...`);
});