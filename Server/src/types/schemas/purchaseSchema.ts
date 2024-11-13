import { model, Schema } from "mongoose";
import IPurchase from "../models/purchase";

interface purchaseDocument extends IPurchase, Document {}

const purchaseSchema = new Schema<purchaseDocument>(
  {
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    missile: {
        type: Schema.Types.ObjectId,
        ref: 'Missile'
    }
  }, { timestamps: true }
);

const Purchase = model("Purchase", purchaseSchema);
export default Purchase;