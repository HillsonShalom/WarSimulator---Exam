import { Types } from "mongoose";
import { Role } from "./enums";
import IMissile from "./missile";

interface IOrganization {
  name: string;
  role: Role;
  resources: {
    id: Types.ObjectId | IMissile;
    amount: number;
  }[];
  budget: number;
  region?: string;
}

export default IOrganization;
