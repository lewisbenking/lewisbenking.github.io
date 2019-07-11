var x = document.getElementById('changingText'),
    // dictionary of all the languages
    arr = ['Software Developer.',  'First Class Graduate.', 'Aston University Alumni.', 'Electric & Acoustic Guitarist.'],
    // hold the spot in the dictionary
    i = 1;  

setInterval(function (){
  // change the text using the dictionary
  // i++ go to the next language
  x.innerHTML = arr[i++];
  // start over if i === dictionary length
  i = arr.length === i ? 0 : i;
}, 3500);