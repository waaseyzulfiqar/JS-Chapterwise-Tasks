// ************** chapter 01 Tasks **************



// Question 01 //

// alert("Welcome to Our website");

// Question 02 //

// alert("Error! Please Enter a Valid Password");

// Question 03 //

// alert("Welcome to JS Land... \nHappy Coding!")

// Question 04 //

// alert("Welcome to JS Land...")
// alert("Happy Coding!..")

// Question 05 //

// completed in console ✅

// Question 06 //

// no change occurs on any position of script ✅




// ************** chapter 02 Tasks **************



// Question 01 //

// var username;


// Question 02 //

// var myname = "Waasey Zulfiqar";


// Question 03 //

// var message = "Hello World";
// alert(message);

// Question 04 //

// var name = "Jhone Doe";
// var age = 15;
// var course = "Certified Mobile Application Development";

// alert(name);
// alert(age + " years old");
// alert(course);

// Question 05 //

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// Question 06 //

// var email = "wasey03112920792@gmail.com";
// alert("My Email Address is " + email);

// Question 07 //

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// Question 08 //
// document.write('Yah!..I can write HTML Content through JavaScript');

// Question 09 //
// var ajeeb = "_____________ஜ۩۞۩ஜ______________";
// alert(ajeeb);



// ************** chapter 03 Tasks **************



// Question 01 //

// var age = 20;
// alert("I am " + age + " years old");

// Question 02 //

// var websiteVisit = 25;
// alert("You have visited this Website " + websiteVisit + " times");

// Question 03 //

// var birthYear = 2004;
// document.write("My Birth Year is " + birthYear + "<br>");

// var type = typeof(birthYear);
// document.write("Datatype of my declared variable is " + type);

// Question 04 //

// var visitorName = "Waasey Zulfiqar";
// var productTitle = "Lexus LX-570";
// var Quantity = 6;

// document.write(visitorName + " Booked " + Quantity + " " + productTitle);




// ************** chapter 04 Tasks **************




// Question 01 //

// var name , age , email;

// Question 02 //

// illegal variables

// var 2you;
// var user name;
// var prompt;
// var alert;
// var username; (legal but not prefered)

// legal variables

// var user3;
// var $name;
// var _name;
// var myAlert;
// var myAge; (camelCase)
// var Email;

// Question 03 //

// document.write("Variable names can only contain numbers , $ and _ . For Example: $my_1stVariable" + "<br>")
// document.write("Variable must begin with a letter , $ or _ . For example: $name , _name or name" + "<br>")
// document.write("Variable names are case sensitive." + "<br>")
// document.write("Variable names should not be JS Variables" + "<br>")




// ************** chapter 05 Tasks **************




// Question 01 //


// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var num3 = num1 + num2;

// document.write("Sum of " + num1 + " and " + num2 + " is " + num3);


// Question 02 //


// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var num3 = num1 - num2;

// document.write("Subtraction of " + num1 + " and " + num2 + " is " + num3);


// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var num3 = num1 * num2;

// document.write("Product of " + num1 + " and " + num2 + " is " + num3);


// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var num3 = num1 / num2;

// document.write("Division of " + num1 + " and " + num2 + " is " + num3);


// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var num3 = num1 % num2;

// document.write("Modulus of " + num1 + " and " + num2 + " is " + num3);


// Question 03 //


// var number;

// document.write("Value after variable declaration is " + number);

// number = 5;

// document.write("<br>Initial Value : " + number);

// number++;

// document.write("<br>Value after increment is : " + number);

// var addition = number + 7;

// document.write("<br>Value after Addition is : " + addition);

// addition--;

// document.write("<br>Value after decrement is : " + addition);

// var remainder = addition % 3;

// document.write("<br>The Remainder is : " + remainder);


// Question 04 //


// var ticketPrice = 600;

// var ticketBuyer = +prompt("How many tickets you want..?")

// var finalPrice = ticketBuyer * ticketPrice;

// document.write("The Total Cost to buy " + ticketBuyer + " tickets to a movie is " + finalPrice);


// Question 05 //

// var table = +prompt("Enter any number")

