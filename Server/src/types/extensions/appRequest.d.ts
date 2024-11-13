import { Request } from "express";
import IToken from "../models/token";

declare module "express" {
  interface Request {
    token?: IToken;
  }
}

export {};
