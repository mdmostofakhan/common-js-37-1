/*
 8 ways to get Undefiened
 1. variable that is not initialixed wil give indefiened
 2. function with on return
 3. parameter that is not passed will be undefiend
 4. if return has nothing on the right side will return undefiend
 5. property that doesnt exists on on object will give you undefiend
 6. accessing array elements outside of the index range
 7. deletion an element inside an array
 8. set a value directly to undefrined
 */

let first ;

function second (a, b){
    const total = a + b;
}
const result = second()
// console.log(result);

function third (a, b, c, d){
    const total = a+b+c+d;
    console.log(a, b, c, d)
}
// third(3, 7);

function noNegetive (a, b){
    if(a< 0 || b< 0){
        return
    }
    return a + b ;
}

const total = noNegetive(2, -6)
// console.log(total);

const fithd = {name: 'mostofa', age: 54, job: 'developer'};
    // console.log(fithd. age, fithd. salary);

const sixth = [4, 34, 54, 65,  75];
delete sixth[1];
// console.log(sixth[1], sixth[5],sixth[300])
// console.log(sixth)

const eighth = undefined;

const ninth = null;

const data = {results: [], updated: null}

console.log(typeof null);