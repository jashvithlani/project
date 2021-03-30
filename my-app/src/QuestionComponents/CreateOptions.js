function CreateOptions(props) {
  const temp = "option_" + props.option.id;

  
    return (
      <li>
        <input checked={props.ans===temp} type="radio" id={temp} name="radioAnswer"></input>
        <label onClick={props.onClickOption} htmlFor={temp} name="answer">
          {props.option.text}
        </label>
        <div className="check"></div>
      </li>
    );
  //  else {
  //   return (
  //     <li>
  //       <input type="radio" id={temp} name="radioAnswer"></input>
  //       <label onClick={props.onClickOption} htmlFor={temp} name="answer">
  //         {props.option.text}
  //       </label>
  //       <div className="check"></div>
  //     </li>
  //   );
  // }
}
export default CreateOptions;
