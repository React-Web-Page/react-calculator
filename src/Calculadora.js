import React from "react";
import './Calculadora.css';
import ButtonOperation from "./components/ButtonOperation";
import BtnPadrao from "./components/BtnPadrao";


class Calculadora extends React.Component {

  handleClick = (value) => {
    this.props.onClick(value)
  }

  render() {

    return (
      <div class="Tudo">
        <section class="BtnPadrao">
          <div>
            <ButtonOperation onClick={this.handleClick} text="7" value="7" />
            <ButtonOperation onClick={this.handleClick} text="8" value="8" />
            <ButtonOperation onClick={this.handleClick} text="9" value="9" />
            <ButtonOperation onClick={this.handleClick} text="/" value="/" />
          </div>
          <div >
            <ButtonOperation onClick={this.handleClick} text="4" value="4" />
            <ButtonOperation onClick={this.handleClick} text="5" value="5" />
            <ButtonOperation onClick={this.handleClick} text="6" value="6" />
            <ButtonOperation onClick={this.handleClick} text="*" value="*" />
          </div>
          <div>
            <ButtonOperation onClick={this.handleClick} text="1" value="1" />
            <ButtonOperation onClick={this.handleClick} text="2" value="2" />
            <ButtonOperation onClick={this.handleClick} text="3" value="3" />
            <ButtonOperation onClick={this.handleClick} text="-" value="-" />
          </div>
          <div >
            <ButtonOperation onClick={this.handleClick} text="." value="." />
            <ButtonOperation onClick={this.handleClick} text="0" value="0" />
            <ButtonOperation />
            <ButtonOperation onClick={this.handleClick} text="+" value="+" />
          </div>
        </section>
        <section class="BtnGrande">
          <BtnPadrao onClick={this.handleClick} text="Clear" value="Clear" />
          <BtnPadrao onClick={this.handleClick} text="=" value="=" />
        </section>
      </div>
    );
  }
}

export default Calculadora;