
const Button2 = (props) => {

    const { label, handleClick} = props;
    return (
        <button onClick={ ()=> handleClick()}> {label} </button>
    );
}

export default Button2;