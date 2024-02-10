import { useState, useEffect } from 'react'
import { getEmployees } from './getData'
import {Table, TableHolder} from './Table'
import './App.css'
import { CustomButton } from './components/CustomButton'
import { TextField } from './components/TextField'

function PrintData() {
  console.log("EHEKE")
}

function App() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getEmployees(searchTerm)
      .then(data => setData(data))
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

<TableHolder title="All Employees">
      {data.length ? 
      <Table employees={data}></Table> : <h1> Loading....</h1> } 
</TableHolder>

    </>
  )
}

export default App
