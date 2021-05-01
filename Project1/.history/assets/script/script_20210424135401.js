//modal

var movieButton = document.querySelector('#video');
var modalBkg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
var modalCl = document.querySelector('.modal-close');
var myFrame = document.querySelector('iframe');


movieButton.addEventListener("click", function() {
    modal.setAttribute("class", "modal is-active");
    
});

modalBkg.addEventListener("click", function(){
    modal.setAttribute("class", "modal");
    



});



