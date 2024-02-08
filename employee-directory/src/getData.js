export async function getEmployees() {
    const url = `/employees`;
    let characterList = await fetch(url)
      .then((res) => res.json());
    console.log(characterList)
    console.log("characterList")
    return characterList;
  }