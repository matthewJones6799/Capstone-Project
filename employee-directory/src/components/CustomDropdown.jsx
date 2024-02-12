export function CustomDropdown({items, getter, setter}) {
    const handleDropdown = (e) => {
        setter(e.target.value)
    }    
    return (
<select value={getter} onChange={handleDropdown} required>

{
    items.map( (item) => 
      <option key={item}>{item}</option> )
  }
    </select>     
    )
}