


function alwaysHungry(arr) {
    
    let counter=0;
    for(let i=0; i<arr.length; i++){
        
        if(arr[i] === "food"){
            console.log("yummy");
            counter++;
               }
            }
            if(counter===0){
                console.log("Im hungry");
            }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);

// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//---------------------------------------------------------------//

function highPass(arr, cutoff) {
    let filteredArr = [];
    
    for(let i=0; i<arr.length;i++){
        if(arr[i]>cutoff)
        filteredArr.push(arr[i]);
    }

    return filteredArr;
}
let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    let average= sum/arr.length;
        let count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>average){
        
        count++
    }
}
    return count;
}
let result2 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result2); 
// we expect back 4


//---------------------------------------------------------------//



function reverse(arr) {
    let left=0;
    let right= arr.length - 1; 
    while (left< right){
        let temp = arr[left];
        arr[left]= arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    return arr;
}
   
let result3 = reverse(["a", "b", "c", "d", "e"]);
console.log(result3); // we expect back ["e", "d", "c", "b", "a"]

//---------------------------------------------------------------//

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length < n ){
        var before = fibArr[fibArr.length-1];
        var befbef= fibArr[fibArr.length-2];
        fibArr.push(before+befbef);
    }
    return fibArr;
}
   
var result4 = fibonacciArray(10);
console.log(result4); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]