//modal

var movieButton = document.querySelector('#videobtn');
var modalBkg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');

movieButton.addEventListener("click", function() {
    modal.setAttribute("class", "modal is-active");
    
});

modalBkg.addEventListener("click", function(){
    modal.setAttribute("class", "modal");
    



});



$(document).ready(function(){
    $('.modal').each(function(){
            var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);

        });
    });
});