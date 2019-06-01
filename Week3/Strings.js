let myString = "hello,this,is,a,difficult,to,read,sentence";

//1.1 log myString
console.log(myString);

//1.2 log lenthg of myString
console.log(myString.length);

//1.3 Replace the comma with space in myString
myString = myString.replace(/,+/g, ' '); // g is the global flag

//1.4 log the new myString replaced , with space
console.log(myString);
