function isPalindrome(word) {
  // Write your algorithm here

  let x = word
  console.log(x)
  let y = Array.from(word).reverse().join("");
  console.log(y)
  if (x===y) {
    return true;
  }
  else {
    return false;
  }


}


/* 
  Add your pseudocode here
  take string(word) and split into an array of characters. 
  assign x to new array 
  assign y to reverxe of x.
  if x is equal to y then return True 
  if x is not equal to y then return False.


*/



/*
  Add written explanation of your solution here

  construct a method that takes the string and splits it into an array of single characters
  assign a variable to the newly split array 
  assign a variable to the reverse of the split array. 
  use if statement. 
  If newly split array and reverse of the split array are equal, return true 
  if newly split array and reverse of the split array are not equal, return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
