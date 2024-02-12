import "./css/TextStyles.css"

export function CurrentEmployeeInfo({employee}) {
    return (
        <div className="w-full h-auto p-4 bg-gray-100">
            <h1 id="largeTitle">Full Name: {employee.first_name} {employee.last_name}</h1>
            <h1 id="subtitle">Job: {employee.job}</h1>
            <h1 id="subtitle">Salary: ${employee.salary}</h1>
            <h1 id="subtitle">Phone Number: {employee.phoneNumber}</h1>
            <h1 id="subtitle">Location: {employee.location}</h1>
        </div>
    )
}

