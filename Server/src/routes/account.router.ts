import { Router } from "express";
import register from "../controllers/account/register";
import login from "../controllers/account/login";
import logout from "../controllers/account/logout";
import getAccount from "../controllers/account/getAccount";
import setAccount from "../controllers/account/setAccount";
import { verifyToken } from "../middlewares/verifyToken.guard";
import getOrgs from "../controllers/account/getOrgs";

const accountRouter = Router();

accountRouter.post('/register', register)
accountRouter.post('/', login)
accountRouter.delete('/', logout)
accountRouter.get('/', verifyToken, getAccount)
accountRouter.get('/orgs', getOrgs)
accountRouter.patch('/', setAccount)

export default accountRouter;