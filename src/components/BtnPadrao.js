import React from "react";
import './btnPadrao.css';

class BtnPadrao extends React.Component {

  handleClick = () => {
    this.props.onClick(this.props.text)
  };

  render() {
    return (
      <button type="button" class="btnPadrao" onClick={this.handleClick} >{this.props.value}</button>
    );
  }
}
export default BtnPadrao;