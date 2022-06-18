function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
     
    const seenNumbers = new Set(); = 1
    for (const number of array) { = n
      const complement = target - number; = 1
    if (seenNumbers.has(complement)) return true; = 1
    seenNumbers.add(number); = 1
  }
  return false; = 1
   time complexity = O(n + 4) = O(n)
*/

/* 
  Add your pseudocode here
  create set
  loop array 
    complement = target - element
    set has element ? return true : add element to set
  no match for compliment in set ? return false  
  
*/

/*
  Add written explanation of your solution here

  create a set to keep track of all the numbers we've seen
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  check if the set had a number equivalent to the complement to the current number
  if so, return true
  if no add the number to the set and iterate to the next array number
  if none match return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 4, 5], 10))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 9, 3, 5], 15))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
