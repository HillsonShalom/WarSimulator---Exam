import { connect } from "mongoose";
import Missile from "../types/schemas/missileSchema";
import 'dotenv/config'
import seed from "./seed";

const dbConnection = async () => {
  try {
    await connect(process.env.CONNECTION_STRING!);
    console.log("Successfully connected to mongoDB");

    if (!await Missile.countDocuments()) seed();
  } catch (err) {
    console.error((err as Error).message);
  }
};

export default dbConnection;
