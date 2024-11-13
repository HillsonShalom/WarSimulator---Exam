import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import IUser from "../../types/models/user";
import IToken from "../../types/models/token";
import IOrganization from "../../types/models/organization";

const getAccount = async (
  req: Request,
  res: Response
) => {
  try {
    const user: IUser = req.token?.id as IUser
    const org: IOrganization = user.organization as IOrganization
    user.password = "********"
    res.json(user)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getAccount