console.log("========== VERSION 1: CLASSIC FIZZBUZZ ==========");
function classicFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        console.log(output || i);
    }
}

console.log("\n========== VERSION 2: CUSTOM FIZZBUZZ ==========");
function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                output += rules[j].word;
            }
        }
        
        if (i === 15 || i === 21 || i === 35 || i === 105) {
             console.log(`${i} = "${output || i}"`);
        } else if (i <= 30) { 
        }
    }
}


const myRules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

customFizzBuzz(105, myRules);