// if(table == ""){
//     alert("Error! Please Enter a Number")
// }else{
// document.write(table + " * 1 = " + table * 1)
// document.write("<br>" + table + " * 2 = " + table * 2)
// document.write("<br>" + table + " * 3 = " + table * 3)
// document.write("<br>" + table + " * 4 = " + table * 4)
// document.write("<br>" + table + " * 5 = " + table * 5)
// document.write("<br>" + table + " * 6 = " + table * 6)
// document.write("<br>" + table + " * 7 = " + table * 7)
// document.write("<br>" + table + " * 8 = " + table * 8)
// document.write("<br>" + table + " * 9 = " + table * 9)
// document.write("<br>" + table + " * 10 = " + table * 10)
// }


// Question 06 //

// var temperatureInCentigrade = +prompt("Enter outside temperature in Celcius");

// var temperatureInFahrenheit = +prompt("Enter outside temperature in Fahrenheit")


// var fahrenheit = (temperatureInCentigrade * 9/5) + 32;

// var celcius = (temperatureInFahrenheit - 32) * 5/9;

// document.write( temperatureInCentigrade + "C" + " is " + fahrenheit + "F")

// document.write("<br>" + temperatureInFahrenheit + "F" + " is " + celcius + "C")


// Question 07 //

// var item1Price = +prompt("Enter item 1 price");

// var quantityOfItem1 = +prompt("Enter Quantity of item 1");

// var item2Price = +prompt("Enter item 2 price");

// var quantityOfItem2 = +prompt("Enter Quantity of item 2");


// var totalPrice = (item1Price * quantityOfItem1) + (item2Price * quantityOfItem2) + 100;


// document.write("Price of item 1 is " + item1Price);

// document.write("<br>Quantity of item 1 is " + quantityOfItem1);

// document.write("<br>Price of item 2 is " + item2Price);

// document.write("<br>Quantity of item 2 is " + quantityOfItem2);

// document.write("<br>Shipping charges 100");

// document.write("<br>Total cost of your order is " +totalPrice);


// Question 08 //

// var totalMarks = +prompt("Enter your Total Marks..");

// var marksObtained = +prompt("Enter your Obtained Marks...");

// var percentage = (marksObtained * 100) / totalMarks;

// document.write("Total Marks : " + totalMarks);

// document.write("<br>Marks Obtained : " + marksObtained);

// document.write("<br>Percentage : " + percentage);


// Question 09 //

// var dollars = +prompt("Tell me how many dollars do you have...?");

// var riyal = +prompt("How many Riyals do you have...?");

// var usd = dollars * 104.80;

// var saudi = riyal * 28;


// var totalRupees = (usd + saudi);

// document.write("Total Currency in PKR is : " + totalRupees);


// Question 10 //

// var num = ((5 + 5) * 10) / 2;

// Question 11 //

// var birthYear = +prompt("Enter you Birth Year");

// var year = 2024;

// var age = year - birthYear;

// document.write("Birth Year is : " + birthYear);

// document.write("<br>You are " + age + " years old ");


// Question 12 //

// var radiusOfCircle = +prompt("Enter your object radius");

// var circumferenceOfCircle = radiusOfCircle * 2 * 3.142;

// var areaOfCircle = radiusOfCircle * radiusOfCircle * 3.142

// document.write("Radius of Circle is : " + radiusOfCircle);

// document.write("<br>The Circumference is : " + circumferenceOfCircle);

// document.write("<br>The Area is : " + areaOfCircle);


// Question 13 //


// var snack = prompt("Enter your Favorite Sanck");

// var inADay = +prompt("How many times in a day you have your favorite snack");

// var minAge = +prompt("Enter Your Age");

// var maxAge = 100;

// var totalSnacks = (inADay * 365) * (maxAge - minAge);

// document.write("Favorite Snack : " + snack);

// document.write("<br>Current Age : " + minAge);

// document.write("<br>Estimated Maximum Age : " + maxAge);

// document.write("<br>Amount of snacks per day : " + inADay);

// document.write("<br>You will need " + totalSnacks + " " + snack + " to last you until the age of " + maxAge);




// ****************** IF-ElSE Task ***************** //



// Question 1 //

// var userNumber = +prompt("Enter any number");

// if(userNumber % 3 == 0){

//     alert(userNumber + " is divisible by 3")
// }else{
//     alert(userNumber + " is not divisible by 3");
// }


// Question 2 //


// var evenOdd = +prompt("Enter any number that you want to know it is Even or Odd");

// if(evenOdd % 2 == 0){

//     alert(evenOdd + " is Even")

// }else{
//     alert(evenOdd + " is Odd")
// }


// Question 3 //


// var age = +prompt("Enter your Age")

// if(age > 18){

