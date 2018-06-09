import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../css/main.css";
//import slides from ../assets/slides.js;
import loremIpsum from "../assets/texts/loremipsum.js";

function TextNode ({ bool, text }) {
  return (
    <CSSTransition in = {bool} classNames = {style.submerge} timeout = {100}>
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

    this.state = {submerged: 0, heights: null, scroll: 0, start: false};
    //Refs
    this.textContainerRef = React.createRef();
    //Binds
    this.updateWater = this.updateWater.bind(this);
    this.scrollCalc = this.scrollCalc.bind(this);
  }
  componentDidMount () {
    //Ok, when calculating ref children sizes while using componentDidMount, componentDidMount actually mounts before injecting CSS.
    //So what ends up happening is that the offset tops are not correct to what I want them to do. You have to setTimeout.
    //This shouldn't be a problem, as I am not using this in the final implementation like this.
    window.addEventListener('scroll', this.scrollCalc, false);


    //let arr = [...this.textContainerRef.current.childNodes].map((v) => [v.tagName, v.offsetTop, false]);
  //  this.setState({heights: arr}, () => this.water = setInterval(() => this.updateWater(), 100));
  }

  componentWillUnmount() {
    clearInterval(this.water);
    window.removeEventListener('scroll', this.scrollCalc, false);
  }

  scrollCalc() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop  === document.documentElement.clientHeight) {
      window.removeEventListener('scroll', this.scrollCalc, false);
      let arr = [...this.textContainerRef.current.childNodes].map((v) => [v.tagName, v.offsetTop, false]);
      this.setState({heights: arr, start: true}, () => this.water = setInterval(() => this.updateWater(), 100));
    }
  }

  updateWater() {
    let ref = this.textContainerRef.current;
    let arr = this.state.heights.map((v) => [v[0], v[1], (v[1] > ref.scrollHeight - this.state.submerged) ? true : false]);
    if (this.state.submerged > ref.scrollHeight) clearInterval(this.water);
    this.setState({submerged: this.state.submerged + 1, heights: arr});
  }

  render() {


    return(
      <div className = {style.wrapper}>
        <Content contentRef = {this.textContainerRef} heights = {this.state.heights} />
        {this.state.start && <div className = {style.water} style = {{height: this.state.submerged}}></div>}
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
