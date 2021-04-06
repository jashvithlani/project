function Button (props)
{
    return(
        <button onClick={props.onclick} className={props.classname} id={props.id} >{props.text}</button>
    )

}
export default Button;