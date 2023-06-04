To run the Apollo GraphQL Server, make sure you are in this directory and run 
node server.js

Which would be showing 
🚀  Server ready at: http://localhost:4000/

And then go to http://localhost:4000/ to view Apollo Server UI 

Here is the Query and Mutations that you could run the UI Workspace.

   Query 
   getUsers
   query GetUsers {
    getUsers {
        id
        name
        email
        password
    }
   }
  
   getUserById
   query GetUserById($getUserByIdId: ID!) {
    getUserById(id: $getUserByIdId) {
        id
        name
        email
        password
    }
   }

   Variables
   {
     "getUserByIdId": "2",
   }


   Mutation
   mutation CreateUser($createUserId: ID!, $name: String, $email: String, $password: String) {
    createUser(id: $createUserId, name: $name, email: $email, password: $password)
   }

   Variables
   {  
    "createUserId": 4,
    "name": "Ajeesh 4",
    "email": "jishcem4@gmail.com",
    "password": "asdasd",
   }

   mutation UpdateUser($updateUserId: ID!, $updateUserName: String, $updateUserEmail: String, $updateUserPassword: String) {
    updateUser(id: $updateUserId, name: $updateUserName, email: $updateUserEmail, password: $updateUserPassword)
   }

   Variables
   {  
     "updateUserId": 2,
     "updateUserName": "Riji",
     "updateUserEmail": "rijipjose@gmail.com",
     "updateUserPassword": "qwewqe",
   }

   mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
   }

   Variables
   {    
    "deleteUserId": 1,
   }