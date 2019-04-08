import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="query" placeholder="Search GIFs" id="search-field"/>
          <button id="search-btn">Find</button>
        </form>
      </div>
    );
  }
}

export default Search;
