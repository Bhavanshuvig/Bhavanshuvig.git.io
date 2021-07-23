//Program No. 1

// program to generate a multiplication table
function multi()
{
    console.log("Program No. 1");
    console.log("Printing the Multiplication Table:-");
let number = 15;

console.log(`The Number is: ${number}`);
//creating a multiplication table
for(let i = 1; i <= 10; i++) 
{
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);// Printing the result on console
}
}

multi(); //calling the function

console.log("**************************************************************"); //separating the Above Program

// Program No. 2

// Checking the number is prime or not
function checkingPrimeNumber()
{
    console.log("Program No. 2");
    console.log("Checking the number is prime r not:-");
const checkNumber = 2;
let isPrime = true;

//printing the number on console
console.log("The Number is: "+checkNumber);
// checking if number is equal to 1
if (checkNumber === 1) 
{
    console.log("1 is neither prime nor composite number.");
}

// checking if number is greater than 1
else if (checkNumber > 1) {

    //logic
    for (let i = 2; i < checkNumber; i++) 
    {
        if (checkNumber % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) 
    {
        console.log(`The number is a prime number`);
    } else {
        console.log(`The number is a not prime number`);
    }
}

// checking if number is less than 1
else 
{
    console.log("The number is not a prime number.");
}
}

checkingPrimeNumber(); //Calling the Function

console.log("**************************************************************"); //separating the Above Program


// Program No. 3

// Checking The Number positive, negative or zero
function numberPositive() 
{
    console.log("Program No. 3");
    console.log("Checking the Number is Positive, Negative or Zero:-");
let number = -4 //variable

console.log("The Number is: "+number); //printing the number on console

//logic
if(number === 0) //checking for zero
{
    console.log("The Number is Zero");
}

else if(number>0) //checking for positive number
{
    console.log("The Number is Positive");
}

else //for printing negative if the upper else if statement is false
{
    console.log("The Number is Negative");
}
}

numberPositive(); //calling the Function

console.log("**************************************************************"); //separating the Above Program


//Program No. 4

//Finding the Factorial of a number

function factorial() 
{
    console.log("Program No. 4");
    console.log("Finding the Factorial of a number:-");
let numberForFact = 5, fact=1; //Variables

console.log("Number is: "+numberForFact); //printing The number on console

if(numberForFact === 0) //checking for if the number is equal to zero
{
    console.log("Factorial of the number is: 1");
}
else{
for(let i = 1;i<=numberForFact;i++) //logic for finding the factorial of a number
{
    fact = fact * i;
}
console.log("The Factorial of the number is: "+fact); //printing the result on console
}
}

factorial(); //calling the Funtion
console.log("**************************************************************"); //separating the Above Program


console.log("**************************************************************"); //separating the Above Program

// Program No. 5

//Finding The Largest Number:-

function largest() 
{
    console.log("Program No. 5");
    console.log("Finding The Largest Number:-");
let num1 = 2, num2 = 8, num3 = 5;  //variables

//printing Numbers to the Console
console.log("The Numbers are:- "+num1+", "+num2+", "+num3);

//if else statement for Logic
if (num1>num2 && num1>num3) //checking for num1
{
    console.log("The Largest Number is: "+ num1);

}

else if (num2>num1 && num2>num3) //checking for num2
{
    console.log("The Largest Number is: "+ num2);
    
}

else  // here num3 will print if upper else if statement are false
{
    console.log("The Largest Number is: "+ num3);
}
}

largest(); //calling the function

console.log("**************************************************************"); //separating the Above Program
