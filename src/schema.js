import { GraphQLSchema } from "graphql";
import { RootQuery } from "./Components/RootQuery";

export default new GraphQLSchema({
  query: RootQuery,
});
