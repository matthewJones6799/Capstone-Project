import { useState, useEffect } from 'react'
import { getEmployees, getEmployeeInfo } from './getData'
import {Table, TableHolder} from './Table'
import './App.css'
import { CustomButton } from './components/CustomButton'
import { TextField } from './components/TextField'
import { useParams } from 'react-router-dom'
import { CurrentEmployeeInfo } from './CurrentEmployeeInfo'
function PrintData() {
  console.log("EHEKE")
}

function App() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentEmployeeInfo, setCurrentEmployeeInfo] = useState({})

  let { id } = useParams();

  useEffect(() => {
    getEmployees(searchTerm)
      .then(data => setData(data))
  }, [searchTerm]);


  useEffect(() => {
    getEmployeeInfo(id)
      .then(data => 
        { setCurrentEmployeeInfo(data)}
            )
  }, []);

  return (
    <>
    <div className='w-full h-20 flex flex-wrap flex-row justify-between items-center align-middle'>
      <h3 className="font-bold">Employee Database</h3>
      <div className='gap-6 flex flex-row'>
      <TextField placeholder="Search names" getter={searchTerm} setter={setSearchTerm}></TextField>
      <CustomButton buttonText="Salary Predictor" onClick={PrintData()}></CustomButton>
      </div>
    </div>
<CurrentEmployeeInfo employee={currentEmployeeInfo}></CurrentEmployeeInfo>
<TableHolder title="All Employees">
      {data.length ? 
      <Table showSalary={currentEmployeeInfo.job == "HR"} employees={data}></Table> : <h1> Loading....</h1> } 
</TableHolder>

    </>
  )
}

export default App
