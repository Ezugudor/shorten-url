import { GraphQLString } from "graphql";
import { ShortenUrlSchema } from "./Schema";
import { ShortenUrlResolver } from "./Resolver";

export const ShortenUrl = {
  type: ShortenUrlSchema,
  args: { url: { type: GraphQLString } },
  resolve: (parent, args) => {
    return ShortenUrlResolver(parent, args);
  },
};