//     alert("Old Enough")

// }else{

//     alert("Too Young")
// }


// Question 4 //


// var Name = prompt("Enter Your name")

// var myName = "waasey"

// if(Name === myName){

//     alert("Congratulations!")
// }


// Question 5 //

// var userNumber = +prompt("Enter any number");

// if(userNumber % 3 == 0){

//     alert(userNumber + " is divisible by 3")
// }else{
//     alert(userNumber + " is not divisible by 3");
// }


// Question 6 //


// var userInput = prompt("Enter any alphabet or number")

// var code = userInput.charCodeAt()

// if(code >= 65 && code <= 90){

//     alert("UpperCase")

// }else if(code >= 97 && code <= 122){

//     alert("LowerCase")

// }else if(code >= 48 && code <= 57){

//     alert("Number")

// }else{

//     alert("Error! Please Enter either an Alphabet or a Number")
// }



// Question 7 //


// var number1 = +prompt("Enter the first number")

// var number2 = +prompt("Enter the second number")

// var operation = prompt("Enter the operation name you want between numbers..?")


// if(operation == '+'){

//     alert(number1 + number2)

// }else if (operation == '-'){

//     alert(number1 - number2)

// }else if(operation == '*'){

//     alert(number1 * number2)

// }else if(operation == '/'){

//     alert(number1 / number2)

// }else if (operation == '%'){

//     alert(number1 % number2)

// }else{

//     alert("Error! Not an Operation")
// }


// Question 9 //


// var year = +prompt("Enter Year")

// if(year % 4 == 0){

//     alert("leap year")

// }else{

//     alert("Not a leap year")
// }



// Question 10 //


// var password = "karachi321"

// var userPassword = prompt("Enter Your Password")

// if(userPassword == ""){

//     alert("Error! Password not found")

// }else if (userPassword == password){

//     alert("Correct! the password you entered matches the original password")

// }else{
//     alert("Incorrect Password")
// }



// Question 11 //


// else{

//     document.write("You are not Fahad")
// }



// Question 12 //


// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert(greeting = "Good day");
// } else {
//     alert(greeting = "Good evening");
// }



// Question 13 //



// var int1 = prompt("enter anyting")
// var int2 = prompt("enter anyting")

// if(int1.length > int2.length){

//     alert(int1 + " is largest")

// }else if (int1.length < int2.length){

//     alert(int2 + " is largest")

// }else if (int1.length == int2.length){

//     alert("Both are equal")

// }else{

//     alert("ok")
// }



// Question 14 //


// var number = +prompt("Enter any Number you want to know whether it is positive , negative or zero")

// if(number == 0){

//     alert("0")

// }else if (number > 0){

//     alert("positive")

// }else if(number < 0){

//     alert("negative")

// }else{

//     alert("Error! Please type a number")
// }



// Question 16 //


// var userData = prompt("Enter any value you want to know type of...?")

// alert(typeof(userData))



// Question 17 //



// var vowel = prompt("Enter any alphabet if you want to learn vowels..?")

// if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u'){

//     alert("It is a Vowel")

// }else{

//     alert("Not a Vowel")
// }




// Question 18 //

// There are two ways:

// 1) 10 != 8
// 2) 10 !== 8

// Both will give 'true'



// Question 19 //


// var month = +prompt("Enter the month number I'll tell you month name..?")

// if(month == 1){

//     alert("January")

// }else if(month == 2){

//     alert("February")

// }else if(month == 3){

//     alert("March")

// }else if(month == 4){

//     alert("April")

// }else if(month == 5){

//     alert("May")

// }else if(month == 6){

//     alert("June")

// }else if(month == 7){

//     alert("July")

// }else if(month == 8){

//     alert("August")

// }else if(month == 9){

//     alert("September")

// }else if(month == 10){

//     alert("October")

// }else if(month == 11){

//     alert("November")

// }else if(month == 12){

//     alert("December")

// }else{

//     alert("Error! Not a Month")
// }



// Question 20 //



// var age = +prompt("Enter Your Age")

// if(age < 18){

//     alert("Too young")

// }else{

//     alert("Old enough")
// }





// ****************** FUNCTIONS Task ***************** //



// Question 1 //


// function hello(){

//     alert("hello world")

// }

// hello()



// Question 2 //


// function dateAndTime(date){

//     var date = new Date()
//     return alert(date)
// }

// dateAndTime()



// Question 3 //



