import mongoose from "mongoose";
import config from "./Config";

const connect = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(config.connectionString);
    console.log("we are conncted to mongoDB", db.connection[0].name);
  } catch (err: any) {
    console.log("Hila did it again:\n", err);
  }
};

export default connect;
