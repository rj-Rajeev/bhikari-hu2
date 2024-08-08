import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://contectrajeevbhardwaj:wPAS9DMQAwdSqQyU@cluster2.1cwrvlu.mongodb.net/"
    );
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
