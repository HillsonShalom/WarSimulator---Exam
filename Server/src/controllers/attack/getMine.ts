import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import { MissileType, OrganizationType, UserType } from "../../types/extensions/types";
import Dispatch from "../../types/schemas/dispatchSchema";

const getMine = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.token!.id as UserType;
    const org = user.organization as OrganizationType;
    const weapons = org.resources.map((r) => r.id as MissileType);

    const disps = await Dispatch.find({"attack.attacker": user.id}).populate('attack.missile')
    res.json(disps)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getMine