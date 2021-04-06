import Button from "./../Button";
function CreateButton(props) {
  if (
    (props.currentAnswers[props.id] == null ||
      props.currentAnswers[props.id] == undefined) &&
    props.reviewQuestions[props.id] == false
  ) {
    return (
      <Button
        onclick={props.handleClick}
        id={props.id}
        classname={"sideNavButton"}
        text={'Q'+(props.id + 1)}/>
      
    );
  } else if (
    (props.currentAnswers[props.id] == null ||
      props.currentAnswers[props.id] == undefined) &&
    props.reviewQuestions[props.id] == true
  ) {
    return (
      
       <Button
       onclick={props.handleClick}
       id={props.id}
       classname={"sideNavButtonToBeReviewed"}
       text={'Q'+(props.id + 1)}/>
    );
  } else if (
    props.currentAnswers[props.id] != null &&
    props.currentAnswers[props.id] != undefined &&
    props.reviewQuestions[props.id] == false
  ) {
    return (
      
      <Button
      onclick={props.handleClick}
      id={props.id}
      classname={"sideNavButtonAnswered"}
      text={'Q'+(props.id + 1)}/>
    );
  } else {
    return (
      
      <Button
      onclick={props.handleClick}
      id={props.id}
      classname={"sideNavButtonAnsweredAndReview"}
      text={'Q'+(props.id + 1)}/>
    );
  }
}
export default CreateButton;
