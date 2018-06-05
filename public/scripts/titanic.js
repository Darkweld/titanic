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
    this.state = {submerged: 0, items: items, bottom: null, heights: null};
    this.textContainerRef = React.createRef();
    this.updateWater = this.updateWater.bind(this);
  }
  componentDidMount () {
    // get items heights and wrapper/body height, then determine whether a div or object is submerged.
    let arr = [...this.textContainerRef.current.childNodes].map((v) => [v.tagName, v.getBoundingClientRect().top]);
    this.setState({bottom: this.textContainerRef.current.scrollHeight, heights: arr});
    this.water = setInterval(() => this.updateWater(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.water);
  }

  updateWater() {
    let sub = this.state.bottom - this.state.submerged;
    let items = this.state.heights.map((v, i) => {
      let submerged = (v[1] > sub) ? "submerged " : "";
       if (v[0] === "P") return <p key = {i} className = {submerged + style.descriptionText}>{loremIpsum[i]}</p>
      });
    let max = (this.state.submerged + 25 < this.state.bottom) ? this.state.submerged + 25 : this.state.bottom;
    this.setState({submerged: max, items: items});
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
