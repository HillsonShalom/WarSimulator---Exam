import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import {
  MissileType,
  OrganizationType,
  UserType,
} from "../../types/extensions/types";
import { interceptDto } from "../../types/DTOs/defenseDTOs";
import Dispatch from "../../types/schemas/dispatchSchema";
import DispatchStatus from "../../types/models/enums";

const intercept = async (
  req: Request<any, any, interceptDto>,
  res: Response
) => {
  try {
    const user = req.token!.id as UserType;
    const org = user.organization as OrganizationType;
    const weapons = org.resources.map((r) => r.id as MissileType);

    const threat = await Dispatch.findById(req.body.threatId);
    if (!threat) throw new AppResError(404, "False alarm. dispatch not found!");

    const interceptor = weapons.find((w) => w.name === req.body.missile);
    if (!interceptor)
      throw new AppResError(404, "Missile not found or you don't own it");

    if (threat.status === DispatchStatus.LAUNCHED) {
      threat.status = DispatchStatus.INTERCEPTED;
      threat.defense.defenser = user.id;
      threat.defense.missile = interceptor.id;
      await threat.save();
      res.status(200).send("Succeeded");
    } else {
      res.status(400).json({ status: threat.status });
    }
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default intercept;
