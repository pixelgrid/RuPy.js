//ruby arrays
 
 /**
  * checks an array of arrays and returns the array where query is first found or null if not found
  * iterates only over arrays other values are not considered
  * @param  {object} query
  * @return {array or null}
  */
Array.prototype.assoc = function(query){
    if(!query)
        throw 'Invalid argument count';
   
    this.filter(function(item){return is_a(item) && item.indexOf(query) !== -1;})
    if(list.length >= 1)
       return list[0];
    return null;
}
 
/**
 *empties the array
 * @return {array} empty
 */
Array.prototype.clear = function(){
  return [];
}
 /**
  * filters out falsy values from an array
  * @return {array}
  */
Array.prototype.compact = function(){
        return this.filter(function(item){return item})
}
/**
 *Returns the number of elements.
 *If an argument is given, counts the number of elements which equal obj using ==.
 *If a block is given, counts the number of elements for which the block returns a true value.
 * @param  {[type]} obj
 * @return {[type]}
 */
Array.prototype.count = function(obj){
        if(typeof obj === undefined)
            return this.length;
        if(is_f(obj))
            return this.filter(obj)

        return this.filter(function(item){return item === obj}).length
}
/**
 * Deletes all items from self that are equal to obj.
 * Returns the last deleted item, or nil if no matching item is found.
 *If the optional code block is given, the result of the block is returned if the item is not found. 
 * @param  {object}   value
 * @param  {Function} fn
 * @return {object or null}
 */
Array.prototype.delete = function(value,fn){

    var starting_length = this.length;
    var modified = [];

    if( is_u(value) ){
        throw "Missing argument 1";
    }

    modified = this.filter( function( item ){ return item !== value } );

    if ( modified.length === starting_length ){

        if(is_f(fn)){
            return fn();
        }else{
            return null;
        }

    }

    this.replace(modified);
    return value;
}
/**
 * Deletes the element at the specified index, returning that element, or nil if the index is out of range.
 * @param  {integer}   value
 * @return {object of null}
 */
Array.prototype.delete_at = function(index){
    if(!is_i(index))
        throw "Argument missmatch : Expecting integer";

    if(this[index]){
        return this.splice(index,1) 
    }
    return null;
}
/**
 * Deletes every element of self for which function evaluates to true.
 * @param  {Function} fn
 * @return {[type]}
 */
Array.prototype.delete_if = function(fn){
    if( is_u(fn) ){
        throw "Missing argument 1";
    }
    var starting_length = this.length;
    var modified = [];

    modified = this.filter(function(i){
        return !(fn(i));
    });

    if( modified.length === this.length )
        return this;

    this.replace(modified);
    // this.splice(0,this.length);
    // Array.prototype.push.apply(this,modified);
    return this;
}
/**
 * Drops first n elements from ary and returns the rest of the elements in an array.
 * If a negative number is given, raises an ArgumentError.
 * @param  {integer} index
 * @return {array}
 */
Array.prototype.drop = function(index){

    if( !is_i( index ) || index < 0 ){
        throw "Argument missmatch : Expecting positive integer";
    }

    return this.slice(index,this.length);
}

/**
 * Drops elements up to, but not including, the first element for which the 
 * block returns nil or false and returns an array containing the remaining  
 * elements.
 * @param  {Function} fn
 * @return {array}
 */
Array.prototype.drop_while = function(fn){
    
    var index_matching = -1;

    if( !is_f(fn) )
        throw "Argument 1 should be a function";

    this.every(function(value, index, array){
        
        if( !fn( value ) ){
            index_matching = index;
            return false;
        }
        return true;
    });

    if(index_matching == -1){
        index_matching = 0
    }
    
    return this.drop(index_matching);
}
/**
 * returns true if array is empty
 * @return {boolean}
 */
Array.prototype.empty = function(){
    return this.length === 0;
}
/**
 * Tries to return the element at position index, but throws an IndexError
 * exception if the referenced index lies outside of the array bounds. This
 * error can be prevented by supplying a second argument, which will act as a
 * default value.
 * Alternatively, if a block is given it will only be executed when an invalid
 * index is referenced. Negative values of index count from the end of the
 * array.
 * @return {array value}
 */
Array.prototype.fetch = function(index,defaultValue){

    if( !is_i(index) && index > this.length-1 && index < 0 && is_u(defaultValue) ){
        throw "Missing argument 1";
    }

    if(!this[index] && is_u(defaultValue)){
        throw "Index outside of array";
    }

    if(this[index]){
        return this[index];
    }

    if( is_f( defaultValue ) ){
        return defaultValue();
    }

    return defaultValue;
}

/**
 * The first three forms set the selected elements of self (which may be the 
 * entire array) to obj.
 * A start of nil is equivalent to zero.
 * A length of nil is equivalent to the length of the array.
 * The last three forms fill the array with the value of the given block,
 * which is passed the absolute index of each element to be filled.
 * @return {array}
 */
Array.prototype.fill = function(replacement,start,length){

    var len = this.length;
    var length = length || (start ? len - start : len);

    //error checking
    if( is_u(replacement) ){
        throw "Missing argument 1";
    }

    if( !is_u(start) && !is_i(start) || start < 0 ){
        throw "Parameter 2 (starting index) should be a positive integer";
    }

    if( !is_u(length) && !is_i(length) || length < 0){
        throw "Parameter 3 (length) should be a positive integer";
    }

    if(this.empty()){
        return this;
    }

    //if no start end are defined replace the whole array
    if(is_u(start) && is_u(length)){
        this.replace([].prefilled_array(len,replacement));
        return this;
    }

    //start and length are present
    [].splice.apply(this,[start,length].concat([].prefilled_array(length,replacement)));

    return this;
}
/**
 * Returns the first element, or the first n elements, of the array. 
 * If the array is empty, the first form returns null, and the second form
 * returns an empty array. 
 * @param  {integer} amount
 * @return {object}
 */
