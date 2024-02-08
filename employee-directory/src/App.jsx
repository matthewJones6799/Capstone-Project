import { useState, useEffect } from 'react'
import { getEmployees } from './getData'
import {Table} from './Table'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getEmployees()
      .then(data => setData(data))
  }, []);

  return (
    <>
    {data.length ? 
      <Table employees={data}></Table> : <h1> Loading....</h1> } 
    </>
  )
}

export default App
