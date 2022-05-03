const Select = ({handlerSelect, value}) => {
   
    return(
        <select value={value} onChange= {(e) => handlerSelect(e.target.value)}>
            <option disabled > Choose</option>
            <option value="0.05"> 5% Bad </option>
            <option value="0.1"> 10% So So </option>
            <option value="0.2"> 20% Good </option>
            <option value="0.3">30% Perfect </option>
        </select>
    )
}
export default Select;