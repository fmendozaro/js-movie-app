"use strict";

//ESC key
$(document).keyup(function(e) {
    //ESC
    if (e.keyCode === 27){
        $("#wrapper").fadeOut();
    }
});

loadMovies();

function loadMovies(){
    $('#editModal').modal('hide')
    $("#wrapper").fadeIn();
    API.getMovies().then((movies) => {
        $("#wrapper").fadeOut();
        $("#movie-cards").empty();
        movies.forEach(({title, rating, id}) => {
            $("#movie-cards").append(`<div class="card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTYzNDQyMzkyMV5BMl5BanBnXkFtZTgwMTE3MTI4MTE@._V1_SY1000_CR0,0,752,1000_AL_.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${rating}</p>
                <button data-id="${id}" class="btn btn-success edit-btn" data-toggle="modal" data-target="#editModal">Edit</button>
            </div>
        </div>`);
        });

        $(".edit-btn").click(function(e){
            $("#wrapper").fadeIn();
            e.preventDefault();
            let id = $(this).data('id');

            API.getMovie(id).then( movie => {
                $("#wrapper").fadeOut();
                $("#title-edit").val(movie.title);
                $("input[value='"+movie.rating+"']").attr('checked', 'checked');
                $("#movie-id").val(movie.id);
            });
        });

    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
        console.log('error', error);
    });
}

$("#submit-movie-btn").click(function(e){
    e.preventDefault();
    let movie = {
        title: $("#title").val(),
        rating: $("input[name='rating']:checked").val()
    }
    API.postMovie(movie).then( () => loadMovies());
});

$("#submit-changes-btn").click(function(e){
    e.preventDefault();
    let movie = {
        id: $("#movie-id").val(),
        title: $("#title-edit").val(),
        rating: $("input[name='rating-edit']:checked").val()
    }
    API.editMovie(movie).then( () => loadMovies());
});

$("#delete-movie-btn").click(function(e){
    e.preventDefault();
    API.deleteMovie($("#movie-id").val()).then( () => loadMovies());
});


