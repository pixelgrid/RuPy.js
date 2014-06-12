//String Python
 

 //capitalize done in ruby.string.js
 //center done in ruby.string.js
 //capitalize done in ruby.string.js

/**
 * Return the number of non-overlapping occurrences of substring sub in the range [start, end]. 
 * Optional arguments start and end are interpreted as in slice notation.
 * @param  {string} value
 * @param  {index} start
 * @param  {index} end
 * @return {string}
 */
String.prototype.count = function(value,start,end){
	
	if( is_u( value ) ){
		throw new Error('Missing argument 1');
	}
	//start exists and is positive integer
	if(!is_u(start) && is_i(start) && start >= 0){
		//end exists and is positive integer
		if(!is_u(end) && is_i(end) && end > 0 && end >= 0){
			return this.valueOf().slice(start,end).count(value);
		}else if (!is_u(end) && !is_i(end)){
			// end is not an integer
			throw new Error("Range end must be a positive integer");
		}
		//only start exists slice and count the remainder
		return this.valueOf().splice(start).count(value);
	}else if (!is_u(start) && !is_u(start)){
		// start is not an integer
		throw new Error('Range end must be a positive integer')
	}

	return this.valueOf().count(value);

}

//encode left out 
//decode left out

 /**
  * checks if the string 1 ends with string 2
  * @param  {[type]} compareText
  * @return {boolean}
  */
String.prototype.ends_with = function(compareText){
	try{
        return !!new RegExp(compareText + '$').exec(this.valueOf())
	}catch(e){
        return !!new RegExp(compareText.escapeRegExp() + '$').exec(this.valueOf())
	}
}

/**
 * Return the lowest index in the string where substring sub is found, such that sub is contained in the slice s[start:end]. 
 * Optional arguments start and end are interpreted as in slice notation. Return -1 if sub is not found.
 * @param  {string} value
 * @param  {integer} start
 * @param  {integer} end
 * @return {integer}
 */
String.prototype.find = function(value,start,end){
	if( is_u( value ) ){
		throw new Error('Missing argument 1');
	}
	//start exists and is positive integer
	if(!is_u(start) && is_i(start) && start >= 0){
		//end exists and is positive integer
		if(!is_u(end) && is_i(end) && end > 0 && end >= 0){
			return this.valueOf().slice(start,end).indexOf(value);
		}else if (!is_u(end) && !is_i(end)){
			// end is not an integer
			throw new Error("Range end must be a positive integer");
		}
		//only start exists slice and indexOf the remainder
		return this.valueOf().splice(start).indexOf(value);
	}else if (!is_u(start) && !is_u(start)){
		// start is not an integer
		throw new Error('Range end must be a positive integer')
	}

	return this.valueOf().indexOf(value);
}

//format function

/**
 * Return true if all characters in the string are alphanumeric and there is at least one character, false otherwise.
 * @return {boolean}
 */
String.prototype.isalnum = function (){
	return /^\w+$/.test(this.valueOf());
}

/**
 * Return true if all characters in the string are alphabetic and there is at least one character, false otherwise.
 * @return {boolean}
 */
String.prototype.isalpha = function (){
	return /^[a-zA-Z]+$/.test(this.valueOf());
}

/**
 * Return true if all characters in the string are digits and there is at least one character, false otherwise.
 * @return {boolean}
 */
String.prototype.isdigit = function (){
	return /^[0-9]+$/.test(this.valueOf());
}


/**
 * return true if all cased characters [4] in the string are lowercase and there is at least one cased character, false otherwise.
 * @return {boolean}
 */
String.prototype.islower = function (){
	return /^[a-z]+$/.test(this.valueOf());
}

/**
 * Return true if there are only whitespace characters in the string and there is at least one character, false otherwise.
 * @return {boolean}
 */
String.prototype.isspace = function (){
	return /^\s+$/.test(this.valueOf());
}

/**
 * Return true if the string is a titlecased string and there is at least one character, 
 * for example uppercase characters may only follow uncased characters and lowercase characters only cased ones. Return false otherwise.
 * @return {boolean}
 */
String.prototype.istitle = function (){
	return /^[A-Z]{1}[a-z]*$/.test(this.valueOf());
}

/**
 * return true if all cased characters [4] in the string are uppercase and there is at least one cased character, false otherwise.
 * @return {boolean}
 */
String.prototype.isupper = function (){
	return /^[A-Z]+$/.test(this.valueOf());
}


//join native or implemented in ruby.string.js
//ljust native or implemented in ruby.string.js
//lower native or implemented in ruby.string.js
//lstrip native or implemented in ruby.string.js
//partition native or implemented in ruby.string.js
//rjust native or implemented in ruby.string.js
//rpartition native or implemented in ruby.string.js
//rsplit native or implemented in ruby.string.js
//rstrip native or implemented in ruby.string.js
//split native or implemented in ruby.string.js

//splitlines -> lines in ruby.string.js

 /**
  * checks if the string 1 starts with string 2
  * @param  {string} compareText
  * @return {boolean}
  */
String.prototype.starts_with = function(compareText){
	try{
        return !!new RegExp('^' + compareText).exec(this.valueOf())
	}catch(e){
        return !!new RegExp('^' + compareText.escapeRegExp()).exec(this.valueOf())
	}
}

//strip native or implemented in ruby.string.js
/**
 * Return a copy of the string with uppercase characters converted to lowercase and vice versa.
 * @return {[type]}
 */
String.prototype.swapcase = function(){

	if(!this.isalpha()){
		throw new Error('Sting must contain letters only');
	}
	return this.replace(/\w/g,function(item){
		if(item.isupper()){
			return item.toLowerCase();
		}
		return item.toUpperCase();

	})
}
/**
 * Return a titlecased version of the string where words start with an uppercase character and the remaining characters are lowercase.
 * @return {string}
 */
String.prototype.title = function(){
	return this.split(' ').map(function(item){
		return item.capitalize()
	}).join(' ');
}

//translate to be or not to be?
/**
 * Return the numeric string left filled with zeros in a string of length width. 
 * A sign prefix is handled correctly. 
 * The original string is returned if width is less than or equal to len(s).
 * @param  {integer} width
 * @return {string}
 */
String.prototype.zfill = function(width){
	if( is_u(width) ){
		throw new Error('Missing argument 1');
	}

	return [].prefilled_array(width,'0').join('');
}
