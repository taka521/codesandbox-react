import React from "react";
import { render } from "react-dom";

import "./styles.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 10 };
  }

  render() {
    const { temp } = this.state;

    return (
      <div className={this.H2OState(temp)}>
        <h2>
          phase: {this.H2OState(temp)},{temp}度
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  H2OState(temp) {
    if (temp <= 0) return "ice";
    if (temp >= 100) return "steam";
    return "water";
  }

  onPlusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };

  onPlus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };

  onMinusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };

  onMinus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
