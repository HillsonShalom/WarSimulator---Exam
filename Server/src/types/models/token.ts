import { Types } from "mongoose";
import IUser from "../models/user";
import IOrganization from "../models/organization";
import { Role } from "./enums";

interface IToken {
  id: Types.ObjectId | IUser;
  role: Role
}

export default IToken;
