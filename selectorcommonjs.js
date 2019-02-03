		var path = window.location.pathname;
		var page = path.split("/").pop();
		
		document.getElementById("imageDisplay").src = document.getElementById("001").src;
			
			
		document.getElementById("close").onclick = function(){	
			document.getElementById("videoPlay").pause();
			window.close("page");
		}
		document.getElementById("001").onclick = function(){
			(this).classList.add("active");
			document.getElementById("imageDisplay").src = document.getElementById("001").src;
			document.getElementById("002").classList.remove("active");
			document.getElementById("003").classList.remove("active");
			document.getElementById("004").classList.remove("active");
			document.getElementById("005").classList.remove("active");
			document.getElementById("videoPlay").style.display = "none";
			document.getElementById("imageDisplay").style.display = "block";
		
		}
		document.getElementById("002").onclick = function(){
			(this).classList.add("active");
			document.getElementById("001").classList.remove("active");
			document.getElementById("003").classList.remove("active");
			document.getElementById("004").classList.remove("active");
			document.getElementById("imageDisplay").src = document.getElementById("002").src;
			document.getElementById("005").classList.remove("active");
			document.getElementById("videoPlay").style.display = "none";
			document.getElementById("imageDisplay").style.display = "block";
		}
		document.getElementById("003").onclick = function(){
			(this).classList.add("active");
			document.getElementById("002").classList.remove("active");
			document.getElementById("001").classList.remove("active");
			document.getElementById("004").classList.remove("active");
			document.getElementById("imageDisplay").src = document.getElementById("003").src;
			document.getElementById("005").classList.remove("active");
			document.getElementById("videoPlay").style.display = "none";
			document.getElementById("imageDisplay").style.display = "block";
		}
		document.getElementById("004").onclick = function(){
			(this).classList.add("active");
			document.getElementById("002").classList.remove("active");
			document.getElementById("003").classList.remove("active");
			document.getElementById("001").classList.remove("active");
			document.getElementById("imageDisplay").src = document.getElementById("004").src;
			document.getElementById("005").classList.remove("active");
			document.getElementById("videoPlay").style.display = "none";
			document.getElementById("imageDisplay").style.display = "block";
		}
		document.getElementById("005").onclick = function(){
			(this).classList.add("active");
			document.getElementById("videoPlay").style.display = "block";
			document.getElementById("002").classList.remove("active");
			document.getElementById("003").classList.remove("active");
			document.getElementById("001").classList.remove("active");
			document.getElementById("004").classList.remove("active");
			document.getElementById("imageDisplay").style.display = "none";
						
		}
		 
		 