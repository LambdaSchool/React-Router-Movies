import React, { Component } from 'react';
import axios from 'axios';


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      id: props.match.params.id
    };
    // this.addToSavedList = (movie) => props.addToSavedList(this.state.movie)
    // console.log(props.addToSavedList);
  }
  

  componentDidMount() {     
    this.fetchMovie(this.state.id);
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

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render(props) {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars, id } = this.state.movie;
    console.log(this.props);
    
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
        <div className="save-button" onClick={this.saveMovie}>Save</div>
      </div>
    );
  }
}
