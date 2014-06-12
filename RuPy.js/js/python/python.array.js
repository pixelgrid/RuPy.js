//Python array methods

//aliases
Array.prototype.append = Array.prototype.push;
Array.prototype.extend = Array.prototype.concat;

//list.insert implemented in ruby.array.js

/**
 * Remove the first item from the list whose value is x. It is an error if there is no such item.
 * @param  {object} value
 * @return {[type]}
 */
Array.prototype.remove = function(value){
	
	var index;debugger;
	
	if(is_u(value)){
		throw new Error('Missing argument 1');
	}
	
	if((index = this.indexOf(value)) !== -1){
		this.splice(index,1);
		return this;
	}
	
	throw new Error('No item with value <'+value+'> found!');
}

// index is indexOf
//count implemented in ruby.array.js
//sort exists
//reverse

