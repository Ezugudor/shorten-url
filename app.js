import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { graphqlHTTP } from "express-graphql";
import connection from "./src/Database/connection";
import schema from "./src/schema";
import { ResolveUrl } from "./src/Services/ResolveUrl";

const mongoUrl = process.env.MONGO_URL;
const port = process.env.PORT || 3002;
const baseUrl = process.env.BASE_URL;
connection(mongoUrl);

var app = express();

app.use(
  "/graphiql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use("/:urlID", async (req, res) => {
  const { urlID } = req.params;
  const actualURL = await ResolveUrl(urlID);
  return res.redirect(actualURL);
});

app.listen(port);
console.log(`Running a GraphQL API server at ${baseUrl}/graphql`);
