var slideIndex = 0;
var clientIndex = 0;
showSlides();
clientSlideshow();
recentSlideshow();
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
  setTimeout(showSlides,4000); // Change image every 4.5s seconds
}
function clientSlideshow(){
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
	setTimeout(clientSlideshow,2500);//changes image every 2.5s
}

function recentSlideshow(){
	var i,j,recentIndex = 0;
	var recent = document.getElementsByClassName("recentImages");
	for(i = 0;i < recent.length;i++){
		recent[i].style.display = "none";
	}
	for(i = 0;i < 3;i++){
		recent[i].style.display = "block";
	}
	document.getElementById("next").onclick = function () {next()};
	document.getElementById("prev").onclick = function () {prev()};
	

	
	
	
function next() {	
		if(recentIndex < 2){
			recentIndex++;
			for(i = recentIndex  ;i < (3+recentIndex);i++){
				recent[i].style.display = "block";
			}	
		if(recentIndex >= 1){
		recent[recentIndex - 1].style.display = "none";}	
	
	}
	nextDisplay();
	prevDisplay();
	
};	
function prev(){
		if(recentIndex > 0){
			recentIndex--;
			for(i = 0;i<recent.length;i++){
				recent[i].style.display = "none";
			}
			for(i = recentIndex  ;i < (3+recentIndex);i++){
				recent[i].style.display = "block";
		}	
	}	
	nextDisplay();
	prevDisplay();
	}
function nextDisplay(){
	if (recentIndex >=2) {
		document.getElementById("next").style.backgroundColor = "white";
		document.getElementById("next").style.color = "#D6D4D4";
		
	}	
		else{
			document.getElementById("next").style.backgroundColor = "black";
			document.getElementById("next").style.color = "#007BFF";
		}
}
function prevDisplay(){
	if (recentIndex > 0) {
		document.getElementById("prev").style.backgroundColor = "black";
		document.getElementById("prev").style.color = "#007BFF";
		
	}	
		else{
			document.getElementById("prev").style.backgroundColor = "white";
			document.getElementById("prev").style.color = "#D6D4D4";
		}
	
	
}







}
