/// <reference path="../types/extensions/appRequest.d.ts" />

import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import AppResError from "../types/extensions/AppResError";
import IToken from "../types/models/token";
import User from "../types/schemas/userSchema";
import Organization from "../types/schemas/organizationSchema";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const token = req.cookies.token;
    const token = req.header("Authorization")
    if (!token) throw new AppResError(401, "Login first!");

    req.token = jwt.verify(token, process.env.SECRET_KEY!) as IToken;
    if (!req.token) throw new AppResError(401, "Wrong token!");

    const user = await User.findById(req.token.id).populate({path: "organization", populate: {path: "resources.id"}}).exec();
    if (!user) throw new AppResError(404, "User not found!");
    req.token.id = user;
    
    next();
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};