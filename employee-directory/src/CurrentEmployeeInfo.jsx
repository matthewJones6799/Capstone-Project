export function CurrentEmployeeInfo({employee}) {
    return (
        <div className="w-full h-auto p-4 bg-gray-100">
            <h1 className="text-xl font-semibold">Full Name: {employee.first_name} {employee.last_name}</h1>
            <h1 className="text-lg font-medium">Job: {employee.job}</h1>
            <h1 className="text-lg font-medium">Salary: ${employee.salary}</h1>
            <h1 className="text-lg font-medium">Phone Number: {employee.phoneNumber}</h1>
            <h1 className="text-lg font-medium">Location: {employee.location}</h1>
        </div>
    )
}

