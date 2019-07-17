var x = document.getElementById('changingText'),
    // dictionary of all the languages
    wordsArray = ['Software Developer',  'First Class Graduate', 'Aston University Alumni', 'Musician'],
    // hold the spot in the dictionary
    i = 1;  

setInterval(function (){
  // change the text using the dictionary every 3500ms
  // i++ go to the next language
  x.innerHTML = wordsArray[i++];
  // start over if i === dictionary length
  i = wordsArray.length === i ? 0 : i;
}, 3500);