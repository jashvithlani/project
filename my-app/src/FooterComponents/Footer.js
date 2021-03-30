function Footer(props) {
  return (
    <div className="footer" id="footerButtons">
      <div className="prevdiv" id="prev">
        <button onClick={props.handlePrevButtonClick} id="prevButton">
          ← Back
        </button>
      </div>

      <div className="nextdiv" id="next">
        <button onClick={props.handleNextButtonClick} id="nextButton">
          Next →
        </button>
      </div>
      <div className="endtestdiv" id="endtest">
        <button>END TEST</button>
      </div>
    </div>
  );
}
export default Footer;