// var fName = prompt("Enter your first name")
// var lName = prompt("enter your last name")

// function greetUser(){

//     alert("Welcome to my website " + fName + " " + lName)
// }

// greetUser(fName , lName)



// Question 4 //


// var num1 = +prompt("Enter first number")

// var num2 = +prompt("Enter second number")

// function sum(){

//     alert(num1 + num2)
// }

// sum(num1 , num2)




// Question 5 //


// var num1 = +prompt("Enter first number")

// var num2 = +prompt("Enter second number")

// var operator = prompt("Enter any operator you want to do calculations between num1 and num2")

// function calculator(num1 , num2 , operator){

//     if(operator == '+'){

//         alert(num1 + num2)

//     }else if(operator == '-'){

//         alert(num1 - num2)

//     }else if(operator == '*'){

//         alert(num1 * num2)

//     }else if(operator == '/'){

//         alert(num1 / num2)

//     }else if(operator == '%'){

//         alert(num1 % num2)

//     }else{

//         alert("Error! Not a Valid Operator")
//     }
// }

// calculator(num1 , num2 , operator)



// Question 6 //


// function square(num){

//     alert(num * num)
// }

// square(9)



// Question 7 //

// factorial of a given number ❌


// Question 8 //

// counting ❌



// Question 9 //


// function calcHypotenuse(base , perpendicular ,hypotenuse){

//     var base = prompt("Enter base value")
//     var perpendicular = prompt("Enter perpendicular value")

//     var hypotenuse = square(base) + square(perpendicular)

//     function square(value){

//         return value * value
//     }

//     return alert("Hypotenuse is ==>" + hypotenuse)
// }

// calcHypotenuse()


// Question 10 //


// var length = prompt("Enter anything")

// function variableLength(){

//     alert(length.length)
// }

// variableLength(length)



// Question 11 //


// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")
// var num3 = +prompt("Enter third number")
// var num4 = +prompt("Enter fourth number")
// var num5 = +prompt("Enter fiftth number")

// function largest(large){

//     var large = Math.max(num1 , num2 , num3 , num4 , num5)

//     return alert(large + " is greatest among them")
  
// }

// largest(num1 , num2 , num3 , num4 , num5)



// Question 12 //


// var width = +prompt("Enter the width of your rectangle")
// var height = +prompt("Enter the height of your rectangle")

// function area(){

//     var area = width * height
//     alert("The area of you your rectangle is " + area)
// }

// area(width , height)



// Question 13 //

// Array ❌ 


// Question 14 //

// Array ❌


// Question 15 //

// var param = function inner() { 
//     return typeof inner; 
//    }
//    alert(param()); 

// Output is : function //


// Question 16 //


// var number = +prompt("Enter number")

// var power = +prompt("Enter power you want to put on number")

// function mathPower(){

//     alert(Math.pow(number, power))
// }

// mathPower(number , power)



// Question 17 //


// function dice(){

//     return alert(Math.round(Math.random() * 5) + 1)
// }

// dice()

// Math.radom() ==> this will give value between 0 and 1 with points (example: 0.234571 , 0.9823451)

// Math.round() ==> this will roundoff the value after .5 (example: 3.5 = 4)

// Math.ceil() ==> this will give the upper value (example: 4.1 = 5 , 3.2 = 4)

// Math.floor() ==> this will give the lower value (example: 2.9 = 2 , 4.6 = 4 , 5.8 = 5) // alert(Math.floor(2.9))



// Question 20 //


// var calcUpcase = prompt("Enter anything")

// var userInput = calcUpcase.charAt(0).toUpperCase() + calcUpcase.slice(1)

// alert(userInput)



// Question 23 //


// function type(userInput){

//     return alert(typeof(userInput))
// }

// type(true)



// Question 26 //


// function calculateAge(birthYear , currenYear , age){

//     var birthYear = +prompt("Enter your Birth year")
//     var currenYear = 2024

//     var age = currenYear - birthYear

//     return alert ("you are " + age + " years old")
// }

// calculateAge()


// Question 27 //


// function calculateSupply(snack , age , amountPerDay , estimatedAge , totalSupply){

//     var snack = prompt("What's your favorite snack..?")
//     var age = +prompt("What's your Age..?")
//     var amountPerDay = +prompt("How many times you get your favorite snack..?")

//     var estimatedAge = 100

//     var totalSupply = (amountPerDay * 365) * (estimatedAge - age) 

