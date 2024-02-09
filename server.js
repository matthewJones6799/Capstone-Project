const express = require("express")
const { MongoClient } = require("mongodb");
const app = express();

var url = "mongodb://127.0.0.1:27017";

async function connectToMongo(collectionName, callback){
    const client = new  MongoClient('mongodb://localhost:27017');
    const db = client.db('company2');
    const collection = db.collection(collectionName);
    callback(collection, client);
}

app.get("/api/employees", async (req, res) => {
    await connectToMongo('employeeList', async function (collection, client) {
        const employeesList = await collection.find().toArray();
        client.close();
        res.json(employeesList)
    })
});

app.get("/api/manager/:id", async (req, res) => {
    const id = req.params.id
    console.log("Changed")
   
    await connectToMongo('employeeList', async function (collection, client) {
        const employeeList = await collection.findOne({"id": +id});
        client.close();
        res.json(employeeList)
    })
});

const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);