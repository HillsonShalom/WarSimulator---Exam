import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import Dispatch from "../../types/schemas/dispatchSchema";
import DispatchStatus from "../../types/models/enums";
import { MissileType } from "../../types/extensions/types";
import { setTimeHit } from "../../service/missileStatus";

const launch = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const disp = await Dispatch.findById(req.params.id)
      .populate("attack.missile")
      .exec();
    if (!disp) throw new AppResError(404, "Dispatch not found!");

    disp.status = DispatchStatus.LAUNCHED;
    disp.launchMoment = new Date();
    await disp.save();

    res.send("The missile launched successfully");

    const missile = disp.attack.missile as MissileType;
    setTimeout(setTimeHit, missile.speed * 3000);
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default launch;