//     return alert ("You will need " + totalSupply + " " + snack + " till the age of " + estimatedAge)
// }

// calculateSupply()



// Question 28 //



// circumference == 2pi r
// area == pi r square


// +++++ FOR-CIRCUMFERENCE +++++ //


// function calcCircumference(radius , calcRadius){

//     var radius = +prompt("Enter radius of circle to calculate it's circumference")
//     var calcRadius = 2 * 3.14 * radius

//     return alert ("Circumference is " + calcRadius)
// }

// calcCircumference()


// +++++ FOR-AREA +++++ //


// function calcArea(radius , calcRadius){

//     var radius = +prompt("Enter radius of circle to calculate it's Area")
//     var calcRadius = 3.14 * radius * radius

//     return alert ("Area is " + calcRadius)
// }

// calcArea()



// Question 29 //



// function celsiusToFahrenheit(temperatureInC , fahrenheit){

//     var temperatureInC = +prompt("Enter temperature Celcius")

//     var fahrenheit = (temperatureInC * 9/5) + 32 

//     return alert(temperatureInC + "C" + " is " + fahrenheit + "F")

// }

// celsiusToFahrenheit()



// function fahrenheitToCelsius(temperatureInF , celcius){

//     var temperatureInF = +prompt("Enter temperature in fahrenheit")

//     var celcius = (temperatureInF -32) * 5/9

//     return alert(temperatureInF + "F" + " is " + celcius + "C")
// }

// fahrenheitToCelsius()




// ****************** ARRAYS Task ***************** //


// Question 1 //


// var studentName = []


// Question 2 //


// var studentName = []


// Question 3 //


// var students = ['waasey' , 'rafay' , 'jahanzaib']


// Question 4 //


// var numberArray = [2 , 4 , 6 , 8 , 10]


// Question 5 //


// var booleanArray = [true , false]


// Question 6 //


// var mixedArray = ['waasey' , 20 , true]


// Question 7 //


// var mobileNetworks = ['jazz' , 'ufone' , 'telenor' , 'zong' , 'onic']


// Question 8 //


// var qualifications = ['SSC' , 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'M.PHIL' , 'P.HD']


// Question 9 //


// var movies = ['Avengers: Age of Ultron' , 'Spectre' , 'Jurassic World' , 'Inside out']

// var showMovieLength = document.querySelector('#showMovieArrayLength')

// showMovieLength.innerHTML = movies.length


// Question 10 //


// var cars = ['Lexus Lx-570' , 'Toyota Landcruiser LC-300' , 'Toyota Fortuner Legendar' , 'Toyota Vigo']

// var showCarAtFirst = document.querySelector('#showCarAtFirstIndex')

// var showCarAtLast = document.querySelector('#showCarAtLastIndex')

// showCarAtFirst.innerHTML = cars[0]

// showCarAtLast.innerHTML = cars[3]


// Question 11 //


// var studentName = ['shakoor' , 'ghafoor' , 'jabbaar']

// var studentScore = [250 , 330 , 415]

// var totalMarks = 500

// var showStudentName = document.querySelector('#showStudentName')

// var showStudentScore = document.querySelector('#showStudentScore')

// var showStudentPercentage = document.querySelector('#showStudentPercentage')
 
// showStudentName.innerHTML = studentName[0]

// showStudentScore.innerHTML = studentScore[0]

// showStudentPercentage.innerHTML = studentScore[0] / totalMarks * 100


// Question 12 //


// var colorArray = ['yellow' , 'blue' , 'pink' , 'orange']

// a) var addColorBeg = prompt("Enter the color you want to add in the beginning...?")

// colorArray.unshift(addColorBeg)


// b) var addColorBeg = prompt("Enter the color you want to add in the end...?")


// colorArray.push(addColorBeg)


// c) colorArray.unshift('purple' , 'red')


// d) colorArray.shift()


// e) colorArray.pop()


// f) var userIndex = +prompt("at which index you want to add a color...?")

// var userColor = prompt("which color you want to add in the array...?")

// colorArray.splice(userIndex , 0 , userColor)


// g) var userIndexRemove = +prompt("from which index you want to remove the element..?")

// var userCountRemove = +prompt("how many elements you want to remove from the array...?")

// colorArray.splice(userIndexRemove , userCountRemove)


// console.log(colorArray);


// Question 13 //


// var studentScore = [300 , 400, 249, 222, 112]

// studentScore.sort()

