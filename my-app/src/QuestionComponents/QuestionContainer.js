import Question from "./Question.js";
import Options from "./Options.js";
function QuestionContainer(props) {
  return (
    <div className="float-child" id="quesAndOptionsContainer">
      <Question currentQuestion={props.currentQuestion} />
      <Options
        currentQuestion={props.currentQuestion}
        onClickOption={props.onClickOption}
        currentAnswers={props.currentAnswers}
      />
    </div>
  );
}
export default QuestionContainer;
