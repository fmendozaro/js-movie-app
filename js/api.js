"use strict";

const URL = "https://codeup-json-server.glitch.me/movies";

const API = {
    getMovies: () => {
        return fetch(URL).then(response => response.json());
    },
    getMovie: id => {
        return fetch(`${URL}/${id}`).then(response => response.json());
    },
    postMovie: (movie) => {

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };

        return fetch(URL, options)
            .then(() => {
                console.log("movie was created successfully");
            })
            .catch(error => {
                console.error(error);
            });
    },
    editMovie: (movie) => {

        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };

        return fetch(`${URL}/${movie.id}`, options)
            .then(() => {
                console.log("movie was edited successfully");
            })
            .catch(error => {
                console.error(error);
            });
    },
    deleteMovie: id => {
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        return fetch(`${URL}/${id}`, options)
            .then(() => {
                console.log("movie was deleted successfully");
            })
            .catch(error => {
                console.error(error);
            });
    }
}