import React, { Component } from 'react';
import axios from 'axios';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    // const id = 1;
    const id = this.props.match.params.id;
    // const id = this.props.movies.id;
    // const id = this.state.response.data;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }
  addToSavedList = (movieTitle) => {

  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;

    if (addToSavedList) {
      // const addToSavedList = this.props.addToSavedList;

      const addToSavedList = this.state.movie;
      // addToSavedList.push(this.state.movie)
      console.log(addToSavedList);
      console.log(typeof addToSavedList);
    } else {
      // const addToSavedList = this.props.addToSavedList;
      const addToSavedList = this.state.movie;

      console.log(addToSavedList);
      console.log(typeof addToSavedList);
      // addToSavedList.push(this.state.movie)
    }

  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button" onClick={this.saveMovie} >Save</div>
      </div>
    );
  }
}
