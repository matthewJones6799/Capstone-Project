export async function getEmployees() {
    const url = `/api/employees`;
    let employeesList = await fetch(url)
      .then((res) => res.json());
    return employeesList;
  }

  export async function getEmployeesForManager(id) {
    const url = `/api/manager/${id}`;
    let employeesManagedList = await fetch(url)
      .then((res) => res.json());
    return employeesManagedList;
  }