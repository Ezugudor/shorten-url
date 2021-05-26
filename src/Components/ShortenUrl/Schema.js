import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const ShortenUrlSchema = new GraphQLObjectType({
  name: "ShortenUrl",
  fields: () => ({
    url: { type: GraphQLString },
  }),
});
