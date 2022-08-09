

const InputField= ({
    field,
    label,
    onChange,
    placeholder,
    value,
    id
}) => {
    return (
        <div>
            <label> {label} </label><br/>
            {/* <input value={default_val} type="text" onChange={(event)=> onChange(event.target.value)} /> */}
            <input  type="text" value={value} placeholder={placeholder} id={id} onChange={(event)=>onChange(field,event.target.value) }/>
        </div>
    );
};

export default InputField
