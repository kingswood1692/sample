import mongoose from "mongoose";

const Siteschema = new mongoose.Schema(
  {
    requestedUrl: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
    parentId: {
      type: String,
      required: false
    }
  },
  { strict: true }
);

export default module.exports =
  mongoose.models.sites || mongoose.model("sites", Siteschema);
