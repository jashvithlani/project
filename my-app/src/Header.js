import TimerCountDown from "./TimerCountDown"
function Header(props) {
  const navBarButtons = props.sections.map((section) => {
    if (section.key == props.currSection) {
      return (
        <button
          onClick={props.changeSection}
          id={section.key}
          key={section.key}
          className="navActive"
        >
          {section.text}
        </button>
      );
    }
    return (
      <button onClick={props.changeSection} id={section.key} key={section.key}>
        {section.text}
      </button>
    );
  });

  return (
    <div>
      <div id="header">
        <h2>JEE MAIN MOCK TEST 1</h2>
         <TimerCountDown/>

      </div>

      <div className="hdiv" id="navbar">
        {navBarButtons}
      </div>
    </div>
  );
}
export default Header;
