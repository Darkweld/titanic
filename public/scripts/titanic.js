import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../css/main.css";
//import slides from ../assets/slides.js;
import loremIpsum from "../assets/texts/loremipsum.js";

function TextNode ({ bool, text }) {
  return (
    <CSSTransition in = {bool} className = {style.submerge} timeout = {1000}>
      <p className = {style.descriptionText}> {text} </p>
    </CSSTransition>
  );
}


class Content extends React.Component {
  render() {
    let arr = (this.props.heights) ? this.props.heights.map((v, i) => {
       if (v[0] === "P") return <TextNode key = {i} bool = {v[2]} text = {loremIpsum[i]} />
    }) : loremIpsum.map((v, i) =>  <p key = {i} className = {style.descriptionText}>{v}</p>);

  return (
    <div ref = {this.props.contentRef} className = {style.textContainer}>
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
    let arr = [...this.textContainerRef.current.childNodes].map((v) => [v.tagName, v.offsetTop, false]);
    this.setState({heights: arr}, () => this.water = setInterval(() => this.updateWater(), 100));
  }

  componentWillUnmount() {
    clearInterval(this.water);
  }

  updateWater() {
    let ref = this.textContainerRef.current;
    console.log(this.state.heights);
    let arr = this.state.heights.map((v) => {
      v[2] = (v[1] > ref.scrollHeight - this.state.submerged) ? true : false;
      return;
    });
    if (this.state.submerged > ref.scrollHeight) clearInterval(this.water);
    this.setState({submerged: this.state.submerged + 1, heights: arr});
  }

  render() {


    return(
      <div className = {style.wrapper}>
        <Content contentRef = {this.textContainerRef} heights = {this.state.heights}/>
        <div ref = {this.waterRef} className = {style.water} style = {{height: this.state.submerged}}></div>
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
