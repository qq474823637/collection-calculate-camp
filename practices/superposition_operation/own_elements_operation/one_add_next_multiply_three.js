'use strict';
function one_add_next_multiply_three(collection){
  collection.forEach(function(value,i,collection){
    if(i < collection.length-1){
      collection[i] = (collection[i] + collection[i + 1]) * 3;
    }
  })
  collection.pop();
  return collection;
}
var collection_a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
console.log(one_add_next_multiply_three(collection_a));
module.exports = one_add_next_multiply_three;
