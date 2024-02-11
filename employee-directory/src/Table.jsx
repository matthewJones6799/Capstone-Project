import { CustomButton } from "./components/CustomButton"
import { useState } from "react"

export function Table({employees}) {
    
    return (
        <div className="relative overflow-x-auto">
        <table className="w-full text-left text-gray-500 dark:text-gray-400">
            <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-4">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Phone Number
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Salary
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Job
                    </th>
                    <th scope="col" className="px-6 py-4" onClick={() => console.log("DLDLLD")}>
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
                    <td className="px-6 py-4">
                      {employee.phoneNumber}
                    </td>
                    <td className="px-6 py-4">
                      ${employee.salary}
                    </td>
                    <td className="px-6 py-4">
                      {employee.job}
                    </td>
                    <td className="px-6 py-4">
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

export function TableHolder(props) {
    const [tableExpanded, setTableExpanded] = useState(true)

    const handleTableExpand = () => {
        setTableExpanded(tableExpanded => !tableExpanded)
    }

    var tableHolderCSS =  tableExpanded ? "h-auto" : "h-20"
    var tableCSS = tableExpanded ? "visible" : "invisible"

    return (
        <div className={tableHolderCSS}>
            <div className="flex gap-4">
                <h2>{props.title}</h2>
                <CustomButton buttonText={tableExpanded ? "Collapse Table" : "Expand Table"} onClick={handleTableExpand}></CustomButton>
            </div>
            <div className={tableCSS}>
            {props.children}
            </div>
        </div>
    )
}