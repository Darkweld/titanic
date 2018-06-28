import React from "react";
import ReactDOM from "react-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../css/main.css";
//import slides from ../assets/slides.js;
import titanicText from "../assets/texts/titanicText.js";

function TextNode ({ bool, text, picture }) {
  return (
    <div className = {(bool) ? style.submerged : style.layoutDiv}>
      <p className = {style.descriptionText}>{text}</p>
      {picture && <img className = {style.picture} />}
    </div>
  );
}

class Content extends React.Component {
  render() {
    let arr = titanicText.map((value, i) => <TextNode key = {i} bool = {this.props.submerged} text = {value.text} picture = {(value.picture) && true} />);

  return (
    <div ref = {this.props.textRef} style = {{"height": (!this.props.started) ? "auto" : this.props.height  }} className = {(this.props.submerged) ? style.textContainerSubmerged : style.textContainer}>
      {arr}
    </div>
  );
  }
}

class Main extends React.Component {
  constructor() {
    super();

    this.state = {submerged: 0, height: null, scroll: 0, start: false};
    this.textContainerRef = React.createRef();
    //Binds
    this.updateWater = this.updateWater.bind(this);
    this.scrollCalc = this.scrollCalc.bind(this);
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrollCalc, false);
  }

  componentWillUnmount() {
    clearInterval(this.water);
    window.removeEventListener('scroll', this.scrollCalc, false);
  }

  scrollCalc() {
    if (Math.ceil(document.documentElement.scrollHeight - document.documentElement.scrollTop) <= document.documentElement.clientHeight) {
      window.removeEventListener('scroll', this.scrollCalc, false);
      this.setState({start: true, height: this.textContainerRef.current.scrollHeight}, () => this.water = setInterval(() => this.updateWater(), 100));
    }
  }

  updateWater() {
    if (this.state.submerged > this.state.height) clearInterval(this.water);
    this.setState({submerged: this.state.submerged + 1});
  }

  render() {


    return(
      <div className = {style.wrapper}>
        <Content started = {this.state.start} height = {this.state.height - this.state.submerged} textRef = {this.textContainerRef}/>
        <Content submerged = {true}/>
        {this.state.start && <div className = {style.water} style = {{height: this.state.submerged}}></div>}
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
