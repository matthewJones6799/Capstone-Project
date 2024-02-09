const { faker } = require('@faker-js/faker');
let fs = require('fs');

function generateEmployees() {
    
  let jobs = ["IT", "Data Scientist", "Building Security", "Custodial", "Software Engineer", "CyberSecurity", "HR", "Customer Support", "Finance", "Accounting"]
  let locations = ["Hartford, Connecticut", "San Francisco, California", "Topeka, Kansas", "Boston, Massachusetts", "New York City, New York"]
  let employees = [];

  for (let id = 1; id <= 1000; id++) {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let phoneNumber = faker.phone.number('###-###-###');
    let location = locations[(Math.floor(Math.random() * locations.length))]
    let job = jobs[(id%10)]
    let salary = getSalary(job, location)
    let isManager = id > 10 ? false : true

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
  }
  return { employees: employees };
}

function getSalary(job, location) {
    //let multiplier = job == "HR" ? 10 : 1
    let num = Math.floor(Math.random() * 10) + 1;
    num += 50
    if((job == "Software Engineer" )||(job == "Data Engineer")||(job == "Data Scientist")||(job == "CyberSecurity")){
      num += 50
    }else if((job == "Custodial")||(job == "Building Security")||(job == "Custodial")){
      num += 10
    }else{
      num += 30
    }
    if(location == "New York City, New York"){
      num += 10
    }else if(location == "Bangalore, Maine"){
      num -= 10
    }

     return num * 1000
}

function getRandomInt(max) {
    return Math.floor((Math.random() + 1) * max);
  }

module.exports = generateEmployees;

let dataObj = generateEmployees();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));