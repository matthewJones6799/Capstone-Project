export async function getEmployees() {
    const url = `/api/employees`;
    let characterList = await fetch(url)
      .then((res) => res.json());
    return characterList;
  }