const { faker } = require('@faker-js/faker');
let fs = require('fs');

function generateEmployees() {
    
  let employees = [];
  jobName = faker.person.jobArea()
  for (let id = 1; id <= 1000; id++) {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let phoneNumber = faker.phone.number('###-###-###');
    let location = faker.location.country()
    let job = getRandomInt(8) == 8 ? 'HR' : jobName
    let salary = getSalary(job)
    let isManager = id % 50 ? false : true

    employees.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      phoneNumber: phoneNumber,
      salary: salary,
      location: location,
      job: job,
      isManager: isManager
    });

    if(id % 50 == 0) {
        jobName = faker.person.jobArea();
    }
  }
  return { employees: employees };
}

// function geneateMangers() {
    
//     let managers = [];
//     for (let id = 1; id <= 50; id++) {
//       let manager = 
  
//       employees.push({
//         id: id,
//         first_name: firstName,
//         last_name: lastName,
//         phoneNumber: phoneNumber,
//         salary: salary,
//         location: location,
//         job: job
//       });
//     }
//     return { employees: employees };
//   }

function getSalary(job) {
    let multiplier = job == "HR" ? 35000 : 25000
    let num = Math.floor(Math.random() * 30) + 1;
     return num * multiplier
}

function getRandomInt(max) {
    return Math.floor((Math.random() + 1) * max);
  }

module.exports = generateEmployees;

let dataObj = generateEmployees();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));