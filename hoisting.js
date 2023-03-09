frint5();
frint10();
for(let i = 0; i< 5; i++){
    console.log(i);
}
// console.log('outside', i);

function frint5(){
    console.log('hoisting ', 5);
}

const frint10 = function (){
    console.log('inside print10',10)
}