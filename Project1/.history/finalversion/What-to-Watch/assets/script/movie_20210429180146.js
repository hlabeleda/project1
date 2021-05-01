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

    var apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=2d68f36569896b3eca3f4d442ec3c9a3&language=en-US&sort_by=popularity.desc&vote_count.gte=50&certification_country=US&include_adult=false&watch_region=US` + selected;
    fetch(apiURL)
        .then(function (data) {
            return data.json();

        })
        .then(function (data) {
            console.log(data);
            var random = Math.floor(Math.random() * data.total_results);
            console.log(random);
            var randomPage = Math.ceil(random / 20);
            var ranUrlPage = '&page=';
            var randomResult = random % 20;
            console.log(randomPage, randomResult);
            fetch(`${apiURL}${ranUrlPage}${randomPage}`).then(function (data) {
                return data.json()
            }).then(function (data) {
                console.log(data.results[randomResult])
                var movieId = data.results[randomResult].id;
                // appends the poster
                $('#show_poster').append(`
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.results[randomResult].poster_path}" class="card-img-top" onerror=this.src="./assets/images/poster_not_found.png" style="max-width: fit-content; max-height:512px; border-radius:10px; margin-top: 30px;">
                 `);
                
                 // appends the movie title
                $('#show_title').append(`${data.results[randomResult].title.toUpperCase()}`);
                
                // append movie desc.
                $('#show_desc').append(`${data.results[randomResult].overview}`);
                
                // append the movie background
                $(document).ready(function () {
                    $("#bg").css("background-image", `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.results[randomResult].backdrop_path})`);
                });

                $('#show_release').append(`<p>${data.results[randomResult].release_date}<p>`);

                $('#user_Rating').append(`<p>${data.results[randomResult].vote_average}/10<p>`);
                

                var movieURL = `https://api.themoviedb.org/3/movie/${data.results[randomResult].id}?api_key=2d68f36569896b3eca3f4d442ec3c9a3&language=en-US&append_to_response=credits,videos,watch/providers,rating`
                fetch(movieURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (response) {
                        console.log(response);
            
                        // creating new array to set all tags in a single tag
                        var genreTag = []
                        for (var i = 0; i < response.genres.length; i++) {

                            genreTag.push(response.genres[i].name);
                        };

                        // joining array into a string
                        var genreNames = genreTag.join(', ');
                        // appending genre names
                        $('#show_genre').append(`<p>${genreNames}</p>`);

                        // math to turn the runtime into hours and min. 
                        var totalMin = response.runtime
                        var hours = Math.floor(totalMin/60);
                        var min = totalMin % 60;
                        
                        // appending runtime into moviepage
                        $('#runTime').append(`<p>${hours}hr ${min}min<p>`);

                        // appending cast names
                        $('#actor1').append(response.credits.cast[0].name).css('font-weight', 'bold');
                        $('#actor2').append(response.credits.cast[1].name).css('font-weight', 'bold');
                        $('#actor3').append(response.credits.cast[2].name).css('font-weight', 'bold');
                        $('#actor4').append(response.credits.cast[3].name).css('font-weight', 'bold');
                        $('#actor5').append(response.credits.cast[4].name).css('font-weight', 'bold');
                        $('#actor6').append(response.credits.cast[5].name).css('font-weight', 'bold');
                       
                        // appending characters the actors are playing. 
                        $('#character1').append(response.credits.cast[0].character);
                        $('#character2').append(response.credits.cast[1].character);
                        $('#character3').append(response.credits.cast[2].character);
                        $('#character4').append(response.credits.cast[3].character);
                        $('#character5').append(response.credits.cast[4].character);
                        $('#character6').append(response.credits.cast[5].character);
                        
                        // appending movie actor poster
                        $('#img_actor1').append(`
                            <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/${response.credits.cast[0].profile_path}" class="card-img-top" alt="..." onerror=this.src="./assets/images/altheadshot.jpg" style="max-width: fit-content; max-height:175px; border-radius:10px;">
                             `);
                        $('#img_actor2').append(`
                             <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/${response.credits.cast[1].profile_path}" class="card-img-top" alt="..." onerror=this.src="./assets/images/altheadshot.jpg" style="max-width: fit-content; max-height:175px; border-radius:10px;">
                              `);
                        $('#img_actor3').append(`
                            <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/${response.credits.cast[2].profile_path}" class="card-img-top" alt="..."  onerror=this.src="./assets/images/altheadshot.jpg" style="max-width: fit-content; max-height:175px; border-radius:10px;">
                             `);
                        $('#img_actor4').append(`
                             <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/${response.credits.cast[3].profile_path}" class="card-img-top" alt="..." onerror=this.src="./assets/images/altheadshot.jpg" style="max-width: fit-content; max-height:175px; border-radius:10px;">
                              `);
                        $('#img_actor5').append(`
                              <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/${response.credits.cast[4].profile_path}" class="card-img-top" alt="..." onerror=this.src="./assets/images/altheadshot.jpg" style="max-width: fit-content; max-height:175px; border-radius:10px;">
                               `);
                        $('#img_actor6').append(`
                            <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/${response.credits.cast[5].profile_path}" class="card-img-top" alt="..." onerror=this.src="./assets/images/altheadshot.jpg" style="max-width: fit-content; max-height:175px; border-radius:10px;">
                            `);

                        //appending  trailer from youtube
                        $('#show_preview').append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${response.videos.results[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)

                        // appending streaming logo
                        // $('#stream_banner').append(`
                        // <img src="https://www.themoviedb.org/t/p/original/${response.watchProviders.results.US.flatrate[0].logo_path}"  alt="..." >
                        //  `);
                        // Appending Release Date

                    });


            })
           
        })

};


randomMovie();