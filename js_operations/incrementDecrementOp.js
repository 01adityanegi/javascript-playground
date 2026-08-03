// Increment & Decrement Operators (++, --)

// Increase the page number using ++.
let pageNo = 5
pageNo++
console.log(pageNo)

// Decrease a countdown timer using --.
let countdownTimer = 3
countdownTimer-- //here value is 3 its look like 3-- 
countdownTimer-- //here value is 2 
countdownTimer-- //here value is 1 
console.log(countdownTimer) //then here value is 0 

// Print the value before and after count++.
let counterValue = 10
console.log("Before Cout++ :" , counterValue);
counterValue++
console.log("After Cout++ :" , counterValue);

// Print the value before and after ++count.
let counterValue2 = 15
console.log("Before ++Cout :" , counterValue2);
++counterValue2 // here is value is 16 
console.log("After ++Cout :" , counterValue2);

// Print the value before and after count--.
let counterSubValue = 20
console.log("Before Cout-- :" , counterSubValue);
counterSubValue--
console.log("After Cout-- :" , counterSubValue);

// Print the value before and after --count.
let countersubValue = 5
console.log("Before  -- Cout :" , countersubValue);
--countersubValue
console.log("After -- Cout :" , countersubValue);

// Increase the number 10 times manually using ++.
let number  = 0
number ++ 
number ++ 
number ++ 
number ++ 
number ++ 
number ++ 
number ++ 
number ++ 
number ++ 
number ++ 
console.log(number)

// Decrease a variable until it reaches 0.
let decreaseNum = 5
decreaseNum = decreaseNum - 5
console.log(decreaseNum)

// Simulate visitor count increasing.
let simuateVisior = 0 
simuateVisior++
console.log(simuateVisior)

// Simulate available seats decreasing.
let SimulateSeats = 10
 -- SimulateSeats
console.log(SimulateSeats)

/*
Learned:
- ++ increases a variable by 1.
- -- decreases a variable by 1.
- count++ is postfix increment.
- ++count is prefix increment.
- The difference between prefix and postfix is visible when they are used inside expressions.
*/