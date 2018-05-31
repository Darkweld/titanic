import React from "react";
import ReactDOM from "react-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../css/main.css";
//import slides from ../assets/slides.js;
import Background from "./components/background.js";


class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div className = {style.wrapper}>
        {this.state.started && <Background imageLink = {this.state.background} />}
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
