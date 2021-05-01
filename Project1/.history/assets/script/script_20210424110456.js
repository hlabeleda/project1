//modal

var movieButton = document.querySelector('#video');
var modalBkg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');


movieButton.addEventListener("click", function() {
    modal.setAttribute("class", "modal is-active");
    
});

modalBkg.addEventListener("click", function(){
    modal.setAttribute("class", "modal");




});


$(function(){
    $('#myModal').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('src')[0].pause();
    });
});