// console.log(studentScore);


// Question 14 //

// var fruits = ['mango' , 'orange' , 'banana' , 'apple' ]

// fruits.sort()

// console.log(fruits);


// Question 15 //

// var cities = ['karachi' , 'larkana' , 'dadu' , 'sehwan' , 'sukkur']

// var selectedCities = cities.slice(1 , 4)

// console.log(selectedCities);


// Question 16 //


// var arr = ['This' , 'is' , 'my' , 'cat']

// console.log(arr.join(' '));


// Question 17 //


// var fifoArray = ['keyboard' , 'mouse' , 'printer' , 'monitor']

// console.log(fifoArray.shift()); 
// console.log(fifoArray.shift()); 
// console.log(fifoArray.shift()); 
// console.log(fifoArray.shift()); 



// Question 18 //

// var lifoArray = ['keyboard' , 'mouse' , 'printer' , 'monitor']

// console.log(lifoArray.pop());
// console.log(lifoArray.pop());
// console.log(lifoArray.pop());
// console.log(lifoArray.pop());


// Question 19 //

// var mobileManufacturers = ['apple' , 'Samsung' , 'Motorola' , 'Oppo']

// var select = document.querySelector('#phones')

// for (i = 0; i < mobileManufacturers.length; i++){

//     select.innerHTML += `<option>${mobileManufacturers[i]}</option>`
// }


// Question 20 //

// var arr = [[], [], []]


// Question 21 //

// var mainArr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// console.log(mainArr);



// ****************** LOOPS Task ***************** //


// Question 1 //


// for(let i = 1; i <= 5; i++){

//     console.log('Hello World');
// }


// Question 2 //


// for(let i = 1; i <= 10; i++){

//     console.log(i);
// }


// Question 3 //


// const userNumber = prompt("Enter any number you want table of...?")

// const userTableLength = prompt("Enter the length of your table...?")

// for( i = 0; i <= userTableLength; i++){

//     console.log(`${userNumber} * ${i} = ${userNumber * i}`);
// }


// Question 4 //


// const phones = ['Nokia' , 'Samsung' , 'Apple' , 'Sony' , 'Huawei']

// for(i = 0; i < phones.length; i++){

//     console.log(phones[i]);
// }



// Question 5 //


// const fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for(let i = 0; i < fruits.length; i++){

//     console.log(fruits[i]);
    
//     console.log(`Element at index ${i} is ${fruits[i]}`);
// }



// Question 6 //


// let showLength = document.querySelector('.length')

// let items = document.querySelector('.show-items')

// let userInput = +prompt("Enter your Length Array...?")

// for(let i = 0; i < userInput; i++){

//     let index = prompt("Enter value at index " + i)

//     showLength.innerHTML = userInput

//     items.innerHTML += index + "<br>"
// }


// Question 7 //

// a)  // for(let i = 0; i <= 15; i++){

//     console.log(i);
// }


// b)  // for(i = 10; i > 0; i--){

//     console.log(i);
// }


// c) 

// for(let i = 0; i <= 20; i=i+2){

//     console.log(i);
// }


// d)

// for(let i = 1; i <= 20; i= i+2){

//     console.log(i);
// }


// e)

// for(let i = 2; i <= 20; i=i+2){

//     console.log(`${i}k`);
// }



// Question 8 //


// const bakeryItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// let userItem = prompt("Enter item name you want to buy...?")

// let itemFound = false

// for(i = 0; i < bakeryItems.length; i++){

//     if(bakeryItems[i] === userItem){

//         alert("Item found");
//         itemFound = true
//     }
// }

// if(itemFound == false){
//     alert('Item not found');
// }


// Question 9 //


// const arr = [24, 53, 78, 91, 12, 0, 5]

// let largeNumber = 0 // arr[0] we can also use this

// for (let i = 0; i < arr.length; i++){

//     if(arr[i] > largeNumber){

//         largeNumber = arr[i]
//     }
// }
// console.log(largeNumber);



// Question 10 //

// const a = [24, 53, 78, 91, 12, 11]

// let smallNumber = a[0]

// for(let i = 0; i < a.length; i++){

//     // i = 0 = 24
//     // smallNumber ==> 12

//       // 11 < 12
//     if(a[i] < smallNumber){

//         smallNumber = a[i]
//     }
// }

// console.log(smallNumber);




// Question 11 //


// const nums = [24, 53, 78, 91, 12]

