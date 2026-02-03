import { ApolloServer } from "@apollo/server";
import { DateTimeResolver, NonNegativeIntResolver } from "graphql-scalars";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { gql } from "graphql-tag";
import { readFileSync } from "node:fs";

import { buildConfig } from "./config.js";
import { resolverMap } from "./resolvers/index.js";

const config = buildConfig();

const schema = readFileSync(
  `./schemas/${config.SCHEMA_NAME ?? ""}.graphql`,
  "utf-8",
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs: gql(schema),
    resolvers: {
      DateTime: DateTimeResolver,
      NonNegativeInt: NonNegativeIntResolver,
      ...resolverMap,
    },
  }),
});
