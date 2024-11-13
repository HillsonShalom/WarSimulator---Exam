import { Types } from "mongoose";
import IOrganization from "./organization";
import IUser from "./user";
import IMissile from "./missile";

interface IPurchase {
  customer: Types.ObjectId | IUser;
  missile: Types.ObjectId | IMissile
}

export default IPurchase;
