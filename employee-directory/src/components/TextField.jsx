export function TextField({getter, setter, placeholder, fieldType = "text"}) {
    const handleSearchChange = (e) => {
        setter(e.target.value)
    }
    return (
        <div>
        <input placeholder={placeholder} type={fieldType} value={getter} onChange={handleSearchChange} className="h-10 w-36 bg-gray-200 focus:bg-gray-300 focus:outline-none rounded-md focus:border-2 focus:border-blue-400" />
        </div>
    )
}