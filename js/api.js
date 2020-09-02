"use strict";

const URL = "https://codeup-json-server.glitch.me/movies";

const API = {
    getMovies: () => {
        return fetch(URL)
            .then(response => response.json());
    },
    getMovie: id => {
        return fetch(`${id}`)
    },
    postMovie: (movie) => {

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };

        fetch(URL, options)
            .then(() => {
                console.log("movie was created successfully ");
            })
            .catch(error => {
                console.error(error);
            });
    }
}