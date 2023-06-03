const { graphql, buildSchema } = require("graphql")

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
        password: String      
    }

    input CreateUserInput {
        id: ID
        name: String
        email: String
        password: String        
    }

    type Mutation {
        createUser(input: CreateUserInput): User
    }

    type Query {
        getUsers: [User]
        getUserById(id: ID!): User
    }
`);

const users = [
    {
        id: 1,
        name: "Ajeesh",
        email: "jishcem@gmail.com",
        password: "secret"
    },
    {
        id: 2,
        name: "Ajeesh 2",
        email: "jishcem2@gmail.com",
        password: "secret2"
    }
];

const rootValue = {
    getUsers: users,                                                        // Query
    getUserById: (query) => users.find(user => user.id == query.id),        // Query
    createUser: (user) => {                                                 // Mutation
        users.push(user)
        return user;
    },
    // updateUser: (updatedUser) => {                                          // Mutation
    //     const index = users.findIndex(user => user.id == updatedUser.id)
    //     users[index] = updatedUser
    //     return updatedUser
    // },
    // deleteUser: (user) => {                                                 // Mutation
    //     const index = users.findIndex(user => user.id == updatedUser.id)
    //     if (index > -1) {
    //         users.splice(index, 1);
    //     }
    //     return user
    //}
}

const source = `{
    getUsers {
        id
        name
        email
        password
    }
    getUserById(id: 1) {
        id
        name
        email
        password
    }
}`;

graphql({ schema, source, rootValue }).then(response => {
    console.log(response.data);
});