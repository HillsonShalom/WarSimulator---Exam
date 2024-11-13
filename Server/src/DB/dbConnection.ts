import { connect } from "mongoose";
import Missile from "../types/schemas/missileSchema";
import { seedMissiles, seedOrganizations } from "./seed";
import Organization from "../types/schemas/organizationSchema";

const dbConnection = async () => {
  try {
    await connect(process.env.CONNECTION_STRING!);
    console.log("Successfully connected to mongoDB");

    if (!await Missile.countDocuments()) seedMissiles();
    if (!await Organization.countDocuments()) seedOrganizations();
  } catch (err) {
    console.error((err as Error).message);
  }
};

export default dbConnection;
