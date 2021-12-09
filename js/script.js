// check if page is fully loaded
window.onload = function() {

	// hide overlay on click
	var overlay = document.querySelector('.overlay');
	overlay.addEventListener('click', function(){
		overlay.style.opacity = 0;
		overlay.style.pointerEvents = 'none';
	});

	// get all sections. This will create a list of all the sections found in HTML, you can use console.log(sections); to check how that looks like in your browser's console
	var sections = document.querySelectorAll('section');

	// loop through each section
	sections.forEach(function(section){ // 'section' here is called an 'argument', it represents the current section the loop is dealing with

		// List of all the variables we'll need 
		var sectionId = section.id; // current section id
		var audio = document.getElementById('audio-' + sectionId); // get corresponding audio by concatenation audio- and the section id (example: audio-one)
		var mouthClose = section.querySelector('img'); // get mouth close img
		var mouthOpen = section.querySelector('img.hidden'); // get mouth open img
		


		// on mouse enter, show the mouth-open img + play the audio
		section.addEventListener('mouseenter', function(){
		
		});

		// on mouse leave, hide the mouth-open img + the text + pause the audio
		section.addEventListener('mouseleave', function(){
			mouthClose.style.opacity = "1";
			mouthOpen.style.opacity = "0";
			audio.pause();
		});

		// on click, hide the mouth-open img + show the text
		section.addEventListener('click', function(){
			mouthClose.style.opacity = "0";
			mouthOpen.style.opacity = "1";
			audio.play();
		});

	});

}
