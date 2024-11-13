import { Router } from "express";
import createAttack from "../controllers/attack/createAttack";
import launch from "../controllers/attack/launch";
import getMine from "../controllers/attack/getMine";
import getOurs from "../controllers/attack/getOurs";
import getOne from "../controllers/attack/getOne";

const attackRouter = Router();

attackRouter.post('/', createAttack)
attackRouter.patch('/:id', launch)
attackRouter.get('/', getMine)
attackRouter.get('/all', getOurs)
attackRouter.get('/:id', getOne)

export default attackRouter;