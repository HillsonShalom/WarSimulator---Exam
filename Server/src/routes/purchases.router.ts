import { Router } from "express";
import buy from "../controllers/purchases/buy";

const purchasesRouter = Router();

purchasesRouter.post('/', buy)

export default purchasesRouter;