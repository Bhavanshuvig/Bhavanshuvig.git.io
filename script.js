//Program No. 1

//Finding the most frequent item of an array:-

function largest() 
{
    console.log("Program No. 1");
    console.log("Finding the most frequent item of an array");
  console.log("Array= 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3" )
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

console.log("**************************************************************"); //separating the Above Program

// Program No. 2

//Finding the Factorial of a number

function factorial() 
{
    console.log("Program No. 2");
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


// Program No. 3

// Finding the Area of Triangle
function numberPositive() 
{
    console.log("Program No. 3");
    console.log("Finding the Area of triangle:-");
    console.log(" Base= 4 and Height = 5")
const triangel = (b,h) => {
    let area = (1/2)*b*h;
    console.log(`5) area of triangel with base= ${b} and Height = ${h} is equal: ${area}`);
    console.log(" ");
}
triangel(4,5);

console.log("**************************************************************"); //separating the Above Program


//Program No. 4

// Checking the number is prime or not
function checkingPrimeNumber()
{
    console.log("Program No. 4");
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

// Program No. 5

// program to generate a multiplication table
function multi()
{
    console.log("Program No. 5");
    console.log("Printing the Multiplication Table:-");
let number = 19;

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