// let largeNumber = nums[0]

// let smallNumber = nums[0]

// for(let i = 0; i < nums.length; i++){

//     if(nums[i] > largeNumber){

//         largeNumber = nums[i]  

//     }else if(nums[i] < smallNumber){

//         smallNumber = nums[i]
//     }

//     // i++
// }

// console.log(`largest is ${largeNumber}`);

// console.log(`smallest is ${smallNumber}`);





// Question 12 //


// for(i = 1; i <= 100; i++){
    
//     if(i % 5 == 0){

//         console.log(i);
//     }
// }




// Question 13 //


// const students = ["Ali", "Sami", "Taha", "Inam"];

// const scores = [58, 73, 89, 90];

// let table = document.querySelector('table')

// for(let i = 0; i < students.length; i++){

//     table.innerHTML += `<td>${students[i]}</td> <td>${scores[i]}</td>`
// }




// Question 14 //

// const scores = [12, 45, 3, 22, 34, 50];

// let userScore = prompt("Enter any number...?")

// for(let i = 0; i < scores.length; i++){

//     console.log(scores[i]);

//     if(scores[i] == userScore){

//         break;
//     }

// }



// Question 15 //


// const nested = [ [1,2,3] , [4,5,6] , [7,8,9] ]

// for(let i = 0; i < nested.length; i++){

//     let nestedArray = nested[i]

//     let onLine = ''

//     for(let j = 0; j < nestedArray.length; j++){

//         // console.log(nestedArray[j]);
//         onLine = onLine + nestedArray[j]    // nested[i][j]
//     }
//     console.log(onLine);
    
// }


// Question 16 //

// let userNum = +prompt("Enter any number")

// for(let i = userNum; i >= 0; i = i - 0.5){

//     console.log(i);

// }




// Question 17 //


// for (let i = 0; i <= 20; i++){

//     if(i % 2 == 0){

//         console.log(`${i} is even`);

//     }else{

//         console.log(`${i} is odd`);
//     }
// }




// Question 18 //


// let product = 1;

// for(let i = 1; i <= 7; i++){

//     if(i % 2 !== 0){

//         product = product * i

//     }
// }
// console.log(product);





// Question 19 //

// not done ❌




// Question 20 //


// a)  for(let i = 1; i < 5; i++){
//     console.log('*****');
// }


// b)  var stars = ''

// for( let i = 0; i < 5; i++){

//     stars += '*'

//     console.log(stars);
// }


// c)

// not done ❌



// ****************** STRING METHODS Task ***************** //


// Question 1 //

// const firstName = prompt('Enter your First Name');

// const secondName = prompt('Enter your Second Name');

// let fullName = firstName + ' ' + secondName

// alert('Welcome ' + fullName)




// Question 2 //

// const para = document.querySelector('p')

// const favMobile = prompt('Enter your favorite mobile phone model.')

// para.innerHTML = `My favorite phone is : ${favMobile} <br> length of string is : ${favMobile.length}`




// Question 3 //

// const nationality = 'Pakistani'

// const para = document.querySelector('p')

// para.innerHTML = `string : ${nationality} <br> index of 'n' : ${nationality.indexOf('n')}`




// Question 4 //

// const hello = 'Hello World'

// const para = document.querySelector('p')

// para.innerHTML = `string : ${hello} <br> last index of 'L' : ${hello.lastIndexOf('l')}`




// Question 5 //

// const nationality = 'Pakistani'

// const para = document.querySelector('p')

// para.innerHTML = `String : ${nationality} <br> Character at index 3 : ${nationality[3]}`




// Question 6 //

// const firstName = prompt('Enter your First Name');

// const secondName = prompt('Enter your Second Name');

// let fullName = firstName.concat(secondName)

// alert('Welcome ' + fullName)




// Question 7 //

// const city = 'Hyderabad'

// let repcity = city.replace('Hyder' , 'Islam')

// alert(repcity)




// Question 8 //

// let message = 'Ali and Sami are best friends. They play cricket and football together.';

// const para = document.querySelector('p')

// para.innerHTML = message.replaceAll('and' , '&')




// Question 9 //

// const para = document.querySelector('p')

// const value = '472'

// const num = Number(value)

// para.innerHTML = `Value: ${value} <br> Type: ${typeof(value)} <br> Value: ${num} <br> Type: ${typeof(num)}`




// Question 10 //

// const url = prompt('Enter URL')

// const para = document.querySelector('p')