Array.prototype.first = function(amount){

    if( this.empty()){
        if(is_u(amount)){
            return null;
        }
        return [];
    }

    if( is_u(amount) ){
        return this[0];
    }

    if(!is_i(amount)){
        throw "Parameter missmatch : Expecting integer";
    }

    return this.splice(0,amount);
}
/**
 * Returns a new array that is a one-dimensional flattening of self (recursively).
 * That is, for every element that is an array, extract its elements into the
 * new array.
 * @return {array}
 */
Array.prototype.flatten = function(){
    var res = [];
    this.forEach(function(item){
        if(is_a(item)){
            res = res.concat(Array.prototype.flatten.call(item));
        }else{
            res.push(item);
        }
    })
    return res;
}

/**
 * Flattens self in place.
 * Returns nil if no modifications were made (i.e., the array contains no
 * subarrays.)
 * @return {array}
 */
Array.prototype.flatten$ = function(){
    var res = this.flatten();
    if(this === res){
        return null;
    }
    this.replace(res);
    return this;
}
/**
 * Returns true if the given object is present in self (that is, if any
 * element == object), otherwise returns false.
 * @param  {object} value
 * @return {boolean}
 */
Array.prototype.include = function(value){
    if( is_u( value ) ){
        throw "Missing argument 1";
    }
    return this.indexOf(value) !== -1;
}

/**
 * replaces the whole array with the given one
 * @return {array}
 */
Array.prototype.replace = function(arr){

  if( !is_a( arr ) ){
    throw "Parameter missmatch : Array expected";
  }

  this.splice(0,this.length);
  Array.prototype.push.apply(this,arr);
}
/**
 * Inserts the given values before the element with the given index.
 * Negative indices count backwards from the end of the array, where -1 is the
 * last element.
 * @param  {[type]} arr
 * @return {[type]}
 */
Array.prototype.insert = function(index,values){
    if( is_u(index) ){
        throw "Missing argument 1";
    }
    if(is_u(values)){
        return this;
    }
    Array.prototype.splice.apply(this,[index,0].concat([].slice.call(arguments,1)));
    return this;
}

Array.prototype.keep_if = function(fn){
    if( is_u(fn) ){
        throw "Missing argument 1";
    }

    var starting_length = this.length;
    var modified = [];

    modified = this.filter(fn);

    if( modified.length === this.length )
        return this;

    this.replace(modified);
    return this;
}



/**
 * Returns the last element(s) of self. If the array is empty, the first form
 * returns nil.
 * See also #first for the opposite effect.
 * @param  {integer} index
 * @return {object}
 */
Array.prototype.last = function(index){

    var length = this.length;
    var index = index || length - 2;

    if( this.empty() ){
        return null;
    }

    return this.slice(Math.max(length - index, 0),length);
}
/**
 * Returns first n elements from the array.
 * If a negative number is given, raises an ArgumentError.
 * @param  {integer} amount
 * @return {array}
 */
Array.prototype.take = function(amount){

    if (!is_u(amount) && is_i(amount) && amount > 0) {
        return this.slice(0,amount);
    };

    throw "Argument 1 should be a positive integer";

}

/**
 * Returns first n elements from the array.
 * If a negative number is given, raises an ArgumentError.
 * @param  {integer} amount
 * @return {array}
 */
Array.prototype.take_while = function(fn){
    
    var index_matching = -1;

    if( !is_f(fn) )
        throw "Argument 1 should be a function";

    this.every(function(value, index, array){
        
        if( !fn( value ) ){
            index_matching = index;
            return false;
        }
        return true;
    });

    if(matching_index == -1){
        matching_index = this.length;
    }

    return this.take(index_matching);

}
/**
 * Assumes that self is an array of arrays and transposes the rows and columns.
 * @return {array}
 */
Array.prototype.transpose = function(){

    var _this = this,len,sameLength = true;
    
    if(this.empty()){
        return [];
    }
    len = this[0].length;
    this.every(function(item){
        if(item.length != len){
            sameLength = false;
            return false;
        }
        return true;
    });

    if(!sameLength){
        throw new Error("All sub-arrays must have the same length");
    }

    return this[0].map(function(col, i) { 
              return _this.map(function(row) { 
                return row[i]; 
              })
          })

}
Array.prototype.uniq = function(fn){
    if(!is_u(fn) && !is_f(fn)){
        throw new Error('Function expected');
    }
    var res = [];
    this.forEach(function(item){
        //needs work
        // if(fn){
        //     if(fn(item)){
        //         res.push(item);
        //     }
        // }
        if(!res.include(item)){
            res.push(item)
        }
    });
    return res;
}
/**
 * returns an array with only the indexes of the array , like an enumerator
 * @return {[type]}
 */
Array.prototype.each_index = function(){
    var res = [];
    0..upto(this.length-1,function(i){res.push(i)});
    return res;
}

Array.prototype.zip = function(){
    var res = [],
        _this = this,
        argum = arguments;
    
    this.forEach(function(item,index,arr){
    
        var subArr = [_this[index]];
    
        Array.prototype.forEach.call(argum,function(elem,idx,args){
           
            if( [].each_index.call( elem ).include( index ) ){
              subArr.push( elem[index] );
            }else{
              subArr.push( null );
            }

        });

        res.push(subArr);
        
    });

    return res;

}
