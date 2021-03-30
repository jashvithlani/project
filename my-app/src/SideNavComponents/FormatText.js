function FormatText(props) {
  if (props.count <= 9) {
    return <div>0{props.count}</div>;
  } else {
    return <div>{props.count}</div>;
  }
}
export default FormatText;
