import React from "react";
import { render } from "react-dom";

import { ReactComponent } from "./ReactComponent";

render(
  <ReactComponent name="tanaka" music="jazz" />,
  document.getElementById("root")
);
