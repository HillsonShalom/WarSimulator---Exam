import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import Missile from "../../types/schemas/missileSchema";
import IUser from "../../types/models/user";
import IOrganization from "../../types/models/organization";
import IMissile from "../../types/models/missile";

const getAmmo = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.token!.id as IUser
    const org = user.organization as IOrganization
    const weapons = org.resources.map(r => r.id as IMissile)
    
    res.json(weapons)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getAmmo