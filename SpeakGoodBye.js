(function (window) { 

	var byeSpeaker = {}; //Goodbye object
	var speakWord = "Good Bye";

	byeSpeaker.speak =  function(name) {
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window); // End of IIFE



