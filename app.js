// ID of the Google Spreadsheet
 var spreadsheetID = "1wEJwYgjuz6Nd65As-6NOjaYrihDS9T2YVz2zrghBF6U";
 
 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json&amp;callback=x";
 

$.getJSON( url, { } )
  .done(function( json ) {
    var entries = json.feed.entry;
    
    var newArray;
    newArray = jQuery.grep(entries, function( a ) {
        return this.gsx$syllable !== 5;
    });
    
    var holder = document.getElementById('random');
    
    console.debug(entries);
    
    $(newArray).each(function(){
         $('.results').prepend('<h2>'+this.gsx$syllable.$t+' '+this.gsx$phrase.$t+'</h2>');
    });
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
 