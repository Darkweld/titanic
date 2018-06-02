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

    let items = loremIpsum.map((v, i) => <p key = {i} className = {style.descriptionText}>{v}</p>);
    this.state = {submerged: 500, items: items, bottom: document.body.scrollHeight};
    this.textContainerRef = React.createRef();
  }
  componentDidMount () {
    // get items heights and wrapper/body height, then determine whether a div or object is submerged.
    let array = [...this.textContainerRef.current.childNodes];
    let items = array.map((v, i) => {
      console.log(v.getBoundingClientRect().top, this.state.bottom);
      if (v.getBoundingClientRect().top > this.state.bottom - this.state.submerged) {
        if (v.tagName === "P") return <p key = {i} className = {style.textSubmerged}>{v.textContent}</p>
    }
    });
    this.setState({items: items});
  }


  render() {


    return(
      <div className = {style.wrapper}>
        <div className = {style.textContainer} ref = {this.textContainerRef}>
          {this.state.items}
        </div>
        <div className = {style.water} style = {{height: this.state.submerged}}></div>
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
