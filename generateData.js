const { faker } = require('@faker-js/faker');
let fs = require('fs');

function generateEmployees() {
    
  let employees = [];
  for (let id = 1; id <= 1000; id++) {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let phoneNumber = faker.phone.number('###-###-###');
    let salary = getSalary()
    let location = faker.location.country()
    let job = faker.person.jobArea()
    console.log(faker.phone.number())
    employees.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      phoneNumber: phoneNumber,
      salary: salary,
      location: location,
      job: job
    });
  }
  return { employees: employees };
}

function getSalary() {
    let num = Math.floor(Math.random() * 30) + 1;
     return num * 25000
  }

module.exports = generateEmployees;

let dataObj = generateEmployees();
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));