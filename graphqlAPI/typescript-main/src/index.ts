import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import cors from 'cors'; 
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { PersonResolver } from "./resolvers/PersonResolver";

(async () => {
  const app = express();
  app.use(cors());
  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );
  await createConnection({ ...options, name: "default" });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, PersonResolver],
      validate: true
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
