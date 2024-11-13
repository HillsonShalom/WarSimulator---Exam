import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import Dispatch from "../../types/schemas/dispatchSchema";

const getOne = async (
  req: Request<{id: string}>,
  res: Response
) => {
  try {
    const disp = await Dispatch.findById(req.params.id).populate('attack.attacker attack.missile defense.defenser defense.missile').exec();
    if (!disp) throw new AppResError(404, "Dispatch not found!")

    res.json(disp)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getOne