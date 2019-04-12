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
    var urls = this.props.handleDisplay
    var renderImages = urls.map((i) => {
      return (
        <div key={i.key}>
          <img src={i.url} srcSet={`${i.url_fw} 480w, ${i.url} 1800w`} sizes={`(max-width: 800px) 800px, 1800px`} alt="Giphy"/>
        </div>
      )
      
      // React.createElement(
      //   "div",
      //   null,
      //   React.createElement("img", {
      //     src: i,
      //     alt: "Giphy" }),
      // );
    });
    
    return (
      <div className="display" ref="display">
        {renderImages}
      </div>
    );
  }
}

export default Display;