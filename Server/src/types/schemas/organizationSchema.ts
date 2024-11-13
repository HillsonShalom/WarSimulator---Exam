import { model, Schema } from "mongoose";
import IOrganization from "../models/organization";

interface organizationDocument extends IOrganization, Document {}

const organizationSchema = new Schema<organizationDocument>(
  {
    name: {
      type: String
    },
    resources: {
        type: [{
            name: {
                type: String
            },
            amount: {
                type: Number
            }
        }],
        default: []
    },
    budget: {
        type: Number
    },
    role: {
        type: String,
        enum: ["att", "def", "adm"]
    },
    region: {
        type: String
    }
  }
);

const Organization = model("Organization", organizationSchema);
export default Organization;