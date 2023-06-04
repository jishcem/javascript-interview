import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type User {
    id: ID
    name: String
    email: String
    password: String      
  }

  type Mutation {
    createUser(id: ID!, name: String, email: String, password: String): ID
    updateUser(id: ID!, name: String, email: String, password: String): ID
    deleteUser(id: ID!): Boolean!
  }

  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }
`;

const users = [
    {
        id: 1,
        name: "Ajeesh",
        email: "jishcem@gmail.com",
        password: "secret"
    },
    {
        id: 2,
        name: "Shivi",
        email: "shivi@gmail.com",
        password: "topsecret"
    }
];

const resolvers = {
  Query: {
    getUsers: () => users,
    getUserById: (parent, args) => users.find(user => user.id == args.id),
  },
  Mutation: {
    createUser: (_parent, { id, name, email, password }) => {
        users.push({ id, name, email, password })
        return id;
    },
    updateUser: (_parent, { id, name, email, password }) => {
        const index = users.findIndex(user => user.id == id)
        users[index] = { id, name, email, password }
        return id;
    },
    deleteUser: (_parent, { id }) => {
        const index = users.findIndex(user => user.id == id)
        if (index > -1) {
            users.splice(index, 1);
            return true;
        }

        return false;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
