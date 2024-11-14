import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import { OrganizationType, UserType } from "../../types/extensions/types";
import Dispatch from "../../types/schemas/dispatchSchema";
import { DispatchStatus } from "../../../client/src/types/DTOs/response/fromHistory";
import { ITableItem } from "../../types/DTOs";

const getOurs = async (req: Request, res: Response) => {
  try {
    const user = req.token!.id as UserType;
    const org = user.organization as OrganizationType;

    const query = (await Dispatch.find({})
      .select("-defense -updatedAt -__v")
      .populate({
        path: "attack.attacker",
        select: "organization -_id",
        populate: { path: "organization", select: "name" },
      })
      .populate({ path: "attack.missile", select: "name" })
      .exec()) as unknown as attackersTableItem[];

    const table: ITableItem[] = query.map((q) => {
      return {
        id: q._id,
        launchTime: q.launchMoment,
        name: q.attack.missile.name,
        fromOrg: q.attack.attacker.organization.name,
        toRegion: q.attack.region,
        timeToHit: ``,
        status: q.status
      };
    });

    res.json(table);
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getOurs;

interface attackersTableItem {
  _id: string;
  attack: {
    attacker: {
      organization: {
        _id: string;
        name: string;
      };
    };
    missile: {
      _id: string;
      name: string;
    };
    region: string;
  };
  status: DispatchStatus;
  launchMoment: Date | null;
  createdAt: Date;
}
