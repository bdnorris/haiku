// ID of the Google Spreadsheet
 var spreadsheetID = "1wEJwYgjuz6Nd65As-6NOjaYrihDS9T2YVz2zrghBF6U";
 
 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 
 $.getJSON(url, function(data) {
 
  var entry = data.feed.entry;
 
  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.results').prepend('<h2>'+this.gsx$phrase.$t+'</h2><p>'+this.gsx$syllable.$t+'</p>');
  });
 
 });
 