import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "../../css/main.css";

class Background extends React.Component () {
  render() {
  return (
    <TransitionGroup className = {style.backgroundContainer}>
      <CSSTransition className = {style.slide} timeout = {1000}>
        <img src = {this.props.imageLink} className = {style.background}/>
      </CSSTransition>
    </TransitionGroup>

  );
  }
}

export default Background;
