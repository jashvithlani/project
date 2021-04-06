import Button from "./../Button";
function PreFooter(props) {
  return (
    <div className="preFooter">
      <div className="save" id="save">
        <Button text={"Save & Next"} />
      </div>
      <div className="review" id="review">
        <Button text={"Review Later"} onclick={props.handleReviewButtonClick} />
      </div>
      <div className="clearSelect" id="clearS">
        <Button text={"Clear Selection"} onclick={props.handleClearSelectionClick} />
      </div>
    </div>
  );
}
export default PreFooter;
