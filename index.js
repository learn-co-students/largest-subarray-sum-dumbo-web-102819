let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
      let maxSum = -Infinity
      let sum = 0
      for(let i = 0 ; i < array.length; i++){
             sum = array[i]
          for(let j = i + 1; j < array.length; j++){
               sum += array[j]
               maxSum = Math.max(maxSum, sum)
          }
      }

      return maxSum < 0? 0 : maxSum
}

console.log(largestSubarraySum(array))


