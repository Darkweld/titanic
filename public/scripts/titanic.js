import React from "react";
import ReactDOM from "react-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../css/main.css";
//import slides from ../assets/slides.js;
import { TitanicText, TitanicTextSubmerged } from "../assets/texts/titanicText.js";

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
      let arr = [...this.textContainerRef.current.childNodes].map(v => v.clientHeight);

      this.setState({start: true, height: this.textContainerRef.current.scrollHeight, divHeights: arr}, () => this.water = setInterval(() => this.updateWater(), 100));
    }
  }

  updateWater() {
    if (this.state.submerged > this.state.height) clearInterval(this.water);
    this.setState({submerged: this.state.submerged + 1});
  }

  render() {


    return(
      <div className = {style.wrapper}>
        <TitanicText started = {this.state.start} height = {(this.state.start) ? this.state.height - this.state.submerged : "auto"} textRef = {this.textContainerRef}/>
        {this.state.start && <TitanicTextSubmerged />}
        {this.state.start && <div className = {style.water} style = {{height: this.state.submerged}}></div>}
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
