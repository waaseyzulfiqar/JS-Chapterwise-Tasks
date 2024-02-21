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