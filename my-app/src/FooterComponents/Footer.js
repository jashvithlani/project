import Button from "./../Button";
function Footer(props) {
  return (
    <div className="footer" id="footerButtons">
      <div className="prevdiv" id="prev">
        <Button text={"← Back"} onclick={props.handlePrevButtonClick} />
      </div>
      <div className="nextdiv" id="next">
        <Button text={"Next →"} onclick={props.handleNextButtonClick} />
      </div>
      <div className="endtestdiv" id="endtest">
        <Button text={"END TEST"} />
      </div>
    </div>
  );
}
export default Footer;
