




// // **************************************************CHAPTER 20-25 ****************************************************


   //     // ****************************************QUESTION NO 01***************************************************
    //   var fa ;
      
        // var firstName =prompt("Enter your first name");
        // var lastName = prompt("Enter your last name");
        // var fullName = firstName + lastName.slice(0);
        // alert("Welcome " + fullName);




        // // ****************************************QUESTION NO 02***************************************************
        // var fa ;

        // var user = prompt("Enter your favourite mobile name");
        // var length = user.length;
        // document.write("My favourite name is: "+ user + "<br> Length of string: "+length);




        // // ****************************************QUESTION NO 03***************************************************
        // var fa ;

        // var country = "pakistani";
        // var foundcharacter = country.indexOf("n");
        // document.write("<h1> String : " + country + "<br> Index of ' n ' : "+ foundcharacter +"</h1>") ;





        // // ****************************************QUESTION NO 04***************************************************
        // var fa ;


        // var str = "Hello World";
        // var character = str.lastIndexOf('l');
        // document.write("<h1> String : " + str + "<br> Last Index of 'l' : "+ character);

            


        // // ****************************************QUESTION NO 05***************************************************
        // var fa ;


        // var myCountry = "Pakistani";
        // var character_i= myCountry.slice(3,4);
        // document.write("<h1> String : " + myCountry + "<br> Character at index 3 is : "+ character_i)






        // // ****************************************QUESTION NO 06***************************************************
        // var fa ;

        // var firstName =prompt("Enter your first name");
        // var lastName = prompt("Enter your last name");
        // var fullName = firstName + lastName.slice(0);
        // alert("Welcome " + firstName.concat(" "+lastName));





        // // ****************************************QUESTION NO 07***************************************************
        // var fa ;
            // var name = "Hyder";
            // var change = name.replace("Hyder" , "islam");
            // alert(change)

            // var realName = "Hyderabad";
            // var findcity = realName.indexOf("Hyderabad");
            // var cutName = realName.slice(findcity,findcity+9);
            // var deleteName = realName.slice(0,findcity);
            // var replacingname = "Islamabad";
            // var endText = realName.slice(+findcity+9);
           
           
            // var firstName = "Hyderabad is the name of city ";
            // var locate = firstName.indexOf("Hyderabad");
            // var copytext = firstName.slice(0,+locate);
            // var secondName = firstName.slice(+locate+9);
            // document.write("<h1> Before Replacement <br> "+firstName + "<br> After Replacement<br> "+ copytext + "Islamabad <br> City: ");
            // document.write(cutName+" <br> After Replacement City : " + deleteName +" "+replacingname + endText);





        // // ****************************************QUESTION NO 08***************************************************
        // var fa ;

        //     var message = "Ali and Sami are best friends They play cricket and football together.";

        //     var replacing = message.replace(/and/g,"&");

        // document.write(replacing);
            
            


        // // ****************************************QUESTION NO 09***************************************************
        // var fa ;

                // var str = "472";
                // var convert = parseInt(str);
                // document.write("<h1> Value : "+str + " <br>Type : "+typeof(str) + " <br>Value : "+convert +"<br> Type : "+ typeof(convert));





        // // ****************************************QUESTION NO 10***************************************************
        // var fa ;


        // var userInput = prompt("Enter a word to convert in capital letter");
        // var capital = userInput.toUpperCase();
        // document.write("<h1> User Input: "+ userInput +"<br> Upper Case: "+ capital);



















        

        // // ****************************************QUESTION NO 26-30***************************************************
  // // *********************************   QUESTION NO 01

        // var positive = prompt("Enter a positive integer ");
        // var round = Math.round(positive);
        // var floor = Math.floor(positive);
        // var ceil = Math.ceil(positive);
        // document.write("Number: "+positive +"<br> Round or value: "+round+"<br> Floor value: "+floor+"<br> Ceil value: " +ceil);





        // // *********************************   QUESTION NO 02
        // var negative = +prompt("Enter a negative integer");
        // var round = Math.round(negative);
        // var floor = Math.floor(negative);
        // var ceil = Math.ceil(negative);
        // document.write("Number: "+negative +"<br> Round or value: "+round+"<br> Floor value: "+floor+"<br> Ceil value: " +ceil);
    


        // // *********************************   QUESTION NO 03
        // var userInput = prompt("Enter a number");
        // var absolute = Math.abs(userInput);
        // document.write("The absolute value is "+ absolute);


        // // *********************************   QUESTION NO 04
        // var dice = +Math.random() * 6;
        // var dice1 = +Math.random() * 6;
        // var floor = Math.floor(dice);
        // var floor1 = Math.floor(dice1);
        // document.write("Random dice value: "+floor +" <br> Random dice value: "+floor1)



        // // *********************************   QUESTION NO 05
        // var user1 = prompt("Welcome to toss application \nEnter a name who choose Head ");
        // var user2 =prompt("Enter a name who choose Tails");
        // var toss = Math.random() * 3;
        // var floor = Math.floor(toss);
        // if(floor ===1){
        //     alert(user1 + " has won the toss who choose Head.");
        // }
        // else{
        //     alert(user2 + " hase won the toss who choose Tails.")
        // }
        


       
        // // *********************************   QUESTION NO 06-01
        // for (var i=1; i<=100; i++){
        //     var random = Math.random() * 100;
        //     var floor = Math.floor(random);
        //     document.write(i+ " random value is ,,,,,, "+floor +  "<br>")
        //  }

        // // *********************************   QUESTION NO 06-02

        // var newrandom= Math.random() * 100;
        // var newfloor = Math.floor(newrandom);
        // document.write("Random numbers between 1 to 100 : "+newfloor)






        // // *********************************   QUESTION NO 07
        // var weight = prompt("Enter your weight in kilograms");
        // var absolute = Math.round(weight);
        // alert("The weight or user is : " +absolute +" Kilograms");

        
        
        // // *********************************   QUESTION NO 08
    // var newrandom= Math.random() * 10;
    // var secretnum = Math.floor(newrandom);
    // var user = prompt("Enter a secret number between 1 to 10");
    // // var secret = "6";

    // if(secretnum ==user){
    //     alert("Congratulation! Your enter number match to secret number")
    // }
    // else (alert("Try again! your enter number does not match"));

































    


        // // ****************************************QUESTION NO 31-34***************************************************
         // // **********************************QUESTION NO 01
        // var latestDate = new Date();
        // document.write(latestDate);


        // // **********************************QUESTION NO 02
        // var date = new Date();
        // var month = date.getMonth() ;
        // var allmonth = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"];
        // var monthName = allmonth[month];
        // document.write("Current Month: "+ monthName)


        // // **********************************QUESTION NO 03
        
        // var latest = new Date();
        // var dayindex = latest.getDay();
        // var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        // var word = day.slice(dayindex,dayindex+1);
        // var name = word.toString();
        // var three = name.slice(0,3);
        // console.log(latest);
        // // console.log(typeof(name));
        // // console.log(dayindex);
        // // console.log(word);
        // document.write("<h1> Today is : " +three + "<h1>");


        // // **********************************QUESTION NO 04

        // var date = new Date();
        // var number = date.getDay();
        // switch (number){
        //     case 5 : 
        //     alert("It's Fun day")
        //     break;
        //     case 6 : 
        //     alert("It's Fun day")
        //     break;
        //     default :
        //     alert("It's working day")
        // }


        // // **********************************QUESTION NO 05
        // var newdate = new Date();
        // var date1 = newdate.setDate(15);
        // var date = newdate.getDate();
        // if (date>=1 && date<=15){
        //     alert("Fisrt Fifteen days of the month")
        // }
        // else if (date >15 && date <=31){
        //     alert("Last Fifteen days of the month") 
        // }



        // // **********************************QUESTION NO 06
        // var date = new Date();
        // var mili = date.getTime();
        // var minute = (mili / 1000 )/60;
        // document.write(" Current Date : "+ date + "<br> Elapsed millisecond since January 1, 1970: " +mili);
        // document.write("<br> Elapsed minutes since January 01,1970: "+minute.toFixed(3))



        // // **********************************QUESTION NO 07
        // var date = new Date();
        // var hour = date.getHours();
        // if (hour >=0 && hour<12){
        //     alert("It's Am")
        // }
        // else{
        //     alert(("It's Pm"))
        // }

        // // **********************************QUESTION NO 08
        // var laterDate = new Date("Dec 31,2020");
        // console.log(laterDate);


        // // **********************************QUESTION NO 09
        // var pastDate = new Date("April 14,2020");
        // var current = new Date();
        // var past = pastDate.getTime();
        // var currentmili = current.getTime();
        // var sub = currentmili-past;
        // var days = sub/1000/60/60/24-1;
        // document.write  (Math.floor(days)+" days passed since 1st Ramzan, 2020");

        // // **********************************QUESTION NO 10
        // var pastdate = new Date ("Jan 1,2015");
        // var referdate = new Date("Dec 5,2015");
        // var mili = referdate.getTime() - pastdate.getTime();
        // var seconds =Math.floor( mili /1000/60);
        // document.write("On reference date:" + referdate+" , <br>"+seconds+" seconds had passed since beginning of 2015")


        // // **********************************QUESTION NO 11
    //     var date = new Date ();
    //     var hour = new Date();
    //     var get = date.getHours()-1;
    //     hour.setHours(get);
    //    document.write("Current date: "+ date + "<br> 1 hour ago it was: "+ hour)


        // // **********************************QUESTION NO 12

    //     var date = new Date ();
    //     var year = new Date();
    //     var get = date.getFullYear()-1
    //     year.setFullYear(get);
    //    document.write("Current date: "+ date + "<br> 100 year back, it was: "+ year)


        // // **********************************QUESTION NO 13
        // var age = +prompt("Enter your age only in number ");
        // var date = new Date();
        // var year = date.getFullYear()-age;
        // document.write("Your age is : "+ age +"<br> Your birth year is : "+year)


        // // **********************************QUESTION NO 14
        // var name = prompt("Customer Enter your name ");
        // var month = prompt("Enter current month name");
        // var units = 410;
        // var charges= 16;

        // var amount = units * charges;
        // var late = 350;
        // var gross = amount + late;
        

        // document.write("<h1>ELECTRIC BILL </h1> <br>Customer Name : "+name+"<br>Month: "+month+"<br>Number of units: "+units+"<br>Charges per unit: "+charges);
        // document.write("<br><br>Net Amount Payable (with in Due Date): "+amount+"<br>Late Payment Surcharges: "+late+"<br>Gross Amount Payable (after Due Date): "+gross);
























        // // ****************************************QUESTION NO 35-38***************************************************

          // // *****************************************QUESITION NO 01
        // function myfunction(){
        //   var date =   new Date();
        //   return date;
        // }
        // var call = myfunction();
        // document.write(call);


        // // *****************************************QUESITION NO 02

        // function greet(){
        //     var first = prompt("Enter your first name");
        //     var second = prompt("Enter your second name");
        //     var fullName= first +" "+ second;
        //     return alert("Welcome! "+fullName);
        // }
        // greet();

        // // *****************************************QUESITION NO 03
        // function number(){
        //     var num1 = +prompt("Enter your first number for addition");
        //     var num2 = +prompt("Enter your second number for addition")
        //     var sum = num1+num2;
        //     return alert(sum);
        // }
        // var callsum = number();


        // // *****************************************QUESITION NO 04 calculator
        // function calc (){
        // var numb1= prompt("Enter your first number is greater than second number ");
        // var numb2= prompt("Enter your second number");
        // var oper= prompt("Enter operator eg:/,*,+,-,%");
        // var per = (numb2/numb1)*100;
        // switch(oper){
        //     case "/" :
        //     return alert(numb1/numb2);
        //     break;
        //     case "*" :
        //     return alert(numb1*numb2);
        //     break;
        //     case "+" :
        //     return alert(numb1+numb2);
        //     break;
        //     case "-" :
        //     return alert(numb1-numb2);
        //     break;
        //     default:
        //     return alert(per);
        //     break;

        // }
        // }
        // calc();


        // // *****************************************QUESITION NO 05
        // var user = +prompt("Enter a number for take square value\nNote: Enter only number")
        // function square(a){
        //     return alert(a*a);
        // }
        // square(user);

        // // *****************************************QUESITION NO 06-1
        //         var number = +prompt("Enter a number to get factor of it.");
        //         var i;
        //         var a=number ;
        //         function factor(f){
        //             for (i=f; i>1; i--){
        //               a= a*(i-1);
        //             }
        //             document.write( "Factorial of "+number+" is "+a);
        //         }
        // factor(number);
        // // *****************************************QUESITION NO 06-2

        //         var user = +prompt("Enter a number to get it's sum from 1.");
        //         var n =user;
        //         function addition (g){
        //             for (var i=g; i>1; i--){
        //                 n=n+(i-1);
        //             }
        //             document.write("The sum of numbers from 1 to "+user+" is:  "+n);

        // }
        // addition(user);

        // // *****************************************QUESITION NO 07
        // function counting(){
        //     var user = +prompt("Enter a start number to create counting .");
        //     var user1 = +prompt("Enter last number where counting end.");
        //     for(var i=user; i<=user1; i++){
        //         document.write(i+" , ")
        //     }
        // }
        // counting();

        // // *****************************************QUESITION NO 08
        // function calcHypotenuse() {
        //     var base = +prompt("Enter length of Base;");
        //     var perp = +prompt("Enter measurment of Perpendicular");
        //     var hyp1;
        //     var square;
        //     // var hyp = square;

        //     var i;
        //     function calcSquar() {
        //         square = (base * base) + (perp * perp);

        //         for ( i = 1; i <= square; i++) {
        //             var   b = i * i;
        //             if (b == square) {
        //                 document.write("square root of " + square + " is " + i)
        //                 break;
        //             }
        //         }

        //     }
        //     calcSquar();
        //     document.write("<br><br>Hypotenuse<sup>2</sup> = "+base+"<sup>2</sup>  + "+perp+"<sup>2</sup> <br>");
        //     document.write("Hypotenuse<sup>2</sup> = "+base*base+"+"+ perp*perp);
        //     document.write("<br>Hypotenuse<sup>2</sup> = "+(base*base + perp*perp));
        // }
        // calcHypotenuse();


        // // *****************************************QUESITION NO 09

        // var a = 200;
        // var b =100;
        // function calcArea(width,height){
        //     A = width *height;
        //     return document.write("<br>width of box is:"+width+"<br> height of box is : "+height+"<br>Area of box is "+A);
        // }
        // calcArea(a,b);
        // calcArea(10,25);


        // // *****************************************QUESITION NO 10
        // function palindrom() {
        //     var user = prompt("Enter a word to check it's palindrom or not.");
        //     var save = "";
        //     for (var i = user.length; i > 0; i--) {
        //         save =save+user.slice(i-1,i)


        //     }
        //     if (user == save) {
        //             document.write(user + " is palindrome word");

        //     }
        //         else{document.write(user+" is not a palindrome word")}

        // }
        // palindrom();

        // // *****************************************QUESITION NO 11
        // function Firstletter(){
        // var sentence = prompt("Enter a sentence");
        // var capital = (str) => str[0].toUpperCase()+str.slice(1).toLowerCase();
        // var word = sentence.split(" ").map(capital);
        // var last = word.join(' ');
        // console.log(last);
        // }
        // Firstletter()

        // // *****************************************QUESITION NO 12
        //             var user = prompt("Enter a sentence to find which word is longest");
        //             function longestWord(str){
        //                 var words = str.split(' ');
        //                 var first = 0;
        //                 var last = [''];
        //                 for(var i = 0; i<words.length; i++){
        //                     if(words[i].length>=first){
        //                         first = words[i].length;
        //                         if(last[last.length-1].length<words[i].length){
        //                             last=[];
        //                             last.push(words[i]);
        //                         }
        //                         else{
        //                             last = [...last,words[i]];
        //                         }
        //                     }
        //                 }

        //                 return [...last];
        //             }
        // document.write("The user input is => "+user+"<br><br>The longest word is => "+longestWord(user));



        // // *****************************************QUESITION NO 13-1
        // var str = prompt("Enter a sentence");
        // var user = prompt("Enter a letter to find a character in a string");
        // var sear = str.match(/a/g);
        // console.log(sear)
        // var find = sear.length;
        // document.write("the letter "+user+ " occurance is "+find)



        // // *****************************************QUESITION NO 13-1
        // var user = prompt("Enter a sentence");
        // var char = prompt("Enter a letter to find occurance of letter in your sentence");
        // function Occurance(sentence, character) {

        //     var count = 0;
        //     for (var i = 0; i <= sentence.length; i++) {
        //         if (sentence[i] === character) {
        //             count = count + 1;
        //         }
        //     }
        //     return document.write("The charater <h3>"+character+" </h3>occurs in "+sentence+" is => "+count+" times");
        // }
        // Occurance(user,char)
        // // *****************************************QUESITION NO 14

            // function calCircumference(radius){
            //     var circumference = 2*(22/7)*radius;
            //     return document.write("The circumference is "+circumference.toFixed(3));
            // }
            // function calcArea(radius){
            //     var Area = 22/7*(radius*radius);
            //     return document.write("<br>The Area is "+Area.toFixed(3));
            // }
            // calCircumference(25);
            // calcArea(25);
