$(function () {

	$('.data-item').on('click', function(event){
		event.preventDefault();
		history.pushState({key:'article'},'Mon titre', 'article1');
	})

	window.onpopstate = function(event){
		console.log(event);
	}

	saveState =  function(){
		console.log("saveState");
		history.pushState({key:'article'},'Mon titre', '');
	}

	backToState = function(){
		history.back();
	}

 // but keeps it much simpler from a code perspective.
 function moreContent() {

   // Create a div for the slot
   var elemDiv = document.createElement('div');
   elemDiv.className = "data-item";

   // Create and add fake content 1
   var text1=document.createTextNode("Dynamic Fake Content 1");
   elemDiv.appendChild(text1);
   document.getElementById("container").appendChild(elemDiv);

 }

});