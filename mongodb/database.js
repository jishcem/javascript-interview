const { MongoClient } = require("mongodb");

class Database {    
    static #url = 'mongodb://localhost:27017';    

    constructor() {
        this._client = undefined;
        this._usersCollection = undefined;        
    }

    get client() {
        return this._client;
    }

    get usersCollection() {
        return this._usersCollection;
    }

    async build() {
        this.createInstance();
        try {
            await this.connect();
        this.initializeDatabase();
        console.log('Done mongodb initializing');
        } catch (error) {
            console.error(error)
        }
    }

    createInstance() {
        this._client = new MongoClient(Database.#url);
    }

    async connect() {
        await this._client.connect();
        console.log('MongoDB connected');        
    }

    initializeDatabase() {
        const db = this._client.db('testdb');
        this._client.connect();
        this._usersCollection = db.collection('users');
    }
}

module.exports = Database;