import React from "react";
import { render } from "react-dom";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 10 };
  }

  render() {
    return (
      <div>
        <h2>{this.state.temp}</h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    this.setState({ temp: this.state.temp + 1 });
  };

  onPlus10Click = () => {
    this.setState({ temp: this.state.temp + 10 });
  };

  onMinusClick = () => {
    this.setState({ temp: this.state.temp - 1 });
  };

  onMinus10Click = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
