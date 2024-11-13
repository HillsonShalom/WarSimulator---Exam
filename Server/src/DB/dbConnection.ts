import { connect } from "mongoose";

const dbConnection = async () => {
  try {
    await connect(process.env.CONNECTION_STRING!);
    console.log("Successfully connected to mongoDB");
  } catch (err) {
    console.error((err as Error).message);
  }
};

export default dbConnection;
