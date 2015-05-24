function setCookie(name , value,time){
	
	document.cookie = name+"=" + value +";" + time;
	
	}
	
	function getNumberValueInCookie(cookie){

 var number = "";
		var counter = 1; 
	 while(!(parseInt(cookie.charAt(cookie.length - counter)).isNaN)){
	          number = number + cookie.charAt(cookie.length - counter);
	          counter++;
	 }
			return parseInt(number);
	}