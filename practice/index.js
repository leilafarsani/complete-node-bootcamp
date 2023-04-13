//logging in terminal with node index.js
const hello = "hello world";
console.log(hello);

//fs module
//reading files
const fs = require('fs');
const textInput= fs.readFileSync('./text/input.txt', 'utf-8');
console.log(textInput);

//writing files
const textOutput = "QUIZ.txt";
fs.writeFileSync("./text/textOutput.txt", textOutput);

const textOutput2 = `Question ${textInput}\nCreated ${Date.now()}`;
fs.writeFileSync("./text/textOutput2.txt",textOutput2);
console.log("Another File created");
