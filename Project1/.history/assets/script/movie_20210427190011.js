//modal
var movieButton = document.querySelector('#videobtn');
var modalBkg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
movieButton.addEventListener("click", function () {
    modal.setAttribute("class", "modal is-active");
});
modalBkg.addEventListener("click", function () {
    modal.setAttribute("class", "modal");
});
$(document).ready(function () {
    $('.modal').each(function () {
        var src = $(this).find('iframe').attr('src');
        $(this).on('click', function () {
            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
        });
    });
});
function randomMovie() {
    // gets the stored values from the checkboxes
    var selected = localStorage.getItem('checked');
    var apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=2d68f36569896b3eca3f4d442ec3c9a3&language=en-US&sort_by=popularity.desc&vote_count.gte=50&certification_country=US&include_adult=false&watch_region=US` + selected + '&page=`'
    fetch(apiURL)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            var random = Math.floor(Math.random() * data.total_results);
            console.log(random);
            var randomPage = Math.ceil(random / 20);
            var randomResult = random % 20;
            console.log(randomPage, randomResult);
            fetch(`${apiURL}${randomPage}`).then(function (data) {
                return data.json()
            }).then(function (data) {
                console.log(data.results[randomResult])
                // appends the poster
                $('#show_poster').append(`<div class="card" style="width: 18rem;">
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.results[randomResult].poster_path}" class="card-img-top" alt="...">
                <div class="card-body"> `);
                // appends the movie title
                $('#show_title').append(`${data.results[randomResult].original_title.toUpperCase()}`)
                // append movie desc.
                $('#show_desc').append(`${data.results[randomResult].overview}`)
                $("body").append(`
          <div class="card" style="width: 18rem;">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.results[randomResult].poster_path}" class="card-img-top" alt="...">
            <img src="https://image.tmdb.org/t/p/w500/${data.results[randomResult].backdrop_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.results[randomResult].original_title.toUpperCase()}</h5>
              <p class="card-text">
                <ul>
                  <li>${data.results[randomResult].overview}</li>
                  <li>${data.results[randomResult].release_date}</li>
                  <li>${data.results[randomResult].vote_average}</li>
                </ul>
              </p>
            </div>
          </div>`);
            })
        })
};
randomMovie();