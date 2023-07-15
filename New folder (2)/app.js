//write a function that calculates the area of different shapes (circle, triangle , rectangle)based on user input

let areaofcircle = (radius) =>{
    let area = 3.142 * (radius * radius);
    return area;
    
    }
    console.log(areaofcircle(3));

    let areaofrectangle = (length , breath) =>{
        let area = length * breath;
        return area;
    }
    console.log(areaofrectangle(32,23));

    let areaoftriangle = (base , height) =>{
        let area = (base * height)/2;
        return area;
    }
    console.log(areaoftriangle(32,23));

    //write a function to find the given number is postive negative or zero

    let findnumbersign = (num) =>{
        if (num>0){
        return "Positive";
        }
        else if (num<0){
            return "negative"
        }
        else {
             return "zero"
        }
    }
    console.log(findnumbersign (500));
    console.log(findnumbersign (-500));
    console.log(findnumbersign (0));

    //write a javascript program to check if a given function has a leap year
    let leapyear = (year) =>{
        if(year%4 ===0 ){
            return "leap year";
        }
        else{
            return "not a leap year";
        }
    }
    console.log(leapyear (2016));
    console.log(leapyear (2023));

    //write a program that ask user for their age if the age is less than 18 display a message they are not eligible to vote if the age is between 18 & 65(inclusive) display a message they are eligible to vote otherwise display a message saying they are eligible for senior cetizen benifts

    let age = (age) =>{
        if(age>=18 && age<=65){
            return "eligible to vote"
        }
        else if(age<18){
            return "not eligible to vote"
        }
        else{
            return "you are eligible for senior cetizen benifts"
        }
    }
    console.log(age (15));
    console.log(age(56));
    console.log(age(82));

    //write a program that ask user to enter a month number (1-12) and display the corresponding month name if an invalid month number is entered display a error

    let findmonth = (monthnumber) =>{
        let months =["jan","feb","march","april","may","june","july","aug","sept","oct","nov","dec"];
        if(monthnumber>=1 && monthnumber<=12){
            return months[monthnumber -1];
        }
        else{
            return "invalid number number must be equal to 1 and less than equal to 12"
        }
    }
    console.log(findmonth (15));
    console.log(findmonth(6));
    console.log(findmonth(-2));

 //write a program that ask user to enter a week number (1-7) and display the corresponding week name if an invalid week number is entered display a error

 let findweek = (weeknumber) =>{
    let weeks =["mon","tues","wed","thurs","fri","sat","sun"];
    if(weeknumber>=1 && weeknumber<=7){
        return weeks[weeknumber -1];
    }
    else{
        return "invalid number number must be equal to 1 and less than equal to 7"
    }
}
console.log(findweek (15));
console.log(findweek(6));
console.log(findweek(-2));

    //write a program that takes a character as input and determines whether it is a vowel(a ,e,i,o,u),a consonant or a invalid input display the appropriate message based on the input

    let findvowel = (char) =>{
        if(char.length ==1){
        switch (char){
case "a":{
    console.log("character is in vowel");
    break;
}
case "e":{
    console.log("character is in vowel");
    break;
}
case "i":{
    console.log("character is in vowel");
    break;
}
case "o":{
    console.log("character is in vowel");
    break;
}
case "u":{
    console.log("character is in vowel");
    break;
}
case "a":{
    console.log("character is in vowel");
    break;
}
case "A":{
    console.log("character is in vowel");
    break;
}
case "E":{
    console.log("character is in vowel");
    break;
}
case "I":{
    console.log("character is in vowel");
    break;
}
case "O":{
    console.log("character is in vowel");
    break;
}
case "U":{
    console.log("character is in vowel");
    break;
}
default:{
    console.log("charcter is not in vowel")
}

        }
    }
    else{
        console.log("please enter single character")
    }
}
findvowel("b");
findvowel("urdu");
findvowel("a");

//get discount on your bill using switch case

let getdiscount = (totalamount) =>{
switch(true){
    case(totalamount>=15000):{
        console.log("15% discount on total bill");
        break;
    }
    case(totalamount>=10000):{
        console.log("10% discount on total bill");
        break;
    }
    case(totalamount>=5000):{
        console.log("5% discount on total bill");
        break;
    }
    default:{
        console.log("no discounts");
        break;
    }
}
}
getdiscount("45000");
getdiscount("5000");
getdiscount("12000");
getdiscount("2000");

//write a for loop that calculates the sum of the first 50 natural numbers.

const sumnumber = (num) =>{
let i;
let sum = 0;
for(i = 0; i <= num; i++){
sum += i; //sum=sum+i
}
console.log(sum);
}
sumnumber(50);

//generate table of 2

const generatetable = (num) =>{
    for( let i = 1; i <= 10; i++){
        console.log(num + " X " + i +" = " + (i*num));
    }
    }
    generatetable(2);

    //write a loop that finds the faactorial of a given number

    const factorial0fnumber = (num) =>{
        
    }



   