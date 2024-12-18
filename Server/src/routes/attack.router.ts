import { Router } from "express";
import createAttack from "../controllers/attack/createAttack";
import launch from "../controllers/attack/launch";
import getMine from "../controllers/attack/getMine";
import getOurs from "../controllers/attack/getOurs";
import getOne from "../controllers/attack/getOne";
import getAmmo from "../controllers/attack/getAmmo";

const attackRouter = Router();

attackRouter.post('/', createAttack)
attackRouter.patch('/:id', launch)
attackRouter.get('/', getOurs)
attackRouter.get('/mine', getMine)
attackRouter.get('/ammo', getAmmo)
attackRouter.get('/:id', getOne)

export default attackRouter;