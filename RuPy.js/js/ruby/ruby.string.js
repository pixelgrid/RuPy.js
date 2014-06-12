//Strings ruby
 
 // DONE till now
/**
 * returns true if the string contains only ascii characters
 * @return {boolean}
 */
String.prototype.ascii_only = function() {
  return /^[\x00-\x7F]*$/.test(this.valueOf());
};

 /**
 * returns an array with a character to byte transformation
 * @return {array} array of bytes
 */
String.prototype.bytes = function() {
  return this.valueOf().split('').map(function(currentValue, index, array) {
    return currentValue.charCodeAt(0);
  });
};
 /**
  * returns the size of the bytes array of the string
  * @return {integer}
  */
String.prototype.bytesize = function() {
  return this.valueOf().bytes().length;
};
 
 /**
  * compares two strings case incensitive
  * @param  {string} secondValue
  * @return {integer}
  * returns 0 if equal
  * -1 if not equal
  * 1 if string2 is a substring of string1
  */
String.prototype.casecmp = function(secondValue) {
  var value1 = this.valueOf().toLowerCase();
  var value2 = secondValue.toLowerCase();
  if (value1 === value2) {
    return 0;
  }
  if (value1.length > value2.length && value1.starts_with(value2)) {
    return 1;
  }
  return -1;
};
 /**
  * capitalises string
  * @return {string}
  */
String.prototype.capitalize = function() {
  return this.valueOf().charAt(0).toUpperCase() + this.valueOf().slice(1);
};
 
 /**
  * returns a slices of the strings bytes array
  * @param  {integet} startOffset
  * @param  {integer} endOffset
  * @return {array of bytes}
  * of null if offsets are not present out of scope or start>end
  */
String.prototype.byteslice = function(startOffset, endOffset) {
  var bytesArray;
  if (startOffset == null) {
    startOffset = 0;
  }
  bytesArray = this.valueOf().bytes();
 
  if (!startOffset.is_i()
      || !endOffset.is_i()
      || (startOffset.is_i()
      && endOffset.is_i()
      && startOffset.is_i() > endOffset.is_i())
      || !bytesArray[startOffset]) {
    return null;
  }
 
  if ((endOffset != null) && (startOffset != null)) {
    return bytesArray.slice(startOffset, endOffset);
  } else {
    return bytesArray[startOffset];
  }
};
 
 /**
  * centers a string padding it with the supplied string
  * if none passes space is used
  * @param  {integet} integer
  * @param  {string} padstr
  * @return {string}
  */
String.prototype.center = function(integer, padstr) {debugger;
  var leftOffset, length, rightOffset;
  if (padstr == null) {
    padstr = ' ';
  }
  if (!is_i(integer)) {
    return null;
  }

  length = this.valueOf().length;
  leftOffset = Math.floor((integer - length) / 2) + 1;
  rightOffset = Math.ceil((integer - length) / 2) + 1;

  if (length === 0) {
    return new Array(integer).join(padstr);
  }
  
  if (integer < length) {
    return this.valueOf();
  }
  
  return new Array(leftOffset).join(padstr) + this.valueOf() + new Array(rightOffset).join(padstr);

};
 /**
  * returns the first character of the string
  * @return {string}
  */
String.prototype.chr = function() {
  return this.valueOf().charAt(0);
};
 /**
  * adds two strings
  * if arguments is an integer converts it to a string
  * @param  {integer} addition
  * @return {string}
  */
String.prototype.concat = function(addition) {
  if (is_i(addition)) {
    return this.valueOf() + String.fromCharCode(addition);
  }
  return this.valueOf() + addition.toString();
};
 /**
  * runs a function to each character of the string
  * @param  {Function} fn
  * @return {string}
  */
String.prototype.each_char = function(fn) {
  return Array.prototype.map.call(this.valueOf().split(''), fn).join('');
};
/**
 * Splits str using the supplied parameter as the record separator ($/ by default), 
 * passing each substring in turn to the supplied block. 
 * If a zero-length record separator is supplied, 
 * the string is split into paragraphs delimited by multiple successive newlines.
 * @param  {string}   seperator
 * @param  {Function} fn
 * @return {array}
 */
String.prototype.each_line = function(seperator,fn) {
  
  if( !is_f( fn ) ){
    throw new Error('Argument 2 should be a function');
  }

  return this.lines().map(fn);
}
/**
 * Returns true if str has a length of zero.
 * @return {boolean}
 */
String.prototype.empty = function() {
  return this.valueOf().length === 0;
}
/**
 * Returns true if str contains the given string or character.
 * @param  {string} value
 * @return {boolean}
 */
String.prototype.include = function(value) {

  if( !is_s( value ) ){
    throw new Error('Argument missamtch : Expecting string');
  }

  return !!this.valueOf().match(new RegExp(value));
}
/**
 * Inserts other_str before the character at the given index, modifying str.
 * @param  {integer} index
 * @param  {string} replacement
 * @return {string}
 */
String.prototype.insert = function(index,replacement){

  if( !is_i( index ) && !is_s( replacement ) ){
    throw new Error('Argument missmatch : 2 expected');
  }

  return this.valueOf().split('').insert(index,replacement).join('');

}
/**
 * Returns an array of lines in str split using the supplied record separator ($/ by default)
 * @param  {[type]} index
 * @param  {[type]} replacement
 * @return {[type]}
 */
