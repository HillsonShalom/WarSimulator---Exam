import { model, Schema } from "mongoose";
import IUser from "../models/user";

interface userDocument extends IUser, Document {}

const userSchema = new Schema<userDocument>(
  {
    username: {
        type: String
    },
    password: {
        type: String
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization'
    },
    region: {
        type: String
    }
  }, { timestamps: true }
);

const User = model("User", userSchema);
export default User;