import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MoviesList from './components/MoviesList';
import Movie from './components/Movie';
import { Navigation } from './components/Navigation';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
          <Route exact path='/' component={Home} />
	  <Route path='/movies' component={MoviesList} />
          <Route path='/movies/:id' component={Movie} />
      </div>
    );
  }
}

export default App;
