import { Router } from "express";
import intercept from "../controllers/defense/intercept";
import getAll from "../controllers/defense/getAll";
import getAmmo from "../controllers/attack/getAmmo";

const defenseRouter = Router();

defenseRouter.patch('/', intercept)
defenseRouter.get('/', getAll)
defenseRouter.get('/ammo', getAmmo)

export default defenseRouter;