document.onkeydown = function(event){
	
	if(event.ctrlKey && event.keyCode==67){
		window.alert("COPY NOT ALLOWED");
	}
}