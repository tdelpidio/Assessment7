//PROBLEM 1

const arr1 = [5, 4, 6, 8, 9]
const arr2 = [-2, 2]

    let value = false;
    for(i = 0; i < arr2.length; i++) {
    for(j = 0; j < arr2.length; j++) {
        if (i !==j){
            if(arr2[i] + arr2[j]=== 0) {  
                value = true;      
            }
        }
    }
}

// console.log(value)
//time: O(n^2)    space: O(n)



//PROBLEM 2

function uniqueCharsCheck (str) {
    let uniqueChars = new Set([])
    for (let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
  }

let testUniChar = uniqueCharsCheck('apple')
// console.log(testUniChar)
//time: O(n^2)    space: O(n)



//PROBLEM 3


function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

// console.log(isPangram("The Quick Brown Fox Jumps over the lazy dog"));
// console.log(isPangram("hello there"));
//time: O(n)    space: O(1)



//PROBLEM 4

function findLongestWord (arr) {
    let result = 0
    arr.forEach(word => {
        if(word.length > result){
            result = word.length
        }
    })

    return result
} 
console.log(findLongestWord(['hello', 'hi', 'goodbye']))
//time: O(n)    space: O(1)