import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import Generate from './components/generate';
import Display from './components/display';

const API_KEY = 'dV4458Zz6uvL4aZybeNPkgaS0lJhpwiZ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: [],
    }
  }

  getSearch = async (e) => {
    // Prevent page from refreshing
    e.preventDefault()
    // Replace spaces with '+'
    const query = (e.target.elements.query.value).replace(/\s/g, '+');
    // Fetch data from API
    const api_call = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`);
    const json = await api_call.json();
    console.log(json);
    // Push urls from returned data into array
    const arr = [];
    for (let i = 0; i < json.data.length; i++) {
      arr.push(json.data[i].images.original.url);
    }
    this.setState({
      items: arr
    })
  }

  getTrending = async() => {
    // Fetch data from API
    const api_call = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
    const json = await api_call.json();
    console.log(json);
    // Push urls from returned data into array
    const arr = [];
    for (let i = 0; i < json.data.length; i++) {
      arr.push(json.data[i].images.original.url);
    }
    this.setState({
      items: arr
    })
  }

  getRandom = async() => {
    // Fetch data from API
    const api_call = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const json = await api_call.json();
    console.log(json);
    // Push urls from returned data into array
    const arr = [];
    arr.push(json.data.images.original.url);
    this.setState({
      items: arr
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="title">GIPHY API presents.... GIFME!</h1>
        <p id="instructions">Click one of the buttons below to start generating GIFs</p>
        <Search className="search" handleSubmit={this.getSearch}/>
        <Generate className="generate" handleTrending={this.getTrending} handleRandom={this.getRandom}/>
        <Display handleDisplay={this.state.items}/>
      </div>
    );
  }
}

export default App;
