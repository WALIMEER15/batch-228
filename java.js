let age = Number(prompt("Enter your age:"));

if (age < 18) {
    console.log("You are not eligible for vote casting.");
}
else if (age >= 18 && age <= 35) {
    console.log("You are eligible for vote casting.");
}
else if (age > 35 && age <= 100) {
    console.log("You are a senior citizen. You are also eligible for vote casting.");
}
else {
    console.log("Please enter a valid age.");
} 