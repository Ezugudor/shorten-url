import { GraphQLObjectType } from "graphql";
import { ShortenUrl } from "../ShortenUrl";

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    ShortenUrl,
  }),
});
