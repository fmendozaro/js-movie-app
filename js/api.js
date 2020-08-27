"use strict";

const URL = "https://codeup-movies.firebaseio.com/codeup-movies/fer.json";
const movie = {title: 'up', rating: 5};
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
};

const API = {
    getMovies: () => {
        return fetch(URL)
            .then(response => response.json());
    },
    postMovie: () => {
        fetch(URL, options)
            .then(/* post was created successfully */)
            .catch(/* handle errors */);
    }
}