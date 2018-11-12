import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Test" };
  }

  render() {
    return (
      <h2>
        {this.state.name} {this.props.age}
      </h2>
    );
  }
}

render(<Human age="3" />, document.getElementById("root"));
