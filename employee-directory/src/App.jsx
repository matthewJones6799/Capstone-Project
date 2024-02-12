import { useState, useEffect } from 'react'
import { getEmployees, getEmployeeInfo } from './getData'
import {Table, TableHolder} from './Table'
import './App.css'
import { CustomButton } from './components/CustomButton'
import { TextField } from './components/TextField'
import { useParams } from 'react-router-dom'
import { CurrentEmployeeInfo } from './CurrentEmployeeInfo'
import "./css/TextStyles.css"
import "./css/CustomComponentStyles.css"
import "./css/DetailPage.css"

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
    <h1>Sample page</h1>
    </>
  )
}

export default App
