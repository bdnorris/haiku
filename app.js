// ID of the Google Spreadsheet
 var spreadsheetID = "1wEJwYgjuz6Nd65As-6NOjaYrihDS9T2YVz2zrghBF6U";
 
 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json&amp;callback=x";
 
 $.getJSON(url, function(data) {
 
  var entry = data.feed.entry;
     

     
    // var randomValue = entry[Math.floor(Math.random() * entry.length)];
     var holder = document.getElementById('random')
     var numberOfPhrases = (entry.length);
     var randomNumber = Math.floor((Math.random() * numberOfPhrases) + 0);
     holder.textContent = entry[randomNumber].gsx$phrase.$t;
     //holder.textContent = entry[5];

     console.debug(entry);
     
     // get all from JSON
  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.results').prepend('<h2>'+this.gsx$phrase.$t+'</h2><p>'+this.gsx$syllable.$t+'</p>');
  });
 
 });
 