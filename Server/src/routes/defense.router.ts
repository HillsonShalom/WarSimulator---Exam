import { Router } from "express";
import intercept from "../controllers/defense/intercept";
import getAll from "../controllers/defense/getAll";

const defenseRouter = Router();

defenseRouter.patch('/', intercept)
defenseRouter.get('/', getAll)

export default defenseRouter;