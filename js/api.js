"use strict";

const URL = "https://fma.glitch.me/movies";
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
            .then(() => {
                console.log("post was created successfully ");
            })
            .catch(error => {
                console.error(error);
            });
    }
}