import React from "react";
import './btnOperacao.css';

class ButtonOperation extends React.Component {


  handleClick = () => {
    this.props.onClick(this.props.text)
  };


  render() {
    return (
      <button class="btnOperacao rounded-circle" onClick={this.handleClick} >{this.props.value}</button>
    );
  }
}

export default ButtonOperation;