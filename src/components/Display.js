import React from "react";
import './Display.css';

class Display extends React.Component {

  render() {
    return (
      <div class="DisplayCss" >{this.props.value}</div>
    );
  }
}
export default Display;