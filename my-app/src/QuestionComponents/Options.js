import CreateOptions from"./CreateOptions.js"

function Options(props) {

    // console.log(props.currentQuestion);
    const options=props.currentQuestion.options.map((ele,index)=>{
        
        return (<CreateOptions  key={ele.id} option={ele} onClickOption={props.onClickOption}/>);
    });


  return (<ul id="listAns">
      {options}
  </ul>);
}
export default Options;
