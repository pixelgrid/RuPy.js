//NUMBERS

//DONE till now
//times 10..times(fn) run fn 10 times passing index
//downto   10..downto(1,fn) run fn from 10 to 1 passing index 
//upto 1..downto(10,fn) run fn from 1 to 10 passing index 
//even returns true if number is even
//odd returns true if number is odd
//next like ++
//pred like --


Number.prototype.times = function(fn){
        for(var i = 0; i < this.valueOf(); i++)
                fn(i);
}
 
Number.prototype.downto = function(integer,fn){
        for(var i = this.valueOf(); i >=integer ; i--)
                fn(i);
}
 
Number.prototype.upto = function(integer,fn){
        for(var i = this.valueOf(); i <= integer ; i++)
                fn(i);
}
 
Number.prototype.even = function(){
        return this.valueOf() % 2 == 0
}
 
Number.prototype.odd = function(){
        return this.valueOf() % 2 == 1
}
 
Number.prototype.next = Number.prototype.succ = function(){
        return this.valueOf() + 1
}
 
//previous maybe?
Number.prototype.pred = function(){
        return this.valueOf() - 1
}