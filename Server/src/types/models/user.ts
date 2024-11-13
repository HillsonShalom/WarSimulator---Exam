import { Types } from "mongoose";
import IOrganization from "./organization";

interface IUser {
  username: string;
  password: string;
  organization: Types.ObjectId | IOrganization;
  region?: string;
}

export default IUser;
