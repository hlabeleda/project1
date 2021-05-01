
.container{
	display: grid;
	grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
	grid-gap: 0.5em;
	
}
	/* grid-template-columns: repeat(auto-fill, minmax(250px,1fr)); */
	/* ^^can be used instead of a media query, need to look more into it*/
.card{
	height: max-content;
}



//modal

var movieButton = document.querySelector('#video');
var modalBkg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');

movieButton.addEventListener("click", function() {
    modal.setAttribute("class", "modal is-active");
    
});

