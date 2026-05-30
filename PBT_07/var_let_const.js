console.log("--- Đoạn 1: var hoisting ---");
console.log(x); 
var x = 5;

console.log("\n--- Đoạn 2: let TDZ ---");
try {
    console.log(y); 
    let y = 10;
} catch (error) {
    console.log("Gặp lỗi:", error.name, "-", error.message); 
}

console.log("\n--- Đoạn 3: const re-assignment ---");
try {
    const z = 15;
    z = 20; 
    console.log(z);
} catch (error) {
    console.log("Gặp lỗi:", error.name, "-", error.message); 
}

console.log("\n--- Đoạn 4: const với Reference Type (Array) ---");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); 

console.log("\n--- Đoạn 5: Block Scope ---");
let a = 1;
{
    let a = 2;
}
console.log("Ngoài block:", a); 