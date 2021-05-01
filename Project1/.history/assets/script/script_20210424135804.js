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



