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

app.get("/api/employees/:searchTerm?", async (req, res) => {
    const searchTerm = req.params.searchTerm
    console.log(searchTerm)
    await connectToMongo('employeeList', async function (collection, client) {
        var employeesList = []
        if (searchTerm) {
            employeesList = await collection.find({'first_name': searchTerm}).toArray();
        } else {
            employeesList = await collection.find().toArray();
            console.log(employeesList)
        }
       
        client.close();
        res.json(employeesList)
    })
});

app.get("/api/manager/:id", async (req, res) => {
    const id = req.params.id
   
    await connectToMongo('employeeList', async function (collection, client) {
        const employeeList = await collection.findOne({"id": +id});
        console.log(employeeList.job)
        const otherManagers = await collection.find({'isManager': true}).toArray()
        const managedEmployees = await collection.find({'job': employeeList.job, 'isManager': false}).toArray()
        const otherEmployees = await collection.find({job: { $ne: employeeList.job}, isManager: { $ne: true}}).toArray()
        
        res.json({othermanagers:otherManagers, managedemployees: managedEmployees, otheremployees: otherEmployees} )
    })
});

const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);