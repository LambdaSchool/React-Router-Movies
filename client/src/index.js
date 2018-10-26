import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import App from './App';

import MovieList from "./Movies/MovieList"




ReactDOM.render(


    <Router>
    <App />
    </Router>,
    document.getElementById('root'));
