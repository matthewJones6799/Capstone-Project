import "../css/CustomComponentStyles.css"

export function TextField({getter, setter, placeholder, fieldType = "text"}) {
    const handleSearchChange = (e) => {
        setter(e.target.value)
    }
    return (
        <div>
        <input placeholder={placeholder} type={fieldType} value={getter} onChange={handleSearchChange} id="textFieldStyle" />
        </div>
    )
}