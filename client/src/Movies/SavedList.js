import React from 'react';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to={`Movie`}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
