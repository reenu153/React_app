
const Button = (props) => {

    const { label, handleClick, id} = props;
    return (
        <button id={id} onClick={ (e)=> handleClick(e)}> {label} </button>
    );
}

export default Button;