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

function stopVideo(id){
    var src = $j('iframe.'+id).attr('src');
    $j('iframe.'+id).attr('src','');
    $j('iframe.'+id).attr('src',src);
  
  }