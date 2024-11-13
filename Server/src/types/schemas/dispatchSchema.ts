import { model, Schema } from "mongoose";
import IDispatch from "../models/dispatch";

interface dispatchDocument extends IDispatch, Document {}

const dispatchSchema = new Schema<dispatchDocument>(
  {
    attack: {
      type: {
        attacker: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        missile: {
          type: Schema.Types.ObjectId,
          ref: "Missile",
        },
        region: {
          type: String,
        },
      },
    },
    defense: {
      type: {
        defenser: {
          type: Schema.Types.ObjectId,
          ref: "User",
          default: null
        },
        missile: {
          type: Schema.Types.ObjectId,
          ref: "Missile",
          default: null
        },
      },
    },
    status: {
      type: String,
      enum: ["IDLE", "LOADED", "LAUNCHED", "INTERCEPTED", "HIT"],
    },
    launchMoment: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Dispatch = model("Dispatch", dispatchSchema);
export default Dispatch;
