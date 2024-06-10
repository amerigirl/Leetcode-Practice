
//For each problem: go to leetcode for all directions and examples

//1. Two Sum (Easy) --arrays and lists

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - nums[i];

    if (map.has(num2)) {
      return [i, map.get(num2)];
    } else {
      map.set(num1, i); //the value goes first??
    }
  }
};

//check method: 
console.log(twoSum([2,7,11,15], 9));


/*----------------------------------------------------
      2. Shuffle Array (Easy) --arrays and lists
*/

var shuffle = function(nums, n) {
   newArray = [];
for(let i = 0; i < n; i++){
 
  newArray.push(nums[i]);
  newArray.push(nums[i + n]);
  
}
  return newArray; 
};

console.log(shuffle([1,2,3,4,4,3,2,1], 4))

/* -----------------------------------------------
      3. 
*/
