/// <reference path="../types/extensions/appRequest.d.ts" />

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AppResError from "../types/extensions/AppResError";
import { Role } from "../types/models/enums";

export const onlyAttacker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.token!.role;
    if (role !== Role.ATTACK)
      throw new AppResError(403, "Only attackers are allowed to access here");
    next();
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export const onlyDefenser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.token!.role;
    if (role !== Role.DEFENSE)
      throw new AppResError(403, "Only defensers are allowed to access here");
    next();
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};
