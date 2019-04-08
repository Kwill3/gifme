import React, { Component } from 'react';
import './generate.css';

class Generate extends Component {
  render() {
    return (
      <div className="generate">
        <button className="gen-btn" onClick={this.props.handleRandom}>Generate a random GIF</button>
        <button className="gen-btn" onClick={this.props.handleTrending}>Generate Trending GIFs</button>
      </div>
    );
  }
}

export default Generate;
