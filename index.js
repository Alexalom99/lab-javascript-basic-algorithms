// Iteration 1: Names and Input
let driver = "Alex";
console.log(`The driver's name is ${driver}`);

let navigator = "Juan David";
console.log(`The navigator name is ${navigator}`);


// Iteration 2: Conditionals

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length}  characters.`);
}
else if (navigator.length > driver.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, XX characters!`);
}


// Iteration 3: Loops
let word = driver.toUpperCase();
result = ""
for (let i = 0; i < driver.length; i++) {
    result = result + word[i];
    if (i != driver.length-1) {
        result = result + " ";
    }
    
}
console.log(result);

result = ""
for (let i = navigator.length - 1; i >= 0; i--) {
    result += navigator[i];
}
console.log(result);

if (driver < navigator) {
    console.log("The driver's name goes first.");
}
else if (navigator < driver) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?")
}


//Bonus 1:

let longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, ante eu mattis bibendum, est urna dictum tortor, non pellentesque sapien et  lorem ut tortor. Praesent ante metus, eleifend at tellus at, mollis consequat urna. Donec mi turpis, scelerisque ut pellentesque a, mattis tristique nisl. Integer pellentesque lacus enim. Nam luctus risus nec sagittis aliquet. Praesent rhoncus euismod tortor, quis eleifend felis suscipit id. Donec convallis purus eget blandit tempor. Quisque accumsan eu et  turpis nec bibendum. Ut sem tellus, dignissim at risus ac, blandit rutrum magna.Donec ultricies eros viverra ipsum hendrerit, in blandit lorem congue. Aenean quis risus dui. Etiam ac aliquam purus. Vestibulum quis blandit sapien, vel fermentum orci. Phasellus dui enim, pharetra vel massa vel, maximus eleifend lectus. Nunc ipsum erat, lacinia nec porttitor in, gravida non tellus. Aenean posuere fermentum maximus. In hac habitasse platea dictumst. Curabitur non ex lacus. Pellentesque mollis urna a viverra varius. Aliquam mollis scelerisque justo, a vehicula eros varius ac. Nunc ornare justo sapien, sed congue nisi tempor eu. Donec quis felis eleifend, sagittis neque quis, aliquam est. Praesent aliquam, enim a tincidunt ullamcorper, dolor risus consequat arcu, pellentesque fringilla tellus nunc eget turpis. Aen et, ean ac dictum leo. Morbi sit amet bibendum lorem.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi pellentesque scelerisque ipsum at commodo. Aliquam ut sollicitudin ante. Lorem ipsum et. dolor sit amet, consectetur adipiscing elit. Quisque nec rhoncus sapien, sit amet tempor sapien. Etiam sodales accumsan risus, ac ornare nunc semper in. Duis leo mauris, dignissim sed lorem vitae, lobortis lobortis quam. Nulla vel finibus ipsum, vel imperdiet ex. Cras eu mi in mi viverra dapibus. Donec elementum tempus nisl. Duis auctor orci lectus, in rhoncus nisl molestie vel. Fusce at elit magna. In dapibus purus vel ligula eleifend ullamcorper. Nunc libero lectus, placerat a tincidunt a, rhoncus sed ipsum.";



let count = 0;
let isletter = true;

for (let i = 0; i < longtext.length; i++) {
    if (longtext[i] == ".") {
        if (isletter) {
            count += 1;
        }
        isletter = false;

        
    }
    else if (longtext[i] == ",") {
        if (isletter) {
            count += 1;
        }
        isletter = false;
        
    }
    else if (longtext[i] == " ") {
        if (isletter) {
            count += 1;
        }
        isletter = false;
        
    }
    else {
        isletter = true;
    }
}


console.log(count);

count = 0;
for (let i=0; i< longtext.length; i++) {
    if (longtext[i] == ' ' || longtext[i] == '.'  || longtext[i] == ',' ) {
        if (longtext[i-3] == ' ' && longtext[i-2] == 'e' && longtext[i-1] == 't') {
            count+=1;
        }
    }
}
console.log(count);

let phraseToCheck = "A man, a plan, a canal, Panama!";

let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let cleanPhrase = ""
for (let i=0; i<phraseToCheck.length;i++) {
    if (abc.includes(phraseToCheck[i])) {
        cleanPhrase += phraseToCheck[i];
    }
}
let phrase = cleanPhrase.toLowerCase();
console.log(phrase);
let reversePhrase = "";

for (let i=phrase.length-1; i>=0; i--) {
    reversePhrase += phrase[i];
}
console.log(reversePhrase);