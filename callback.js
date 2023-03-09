function greating(greatingHander, name){
    greatingHander(name);
}

// const name = 'Halima khatun';
// const number = 756;
// const numbers = [34, 54, 53, 44]
// const laptop = {price: 3444, name: 'lenevo', brand: 'sms'}

function greatingHander(name){
    console.log('Good Morning', name);
}

function greatEvent(name){
    console.log('Gret Evening', name);
}

function goodMening(name){
    console.log('good Meanig isan', name)
}

greating(greatingHander, 'tom Hanks');
greating(greatingHander, 'tom Brady');
greating(greatingHander, 'tom course');
greating(greatEvent, 'Tom is tiger');
greating(greatEvent, 'Tom is tiger');
greating(goodMening, 'rose')

function submitHandler(){
    console.log('this is a callback')
}

document.getElementById('btn-submit').addEventListener('click', submitHandler)