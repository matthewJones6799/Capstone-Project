import { useState, useEffect } from 'react'
import { getEmployees, getEmployeesForManager } from './getData'
import {Table, TableHolder} from './Table'
import './App.css'
import { CustomButton } from './components/CustomButton'
import { TextField } from './components/TextField'
import { useParams } from 'react-router-dom'

function PrintData() {
  console.log("EHEKE")
}

function App() {
  const [managedEmployees, setManagedEmployees] = useState([])
  const [managers, setManagers] = useState([])
  const [otherEmployees, setOtherEmployees] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  let { id } = useParams();

  useEffect(() => {
    getEmployeesForManager(id)
      .then(data => 
        {setManagedEmployees(data.employeesmanaged),
        setManagers(data.othermanagers),
        setOtherEmployees(data.otheremployees)}
            )
  }, [searchTerm]);

  return (
    <>
    <div className='w-full h-20 flex flex-wrap flex-row justify-between items-center align-middle'>
      <h3 className="font-bold">Employee Database</h3>
      <div className='gap-6 flex flex-row'>
      <TextField placeholder="Search names" getter={searchTerm} setter={setSearchTerm}></TextField>
      <CustomButton buttonText="Salary Predictor" onClick={PrintData()}></CustomButton>
      </div>
    </div>

<TableHolder title="Employees I Manage">
      {managedEmployees.length ? 
      <Table employees={managedEmployees}></Table> : <h1> Loading....</h1> } 
</TableHolder>

<TableHolder title="Other Managers">
      {managers.length ? 
      <Table employees={managers}></Table> : <h1> Loading....</h1> } 
</TableHolder>

<TableHolder title="All Other Employees">
      {otherEmployees.length ? 
      <Table employees={otherEmployees}></Table> : <h1> Loading....</h1> } 
</TableHolder>
    </>
  )
}

export default App
