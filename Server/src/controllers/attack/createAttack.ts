import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import IUser from "../../types/models/user";
import IOrganization from "../../types/models/organization";
import IMissile from "../../types/models/missile";
import Dispatch from "../../types/schemas/dispatchSchema";
import IDispatch from "../../types/models/dispatch";
import {
  MissileType,
  OrganizationType,
  UserType,
} from "../../types/extensions/types";
import { createAttack } from "../../types/DTOs/attackDTOs";
import Organization from "../../types/schemas/organizationSchema";
import DispatchStatus from "../../types/models/enums";

const createAttack = async (
  req: Request<any, any, createAttack>,
  res: Response
) => {
  try {
    const user = req.token!.id as UserType;
    const org = user.organization as OrganizationType;
    const weapons = org.resources.map((r) => r.id as MissileType);

    const missile = weapons.find((w) => w.name === req.body.missile);
    if (!missile) throw new AppResError(404, req.body.missile + " not found!");

    const region = await Organization.findOne({ region: req.body.region });
    if (!region) throw new AppResError(404, req.body.region + " not found!");

    const attack: IDispatch = {
      attack: {
        attacker: user.id,
        missile: missile.id,
        region: req.body.region,
      },
      defense: { defenser: null, missile: null },
      status: DispatchStatus.LOADED,
      launchMoment: null,
    };
    const disp = new Dispatch(attack);
    const id = (await disp.save()).id;
    res.status(201).json({message: "loading new " + req.body.missile, id})
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default createAttack;
