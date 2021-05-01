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


$("#myModal").on('hidden.bs.modal', function (e) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});