//Object ruby

/**
 * returns true if object is integer
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_i = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object Number]";
}
/**
 * returns true if object is array
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_a = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object Array]";
}
/**
 * is_o returns true if object is object
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_o = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object Object]"
}
/**
 * is_s returns true if object is string
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_s = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object String]"
}
/**
 * is_s returns true if object is function
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_f = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object Function]"
}
/**
 * is_u returns true if object is undefined
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_u = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object Undefined]"
}

/**
 * is_s returns true if object is null
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_n = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object Null]"
}

/**
 * is_r returns true if object is a RegExp
 * @param  {obj}  testValue
 * @return {Boolean}
 */
Object.prototype.is_r = function( testValue ){
        return Object.prototype.toString.call( testValue ) === "[object RegExp]"
}