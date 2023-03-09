// strongly typed language
// int a = 5;
// string b = 'alim hakim khakim ';
// bool c = True ;
// object student - {name: 'noya dhaman', id: 44}
// int[] numbers = [23, 54, 65]
// string[] friends = ['abul', 'vabul'];


// dynamic type Language
const a = 5;
const b = 'Same kopal na ekhon ar';
const d = true;


// non-primitive

const ages = [34, 54, 65];
const student = {id: 23, class: 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
    y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
    q.job = 'backet end developer'
console.log(p, q);