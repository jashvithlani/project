import CreateOptions from "./CreateOptions.js";

function Options(props) {
  const currQ = props.currentQuestion;
  const ans = props.currentAnswers[currQ.id];

  const options = props.currentQuestion.options.map((ele, index) => {
    return (
      <CreateOptions
        key={ele.id}
        option={ele}
        onClickOption={props.onClickOption}
        ans={ans}
      />
    );
  });

  return <ul id="listAns">{options}</ul>;
}
export default Options;
