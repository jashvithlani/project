import CreateButton from "./CreateButton.js";
function SideNavContainer(props) {
  const buttons = props.questions.map((e, index) => {
    return (
      <CreateButton
        key={index}
        id={index}
        currentAnswers={props.currentAnswers}
        reviewQuestions={props.reviewQuestions}
        handleClick={props.handleClick}
      />
    );
  });
  return (
    <div className="float-child-1-bottom" id="sideNav">
      {buttons}
    </div>
  );
}

export default SideNavContainer;
