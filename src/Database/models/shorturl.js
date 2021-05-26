import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  url: { type: String, required: true },
  shortId: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  deleted: { type: Boolean, default: false },
});

Schema.pre("update", function update(next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});

export const urlModel = mongoose.model("urls", Schema);
