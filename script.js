var x = document.getElementById('changingText'),
    // array of text
    phrases = ['Software Developer',  'First Class Graduate', 'Aston University Alumni', 'Musician'],
    i = 1;  

    setInterval(function (){
 	// Iterate over the array
 	x.innerHTML = phrases[i++];
  	// Reset i if it's at the end of the array
  	i = phrases.length === i ? 0 : i;
  }, 3500);