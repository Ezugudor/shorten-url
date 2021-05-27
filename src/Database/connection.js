import mongoose from "mongoose";

export default (mongo_url) => {
  mongoose
    .connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.info("Connection to Mongo database established "))
    .catch((err) => console.error(err.message));
};
