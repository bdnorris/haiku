// ID of the Google Spreadsheet
var spreadsheetID = "1wEJwYgjuz6Nd65As-6NOjaYrihDS9T2YVz2zrghBF6U";
 
// Make sure it is public or set to Anyone with link can view 
// the CALLBACK=X makes it JSONP which allows cross domain scripting
// Security?
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json&amp;callback=x";
 

// JSON REQUEST
$.getJSON( url, { } )
    .done(function( json ) {
        var entries = json.feed.entry;
        
        // put all in the console for debugging
        console.debug(entries);
        
        // make sure the page is finished loading
        $(document).ready(function() {
            
            // We have an array of objects called entries
            // Now we're making a new array of just ones with 5 syllables
            var fives = $.grep(entries, function(value, i) {
                return value.gsx$syllable.$t  == 5;
            });

            // Another array of just ones with 7 syllables
            var sevens = $.grep(entries, function(value, i) {
                return value.gsx$syllable.$t  == 7;
            });

            // Get the lengths of each array
            console.log ("Fives: " + fives.length);
            console.log ("Sevens: " + sevens.length);

            // Get a random number in those lengths
            function randomNumber(min, max) {
             return Math.floor(Math.random()*max);   
            }
            var fivesRand1 = randomNumber(0, fives.length);
            var sevensRand = randomNumber(0, sevens.length);
            var fivesRand2 = randomNumber(0, fives.length);

            // double check and make sure you're not getting the same random number for 1st and 3rd lines
            if (fivesRand1 == fivesRand2) {
                var fivesRand2 = randomNumber(0, fives.length);
                if (fivesRand1 == fivesRand2) {
                    var fivesRand2 = randomNumber(0, fives.length);
                }
            }

            // My random div
            var holder1 = document.getElementById('random1');
            var holder2 = document.getElementById('random2');
            var holder3 = document.getElementById('random3');
            // Put a 5 in the holder
            holder1.textContent = fives[fivesRand1].gsx$phrase.$t;
            // Put a 7 in the holder
            holder2.textContent = sevens[sevensRand].gsx$phrase.$t;
            // Put another 5 in the holder
            holder3.textContent = fives[fivesRand2].gsx$phrase.$t;


            // CHANGE ON CLICK
            // NEED TO ADD CHECKS TO MAKE SURE IT DOESN'T JUST REPLACE IT WITH THE SAME THING
            function changeFive() {
                var fivesRand = randomNumber(0, fives.length);
                return fives[fivesRand].gsx$phrase.$t;
            }
            function changeSeven() {
                var sevensRand = randomNumber(0, sevens.length);
                return sevens[sevensRand].gsx$phrase.$t;
            }
            $(".five").click(function() {
                this.textContent = changeFive();
            });
            $(".seven").click(function() {
                this.textContent = changeSeven();
            });


        });

    })
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });