import { Types } from "mongoose";
import IMissile from "./missile";
import DispatchStatus from "./enums";
import IUser from "./user";

interface IDispatch {
  attack: {
    attacker: Types.ObjectId | IUser;
    missile: Types.ObjectId | IMissile;
    region: string;
  };
  defense: {
    defenser: Types.ObjectId | IUser;
    missile: Types.ObjectId | IMissile;
  };
  status: DispatchStatus;
  launchMoment: Date | null;
}

export default IDispatch;
