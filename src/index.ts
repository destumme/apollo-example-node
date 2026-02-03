import { ApolloServer } from "@apollo/server";

import {
  DateTimeTypeDefinition,
  DateTimeResolver,
  NonNegativeIntTypeDefinition,
  NonNegativeIntResolver,
} from "graphql-scalars";

const server = new ApolloServer({
  typeDefs: [DateTimeTypeDefinition, NonNegativeIntTypeDefinition],
  resolvers: {
    DateTime: DateTimeResolver,
    NonNegativeInt: NonNegativeIntResolver,
  },
});
