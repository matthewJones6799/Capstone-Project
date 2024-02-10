export async function getEmployees(searchTerm) {
    const url = `/api/employees/${searchTerm}`;
    let employeesList = await fetch(url)
      .then((res) => res.json());
      console.log(employeesList)
    return employeesList;
  }

  export async function getEmployeesForManager(id) {
    const url = `/api/manager/${id}`;
    let employeesManagedList = await fetch(url)
      .then((res) => res.json());
    return employeesManagedList;
  }