String.prototype.lines = function(seperator){
  
  if(seperator == ''){
    return this.valueOf().split(seperator);
  }
  
  return this.valueOf().split(/\n+/);
}
/**
 * If integer is greater than the length of str, 
 * returns a new String of length integer with str left justified and padded with padstr; otherwise, returns str.
 * @param  {[type]} integer
 * @param  {[type]} padstr
 * @return {[type]}
 */
String.prototype.ljust = function(integer,padstr){

  if(is_u(integer)){
    throw new Error('Argument 1 must be an integer');
  }

  if(this.valueOf().length >= integer){
    return this.valueOf();
  }

  if( is_u( padstr ) ){
    padstr = ' ';
  }

  return this.valueOf() + new Array(integer - this.length + 1).join(padstr);

}

/**
 * Returns a copy of str with leading and trailing whitespace removed.
 * @return {string}
 */
String.prototype.strip = function(){debugger;
  return this.valueOf().replace(/(^\s+|\s+$)/,'');
}

/**
 * Returns a copy of str with leading whitespace removed
 * @return {string}
 */
String.prototype.lstrip = function(){
  return this.valueOf().replace(/^\s+/,'');

}
/**
 * Returns a copy of str with trailing whitespace removed.
 * @return {string}
 */
String.prototype.rstrip = function(){
  return this.valueOf().replace(/\s+$/,'');
}
/**
 * Returns the successor to str. 
 * The successor is calculated by incrementing characters starting from the rightmost alphanumeric 
 * (or the rightmost character if there are no alphanumerics) in the string. 
 * Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. 
 * Incrementing nonalphanumerics uses the underlying character set’s collating sequence.
 * @return {string}
 */
String.prototype.next = function(){
 
  if( this.length === 0){
    return '';
  }
 
  if(this.length === 1){
    return String.fromCharCode(this[0].charCodeAt(0) + 1);
  }
 
  return this.valueOf().slice(0,Math.max(this.length - 1,1)) + String.fromCharCode(this.valueOf().charCodeAt(this.length - 1) + 1);

}

/**
 * Searches sep or pattern (regexp) in the string and returns the part before it, 
 * the match, and the part after it. If it is not found, 
 * returns two empty strings and str.
 * @param  {string / regexp} seperator
 * @return {[type]}
 */
String.prototype.partition = function(seperator){

  var index,splitted;
  
  if ( is_u( seperator ) ){
    throw new Error('Argument count missmatch. Expecting 1 , 0 given');
  }

  if( is_r( seperator ) ){
  
    splitted = this.valueOf().split(seperator);
  
    if(splitted.length === 1){
      return [this.valueOf(),'',''];
    }
    
    return [splitted[0],this.valueOf().match(seperator)[0],splitted[1]];
  }

  if((index = this.valueOf().indexOf(seperator)) === -1){
    return [this.valueOf(),'',''];
  }

  return [this.valueOf().slice(0,index) ,seperator,this.valueOf().slice(index + seperator.length,this.length)];
}

/**
 * Prepend—Prepend the given string to str.
 * @param  {string} value
 * @return {[type]}
 */
String.prototype.prepend = function(value){

  if( is_u( value ) ){
    throw new Error('Missing argument 1');
  }

  return value + this.valueOf();

}

/**
 * Replaces the contents and taintedness of str with the corresponding values in other_str.
 * @param  {string} value
 * @return {[type]}
 */
String.prototype.replace_self = function(value){
  
  if( !is_s(value) ){
    throw new Error('Missing argument 1');
  }

  return value;

}

/**
 * Returns a new string with the characters from str in reverse order.
 * @return {string}
 */
String.prototype.reverse = function(){
  return this.valueOf().split('').reverse().join('');
}

/**
 * If integer is greater than the length of str, 
 * returns a new String of length integer with str right justified and padded with padstr; otherwise, returns str.
 * @param  {[type]} integer
 * @param  {[type]} padstr
 * @return {[type]}
 */
String.prototype.rjust = function(integer,padstr){

  if(is_u(integer)){
    throw new Error('Argument 1 must be an integer');
  }

  if(this.valueOf().length >= integer){
    return this.valueOf();
  }

  if( is_u( padstr ) ){
    padstr = ' ';
  }

  return  new Array(integer - this.length + 1).join(padstr) + this.valueOf();

}

/**
 * Searches sep or pattern (regexp) in the string and returns the part before it, 
 * the match, and the part after it. If it is not found, 
 * returns two empty strings and str.
 * @param  {string / regexp} seperator
 * @return {[type]}
 */
String.prototype.rpartition = function(seperator){

  var index,splitted;
  
  if ( is_u( seperator ) ){
    throw new Error('Argument count missmatch. Expecting 1 , 0 given');
  }

  if( is_r( seperator ) ){
  
    splitted = this.valueOf().split(seperator);
  
    if(splitted.length === 1){
      return [this.valueOf(),'',''];
    }
    
    return [splitted[0],this.valueOf().match(seperator)[0],splitted[1]];
  }

  if((index = this.valueOf().lastIndexOf(seperator)) === -1){
    return [this.valueOf(),'',''];
  }

  return [this.valueOf().slice(0,index) ,seperator,this.valueOf().slice(index + seperator.length,this.length)];
}


