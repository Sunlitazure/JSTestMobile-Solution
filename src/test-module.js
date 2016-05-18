'use strict';

var TestModule = {
    reverse: function(args) {
	var wordArray = args.split(" ").reverse();
	return wordArray.join(" ");
    },

    enforceUniqueValues: function(list) {

	var newList = new Set(list);
	var finalList = Array.from(newList).sort();
	return finalList;
	
    },

    flatten: function(list) {
	
	function flat(arr){
		var arrFlat = [];
        	for( var i = 0; i <= arr.length-1; i++){
			if(arr[i] instanceof Array){
				for( var j = 0; j <= arr[i].length-1; j++){
					console.log(arr[i][j]);
					arrFlat.push(arr[i][j]);
				} 
			} else {
					arrFlat.push(arr[i]);
				}

		}
		console.log(arrFlat);
		return arrFlat;
	}


	var newList = flat(list);
	var arrays = true;
	while(arrays){
		arrays = false;
		newList = flat(newList);


		for( var i=newList.length; i>=0; i--){
			arrays = newList[i] instanceof Array;
			if (arrays === true)
				break;
		}
	}

	return newList;

    },

    areStringsAnagrams: function(str1, str2) {
	var array1 = str1.split(" ");
	var array2 = str2.split(" ");
        array1.sort();
	array2.sort();

	var test = true;
	for (var i=0; i<=array1.length; i++){
		if( (array1[i] != array2[i]) && (array1.length == array2.length) ){
			test = false;
		}
	}

	return test;
    },


    emailContainsLettersAndNumbers: function(address) {
        var name = address.split("@")[0]
	var letters = name.split("");
	console.log(letters);
	
	var number = false;
	var letter = false;
	console.log(/[1-9]/.test(letters[2]));
	for( var i=0; i <= letters.length; i++){
		if(/[a-z]/.test(letters[i])){
			letter = true;
		}
		if(/[1-9]/.test(letters[i])){
			number = true;
		}
	}

	//console.log(letter + " " + number);
	return (number && letter);
    }
};

module.exports = TestModule;
