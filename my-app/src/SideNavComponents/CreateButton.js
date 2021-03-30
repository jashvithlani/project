function CreateButton(props) {
  if (
    (props.currentAnswers[props.id] == null ||
      props.currentAnswers[props.id] == undefined) &&
    props.reviewQuestions[props.id] == false
    ) {
    return <button className="sideNavButton">Q{props.id + 1}</button>;
  }
  else if(
    (props.currentAnswers[props.id] == null ||
    props.currentAnswers[props.id] == undefined) &&
  props.reviewQuestions[props.id] == true
  )
  {
    return <button className="sideNavButtonToBeReviewed">Q{props.id + 1}</button>;
  }
  else if(
    (props.currentAnswers[props.id] != null &&
    props.currentAnswers[props.id] != undefined) &&
  props.reviewQuestions[props.id] == false
  )
  {
    return <button className="sideNavButtonAnswered">Q{props.id + 1}</button>;
  }
  else
  {
    return <button className="sideNavButtonAnsweredAndReview">Q{props.id + 1}</button>;
  }
}
export default CreateButton;
