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
    $(modal).on('hidden.bs.modal', function (e) {
      $iframe = $(this).find("iframe");
      $iframe.attr("src", $iframe.attr("src"));
    });
  });
