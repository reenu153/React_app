
const InputSelect = ({
    label,
    onChange,
    options,
    value,
    id
}) => {
    return (
        <div className="indiv">
            <label>{label}</label><br />
            <select name={label} value={value} id={id} onChange={(event) => onChange(event.target.value)}>
                {
                    options.map((item) => (
                        <option key={item.key} value={item.value}>{item.label}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default InputSelect