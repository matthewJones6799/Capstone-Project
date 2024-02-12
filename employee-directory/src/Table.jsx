import { CustomButton } from "./components/CustomButton"
import { useState } from "react"
import "./css/TextStyles.css"

export function Table({employees, showSalary}) {
    
    return (
        <div className="relative overflow-x-auto">
        <table className="w-full text-left text-gray-500 dark:text-gray-400">
            <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" id="subtitle">
                        Name
                    </th>
                    <th scope="col"  id="subtitle">
                        Phone Number
                    </th>
        
                    {
                        showSalary ? ( <th scope="col"  id="subtitle">
                        Salary
                    </th>) : null
                    }
                    
                    <th scope="col"  id="subtitle">
                        Job
                    </th>
                    <th scope="col"  id="subtitle" onClick={() => console.log("DLDLLD")}>
                        Location
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                  employees.map((employee) => {
                    return <tr key={employee.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="">
                        {employee.first_name} {employee.last_name} 
                    </th>
                    <td  id="subtitle">
                      {employee.phoneNumber}
                    </td>
                    {
                        showSalary ? (<td  id="subtitle">
                        ${employee.salary}
                      </td>) : null
                    }
                    
                    <td id="subtitle">
                      {employee.job}
                    </td>
                    <td id="subtitle">
                      {employee.location}
                    </td>
                </tr>
                  })
                }
            </tbody>
        </table>
    </div>
    )
}

export function TableHolder({title, children}) {
    const [tableExpanded, setTableExpanded] = useState(true)

    const handleTableExpand = () => {
        setTableExpanded(tableExpanded => !tableExpanded)
    }

    //tailwind is isnt dynamically compiled (its compiled every time a view renders) ao we have to use ternary operators outside of the classname, sigh
    var tableHolderCSS =  tableExpanded ? "h-auto" : "h-20"
    var tableCSS = tableExpanded ? "visible" : "invisible"

    return (
        <div className={tableHolderCSS}>
            <div className="flex gap-4">
                <h2 id="largeTitle">{title}</h2>
                <CustomButton buttonText={tableExpanded ? "Collapse Table" : "Expand Table"} onClick={handleTableExpand}></CustomButton>
            </div>
            <div className={tableCSS}>
            {children}
            </div>
        </div>
    )
}