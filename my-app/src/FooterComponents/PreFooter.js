function PreFooter(props) {
  return (
    <div className="preFooter">
      <div className="save" id="save">
        <button type="button" disabled>
          Save &amp; Next
        </button>
      </div>
      <div className="review" id="review">
        <button onClick={props.handleReviewButtonClick} id="reviewButton">
          Review Later
        </button>
      </div>
      <div className="clearSelect" id="clearS">
        <button onClick={props.handleClearSelectionClick}>Clear Selection</button>
      </div>
    </div>
  );
}
export default PreFooter;
