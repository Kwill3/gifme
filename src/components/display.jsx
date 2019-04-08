import React, { Component } from 'react';
import './display.css';

class Display extends Component {

  // componentDidMount() {
  //   this.props.handleDisplay
  //     .forEach(i => {
  //       var img = document.createElement('img');
  //       img.src = i;
  //       //img.height = "150";
  //       //img.width = "150";
  //       img.className = "display-gif";
  //       this.refs.display.appendChild(img);
  //     })
  // }

  render() {
    var images = this.props.handleDisplay
    var renderImages = images.map((i) => {
      return React.createElement(
        "div",
        null,
        React.createElement("img", {
          src: i,
          alt: "Giphy" }),
      );
    });
    return (
      <div className="display" ref="display">
        {renderImages}
      </div>
    );
  }
}

export default Display;