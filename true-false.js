/*
Truthy ;
1. true;
b. any number (+ve, -ve) will be truthy other than a
c. any string other thanempty string
d. '0', 'false'
f. {}

Falsy:
a. false
b 0
c. '' (empty string)
d. null
e. undefiend
g. {}
h. []
*/

let x = [5, 6];
console.log(x)
if(x){
    console.log('value of x is truth');
}
else{
    console.log('value of x id falsy');
}


// optional 

const y = null;
if(!y){
    console.log('value is falesy');
}

const z = null;
if (!!x){
console.log('value is truety')
}