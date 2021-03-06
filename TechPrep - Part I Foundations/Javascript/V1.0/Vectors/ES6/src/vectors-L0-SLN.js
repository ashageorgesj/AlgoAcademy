"use strict";


let L0 = function() {

  //  1. Write a function to reverse an array without making a new array or without making a
  //      copy.  Return original input.
  //
  //
  //  Test Input 1 : [1,2,3,4,5,6,7,8,9,10]
  //  Test Output 1: [10,9,8,7,6,5,4,3,2,1]
  //
  //  Test Input 2 : [1,2,3,4,5,6,7,8,9]
  //  Test Output 2: [9,8,7,6,5,4,3,2,1]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.reverseArray = (input) => {
    for (let i=0; i < ~~(input.length / 2); i++) {
      let first = i;
      let last = input.length-1-i;

      [ input[first], input[last] ] = [ input[last], input[first] ];
    }

    return input;
  };



  //  2. Write a function that receives the arguments (input, index) and shifts all the elements
  //      at `index` to the right by 1.  Then sets the value at pos to null.  Use only loops,
  //      no builtin array methods like .splice, .push, .pop, etc.
  //
  //
  //  Test Input 1 : [1,2,3,4,5,6,7,8,9,10], 7
  //  Test Output 1: [1,2,3,4,5,6,7,null,8,9,10]
  //
  //  Test Input 2 : [1,2,3,4,5,6,7,8,9], 2
  //  Test Output 2: [1,2,null,3,4,5,6,7,8,9]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.shiftRight = (input, index) => {
    for (let i = input.length; i >= index; i--) {
      input[i] = input[i - 1];
    }

    input[index] = null;
    return input;
  };



  //  3. Write a function that receives the arguments (input, index) and shift all the elements
  //      after `index` to the left by 1.  Use only loops, no built in array methods like
  //      .splice, .push, .pop, etc.
  //
  //
  //  Test Input 1 : [1,2,3,4,5,6,7,8,9,10], 7
  //  Test Output 1: [1,2,3,4,5,6,7,9,10, undefined]
  //
  //  Test Input 2 : [1,2,3,4,5,6,7,8,9], 2
  //  Test Output 2: [1,2,4,5,6,7,8,9, undefined]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(1)
  //
  this.shiftLeft = (input, index) => {
    for (let i=index; i<input.length; i++) {
      input[i] = input[i+1];
    }

    return input;
  };



  //  4. Write a function that receives the arguments (input, index) that shifts all the elements
  //      at `index` to the right by one and then sets the value at pos to null.  If any of the
  //      elements needs more space that the original array length, then double it first.
  //
  //
  //  NOTES:
  //
  //    In most programming languages arrays are fixed size, or `static`.  Meaning they can't
  //     grow or shrink in length once created.  In Javascript, they are `dynamic`, meaning they
  //     length adjusts as elements are added or removed.  To create a pre-allocated array length
  //     in javascript, do the following:
  //
  //    let variable = new Array(size);
  //
  //    To resize a static array using the doubling technique, we have to:
  //
  //     1. Create new array of the desired length (2x the current capacity)
  //     2. Copy all elements from old array into new array
  //     3. Set the old array to the new array
  //
  //    In his exercise, create an array that defaults to a capacity of 8.  If adding a new item
  //     would cause a 9th element, then resize it using the doubling technique.
  //
  //
  //  Test Input 1 : [1,2,3,4,5,6,7,8], 7
  //  Test Output 1: [1,2,3,4,5,6,7,null,8, _, _, _, _, _, _, _]
  //
  //  Test Input 2 : [1,2,3,4,5,6,7,8,9], 2
  //  Test Output 2: [1,2,null,3,4,5,6,7,8,9, _, _, _, _, _, _]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.shiftRightAndResize = (input, index) => {
    let capacity = input.length;

    if (input.length === capacity) {
      resize();
    }

    for (let i=input.length-1; i>index; i--) {
      input[i] = input[i-1];
    }

    input[index] = null;



    function resize() {
      capacity *= 2;
      let tempStorage = new Array(capacity);

      for (let i = 0; i < input.length; i++) {
        tempStorage[i] = input[i];
      }

      input = tempStorage;
    }

    return input;
  };



  //  5. Write a function that receives the arguments (input, count, index) that shifts all the
  //      elements after `index` to the left by one.  If the count reaches half the capacity then
  //      resize the array using the halving technique.
  //
  //
  //  NOTES:
  //
  //    In most programming languages arrays are fixed size, or `static`.  Meaning they can't
  //     grow or shrink in length once created.  In Javascript, they are `dynamic`, meaning they
  //     length adjusts as elements are added or removed.  To create a pre-allocated array length
  //     in javascript, do the following:
  //
  //    let variable = new Array(size);
  //
  //    To resize a static array using the halving technique, we have to:
  //
  //     1. Create new array of the desired length (1/2 the current capacity)
  //     2. Copy all elements from old array into new array
  //     3. Set the old array to the new array
  //
  //    In his exercise, create an array that defaults to a capacity of 8.  If removing an item
  //     would cause count to become half the capacity, then resize using hte halving technique.
  //
  //
  //  Test Input 1 : [1,2,3,4,5,_,_,_], 2   (do this 4 times)
  //  Test Output 1: [1,2,3,_]
  //
  //  Test Input 2 : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 9   (do this 8 times)
  //  Test Output 2: [1,2,3,4,5,6,7,8]
  //
  //
  // What is the Time Complexity of your solution?  : O(n)
  // What is the Space Complexity of your solution? : O(n)
  //
  this.shiftLeftAndResize = (input, count, index) => {
    let capacity = input.length;

    if (count === capacity / 2) {
      resize();
    }

    for (let i=index+1; i<input.length; i++) {
      input[i] = input[i+1];
    }



    function resize() {
      capacity /= 2;
      let tempStorage = new Array(capacity);

      for (let i = 0; i < capacity; i++) {
        tempStorage[i] = input[i];
      }

      input = tempStorage;
    }

    return input;
  };
};