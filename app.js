function textAnalyzer(){

	var wordCount;
  	var avgWordLength;
	
  	$(":submit").click(function(event){
		//$("dd").empty(); //clears result area

		var input = $(".text-input").val();
		//var inputLength = input.length;
		//console.log(inputLength);
		
		var eachWordWithPunctuation = input.split(" ");		//array to hold word with puctuation at its end
		//console.log(eachWordWithPunctuation);
		wordCount = eachWordWithPunctuation.length;    //** output for total word count **
		//console.log("wordCount:" +wordCount);
//---------------------------------------------------------------------------------------------------------------//


		var eachWordLength;								//word's length with punctuation
		var sentenceCount = 0;							//counter for total number of sentences
		var nonRepeat = [];
		var wordNoPuct = eachWordWithPunctuation;							//intializing to hold all words
		var wordLengthCounter = 0;
		var bool;

		for (var i=0;i < eachWordWithPunctuation.length; i++) {
			eachWordLength = eachWordWithPunctuation[i].length;

			if ((eachWordWithPunctuation[i].charAt(eachWordLength - 1)) === ".") {
				sentenceCount++;		//output for total sentence count.
			
			}

			if ((eachWordWithPunctuation[i].charAt(eachWordLength - 1)) === ".") {
				
				//wordNoPuct.push(eachWordWithPunctuation[i].substring(0, (eachWordLength - 1)));
				wordNoPuct.splice(i, 1, eachWordWithPunctuation[i].substring(0, (eachWordLength - 1)));
			}
		}
		//console.log("Type of wordNoPuct:" + typeof wordNoPuct);
		//console.log("wordNoPuct:" +wordNoPuct);
		//console.log("sentenceCount:" +sentenceCount);
		var avgSentenceLength = wordCount/sentenceCount;				//** Average sentence length - one of the app outputs **
		//console.log("avgSentenceLength: "+avgSentenceLength);
//----------------------------------------------------------------------------------------------------------------//


	for (var i=0; i < wordNoPuct.length; i++){
			wordLengthCounter = wordLengthCounter + wordNoPuct[i].length;			//counter that adds on the cumulative of every word's length
		}
		//console.log("wordLengthCounter:" +wordLengthCounter);

			var avgWordLength = wordLengthCounter/wordCount;				//** Average word length - one of the app outputs **
		//console.log("avgWordLength: "+avgWordLength);							
//----------------------------------------------------------------------------------------------------------------//

//---------Find Unique Words---------------------//


for (var i = 0; i<wordNoPuct.length; i++) {
	for (var j = 0; j<wordNoPuct.length; j++){
		
		if (i != j){
			if (wordNoPuct[i] != wordNoPuct[j]) {
				bool = true;
			}
		else {
				bool = false;
				break;
			}
		} 
    }

	if (bool === true){
		console.log("Adding non repeating words: "+wordNoPuct[i]);
 		nonRepeat.push(wordNoPuct[i]); 
	}
}
		//console.log("Nonrepeating wordcount:" +nonRepeat.length);
    
    $("dl").removeClass("hidden");

$(".js-word-count").text(wordCount);
$(".js-unique").text(nonRepeat.length);
$(".js-avg-word-length").text(avgWordLength);
    
}); //click function



} //textAnalyzer()


$(textAnalyzer);

