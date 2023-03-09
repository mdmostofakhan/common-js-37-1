// primitive types are pass by value

const num1 = 5;
const num2 = 7;

function multiplay(a,b){
      a = 35;
    const result = a * b;
    return result;
}
console.log(num1);
const total = multiplay(num1, num2);
console.log(total);

// object and array are pass by reference
let student = {name: 'mostofa', partner: 'israfil'}
let student1 = {name: 'tania', partner: 'mostofa'};

function makeMovie (couplel1, couplel2){
    couplel1.name = 'rubel';
    couplel2.name = 'soniya';
}

console.log(student, student1);
makeMovie(student, student1);
console.log(student, student1);
