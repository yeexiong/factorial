exports.factorial = function(num) {
    
    // create an array to store the values of input Num
    let myArrayNum = []
    
    // store the values that come before num + 1
    for (let i = 1; i < num + 1; i++) {
        myArrayNum.push(i);
        
    }
    
    // initialize the variable with a value of 1 so that the factorial numbers aren't multiplied with 0
    let factorial = 1;

    // Calculate the factorial by multiplying all the numbers in the array
    for (let i = 0; i < myArrayNum.length; i++) {
    factorial *= myArrayNum[i];
  }
    // code check
    console.log(factorial);
    
    // function must return something
    return factorial;
    
};

// call method with argument passed for parameter num
exports.factorial(5)
