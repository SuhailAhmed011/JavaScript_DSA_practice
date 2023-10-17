// 1. Write a function in JavaScript to find the maximum value in an array of numbers.

/*function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let maxValue = findMaxValue([1, 2, 3, 4, 6, 7, 9]);
console.log(maxValue);

// 2. Write a function that takes a string as input and returns the reverse of the string.

function reverseStr(str){
    let reversed = '';
    for(let i = str.length-1; i>=0; i--){
        reversed+=str[i]
    }
    return reversed;
}

let Str = reverseStr('suhail');
console.log(Str); 


// Write a function that takes string as a input and return its value.

function strLength(arr){
    let len = 0;
    for(let i = 0; i<arr.length; i++){
        len++;
    }
    return len;
}
console.log(strLength([1,2,3,4,5,6,7,8,9,10])) 

// Sum of an Array


function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum;
}
console.log(sumOfArray([1,2,3,4])) 


function lengthStr(str){
    let num = str[0];
    for(let i = 0; i<str.length; i++){
        if(str[i].length > num.length){
            num=str[i]
        }
    }
    return num;
}

console.log(lengthStr(['hey', 'hello', 'suha', 'javascript'])) 

// Multi Dimensional Array [2d array]

let activities = [
    ['work' , 9],
    ['sleep' , 2],
    ['play' , 3],
    ['eat' , 1],
    ['movie' , 2]
];
activities.push(['walk' , 4])

console.table(activities);   



  function transPoseArray(arr){
    let rows = arr.length;
    let columns = arr.length;
    let transposedMatrix = [];

        for(let j = 0; j<rows; j++){
            transposedMatrix[j] = [];
            for(let i = 0; i<columns; i++){
                transposedMatrix[j][i] = arr[i][j]
            }
        }
        return transposedMatrix;
  }
  
  const transposed = transPoseArray([
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]);
  console.log("Transposed Array:", transposed);   

  function reverseArray(arr){
    let length = arr.length;
    let reversed = [];
    for(let i = length-1; i>=0; i--){
        reversed+=arr[i]
    }
    return reversed
  }
  console.log(reverseArray([1,2,3,4,5])) 

  function findMax(arr){
    
    let max = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
  }

  console.log(findMax([10,2,3,4,5,6,7,8,9]))

  function factorial(num){
    let fact = 1;
    for(let i =2 ; i<=num; i++){
        fact*=i;
    }
    return fact;
  }
  console.log(factorial(5)) */

  function checkPallindrome(str){
    let reversed = '';
    for(let i = str.length-1; i>=0; i--){
        reversed+=str[i];
        
    }
    if(reversed === str){
        return true;
    }else{
        return false;
    }
    
    
  }
  console.log(checkPallindrome('hello'))


  
  