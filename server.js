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
            employeesList = await collection.find({'first_name':  searchTerm}).toArray();
        } else {
            employeesList = await collection.find().toArray();
            //console.log(employeesList)
        }
       
        client.close();
        res.json(employeesList)
    })
});

app.get("/api/manager/:id/:searchTerm?", async (req, res) => {
    const id = req.params.id
    const searchTerm = req.params.searchTerm

    await connectToMongo('employeeList', async function (collection, client) {
        const employeeList = await collection.findOne({"id": +id});

        var otherManagers = []
        var managedEmployees = []
        var otherEmployees = []
        if (searchTerm) {
            otherManagers = await collection.find({'first_name': searchTerm, 'isManager': true}).toArray()
            managedEmployees = await collection.find({'first_name': searchTerm, 'job': employeeList.job, 'isManager': false}).toArray()
            otherEmployees = await collection.find({'first_name': searchTerm, job: { $ne: employeeList.job}, isManager: { $ne: true}}).toArray()
        } else {
           
         otherManagers = await collection.find({'isManager': true}).toArray()
         managedEmployees = await collection.find({'job': employeeList.job, 'isManager': false}).toArray()
         otherEmployees = await collection.find({job: { $ne: employeeList.job}, isManager: { $ne: true}}).toArray()
        
        }

        res.send({othermanagers:otherManagers, employeesmanaged: managedEmployees, otheremployees: otherEmployees} )
    })
});

app.get("/api/logindata/:firstname/:lastname", async (req, res) => {
    const firstname = req.params.firstname
    const lastname = req.params.lastname
    await connectToMongo('employeeList', async function (collection, client) {
        const employee = await collection.findOne({"first_name": firstname, "last_name": lastname});
        console.log(employee)
        res.json(employee)
    })
});

app.get("/api/getCurrentEmployeeInfo/:id", async (req, res) => {
    const id = req.params.id
    await connectToMongo('employeeList', async function (collection, client) {
        const employee = await collection.findOne({"id": +id});
        res.json(employee)
    })
});

const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);

