function Question(props) {
  const qNo = props.currentQuestion.id + 1;
  return (
    <div id="questionContainer">
      <h2 id="q_number">Q{qNo}</h2>
      <p id="question">
        {props.currentQuestion.ques}
        {qNo}
      </p>
    </div>
  );
}
export default Question;
