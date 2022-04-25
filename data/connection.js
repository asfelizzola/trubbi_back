import { MongoClient } from "mongodb";
require("dotenv").config();

const uri = process.env.MONGODB;
const client = new mongoClient(uri);
const DB_TRUBBI = "trubbi_test"

let instance = null;

async function getConnection() {
    try {
        if (instance == null) {
            instance = await client.connect(); 
    }
    } catch (error) {
        console.log(error.message)
        throw new Error("Error al conectarse")
    }
return instance;
}

export {getConnection}

