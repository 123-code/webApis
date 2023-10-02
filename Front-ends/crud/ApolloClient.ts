"use client";
import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://crispy-space-pancake-9jp4j96q45537q6x-4001.app.github.dev/graphql",
    cache: new InMemoryCache()
});

export default client;  