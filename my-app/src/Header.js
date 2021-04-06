import TimerCountDown from "./TimerCountDown";
import Button from "./Button";

function Header(props) {
  const navBarButtons = props.sections.map((section) => {
    if (section.key == props.currSection) {
      return (
        <Button
          onclick={props.changeSection}
          id={section.key}
          key={section.key}
          classname="navActive"
          text={section.text}
        />
      );
    }
    return (
      <Button
        onclick={props.changeSection}
        id={section.key}
        key={section.key}
        text={section.text}
      />
    );
  });

  return (
    <div>
      <div id="header">
        <h2>JEE MAIN MOCK TEST 1</h2>
        <TimerCountDown />
      </div>

      <div className="hdiv" id="navbar">
        {navBarButtons}
      </div>
    </div>
  );
}
export default Header;
