const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Database = require("./database");

(async () => { // Self invoking async anonymous function
    const database = new Database();
    await database.build();

    const name = "John Doe"
    const email = "john.doe@example.com"
    const password = await bcrypt.hash('password123', 10);

    const token = jwt.sign({ name, email }, 'salt');    // Creating the token with jwt


    database.usersCollection.insertOne({
        name,
        email,
        password,
        token
    });

    const exampleComUsers = await database.usersCollection.find({  // Search with simple Regex
        email: /(.*)@example.com/
    }).toArray();
    console.log(exampleComUsers);
})().catch(err => {
    console.error(err);
});