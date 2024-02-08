import { useState, useEffect } from 'react'
import { getEmployees } from './getData'

import './App.css'

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees()
      .then(employees => setEmployees(employees))
  }, []);

  return (
    <>
      <div>
        <h1>{employees.length}</h1>
        </div>
    </>
  )
}

export default App
