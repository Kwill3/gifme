import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import Generate from './components/generate';
import Display from './components/display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  getSearch = async (e) => {
    // Prevent page from refreshing
    e.preventDefault()
    // Replace spaces with '+'
    const query = (e.target.elements.query.value).replace(/\s/g, '+');
    // Fetch data from API
    const json = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dV4458Zz6uvL4aZybeNPkgaS0lJhpwiZ`).then(response => response.json());
    console.log(json);
    // Assign unique keys to urls from returned data
    const arr = [];
    for (let i = 0; i < json.data.length; i++) {
      arr.push(
        {
          url : [json.data[i].images.original.url],
          url_fw : [json.data[i].images.fixed_width.url],
          key : [json.data[i].id]
        });
    }
    this.setState({
      urls: arr
    })
  }

  getTrending = async() => {
    // Fetch data from API
    const json = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=dV4458Zz6uvL4aZybeNPkgaS0lJhpwiZ`).then(response => response.json());
    console.log(json);
    // Assign unique keys to urls from returned data
    const arr = [];
    for (let i = 0; i < json.data.length; i++) {
      arr.push(
        {
          url : [json.data[i].images.original.url],
          url_fw : [json.data[i].images.fixed_width.url],
          key : [json.data[i].id]
        });
    }
    this.setState({
      urls: arr
    })
  }

  getRandom = async() => {
    // Fetch data from API
    const json = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=dV4458Zz6uvL4aZybeNPkgaS0lJhpwiZ`).then(response => response.json());;
    console.log(json);
    // Push urls from returned data into array
    const arr = [];
    arr.push(
        {
          url : [json.data.images.original.url],
          url_fw : [json.data.images.fixed_width.url],
          key : [json.data.id]
        });
    this.setState({
      urls: arr
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="title">GIPHY API presents.... GIFME!</h1>
        <p id="instructions">Click one of the buttons below to start generating GIFs</p>
        <Search className="search" handleSubmit={this.getSearch}/>
        <Generate className="generate" handleTrending={this.getTrending} handleRandom={this.getRandom}/>
        <Display handleDisplay={this.state.urls}/>
      </div>
    );
  }
}

export default App;
