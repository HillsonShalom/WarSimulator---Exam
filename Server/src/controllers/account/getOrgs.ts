import { Request, Response } from "express";
import AppResError from "../../types/extensions/AppResError";
import Organization from "../../types/schemas/organizationSchema";

const getOrgs = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await Organization.find({}).select('name role region -_id').exec()
    res.json(data)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getOrgs