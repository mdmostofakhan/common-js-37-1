// allways use ===
// equal comparison doesnt work for non-primitive

const first = [45, 54, 67];
const second = [45, 54, 64];
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}