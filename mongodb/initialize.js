const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Database = require("./database");

(async () => {
    const database = new Database();
    await database.build();

    const name = "John Doe"
    const email = "john.doe@example.com"
    const password = await bcrypt.hash('password123', 10);

    const token = jwt.sign({ name, email }, 'salt');    


    database.usersCollection.insertOne({
        name,
        email,
        password,
        token
    });

    const exampleComUsers = await database.usersCollection.find({
        email: /(.*)@example.com/
    }).toArray();
    console.log(exampleComUsers);
})().catch(err => {
    console.error(err);
});