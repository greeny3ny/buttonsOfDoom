console.log("loaded");
console.log("mobile detected : "  + detectmob());

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}



//if (detectmob()){
	//get rid of youtube player
	document.getElementById('vid').style="width:0; height:0; border:0; border:none";
	
//}

