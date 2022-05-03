function Input(props){
    const {placeholder, handlerInput, value} = props;
    return(
        <input placeholder={placeholder} value={value} onChange= {(e) => handlerInput(e.target.value) }></input>
    )
}
export default Input;