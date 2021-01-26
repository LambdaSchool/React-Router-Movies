import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

export default function App() {
	// const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const getMovies = () => {
			axios
				.get("http://localhost:5000/api/movies") // Study this endpoint with Postman
				.then((response) => {
					// Study this response with a breakpoint or log statements
					// and set the response data as the 'movieList' slice of stat
					return setMovieList(response.data);
				})
				.catch((error) => {
					console.error("Server Error", error);
				});
		};
		getMovies();
	}, []);

	const addToSavedList = (id) => {
		// This is stretch. Prevent the same movie from being "saved" more than once
	};

	return (
		<div>
			<SavedList
				list={
					[
						/* This is stretch */
					]
				}
			/>
			<Switch>
				<Route path={`/movie-list/:movieID`}>
					<Movie />
				</Route>
				<Route exact path={"/"}>
					<MovieList movies={movieList} />
				</Route>
			</Switch>
		</div>
	);
}
