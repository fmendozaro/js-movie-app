# Movies Application

For this project, we will be building a single page movie application (SPA). It
will allow users to add, edit, and delete movies, as well as rate them. We will
be using [`json-server`](https://github.com/typicode/json-server) to mock a
database and our backend, so that we can just worry about the front end and AJAX
requests.

The webpack dev server is configured to watch for changes both in the javascript
source, as well as the `public` directory. Whenever changes are detected, the
page will be reloaded. It will also proxy any requests that start with `/api` to
localhost:3000, which is where json-server is configured run.

`json-server` is configured to have a delay of 1.2 seconds, so you can see what
your application might actually look like, instead of serving instantaneous
reponses. You can modify this behavior by changing (or removing) the number
after the `-d` flag inside of the npm `dev` script.

## Setup

1. Fork this repository to your own github account or your github organization.

1. Clone your fork locally into your computer.

1. Run `npm install`

1. Run `npm run build`

1. Run `npm run dev` and visit
   [http://localhost:1313/](http://localhost:1313/) in your browser. Open up
   the console and inspect the output.

## Development

In general, you should have the development web server (`npm run dev`) running
while you are working on the project. You should view your project through
http://localhost:1313, **not** from IntelliJ's web server, or by dragging the
file(s) into chrome. As you make changes to your source files, all you need to
do is save the file, and the website will be live reloaded.

Take a look at the `src/index.js` file to get started. You will notice it has
examples of importing and requiring separate javascript files. Regardless of
which you choose to use, you should pick one and use it throughout your code
base, don't mix and match the two.

The file `src/api.js` also contains an example api request. You can
reference this to get started building out the parts of your application that
interact with the api.

The `db.json` file contains your "database". You can edit this file directly to
make changes to your data, and this file will be updated if you make api
requests that modify the data.

The server will serve files from the `public` directory, meaning any files
outside of `public` will not be visible. This means if you have any frontend
assets (e.g. bootstrap, or images) they will need to be in the `public`
directory.

## Specification

Your application should:

On page load:

- Display a "loading..." message
- Make an ajax request to get a listing of all the movies
- When the initial ajax request comes back, remove the "loading..." message
  and replace it with HTML generated from the json response your code
  receives

Allow users to add new movies

- Create a form for adding a new movie that has fields for the movie's title
  and rating
- When the form is submitted, the page should **not** reload / refresh,
  instead, your javascript should make a POST request to `/api/movies` with the
  information the user put into the form

Allow users to edit existing movies

- Give users the option to edit an existing movie
- A form should be pre-populated with the selected movie's details
- Like creating a movie, this should not involve any page reloads, instead
  your javascript code should make an ajax request when the form is
  submitted.

Delete movies

- Each movie should have a "delete" button
- When this button is clicked, your javascript should send a `DELETE` request

### Bonuses

- Add a `disabled` attribute to buttons while their corresponding ajax request
  is still pending.
- Show a loading animation instead of just text that says "loading..."
- Use modals for the creating and editing movie forms
- Add a `genre` property to every movie
- Allow users to sort the movies by rating, title, or genre (if you have it)
- Allow users to search through the movies by rating, title, or genre (if you
  have it)

## Helpful Hints

- The id property of every movie should not be edited by hand. The purpose of
  this property is to uniquely identify that particular movie. That is, if we
  want to delete or modify an existing movie, we can specify what movie we want
  to change by referencing it's id. When a new movie is created (i.e.  when you
  send a `POST` request to `/api/movies` with a title and a rating), the server
  will respond with the movie object that was created, including a generated id.
- Take a look at the other branches in this repository, as they have
  configuration/setup for common scenarios, such as including bootstrap in your
  application.
