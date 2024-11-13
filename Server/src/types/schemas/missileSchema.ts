import { model, Schema } from "mongoose";
import IMissile from "../models/missile";

export interface missileDocument extends IMissile, Document {}

const missileSchema = new Schema<missileDocument>(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    speed: {
      type: Number,
      min: 0
    },
    intercepts: {
      type: [String],
      default: []
    },
    price: {
      type: Number,
      min: 0
    }
  }
);

const Missile = model("Missile", missileSchema);
export default Missile;