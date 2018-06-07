import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../css/main.css";
//import slides from ../assets/slides.js;
import loremIpsum from "../assets/texts/loremipsum.js";

function TextNode ({ bool, text }) {
  return (
    <CSSTransition className = {style.slide} timeout = {1000}>
      <p className = {(bool) ? style.submerged : style.descriptionText}> {text} </p>
    </CSSTransition>
  );
}


class Content extends React.Component {
  render() {
    let arr = this.props.content.map((v, i) => {
      let submerged = (v[1] > this.props.breakpoint) ? true : false;
       if (v[0] === "P") return <TextNode key = {i} bool = {submerged} text = {loremIpsum[i]} />
    });

  return (
    <div className = {style.centerContainer}>
      {arr}
    </div>

  );
  }
}

class Main extends React.Component {
  constructor() {
    super();

    this.state = {submerged: 0, heights: null};
    this.textContainerRef = React.createRef();
    this.waterRef = React.createRef();
    this.updateWater = this.updateWater.bind(this);
  }
  componentDidMount () {
    this.water = setInterval(() => this.updateWater(), 100);
    //this.water = setInterval(() => this.updateWater(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.water);
  }

  updateWater() {
    let ref = this.textContainerRef.current;
    let arr = [...ref.childNodes].map((v) => [v.tagName, v.offsetTop]);
    if (this.state.submerged > ref.scrollHeight) clearInterval(this.water);
    this.setState({submerged: this.state.submerged + 1, heights: arr, bottom: ref.scrollHeight});
  }

  render() {
    let items = (this.state.heights) ? this.state.heights.map((v, i) => {
      let submerged = (v[1] > Math.floor(this.state.bottom - this.state.submerged)) ? "submerged " : "";
       if (v[0] === "P") return <p key = {i} className = {submerged + style.descriptionText}>{loremIpsum[i]}</p>
      }) : loremIpsum.map((v, i) => <p key = {i} className = {style.descriptionText}>{v}</p>);


    return(
      <div className = {style.wrapper}>
        <div className = {style.textContainer} ref = {this.textContainerRef}>
          {items}
        </div>
        <div ref = {this.waterRef} className = {style.water} style = {{height: this.state.submerged}}></div>
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
