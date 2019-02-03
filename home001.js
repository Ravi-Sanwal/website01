
//photos slideshow
var slideIndex = 0;
function showSlides() {
  var i,j;
  
  var slides = document.getElementsByClassName("mySlides");	
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
   
  slideIndex++;
  if (slideIndex > slides.length) {
	  slideIndex = 1;
	  }
  slides[slideIndex-1].style.display = "block";
  showClients();
  }
/*while(){*/showSlides();/*}  */
//client slideshow  
var clientIndex = 0;
function showClients(){
	var i,j;
	var clients = document.getElementsByClassName("clients");
	for (i = 0; i < clients.length; i++) {
    clients[i].style.display = "none";  
  }
  for(j = clientIndex ;j<(5+clientIndex); j++){
	 
	  clients[j].style.display = "block";
	  
  }
   if(j>= clients.length){
		  clientIndex = 0;
	  }
  else{
	  clientIndex++;
  } 
  setInterval(showSlides,4000);
}

	
	
