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
    this.state = {submerged: 0, items: items, heights: null};
    this.textContainerRef = React.createRef();
    this.waterRef = React.createRef();
    this.updateWater = this.updateWater.bind(this);
  }
  componentDidMount () {
    // get items heights and wrapper/body height, then determine whether a div or object is submerged.
    let arr = [...this.textContainerRef.current.childNodes].map((v) => [v.tagName, v.getBoundingClientRect().top]);
    console.log(arr.map(v => v[1]));
    this.setState({heights: arr, bottom: document.body.scrollHeight}, () => this.water = setInterval(() => this.updateWater(), 100));
    //this.water = setInterval(() => this.updateWater(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.water);
  }

  updateWater() {
    this.setState({submerged: this.state.submerged + 1});
  }

  render() {
    let items = (this.state.heights) ? this.state.heights.map((v, i) => {
      let submerged = (v[1] > this.state.bottom - this.state.submerged) ? "submerged " : "";
       if (v[0] === "P") return <p key = {i} className = {submerged + style.descriptionText}>{loremIpsum[i]}</p>
      }) : null;


    return(
      <div className = {style.wrapper}>
        <div className = {style.textContainer} ref = {this.textContainerRef}>
          {items || this.state.items}
        </div>
        <div ref = {this.waterRef} className = {style.water} style = {{height: this.state.submerged}}></div>
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
