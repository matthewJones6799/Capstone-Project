const express = require("express")
const { MongoClient } = require("mongodb");
const app = express();

var url = "mongodb://127.0.0.1:27017";

async function connectToMongo(collectionName, callback){
    const client = new  MongoClient('mongodb://localhost:27017');
    const db = client.db('company');
    const collection = db.collection(collectionName);
    callback(collection, client);
}

app.get("/api/employees", async (req, res) => {
    await connectToMongo('fx', async function (collection, client) {
        const employeesList = await collection.find().toArray();
        console.log(employeesList[0].employees)
        client.close();
        res.json(employeesList[0].employees)
    })
});

const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);