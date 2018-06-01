import React from "react";
import ReactDOM from "react-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../css/main.css";
//import slides from ../assets/slides.js;
import Background from "./components/background.js";
import loremIpsum from "../assets/texts/loremipsum.js";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {submerged: 500};
  }
  componentDidMount () {
    // get items heights and wrapper/body height, then determine whether a div or object is submerged.

  }


  render() {
    return(
      <div className = {style.wrapper}>
        {loremIpsum.map((v, i) => <p key = {i}>{v}</p>)}
        <div className = {style.water} style = {{height: this.state.submerged}}></div>
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
