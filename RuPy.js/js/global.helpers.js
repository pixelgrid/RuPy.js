//Array globals helpers
 
//slow for now
/**
 * find the intersection of two arrays
 * @param  {array} array2
 * @return {array}
 */
Array.prototype.intersect = function(array2){
    return this.filter(function(n) {
        return array2.indexOf(n) != -1
    });
}
 
 /**
  * helper function for the count string function of ruby
  */
function sharedLetters(){
  var ret = arguments[0].split('');
  Array.prototype.forEach.call(
    Array.prototype.slice.call(arguments,1),function(item){
        ret = ret.intersect(item.split(''))
    }
  );
  return ret;
}

/**
 * returns an array containing value length times
 * @param  {integer} length
 * @param  {object} value
 * @return {array}
 */
Array.prototype.prefilled_array = function(length,value){
  if(is_u(length)){
    throw "Missing argument 1";
  }
  value = value || '';

  return String(new Array( length + 1 )).split('').map(function(){return value});

}
/**
 * escapes string for use in regexp
 * @return {string}
 */
String.prototype.escapeRegExp = function(){
  return this.valueOf().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}