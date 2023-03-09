function sum (a, b, c){
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
//  console.log(arguments);
const total = sum(34, 34, 35, 65, 75, 54,);
// console.log(total);
console.log(sum.length);