// para.innerHTML = url.replace('www.' , '')




// Question 11 //

// const userInupt = prompt('Enter anything in LowerCase')

// const para = document.querySelector('p')

// para.innerHTML = `Input: ${userInupt} <br> UpperCase: ${userInupt.toUpperCase()}`




// Question 12 //

// const userInupt = prompt('Enter anything in UpperCase')

// const para = document.querySelector('p')

// para.innerHTML = `Input: ${userInupt} <br> LowerCase: ${userInupt.toLowerCase()}`




// Question 13 //

// const userInput = prompt('Enter anything')

// const para = document.querySelector('p')

// para.innerHTML = `User Input: ${userInput} <br> Title Case: ${userInput[0].toUpperCase() + userInput.slice(1)}`




// Question 14 //

// const num = 40.250;

// const para = document.querySelector('p')

// para.innerHTML = `Number: ${num} <br> Result: ${String(num).replace('.' , '')}`





// Question 15 //

// const para = document.querySelector('p')

// const a = prompt('Enter first value')

// const b = prompt('Enter second value')

// const x = a + b

// if(a == 3 & b == 3){

//     para.innerHTML = `a is : ${a} <br> b is : ${b} <br> a + b is ${x}`

// }else{

//     alert('Sorry')
// }




// Question 16 //

// const para = document.querySelector('p')

// const a = prompt('Enter first value')

// const b = prompt('Enter second value')

// const x = a - b

// if(a == 3 & b == 3){

//     para.innerHTML = `a is : ${a} <br> b is : ${b} <br> a - b is ${x}`

// }else{

//     alert('Sorry')
// }




// Question 17 //

// const userName = prompt('Enter UserName')

// for(let i = 0; i < userName.length; i++){

//     text = userName.slice(i , i + 1)

//     if(text == '!' || text == ',' || text == '.' || text == '@' ){

//         alert('Please Enter valid username')
//     }

// }




// Question 18 //

// const para = document.querySelector('p')

// const bakeryItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// const userItem = prompt('What do you want from our bakery..?').toLowerCase()

// let found = false

// for(let i = 0; i < bakeryItems.length; i++){

//     if(userItem === bakeryItems[i]){

//         found = true

//         para.innerHTML = `${userItem} is available at index ${i} in our bakery`

//         break
//     }
// }

// if(found == false){

//     para.innerHTML = `We are sorry ${userItem} is not available in our bakery`
// }





// Question 19 //

// const para = document.querySelector('p')

// const userInput1 = prompt('Enter any thing')

// const userInput2 = prompt('Enter any thing')

// if(userInput1 > userInput2){

//     para.innerHTML = `${userInput1} is greater than ${userInput2}`

// }else if(userInput1 < userInput2){

//     para.innerHTML = `${userInput2} is greater than ${userInput1}`

// }else if(userInput1 === userInput2){

//     para.innerHTML = `${userInput1} is equal to ${userInput2}`

// }else{

//     alert('Error')
// }





// Question 20 //

// not done ❌





// Question 21 //

// const para = document.querySelector('p')

// const university = 'University of Karachi'

// for(let i = 0; i < university.length; i++){

    // console.log(university[i]);
    
// }





// Question 22 //

// const para = document.querySelector('p')

// const city = prompt('Enter any thing')

// para.innerHTML = `User Input : ${city} <br> last character of input is: ${city.charAt(city.length - 1)}`






// Question 23 //


// const para = document.querySelector('p')

// const paragraph = 'The quick brown fox jump over the lazy dog'

// let count = 0

// for(let i = 0; i < paragraph.length; i++){

//     extract = paragraph.toLowerCase().slice(i , i + 3)

//     if(extract == 'the'){

//         count = count + 1

//         // count++ ==> we can also use this //
//     }
    
// }

// para.innerHTML = `Text: ${paragraph} <br> There are ${count} occurences of the word 'the'`





// Question 24 //


// const para = document.querySelector('p')

// const country = 'Pakistan'

// let vowel = 0

// let consonets = 0

// for(let i = 0; i < country.length; i++){

//     let extract = country.slice(i , i + 1)

//     if(extract == 'a' || extract == 'e' || extract == 'i' || extract == 'o' || extract == 'u'){

//         vowel++

//     }else{
        
//         consonets++
        
//     }
// }
// para.innerHTML = `vowels are : ${vowel} <br> consonents are : ${consonets}` 
