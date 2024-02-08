const express = require("express")
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

var url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "swapi";

async function connectToMongo(collectionName, callback){
    const client = new  MongoClient('mongodb://localhost:27017');
    const db = client.db('company');
    const collection = db.collection(collectionName);
    callback(collection, client);
}

app.get("/allemployees", async (req, res) => {
    await connectToMongo('employees', async function (collection, client) {
        const employees = await collection.find().toArray();
        console.log(employees)
        client.close();
        res.json(employees)
    })
});
